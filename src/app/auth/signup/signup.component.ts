import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignup(form): void {
    this.authService.signup(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth/login');
    });
  }

}
