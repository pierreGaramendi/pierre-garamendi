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
  streams = [
    {
      title: 'Serious fight night with Rick',
      author: 'Mr. Rick Tomson',
      image: 'assets/stream1.png',
    },
    {
      title: 'Pumpkin Party in Orizona',
      author: 'Milena Foster',
      image: 'assets/stream2.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Mr. Rick Tomson',
      image: 'assets/stream3.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Bob Game450',
      image: 'assets/stream4.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Bob Game450',
      image: 'assets/stream4.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Bob Game450',
      image: 'assets/stream4.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Bob Game450',
      image: 'assets/stream4.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Bob Game450',
      image: 'assets/stream4.png',
    },
  ];
  moviesSignal = signal<IMovie[]>([]);
  constructor(private getMoviesUseCase: GetMoviesUseCase) {}
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
