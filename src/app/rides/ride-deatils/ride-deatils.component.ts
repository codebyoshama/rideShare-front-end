import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RidesService} from "../rides.service";
import {BookingsService} from "../../bookings/bookings.service";

@Component({
  selector: 'app-ride-deatils',
  standalone: true,
  imports: [],
  templateUrl: './ride-deatils.component.html',
  styleUrl: './ride-deatils.component.scss'
})
export class RideDeatilsComponent implements OnInit {
  rideId!: number;
  ride: any;
  seatsToBook: number = 1;

  constructor(
    private route: ActivatedRoute,
    private rideService: RidesService,
    private bookingService: BookingsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rideId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadRide();
  }

  loadRide(): void {
    this.rideService.getRideById(this.rideId).subscribe((data) => {
      this.ride = data;
    });
  }

  bookRide(): void {
    const userEmail = localStorage.getItem('email'); // Or get from AuthService

    if (!userEmail) {
      alert('You need to be logged in to book.');
      this.router.navigate(['/login']);
      return;
    }

    const bookingData = {
      rideId: this.rideId,
      email: userEmail,
      numberOfSeats: this.seatsToBook,
    };

    this.bookingService.bookRide(bookingData).subscribe({
      next: () => {
        alert('Booking successful!');
        this.router.navigate(['/my-bookings']);
      },
      error: () => {
        alert('Booking failed. Please try again.');
      }
    });
  }
}
