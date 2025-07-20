import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyBookingsComponent} from "./my-bookings/my-bookings.component";

const routes: Routes = [
  {
    path: 'my-bookings',
    component: MyBookingsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
