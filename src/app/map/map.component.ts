import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'Map';
  lat: number = 19.4267261
  lng: number = -99.1718706
  viewType: any = 'roadmap';
  lati: number;
  longi: number;
  constructor(private router: Router) { }

  ngOnInit() {
    if (document.cookie.indexOf("headload") === -1) {
      this.router.navigate(['/auth/login']);
    }
  }

  open() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
