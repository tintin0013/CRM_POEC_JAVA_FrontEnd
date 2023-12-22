import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from '../channels/channels.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, ChannelsComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
}
