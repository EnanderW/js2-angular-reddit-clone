import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUsers: User[] = [];
  private localUsers: User[] = [];

  constructor() {
    this.loadApiData().then((users) => (this.apiUsers = users));
    this.localUsers = this.loadLocalData();
  }

  private async loadApiData() {
    let result = await fetch('https://dummyjson.com/users?limit=200');
    let json = await result.json();
    return json.users;
  }

  private loadLocalData(): User[] {
    let users = localStorage.getItem('users');
    return !users ? [] : JSON.parse(users);
  }

  public get users(): User[] {
    return this.apiUsers.concat(this.localUsers);
  }
}
