import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavbarpublicComponent } from '../navbarpublic/navbarpublic.component';
import { UserService } from '../../Services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarpublicComponent, FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  constructor(public user: UserService) {
  }
  nom: string = "";

  onClick() {
    if (this.nom == "") {
    } else {
      let currentUser = this.user.user.find((user) => user.nickname === this.nom)
      if (currentUser) {
        this.user.currentUser = currentUser
      }
    }
  }
}
