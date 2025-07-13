import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterLink],  // ⬅️ Esto es lo que faltaba
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {}
