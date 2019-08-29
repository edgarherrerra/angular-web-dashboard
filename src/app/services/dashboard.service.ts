import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  apiKey: string = 'b8759fb313a56598e177dde78f657817';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/forecast?lat=19.2&lon=-96.13&cnt=6&appid=${this.apiKey}`;
  }

  getWeather() {
    return this.http.get(`${this.URI}`);
  }
}