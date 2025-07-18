import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAsideComponent, TuiHeaderComponent, TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-sidebar-header',
  imports: [TuiHeaderComponent, TuiAsideComponent, TuiNavigation],
  templateUrl: './sidebar-header.html',
  styleUrl: './sidebar-header.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarHeader {
  protected expanded = true;
}
