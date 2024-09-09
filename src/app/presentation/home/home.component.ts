import { Component } from '@angular/core';
import { CustomeCarouselComponent } from '../components/custome-carousel/custome-carousel.component';
import { StreamsByContextComponent } from '../components/streamsbycontext/streams-by-context.component';
import { LazyLoadDirective } from '../directives/lazyload.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StreamsByContextComponent,
    CustomeCarouselComponent,
    LazyLoadDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
