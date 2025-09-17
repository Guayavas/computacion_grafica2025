import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Button } from "primeng/button";
import { ButtonComponent } from "./button/button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet/*, Button*/, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taller5';
}
