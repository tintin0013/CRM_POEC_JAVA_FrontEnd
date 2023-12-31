import { Injectable } from '@angular/core';
import { Message } from '../Models/Message';
import { MessageStatus } from '../Models/MessageStatus';
import { HttpClient } from '@angular/common/http';
import { FetcherService } from './fetcher.service';
import { ChannelService } from './channel.service';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: FetcherService, public channel: ChannelService) {
    this.chargeMessages();
  }

  chargeMessages() {
    this.http.getAllMessages().subscribe((data: Message[]) => {
      this.message = data;
      this.messageFiltered = this.message.filter((message) => {
        return message.channel.id === this.channel.currentChannel.id
      });
    })
  }

  message: Message[] = [];
  messageFiltered: Message[] = this.message;

  getMessageByIdService(id: number) {
    return this.http.getMessageById(id);
  }

  postMessageService(message: Message) {
    return this.http.postMessage(message);
  }

  updateMessageService(message: Message) {
    return this.http.updateMessage(message);
  }

  deleteMessageService(id: number) {
    return this.http.deleteMessage(id);
  }
}
