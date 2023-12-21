import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AsideComponent } from '../aside/aside.component';
import { MessagesComponent } from '../messages/messages.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-messages',
  standalone: true,
  imports: [CommonModule,HeaderComponent, AsideComponent, MessagesComponent,FooterComponent],
  templateUrl: './main-messages.component.html',
  styleUrl: './main-messages.component.css'
})
export class MainMessagesComponent {

  constructor(){}


  recupDate(){
   let date = new Date();
    console.log(date)

  }

}
