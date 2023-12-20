import { Injectable } from '@angular/core';
import { Channel } from '../Models/Channel';
import { ChannelStatus } from '../Models/ChannelStatus';
import { HttpClient } from '@angular/common/http';
import { FetcherService } from './fetcher.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: FetcherService) {
    this.chargeChannels();
   }


  chargeChannels() {
    this.http.getAllChannels().subscribe((data: Channel[]) => {
      this.channel = data;
      this.channelFiltered = this.channel;
    })
  }


channel: Channel[] = [];
channelFiltered: Channel[] = this.channel;

getChannelByIdService(id: number){
  return this.http.getChannelById(id);
}

postChannelService(channel: Channel) {
  return this.http.postChannel(channel);
}

updateChannelService(channel: Channel) {
  return this.http.updateChannel(channel);
}

deleteChannelService(id: number) {
  return this.http.deleteChannel(id);
}

}
