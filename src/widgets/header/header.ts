import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabSwitcher } from '@/features/tab-switcher/tab-switcher';
import { TuiHeaderComponent } from '@taiga-ui/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabSwitcher, TuiHeaderComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
