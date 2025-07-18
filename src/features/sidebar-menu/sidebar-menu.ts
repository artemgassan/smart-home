import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-sidebar-menu',
  imports: [TuiNavigation],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenu {
  protected expanded = true;
}
