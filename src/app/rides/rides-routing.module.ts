import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RideDeatilsComponent} from "./ride-deatils/ride-deatils.component";
import {AuthGuard} from "../auth/auth.guard";
import {DriverDashboardComponent} from "./driver-dashboard/driver-dashboard.component";
import {RideFormComponent} from "./ride-form/ride-form.component";

const routes: Routes = [
  {
    path: 'ride/:id',
    component: RideDeatilsComponent,
    canActivate: [AuthGuard] // optional, if route needs protection
  },
  {
    path: 'driver-dashboard',
    component: DriverDashboardComponent
  },

  {
    path: 'ride/new',
    component: RideFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ride/edit/:id',
    component: RideFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidesRoutingModule { }
