import { Injectable } from '@angular/core';
import { Channel } from '../Models/Channel';
import { ChannelStatus } from '../Models/ChannelStatus';
import { HttpClient } from '@angular/common/http';
import { FetcherService } from './fetcher.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: FetcherService) { }


channel: Channel[] = [];






}
