import { Component } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [ Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 
}
