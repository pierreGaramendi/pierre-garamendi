import { inject } from '@angular/core';
import { MoviesRepository } from '../../infrastructure/repositories/movies.repository';
import { Observable } from 'rxjs';
import { IResponse } from '../domain/movies.mode';

export class GetMoviesUseCase {
  private productRepository = inject(MoviesRepository);
  execute(): Observable<IResponse> {
    return this.productRepository.getMovies();
  }
}