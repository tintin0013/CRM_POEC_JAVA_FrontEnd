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

  constructor(public channel: ChannelService, public message: MessageService){
    
  }

  selectChannel(channel: Channel){
console.log(channel)
    this.channel.currentChannel = channel;
    this.message.chargeMessages();
  }

  modification: boolean = false;

  suppression(channel: Channel){
    this.channel.deleteChannelService(channel.id).subscribe((channel) => {
      this.channel.chargeChannels()
    })
  }

  modifier(channel: Channel){
    if(!this.modification){
this.modification = true
    }else{
      this.modification = false;
      this.channel.updateChannelService(channel).subscribe((channel) => {
        this.channel.chargeChannels()
      })
    }
   
  }


/*  creerChannel(){
   const baseChannel: Channel = {
      id: 0,
      name : "default",
      creationDate : new Date(),
      status : 1,
    }
    this.channel.postChannelService(baseChannel).subscribe((channel) => {
      this.channel.chargeChannels()
    })
  }*/


}
