import { Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Button } from "primeng/button"; // 👈 necesario para tipar los items
import {MessageModule} from 'primeng/message'
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-header',
  imports: [ImageModule,MenuModule, Button,MessageModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: MenuItem[] = [
   {label:"Home"},
   {label:"Perfil"},
   {label:"Vision"},
   {label:"Mision"}
  ];

}
