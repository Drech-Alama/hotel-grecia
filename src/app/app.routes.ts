import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UsComponent } from './pages/us/us.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: UsComponent },
  { path: 'servicios', component: ServicesComponent }
];