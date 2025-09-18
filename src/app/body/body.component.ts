import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-body',
  imports: [CardModule, ListboxModule, DatePickerModule],
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
