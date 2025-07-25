import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {BASE_URL} from '@/shared/config/constants';

interface LoginRequest {
  userName: string;
  password: string;
}

const loginData: LoginRequest = {
  userName: 'Morales',
  password: 'id',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient)

  public login() {
    this.http.post(`${BASE_URL}/api/user/login`, loginData).subscribe()
  }
}
