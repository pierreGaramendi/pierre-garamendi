import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-streamsbycontext',
  standalone: true,
  imports: [],
  templateUrl: './streamsbycontext.component.html',
  styleUrl: './streamsbycontext.component.scss',
})
export class StreamsbycontextComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  streams = [
    {
      title: 'Serious fight night with Rick',
      author: 'Mr. Rick Tomson',
      image: 'assets/stream1.png',
    },
    {
      title: 'Pumpkin Party in Orizona',
      author: 'Milena Foster',
      image: 'assets/stream2.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Mr. Rick Tomson',
      image: 'assets/stream3.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Bob Game450',
      image: 'assets/stream4.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Bob Game450',
      image: 'assets/stream4.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Bob Game450',
      image: 'assets/stream4.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Bob Game450',
      image: 'assets/stream4.png',
    },
    {
      title: 'Serious fight night with Rick',
      author: 'Bob Game450',
      image: 'assets/stream4.png',
    },
  ];

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
