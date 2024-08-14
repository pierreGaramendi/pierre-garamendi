import { Component, Input, signal, Signal } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.scss',
})
export class GenreComponent {
  @Input() items: Signal<string[]> = signal([]);
  @Output() onFilter = new EventEmitter<string>();
  selectGenre(value: string) {
    this.onFilter.emit(value);
  }
}
