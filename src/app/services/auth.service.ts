import { tap } from 'rxjs';
import type { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenService } from '@/app/services/token.service';

type LoginRequest = {
  userName: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private token = inject(TokenService);
  private router = inject(Router);

  public isAuth(): boolean {
    const token = this.token.getToken();
    return !!token;
  }

  public login(userName: string, password: string): Observable<LoginResponse> {
    const loginData: LoginRequest = {
      userName,
      password,
    };

    return this.http.post<LoginResponse>(`/user/login`, loginData).pipe(
      tap({
        next: (response) => {
          this.token.setToken(response.token);
          this.router.navigate(['/']);
        },
      }),
    );
  }

  public logout(): void {
    this.token.clearToken();
    this.router.navigate(['/login']);
  }

  public getUser(): void {
    this.http.get(`/user/profile`).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
