import {
  TuiNavigation,
  TuiMainComponent,
  TuiAsideComponent,
  tuiLayoutIconsProvider,
} from '@taiga-ui/layout';
import type { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SidebarMenu } from '@/app/components/sidebar/sidebar-menu/sidebar-menu';
import { SidebarHeader } from '@/app/components/sidebar/sidebar-header/sidebar-header';
import { SidebarFooter } from '@/app/components/sidebar/sidebar-footer/sidebar-footer';
import { SIDEBAR_CLOSE_BREAKPOINT, SIDEBAR_MIN_OPEN_WIDTH } from '@/app/consts/sizes.const';

@Component({
  selector: 'app-sidebar',
  imports: [
    SidebarMenu,
    FormsModule,
    SidebarHeader,
    SidebarFooter,
    TuiNavigation,
    TuiMainComponent,
    TuiAsideComponent,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  providers: [tuiLayoutIconsProvider({ grid: '@tui.align-justify' })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar implements OnInit {
  protected isExpanded = signal(true);
  protected isDesktopWidth = signal(true);
  private resizeListener = this.updateExpandedState.bind(this);

  public ngOnInit(): void {
    this.updateExpandedState();
    window.addEventListener('resize', this.resizeListener);
  }

  protected toggleExpanded(): void {
    this.isExpanded.set(!this.isExpanded());
  }

  private updateExpandedState(): void {
    const isMobile = window.innerWidth < SIDEBAR_CLOSE_BREAKPOINT;
    const shouldShowHeader = window.innerWidth >= SIDEBAR_MIN_OPEN_WIDTH;
    this.isExpanded.set(!isMobile);
    this.isDesktopWidth.set(shouldShowHeader);
  }
}
