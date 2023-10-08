import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private authService: AuthService) {}

  get user(): User | undefined {
    return this.authService.loginUser;
  }
}
