import { InjectionToken } from '@angular/core';

export const WA_WINDOW = new InjectionToken<Window | undefined>('WA_WINDOW', {
  providedIn: 'root',
  factory: (): Window | undefined => (typeof window !== 'undefined' ? window : undefined),
});
