import { Component } from '@angular/core';
import { CustomeCarouselComponent } from '../components/custome-carousel/custome-carousel.component';
import { StreamsByContextComponent } from '../components/streams-by-context/streams-by-context.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StreamsByContextComponent,
    CustomeCarouselComponent,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
