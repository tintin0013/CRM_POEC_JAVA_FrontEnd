import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { UserStatus } from '../Models/UserStatus';
import { HttpClient } from '@angular/common/http';
import { FetcherService } from './fetcher.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: FetcherService) { 
    this.chargeUsers()
  }

  currentUser: User|undefined;
  user: User[] = [];
userFiltered: User[] = this.user;

  chargeUsers() {
    this.http.getAllUsers().subscribe((data: User[]) => {
      this.user = data;
      this.userFiltered = this.user;
    })
  }


getUserByIdService(id: number){
  return this.http.getUserById(id);
}

postUserService(user: User) {
  return this.http.postUser(user);
}

updateUserService(user: User) {
  return this.http.updateUser(user);
}

deleteUserService(id: number) {
  return this.http.deleteUser(id);
}

}


