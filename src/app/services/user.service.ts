import type { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

type UserResponse = {
  fullName: string;
  initials: string;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  public getUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>('/user/profile').pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }
}
