import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { DatePickerModule } from 'primeng/datepicker';
import { CarouselModule, Carousel } from 'primeng/carousel';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-body',
  imports: [PanelModule,CardModule, ListboxModule, DatePickerModule, CardModule, CarouselModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
   items: ListboxModule[] = [
     {label:"Es la mejor pagina"},
     {label:"No existen una igual"},
     {label:"Nunca e visto nada igual"}
    ];
    people: CardModule[] =[
      {name: 'Gustabo Rodriguez',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
      },
      {name: 'Elizabeth Octava',
        image: 'https://randomuser.me/api/portraits/women/50.jpg'
      },
      {name: 'chipi chipi',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
      },

    ];
}
