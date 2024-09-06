import { Component } from '@angular/core';
import { CustomeCarouselComponent } from '../components/custome-carousel/custome-carousel.component';
import { StreamsbycontextComponent } from '../components/streamsbycontext/streamsbycontext.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StreamsbycontextComponent, CustomeCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
