import { Component } from '@angular/core';
import { MessageService } from '../../Services/message.service';
import { CommonModule } from '@angular/common';
import { FetcherService } from '../../Services/fetcher.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor(public message: MessageService) {}

}
