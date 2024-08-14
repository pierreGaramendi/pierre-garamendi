import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { dakeData } from '../../infrastructure/data/data';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchControl = new FormControl('');
  filteredItems$!: Observable<Array<{ [key: string]: any }>>;
  items = structuredClone(dakeData.movies);

  ngOnInit() {
    this.filteredItems$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm: any) => this.filterItems(searchTerm))
    );
  }

  filterItems(searchTerm: string): Observable<any[]> {
    return of(
      this.items.filter(
        (item: any) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
}
