import { Component, signal, computed, input } from '@angular/core';
import { GetMoviesUseCase } from '../../../core/usecases/get-movies.usecase';
import { IMovie, IResponse } from '../../../core/domain/movies.mode';
import { CustomeCarouselComponent } from '../custome-carousel/custome-carousel.component';
import { CarouselStreamsSkeletonComponent } from '../carousel-streams-skeleton/carousel-streams-skeleton.component';
import { LazyLoadDirective } from '../../directives/lazyload.directive';

@Component({
  selector: 'app-streamsbycontext',
  standalone: true,
  imports: [
    CustomeCarouselComponent,
    CarouselStreamsSkeletonComponent,
    LazyLoadDirective,
  ],
  providers: [GetMoviesUseCase],
  templateUrl: './streams-by-context.component.html',
  styleUrls: ['./streams-by-context.component.scss'],
})
export class StreamsByContextComponent {
  constructor(private getMoviesUseCase: GetMoviesUseCase) {}

  isVisible = false;
  data: string = '';
  title = input.required<string>();
  moviesSignal = signal<IMovie[]>([]);
  loadingSignal = signal<boolean>(true);
  isLoading = computed(() => this.loadingSignal());

  ngOnInit(): void {}

  loadMovies() {
    this.getMoviesUseCase.execute().subscribe({
      next: (response: IResponse) => {
        this.moviesSignal.update(() => [...response.movies]);
        this.loadingSignal.set(false);
      },
      error: (error) => {
        console.error('Error fetching data', error);
        this.loadingSignal.set(false);
      },
    });
  }

  onVisible() {
    this.loadMovies();
  }
}
