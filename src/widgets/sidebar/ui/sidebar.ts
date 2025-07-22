import { FormsModule } from '@angular/forms';
import { Dashboard } from '@/widgets/dashboard';
import { SidebarMenu } from '@/features/sidebar-menu';
import { SidebarHeader } from '@/features/sidebar-header';
import { SidebarFooter } from '@/features/sidebar-footer';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  TuiAsideComponent,
  tuiLayoutIconsProvider,
  TuiMainComponent,
  TuiNavigation,
} from '@taiga-ui/layout';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    FormsModule,
    SidebarMenu,
    TuiAsideComponent,
    SidebarHeader,
    SidebarFooter,
    Dashboard,
    TuiMainComponent,
    TuiNavigation,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  providers: [tuiLayoutIconsProvider({ grid: '@tui.align-justify' })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  protected expanded = signal(true);

  protected toggleExpanded(): void {
    this.expanded.set(!this.expanded());
  }
}
