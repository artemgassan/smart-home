import type { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { DeviceRequest, DeviceResponse } from '@/app/interfaces/cards.interface';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  private readonly http = inject(HttpClient);

  public toggleDeviceState(id: string, state: boolean): Observable<DeviceResponse> {
    const data: DeviceRequest = { state };
    return this.http
      .patch<DeviceResponse>(`/devices/${id}`, data)
      .pipe(catchError((error) => throwError(() => error)));
  }
}
