import { TuiAsideItemDirective, TuiNavigation } from '@taiga-ui/layout';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sidebar-footer',
  imports: [TuiAsideItemDirective, TuiNavigation],
  templateUrl: './sidebar-footer.html',
  styleUrl: './sidebar-footer.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarFooter {
  public expanded = input.required<boolean>();
  public toggleExpanded = output<void>();
}
