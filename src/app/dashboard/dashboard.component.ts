import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  totalRides = 0;
  totalBookings = 0;
  averageRating = 0;

  ngOnInit(): void {
    // TODO: Replace with API calls later
    this.totalRides = 12;
    this.totalBookings = 7;
    this.averageRating = 4.5;
  }

}
