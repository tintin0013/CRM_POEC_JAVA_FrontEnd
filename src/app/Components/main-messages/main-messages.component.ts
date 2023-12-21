import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AsideComponent } from '../aside/aside.component';
import { MessagesComponent } from '../messages/messages.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageService } from '../../Services/message.service';
import { UserService } from '../../Services/user.service';
import { ChannelService } from '../../Services/channel.service';
import { ChannelsComponent } from '../channels/channels.component';
import { Message } from '../../Models/Message';


@Component({
  selector: 'app-main-messages',
  standalone: true,
  imports: [CommonModule,HeaderComponent, AsideComponent, MessagesComponent,FooterComponent,FormsModule,ChannelsComponent],
  templateUrl: './main-messages.component.html',
  styleUrl: './main-messages.component.css'
})
export class MainMessagesComponent {

 messageContent: string = "";

  constructor(public user: UserService, public channel: ChannelService, public message: MessageService
    ){}

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
