import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Home} from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'proto_page';
}
