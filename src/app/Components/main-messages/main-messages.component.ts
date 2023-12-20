import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AsideComponent } from '../aside/aside.component';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-main-messages',
  standalone: true,
  imports: [CommonModule,NavbarComponent, AsideComponent, MessagesComponent],
  templateUrl: './main-messages.component.html',
  styleUrl: './main-messages.component.css'
})
export class MainMessagesComponent {

}
