import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RateDriverComponent} from "./rate-driver/rate-driver.component";

const routes: Routes = [
  {
    path: 'rate/:driverId',
    component: RateDriverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingsRoutingModule { }
