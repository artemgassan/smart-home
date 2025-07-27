import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenService } from '@/app/services/token.service';

type LoginRequest = {
  userName: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

const loginData: LoginRequest = {
  userName: 'Morales',
  password: 'id',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private token = inject(TokenService);

  public login(): void {
    this.http.post<LoginResponse>(`/user/login`, loginData).subscribe({
      next: (response) => {
        this.token.setToken(response.token);
      },
    });
  }

  public getUser(): void {
    this.http.get(`/user/profile`).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
