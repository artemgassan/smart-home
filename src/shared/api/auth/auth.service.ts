import { TokenService } from '@/shared/api/auth';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

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
}
