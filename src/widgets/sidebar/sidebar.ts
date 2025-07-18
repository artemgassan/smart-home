import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiAsideComponent, tuiLayoutIconsProvider } from '@taiga-ui/layout';
import { SidebarMenu } from '@/features/sidebar-menu/sidebar-menu';
import { SidebarHeader } from '@/features/sidebar-header/sidebar-header';
import { SidebarFooter } from '@/features/sidebar-footer/sidebar-footer';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, SidebarMenu, TuiAsideComponent, SidebarHeader, SidebarFooter],
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
