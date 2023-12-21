import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from '../aside/aside.component';
import { ChannelsComponent } from '../channels/channels.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-channels',
  standalone: true,
  imports: [CommonModule,HeaderComponent, AsideComponent, ChannelsComponent],
  templateUrl: './main-channels.component.html',
  styleUrl: './main-channels.component.css'
})
export class MainChannelsComponent {

}
