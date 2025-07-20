import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RatingsService} from "../ratings.service";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-rate-driver',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './rate-driver.component.html',
  styleUrl: './rate-driver.component.scss'
})
export class RateDriverComponent implements OnInit {

  driverId!: number;
  stars: number = 5;
  review: string = '';

  constructor(
    private route: ActivatedRoute,
    private ratingService: RatingsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.driverId = Number(this.route.snapshot.paramMap.get('driverId'));
  }

  submitRating() {
    this.ratingService.rateDriver(this.driverId, this.stars, this.review).subscribe({
      next: () => {
        alert('Thank you for your feedback!');
        this.router.navigate(['/rides']);
      },
      error: () => alert('Failed to submit rating.')
    });
  }

}
