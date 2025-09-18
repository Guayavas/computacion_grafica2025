import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from "./body/body.component";
import { BottomComponent } from "./bottom/bottom.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BodyComponent, BottomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taller 5 de Victor Giron';
}
