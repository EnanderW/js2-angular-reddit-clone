import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  login(username: string, password: string): void {
    this.authService.tryLogin(username, password).then((user) => {
      if (user) {
        this.router.navigate(['/']);
      }
    });
  }
}
