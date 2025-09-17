import { Component } from '@angular/core';
import { CmlogoComponent} from '../cmlogo/cmlogo.component';
import { BuscadorComponent } from "../buscador/buscador.component";

@Component({
  selector: 'app-cmheader',
  standalone: true,
  imports: [CmlogoComponent, BuscadorComponent],
  templateUrl: './cmheader.component.html',
  styleUrl: './cmheader.component.css'
})
export class CMheaderComponent {

}
