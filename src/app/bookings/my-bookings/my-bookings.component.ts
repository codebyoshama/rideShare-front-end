import {Component, OnInit} from '@angular/core';
import {BookingsService} from "../bookings.service";

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss'
})
export class MyBookingsComponent implements OnInit {

  bookings: any[] = [];

  constructor(private bookingService: BookingsService) {}

  ngOnInit(): void {
    this.bookingService.getMyBookings().subscribe({
      next: (data) => this.bookings = data,
      error: (err) => console.error('Failed to load bookings', err)
    });
  }

  cancelBooking(id: number) {
    if(confirm('Are you sure you want to cancel this booking?')) {
      this.bookingService.cancelBooking(id).subscribe({
        next: () => {
          alert('Booking cancelled');
          this.bookings = this.bookings.filter(b => b.id !== id);
        },
        error: () => alert('Failed to cancel booking')
      });
    }
  }


}
