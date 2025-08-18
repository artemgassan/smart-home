// import { inject, Injectable } from '@angular/core';
// import { DashboardsService } from '@/app/services/dashboards.service';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { DashboardActions } from '@/app/store/actions/dashboard.actions';
// import { switchMap } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class DashboardEffects {
//   private dashboardService = inject(DashboardsService);
//   private actions$ = inject(Actions);
//
//   private dashboardEffects = createEffect(() => {
//     this.actions$.pipe(ofType(DashboardActions.setActiveDashboardID),
//   });
// }
//
