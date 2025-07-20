import { Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) , canActivate: [AuthGuard] },
  { path: 'rides', loadChildren: () => import('./rides/rides.module').then(m => m.RidesModule), canActivate: [AuthGuard] },
  { path: 'bookings', loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule), canActivate: [AuthGuard] },
  { path: 'ratings', loadChildren: () => import('./ratings/ratings.module').then(m => m.RatingsModule), canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', redirectTo: '/rides', pathMatch: 'full' },
  { path: '**', redirectTo: '/rides' }
];
