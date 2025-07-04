import {
  Component,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ElementRef,
  Renderer2
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {
  @ViewChildren('cardHome') cards!: QueryList<ElementRef>;
  overlay: HTMLElement | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.overlay = document.getElementById('overlay');

      this.cards.forEach(cardRef => {
        const card = cardRef.nativeElement;

        this.renderer.listen(card, 'click', () => {
          this.cards.forEach(c => {
            this.renderer.removeClass(c.nativeElement, 'active');
          });

          this.renderer.addClass(card, 'active');
          if (this.overlay) this.overlay.classList.add('active');
        });
      });

      if (this.overlay) {
        this.renderer.listen(this.overlay, 'click', () => {
          this.cards.forEach(c => {
            this.renderer.removeClass(c.nativeElement, 'active');
          });
          this.overlay?.classList.remove('active');
        });
      }
    }
  }
}
