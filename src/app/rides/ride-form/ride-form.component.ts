import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RidesService} from "../rides.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ride-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ride-form.component.html',
  styleUrl: './ride-form.component.scss'
})
export class RideFormComponent implements OnInit {

  ride: any = {
    origin: '',
    destination: '',
    date: '',
    availableSeats: 1
  };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private rideService: RidesService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.rideService.getRideById(+id).subscribe(data => {
        this.ride = data;
      });
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.rideService.updateRide(this.ride).subscribe(() => {
        alert('Ride updated');
        this.router.navigate(['/rides/driver-dashboard']);
      });
    } else {
      this.rideService.createRide(this.ride).subscribe(() => {
        alert('Ride created');
        this.router.navigate(['/rides/driver-dashboard']);
      });
    }
  }
}
