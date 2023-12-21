import { Component } from '@angular/core';
import { MessageService } from '../../Services/message.service';
import { CommonModule } from '@angular/common';
import { FetcherService } from '../../Services/fetcher.service';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { ChannelService } from '../../Services/channel.service';
import { Message } from '../../Models/Message';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor(public message: MessageService,public user: UserService, public channel: ChannelService) 
  {console.log(this.message.messageFiltered)}
  modification: boolean = false;

  suppression(message: Message){
    this.message.deleteMessageService(message.id).subscribe((message) => {
      this.message.chargeMessages()
    })
  }

  modifier(message: Message){
    if(!this.modification){
this.modification = true
    }else{
      this.modification = false;
      this.message.updateMessageService(message).subscribe((message) => {
        this.message.chargeMessages()
      })
    }
   
  }
  


}
