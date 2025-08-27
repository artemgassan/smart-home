import { Store } from '@ngrx/store';
import { EMPTY, map, switchMap } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { concatLatestFrom } from '@ngrx/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardsService } from '@/app/services/dashboards.service';
import { saveDraft, setOriginalDashboard } from '@/app/store/actions/dashboard.actions';
import { selectDraftDashboardId, selectDraftData } from '@/app/store/selectors/dashboard.selectors';

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
        this.store.select(selectDraftData),
        this.store.select(selectDraftDashboardId),
      ]),
      switchMap(([, draftData, dashboardId]) => {
        if (!draftData) {
          return EMPTY;
        }
        return this.api
          .saveDashboard(dashboardId, draftData)
          .pipe(map((savedDashboard) => setOriginalDashboard({ dashboard: savedDashboard })));
      }),
    );
  });
}
