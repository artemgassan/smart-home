import { Store } from '@ngrx/store';
import { inject, Injectable } from '@angular/core';
import { addCard } from '@/app/store/actions/dashboard.actions';
import { selectRouteTabId } from '@/app/store/selectors/router.selectors';
import type { CardType, LayoutType } from '@/app/interfaces/cards.interface';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly store = inject(Store);

  public addCard(layout: LayoutType): void {
    const tabId = this.store.selectSignal<string>(selectRouteTabId);
    const newCard: CardType = {
      id: this.generateId(),
      title: 'New Card',
      layout: layout,
      items: [],
    };
    this.store.dispatch(addCard({ tabId: tabId(), card: newCard }));
  }

  private generateId(): string {
    return Math.random().toString(36).slice(2, 11);
  }
}
