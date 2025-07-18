import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiCardLarge, TuiHeader, TuiNavigation } from '@taiga-ui/layout';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiRepeatTimes } from '@taiga-ui/cdk';
import { TabSwitcher } from '@/features/tab-switcher/tab-switcher';

@Component({
  selector: 'app-dashboard',
  imports: [TuiNavigation, TuiRepeatTimes, TuiAppearance, TuiCardLarge, TuiHeader, TuiTitle, TabSwitcher],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {}
