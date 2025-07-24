import type { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    TuiMainComponent,
    TuiNavigation,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  providers: [tuiLayoutIconsProvider({ grid: '@tui.align-justify' })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar implements OnInit {
  private static readonly widthSidebarCloses = 768;
  protected expanded = signal(true);
  private resizeListener = this.updateExpandedState.bind(this);

  public ngOnInit(): void {
    this.updateExpandedState();
    window.addEventListener('resize', this.resizeListener);
  }

  protected toggleExpanded(): void {
    this.expanded.set(!this.expanded());
  }

  private updateExpandedState(): void {
    const isMobile = window.innerWidth < Sidebar.widthSidebarCloses;
    this.expanded.set(!isMobile);
  }
}
