import { Component } from '@angular/core';
import { AccountRegisterDTO } from "../../models/user-profile/AccountRegisterDTO.interface";
import { AccountLoginDTO } from "../../models/user-profile/AccountLoginDTO.interface";
import { AuthService } from "../../services/auth/auth.service";
import { HttpResponse } from "@angular/common/http";
import {ApiResponse} from "../../models/api-response/api-response.interface";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  isAuthorized = false;
  credentials: AccountLoginDTO = { UserNameOrEmail: '', Password: '' };
  registerData: AccountRegisterDTO = {
    Name: '',
    UserName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  };

  activeLogin = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthorized = this.authService.isLoggedIn();
  }

  login() {
    this.authService.login(this.credentials).subscribe((response: ApiResponse) => {
      if (response.success) {
        this.isAuthorized = true;
      }
    });
  }

  register() {
    this.authService.register(this.registerData).subscribe((response: ApiResponse) => {
      if (response.success) {
        window.alert('Please check your email to complete the registration process.');
      }
    });
  }

  logout() {
    this.authService.logout().subscribe((response: ApiResponse) => {
      if (response.success) {
        this.isAuthorized = false;
      }
    });
  }

  showLoginForm() {
    this.activeLogin = true;
  }

  showSignUpForm() {
    this.activeLogin = false;
  }
}
