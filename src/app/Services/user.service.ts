import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { UserStatus } from '../Models/UserStatus';
import { HttpClient } from '@angular/common/http';
import { FetcherService } from './fetcher.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: FetcherService) { }

  

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
