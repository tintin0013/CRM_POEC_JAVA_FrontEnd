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

  messageContent: string = "";

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
  
  getNewMessage(){
    console.log(this.messageContent)
       const message: Message = {
        id: 0,
        message: this.messageContent,
        dateMessage: new Date(),
        user: this.user.currentUser!,
        channel: this.channel.currentChannel!,
        status: 0
    }
    this.message.postMessageService(message).subscribe((data) => {
      this.message.chargeMessages()
    })
    this.messageContent.replace
    }

}
