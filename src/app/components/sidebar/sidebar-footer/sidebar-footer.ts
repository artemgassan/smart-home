import { TuiAsideItemDirective, TuiNavigation } from '@taiga-ui/layout';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sidebar-footer',
  imports: [TuiAsideItemDirective, TuiNavigation],
  templateUrl: './sidebar-footer.html',
  styleUrl: './sidebar-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarFooter {
  public isExpanded = input.required<boolean>();
  public toggleExpanded = output<void>();
}
