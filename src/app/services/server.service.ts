import { interval, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SERVER_POLL_INTERVAL } from '@/app/consts/api.const';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private http = inject(HttpClient);

  public serverPoll(): void {
    interval(SERVER_POLL_INTERVAL)
      .pipe(switchMap(() => this.http.get('/health')))
      .subscribe();
  }
}
