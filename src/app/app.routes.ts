import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent }
];
