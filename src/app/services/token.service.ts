import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token = signal<string | null>(null);

  constructor() {
    this.token.set(localStorage.getItem('token'));
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
    this.token.set(token);
  }

  public getToken(): string | null {
    return this.token();
  }

  public clearToken(): void {
    localStorage.removeItem('token');
    this.token.set(null);
  }
}
