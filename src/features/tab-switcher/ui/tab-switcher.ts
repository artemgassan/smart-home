import { TuiSubheaderCompactComponent } from '@taiga-ui/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiFade, TuiTab, TuiTabsHorizontal } from '@taiga-ui/kit';

@Component({
  selector: 'app-tab-switcher',
  imports: [TuiFade, TuiSubheaderCompactComponent, TuiTab, TuiTabsHorizontal],
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabSwitcher {}
