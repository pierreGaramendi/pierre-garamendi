import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
  standalone: true,
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Output() visible = new EventEmitter<void>();

  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.visible.emit();
          this.observer?.unobserve(entry.target);
        }
      });
    });
  }

  ngOnInit() {
    this.observer?.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
