import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  PieChart = []
  user;
  constructor(private dashboardService: DashboardService, private router: Router) {


  }

  ngOnInit() {

    // Check if user is logged.
    if (document.cookie.indexOf("headload") === -1) {
      this.router.navigate(['/auth/login']);
    }

    // Get data from Weather API
    this.dashboardService.getWeather()
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )

    // Get data from user.  
    this.dashboardService.getUser().subscribe(
      res => {
        this.user = res
      },
      err => console.log(err)
    )

    // Display chart:
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["En venta", "Servicios", "Trabajo"],
        datasets: [{
          backgroundColor: ['rgb(119, 221, 119)',
            'rgb(255, 255, 0)',
            'rgb(203, 50, 52)'
          ],
          borderColor: ['rgb(119, 221, 119)',
            'rgb(255, 255, 0)',
            'rgb(203, 50, 52)'
          ],
          data: [33, 33, 34],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'right',
          labels: {
            boxWidth: 20
          }
        }
      }
    });
  }

  // Delete todo.
  delete(id, deletedElement) {
    this.dashboardService.deleteTodo(id).subscribe(
      res => {
        this.dashboardService.getUser().subscribe(
          res => {
            this.user = res
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }

}
