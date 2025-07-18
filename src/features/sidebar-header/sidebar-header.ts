import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiHeaderComponent, TuiNavigation } from '@taiga-ui/layout';
import { TabSwitcher } from '@/features/tab-switcher/tab-switcher';

@Component({
  selector: 'app-sidebar-header',
  imports: [TuiHeaderComponent, TuiNavigation, TabSwitcher],
  templateUrl: './sidebar-header.html',
  styleUrl: './sidebar-header.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarHeader {}
