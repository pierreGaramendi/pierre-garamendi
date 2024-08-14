import { Component, computed, OnInit, signal } from '@angular/core';
import { GenreComponent } from './components/genre/genre.component';
import { IMovie, IResponse } from '../../core/domain/movies.mode';
import { GetMoviesUseCase } from '../../core/usecases/get-movies.usecase';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [GenreComponent],
  providers: [GetMoviesUseCase],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent implements OnInit {
  genresSignal = signal<string[]>([]);
  moviesSignal = signal<IMovie[]>([]);
  categoryFilterSignal = signal<string>('');
  filteredItemsSignal = computed(() => {
    const filter = this.categoryFilterSignal().trim();
    if (!filter) {
      return this.moviesSignal();
    }
    return this.moviesSignal().filter((item) => item.genre === filter);
  });

  constructor(private getMoviesUseCase: GetMoviesUseCase) {}

  ngOnInit(): void {
    this.getMoviesUseCase.execute().subscribe({
      next: (response: IResponse) => {
        this.moviesSignal.update(() => [...response.movies]);
        this.genresSignal.update(() => [...response.genres]);
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }

  beginFilter(genre: string) {
    this.categoryFilterSignal.set(genre);
  }
}
