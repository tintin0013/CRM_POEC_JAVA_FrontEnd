import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavbarpublicComponent } from '../navbarpublic/navbarpublic.component';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarpublicComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
