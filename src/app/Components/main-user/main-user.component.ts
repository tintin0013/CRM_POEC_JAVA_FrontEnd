import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AsideComponent } from '../aside/aside.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-main-user',
  standalone: true,
  imports: [CommonModule,NavbarComponent, AsideComponent, UserComponent],
  templateUrl: './main-user.component.html',
  styleUrl: './main-user.component.css'
})
export class MainUserComponent {

}
