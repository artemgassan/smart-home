import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-sidebar-header',
  imports: [TuiNavigation],
  templateUrl: './sidebar-header.html',
  styleUrl: './sidebar-header.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarHeader {
  public expanded = input.required<boolean>();
  public toggleExpanded = output<void>();
}
