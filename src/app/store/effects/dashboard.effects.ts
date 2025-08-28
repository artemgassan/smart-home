import { Store } from '@ngrx/store';
import { inject, Injectable } from '@angular/core';
import { concatLatestFrom } from '@ngrx/operators';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardsService } from '@/app/services/dashboards.service';
import { getDashboard, saveDraft, setDashboard } from '@/app/store/actions/dashboard.actions';
import { selectDashboardId, selectViewData } from '@/app/store/selectors/dashboard.selectors';

@Injectable({
  providedIn: 'root',
})
export class DashboardEffects {
  private readonly api = inject(DashboardsService);
  private readonly actions$ = inject(Actions);
  private readonly store = inject(Store);

  private saveDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(saveDraft),
      concatLatestFrom(() => [
        this.store.select(selectViewData),
        this.store.select(selectDashboardId),
      ]),
      switchMap(([, draftData, dashboardId]) => {
        if (!draftData) {
          return EMPTY;
        }
        return this.api
          .saveDashboard(dashboardId, draftData)
          .pipe(map((savedDashboard) => setDashboard({ dashboard: savedDashboard, dashboardId })));
      }),
    );
  });

  private getDashboard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getDashboard),
      switchMap(({ dashboardId }) =>
        this.api.getDashboard(dashboardId).pipe(
          map((dashboard) => setDashboard({ dashboard, dashboardId })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
}
