import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';
import { Message } from '../Models/Message';
import { Channel } from '../Models/Channel';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor(private http: HttpClient){}
  

  // requetes channel

  getAllChannels() {
    return this.http.get<Channel[]>("http://localhost:8080/channels");
  }
  
  getChannelById(id: number) {
    return this.http.get<Channel>("http://localhost:8080/channels/" + id);
  }

  postChannel(channel: Channel) {
    return this.http.post("http://localhost:8080/channels", channel)
  }

  updateChannel(channel: Channel) {
    return this.http.put("http://localhost:8080/channels/" + channel.id, channel)
  }

  deleteChannel(id: number) {
    return this.http.delete("http://localhost:8080/channels/" + id)
  }


  // requetes message

  getAllMessages() {
    return this.http.get<Message[]>("http://localhost:8080/messages");
  }
  
  getMessageById(id: number) {
    return this.http.get<Message>("http://localhost:8080/messages/" + id);
  }

  postMessage(message: Message) {
    return this.http.post("http://localhost:8080/messages", message)
  }

  updateMessage(message: Message) {
    return this.http.put("http://localhost:8080/messages/" + message.id, message)
  }

  deleteMessage(id: number) {
    return this.http.delete("http://localhost:8080/messages/" + id)
  }


  // requetes user

  getAllUsers() {
    return this.http.get<User[]>("http://localhost:8080/users");
  }
  
  getUserById(id: number) {
    return this.http.get<User>("http://localhost:8080/users/" + id);
  }

  postUser(user: User) {
    return this.http.post("http://localhost:8080/users", user)
  }

  updateUser(user: User) {
    return this.http.put("http://localhost:8080/users/" + user.id, user)
  }

  deleteUser(id: number) {
    return this.http.delete("http://localhost:8080/users/" + id)
  }





}





