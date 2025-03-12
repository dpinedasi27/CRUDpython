import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LogInComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: LogInComponent }, // Página principal (Login)
  { path: 'dashboard', component: DashboardComponent }, // Dashboard de servidores
  { path: 'signup', component: SignUpComponent }
];

export const appConfig = {
    providers: [
      provideRouter(routes) // Asegurar que las rutas están siendo proporcionadas
    ]
  };