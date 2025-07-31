import type { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { DashboardResponse, DashboardType } from '@/app/interfaces/tabs.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardsService {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);

  public getDashboards(): Observable<DashboardResponse[]> {
    return this.http.get<DashboardResponse[]>('/dashboards').pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  public getDashboard(): Observable<DashboardType> {
    const dashboardId = this.route.snapshot.paramMap.get('dashboardId') ?? '';
    return this.http.get<DashboardType>(`/dashboards/${dashboardId}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }
}
