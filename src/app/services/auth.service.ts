import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  SERVER: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  signup(user: User) {
    return this.httpClient.post(`${this.SERVER}/signup`, user)
  }
  

  login(user: User) {
    return this.httpClient.post(`${this.SERVER}/login`, user, {
      withCredentials: true
    })
  }

}
