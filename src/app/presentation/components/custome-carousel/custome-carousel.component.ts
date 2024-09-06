import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custome-carousel',
  standalone: true,
  imports: [],
  templateUrl: './custome-carousel.component.html',
  styleUrl: './custome-carousel.component.scss',
})
export class CustomeCarouselComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
