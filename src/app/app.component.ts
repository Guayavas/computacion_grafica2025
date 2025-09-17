import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CMheaderComponent } from "./cmheader/cmheader.component";
import { BodyComponent } from "./body/body.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CMheaderComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zapato-app';
}
