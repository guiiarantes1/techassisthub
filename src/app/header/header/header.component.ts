import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mostrarMenu();
  }
  

  login() {
    this.router.navigate(['login']);
  }

  mostrarMenu() {
    if (this.router.url == '/') {
      this.showMenu = true;
    } else{
      this.showMenu = false;
    }
  }
}
