import { Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';
import type { CardType } from '@/app/components/card/card.model';
import { responseData } from '../../../../../public/data/mock-response';
import { TabsSwitcher } from '@/app/components/tab-switcher/tab-switcher.model';

@Pipe({
  name: 'tabToCards',
  standalone: true,
})
export class TabToCardsPipe implements PipeTransform {
  public transform(activeTab: TabsSwitcher): CardType[] {
    const tabs = responseData.tabs;

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
