import { Store } from '@ngrx/store';
import type { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { setDashboard } from '@/app/store/actions/dashboard.actions';
import type { DashboardResponse, DashboardType } from '@/app/interfaces/tabs.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardsService {
  private http = inject(HttpClient);
  private store = inject(Store);

  public getDashboards(): Observable<DashboardResponse[]> {
    return this.http.get<DashboardResponse[]>('/dashboards').pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  public getDashboard(dashboardId: string): Observable<DashboardType> {
    return this.http.get<DashboardType>(`/dashboards/${dashboardId}`).pipe(
      tap((dashboard) => {
        this.store.dispatch(setDashboard({ dashboard, dashboardId }));
      }),
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  public addDashboard(id: string, title: string, icon: string): Observable<DashboardResponse> {
    const data: DashboardResponse = { id, title, icon };
    return this.http.post<DashboardResponse>(`/dashboards`, data).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  public removeDashboard(dashboardId: string): Observable<void> {
    return this.http.delete<void>(`/dashboards/${dashboardId}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  public saveDashboard(dashboardId: string, dashboard: DashboardType): Observable<DashboardType> {
    return this.http.put<DashboardType>(`/dashboards/${dashboardId}`, dashboard).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }
}
