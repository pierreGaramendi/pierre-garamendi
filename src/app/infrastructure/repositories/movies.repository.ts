import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../data/data-service.service';
import { IResponse } from '../../core/domain/movies.mode';

@Injectable({
  providedIn: 'root',
})
export class MoviesRepository {
  constructor(private moviesService: MoviesService) {}

  getMovies(): Observable<IResponse> {
    return this.moviesService.getMovies();
  }
}
