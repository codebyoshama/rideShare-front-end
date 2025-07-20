import {Component, OnInit} from '@angular/core';
import {RidesService} from "../rides.service";
import {BookingsService} from "../../bookings/bookings.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-driver-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './driver-dashboard.component.html',
  styleUrl: './driver-dashboard.component.scss'
})
export class DriverDashboardComponent implements OnInit {

  rides: any[] = [];
  bookings: any[] = [];

  constructor(
    private rideService: RidesService,
    private bookingService: BookingsService,
  ) {}

  ngOnInit() {
    // Assume AuthService provides current user email
    const email = localStorage.getItem('email')!;

    this.rideService.getRidesByDriver(email).subscribe(rides => {
      this.rides = rides;
    });

    this.bookingService.getBookingsForDriver().subscribe(bookings => {
      this.bookings = bookings;
    });
  }

  deleteRide(id: number) {
    if(confirm('Are you sure you want to delete this ride?')) {
      this.rideService.deleteRide(id).subscribe({
        next: () => {
          alert('Ride deleted');
          this.rides = this.rides.filter(ride => ride.id !== id);
        },
        error: () => alert('Failed to delete ride')
      });
    }
  }


}
