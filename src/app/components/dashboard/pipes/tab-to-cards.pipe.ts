import { Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';
import type { TabType } from '@/app/interfaces/tabs.interface';
import { TabsSwitcher } from '@/app/interfaces/tabs.interface';
import type { CardType } from '@/app/interfaces/cards.interface';
import { responseData } from '../../../../../public/data/mock-response';

@Pipe({
  name: 'tabToCards',
  standalone: true,
})
export class TabToCardsPipe implements PipeTransform {
  public transform(activeTab: TabsSwitcher): CardType[] {
    const tabs: TabType[] = responseData.tabs;

    switch (activeTab) {
      case TabsSwitcher.overview:
        const overviewTab = tabs.find((tab) => tab.id === 'overview');
        return overviewTab ? overviewTab.cards : [];

      case TabsSwitcher.lights:
        const lightsTab = tabs.find((tab) => tab.id === 'lights');
        return lightsTab ? lightsTab.cards : [];

      default:
        return [];
    }
  }
}
