import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "primeng/button";
import { HeaderComponent } from './header/header.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taller 5 de Victor Giron';
}
