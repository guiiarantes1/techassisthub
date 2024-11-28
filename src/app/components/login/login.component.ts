import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';
import { AppComponent } from '../app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,
    AppComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) { }

  login() {
    this.router.navigate(['app']);
  }
}
