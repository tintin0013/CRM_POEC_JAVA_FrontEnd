import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AsideComponent } from '../aside/aside.component';
import { ChannelsComponent } from '../channels/channels.component';

@Component({
  selector: 'app-main-channels',
  standalone: true,
  imports: [CommonModule,NavbarComponent, AsideComponent, ChannelsComponent],
  templateUrl: './main-channels.component.html',
  styleUrl: './main-channels.component.css'
})
export class MainChannelsComponent {

}
