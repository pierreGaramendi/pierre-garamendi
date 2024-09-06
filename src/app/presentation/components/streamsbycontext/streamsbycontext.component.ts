import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { GetMoviesUseCase } from '../../../core/usecases/get-movies.usecase';
import { IMovie, IResponse } from '../../../core/domain/movies.mode';
@Component({
  selector: 'app-streamsbycontext',
  standalone: true,
  imports: [],
  providers: [GetMoviesUseCase],
  templateUrl: './streamsbycontext.component.html',
  styleUrl: './streamsbycontext.component.scss',
})
export class StreamsbycontextComponent {
  
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  constructor(private getMoviesUseCase: GetMoviesUseCase) {}
  moviesSignal = signal<IMovie[]>([]);

  ngOnInit(): void {
    this.getMoviesUseCase.execute().subscribe({
      next: (response: IResponse) => {
        this.moviesSignal.update(() => [...response.movies]);
      },
      error: (error) => {
        console.error('Error fetching data', error);
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
