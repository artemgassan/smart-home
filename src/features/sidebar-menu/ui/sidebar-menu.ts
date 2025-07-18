import { TuiNavigation } from '@taiga-ui/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  imports: [TuiNavigation],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenu {}
