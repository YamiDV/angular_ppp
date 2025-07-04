import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const cards = document.querySelectorAll('.card-home');
      const overlay = document.getElementById('overlay');

      cards.forEach(card => {
        card.addEventListener('click', () => {
          cards.forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          overlay?.classList.add('active');
        });
      });

      overlay?.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        overlay?.classList.remove('active');
      });
    }
  }
}
