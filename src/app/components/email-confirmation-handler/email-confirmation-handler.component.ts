import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiResponse} from "../../models/api-response/api-response.interface";
import {AuthService} from "../../services/auth/auth.service";



@Component({
  selector: 'app-email-confirmation-handler',
  templateUrl: './email-confirmation-handler.component.html',
  styleUrls: ['./email-confirmation-handler.component.scss']
})
export class EmailConfirmationHandlerComponent implements OnInit {
  resetPasswordActive :boolean = false;
  resetPasswordToken:string = '';
  email: string='';
  newPassword: string='';
  userId: string='';
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    if (this.router.url.includes('confirmEmail'))
    {
    const userId = this.route.snapshot.queryParamMap.get('userId');
    const confirmationToken = this.route.snapshot.queryParamMap.get('token');

    if (userId && confirmationToken) {
      this.confirmEmail(userId, confirmationToken);
    } else {

      this.router.navigate(['/']);
    }
    }
    else if (this.router.url.includes('resetPassword')){
      this.resetPasswordActive = true;

      const id =this.route.snapshot.queryParamMap.get('userId');
      const token  = this.route.snapshot.queryParamMap.get('token');
      if(id && token){
        this.resetPasswordToken =token;
        this.userId = id;
      }
      else this.router.navigate(['/']);
    }

  }

  confirmEmail(userId: string, token: string): void {
    this.authService.confirmProfile(userId, token).subscribe((response: ApiResponse) => {
      if (response.success) {
        // Email confirmation successful
        // Redirect to profile or desired page
        this.router.navigate(['/profile']);
      } else {
        // Email confirmation failed
        // Handle the error, e.g., display an error message
      }
    });
  }

  forgotPassword(email: string): void {
    this.authService.forgotPassword(email).subscribe((response: ApiResponse) => {
      if (response.success) {
        window.alert('We sent you an email with a link to reset your password');
      } else {
        // Forgot password request failed
        // Handle the error, e.g., display an error message
      }
    });
  }

  resetPassword(userId: string, token: string, newPassword: string): void {
    this.authService.resetPassword(userId, token, newPassword).subscribe((response: ApiResponse) => {
      if (response.success) {
        // Password reset successful
        // Display a success message or redirect to a login page
      } else {
        // Password reset failed
        // Handle the error, e.g., display an error message
      }
    });
  }
}
