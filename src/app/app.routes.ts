import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './components/app/app.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent        
    },
    {
        path: 'login', component: LoginComponent        
    },
    {
        path: 'app', component: AppComponent        
    }
];
