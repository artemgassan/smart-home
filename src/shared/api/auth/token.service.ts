import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public setToken(token: string): void {
    localStorage.setItem('token', token);
    console.log(token); // todo: delete
  }
}
