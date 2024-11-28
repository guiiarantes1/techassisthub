import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';
import { TrialComponent } from '../subhome/trial/trial.component';
import { GfinanceiroComponent } from '../subhome/gfinanceiro/gfinanceiro.component';
import { GestoqueComponent } from '../subhome/gestoque/gestoque.component';
import { CommonModule } from '@angular/common';
import { GclientesComponent } from '../subhome/gclientes/gclientes.component';
import { FooterComponent } from '../../footer/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TrialComponent,
    GfinanceiroComponent,
    GestoqueComponent,
    GclientesComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {}
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }
}
