import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  SERVER: string = 'http://localhost:3000';
  apiKey: string = 'b8759fb313a56598e177dde78f657817';
  URI: string = '';

  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/forecast?lat=19.2&lon=-96.13&cnt=6&appid=${this.apiKey}`;
  }

  newTodo(todo: Todo) {
    return this.httpClient.post(`${this.SERVER}/todo/new`, todo, {
      withCredentials: true
    })
  }


  getUser() {
    return this.httpClient.get(`${this.SERVER}/user`, {
      withCredentials: true
    })
  }

  getWeather() {
    return this.httpClient.get(`${this.URI}`);
  }

  deleteTodo(id) {
    return this.httpClient.delete(`${this.SERVER}/todo/${id}`, {
      withCredentials: true
    })
  }
}