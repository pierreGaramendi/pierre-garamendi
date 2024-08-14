import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { dakeData } from './data';

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  getMovies(): Observable<any> {
    return of(dakeData).pipe(delay(500));
  }
}
