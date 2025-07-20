import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe({
      next: () => this.router.navigate(['/auth/login']),
      error: () => alert('Registration failed')
    });
  }
}
