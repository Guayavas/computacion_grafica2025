import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';


@Component({
  selector: 'app-body',
  imports: [CardModule, ListboxModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
   items: ListboxModule[] = [
     {label:"Es la mejor pagina"},
     {label:"No existen una igual"},
     {label:"Nunca e visto nada igual"}
    ];
}
