import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
