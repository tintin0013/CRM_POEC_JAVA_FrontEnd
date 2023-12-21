import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { IndexComponent } from '../index/index.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { MainMessagesComponent } from '../main-messages/main-messages.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent,IndexComponent,FormsModule,MainMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'slackLiteFront';
  constructor(public user: UserService){}
}
