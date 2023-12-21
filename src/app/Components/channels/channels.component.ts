import { Component } from '@angular/core';
import { ChannelService } from '../../Services/channel.service';
import { CommonModule } from '@angular/common';
import { FetcherService } from '../../Services/fetcher.service';
import { FormsModule } from '@angular/forms';
import { Channel } from '../../Models/Channel';
import { MessageService } from '../../Services/message.service';
@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.css'
})
export class ChannelsComponent {

  constructor(public channel: ChannelService, public message: MessageService){}

  selectChannel(channel: Channel){
console.log(channel)
    this.channel.currentChannel = channel;
    this.message.chargeMessages();
  }

}
