import type { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { DashboardResponse, DashboardType } from '@/app/interfaces/tabs.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardsService {
  private http = inject(HttpClient);

  public getDashboards(): Observable<DashboardResponse[]> {
    return this.http.get<DashboardResponse[]>('/dashboards').pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  public getDashboard(dashboardId: string): Observable<DashboardType> {
    return this.http.get<DashboardType>(`/dashboards/${dashboardId}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }
}
