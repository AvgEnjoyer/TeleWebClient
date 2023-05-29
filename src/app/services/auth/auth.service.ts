import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AccountLoginDTO } from "../../models/user-profile/AccountLoginDTO.interface";
import { AccountRegisterDTO } from "../../models/user-profile/AccountRegisterDTO.interface";
import { ApiResponse } from "../../models/api-response/api-response.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = '/api/account';
  private loggedKey = 'logged';

  constructor(private http: HttpClient) {}

  login(credentials: AccountLoginDTO): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/login`, credentials).pipe(
      tap(response => {
        if (response.success) {
          localStorage.setItem(this.loggedKey, 'true');
        }
      })
    );
  }

  logout(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/logout`, null).pipe(
      tap(response => {
        if (response.success) {
          localStorage.removeItem(this.loggedKey);
        }
      })
    );
  }

  register(registerData: AccountRegisterDTO): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/register`, registerData).pipe(
      tap(response => {
        if (response.success) {

        }
      })
    );
  }

  isLoggedIn(): boolean {
    const logged = localStorage.getItem(this.loggedKey);
    return logged === 'true';
  }

  forgotPassword(email: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/forgot?email=${email}`);
  }

  resetPassword(userId: string, token: string, newPassword: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/reset?userId=${userId}&token=${token}&newPassword=${newPassword}`).pipe(
      tap(response => {
        if (response.success) {
          localStorage.setItem(this.loggedKey, 'true');
        }
      })
    );
  }

  confirmProfile(userId: string, token: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/confirm?userId=${userId}&token=${token}`).pipe(
      tap(response => {
        if (response.success) {
          localStorage.setItem(this.loggedKey, 'true');
        }
      })
    );
  }
}
