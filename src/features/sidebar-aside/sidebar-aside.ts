import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-sidebar-aside',
  imports: [TuiNavigation],
  templateUrl: './sidebar-aside.html',
  styleUrl: './sidebar-aside.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarAside {
  protected expanded = true;
}
