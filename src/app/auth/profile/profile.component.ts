import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  user: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUserProfile().subscribe(data => {
      this.user = data;
    });
  }

  save() {
    this.authService.updateUserProfile(this.user).subscribe(() => {
      alert('Profile updated!');
    });
  }
}
