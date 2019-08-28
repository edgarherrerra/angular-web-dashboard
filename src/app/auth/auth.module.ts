import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { AuthService } from '../services/auth.service'

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
