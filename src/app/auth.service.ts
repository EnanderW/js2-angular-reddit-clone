import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUser: User | undefined = undefined;

  constructor() {
    fetch('https://dummyjson.com/users/1')
      .then((res) => res.json())
      .then((res) => (this.loginUser = res));
  }

  private async auth(username: string, password: string) {
    let result = await fetch('https://dummyjson.com/users?limit=200');
    let json = await result.json();
    let users = json.users;

    let user = users.find(
      (all: { username: string; password: string }) =>
        all.username === username && all.password === password,
    );

    return user;
  }

  public async tryLogin(username: string, password: string) {
    this.loginUser = await this.auth(username, password);
    return this.loginUser;
  }

  public logout(): void {
    this.loginUser = undefined;
  }
}
