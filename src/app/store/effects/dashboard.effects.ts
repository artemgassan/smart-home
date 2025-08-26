import { map } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardsService } from '@/app/services/dashboards.service';
import { exitEditMode, saveDraft } from '@/app/store/actions/dashboard.actions';

@Injectable({
  providedIn: 'root',
})
export class DashboardEffects {
  private api = inject(DashboardsService);
  private actions$ = inject(Actions);

  private saveDraft = createEffect(() => {
    return this.actions$.pipe(
      ofType(saveDraft),
      map(() => exitEditMode()), // TODO: delete
    );
  });
}
