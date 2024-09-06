import {
  Component,
  ElementRef,
  signal,
  ViewChild,
  computed,
} from '@angular/core';
import { GetMoviesUseCase } from '../../../core/usecases/get-movies.usecase';
import { IMovie, IResponse } from '../../../core/domain/movies.mode';
import { CustomeCarouselComponent } from '../custome-carousel/custome-carousel.component';
import { CarouselStreamsSkeletonComponent } from '../carousel-streams-skeleton/carousel-streams-skeleton.component';

@Component({
  selector: 'app-streamsbycontext',
  standalone: true,
  imports: [CustomeCarouselComponent, CarouselStreamsSkeletonComponent],
  providers: [GetMoviesUseCase],
  templateUrl: './streamsbycontext.component.html',
  styleUrls: ['./streamsbycontext.component.scss'],
})
export class StreamsbycontextComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  constructor(private getMoviesUseCase: GetMoviesUseCase) {}

  moviesSignal = signal<IMovie[]>([]);
  loadingSignal = signal<boolean>(true); // Signal para el estado de carga

  // Computed signal para verificar si ya se cargaron los datos
  isLoading = computed(() => this.loadingSignal());

  ngOnInit(): void {
    this.getMoviesUseCase.execute().subscribe({
      next: (response: IResponse) => {
        this.moviesSignal.update(() => [...response.movies]);
        this.loadingSignal.set(false); // Actualiza el estado de carga
      },
      error: (error) => {
        console.error('Error fetching data', error);
        this.loadingSignal.set(false); // También detiene la carga en caso de error
      },
    });
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
