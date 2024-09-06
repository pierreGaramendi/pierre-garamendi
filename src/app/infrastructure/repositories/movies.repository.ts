import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MoviesService } from '../data/data-service.service';
import { IResponse } from '../../core/domain/movies.mode';

@Injectable({
  providedIn: 'root',
})
export class MoviesRepository {
  constructor(private moviesService: MoviesService) {}

  getMovies(): Observable<IResponse> {
    return this.moviesService.getMovies().pipe(
      delay(4000)
    );
  }
}
