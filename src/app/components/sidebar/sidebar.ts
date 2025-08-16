import {
  input,
  inject,
  signal,
  output,
  Component,
  linkedSignal,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  TuiNavigation,
  TuiMainComponent,
  TuiAsideComponent,
  tuiLayoutIconsProvider,
} from '@taiga-ui/layout';
import type { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WA_WINDOW } from '@/app/tokens/window.token';
import type { DashboardResponse } from '@/app/interfaces/tabs.interface';
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
  public dashboards = input<DashboardResponse[]>([]);
  public initDashboard = input<string>();
  public changeDashboard = output<string>();

  protected activeDashboard = linkedSignal<string | undefined>(() => this.initDashboard());
  protected isExpanded = signal<boolean>(true);
  protected isDesktopWidth = signal<boolean>(true);

  private readonly window = inject(WA_WINDOW);
  private resizeListener = this.updateExpandedState.bind(this);

  public ngOnInit(): void {
    this.updateExpandedState();
    if (this.window) {
      this.window.addEventListener('resize', this.resizeListener);
    }
  }

  protected toggleExpanded(): void {
    this.isExpanded.set(!this.isExpanded());
  }

  protected onMenuChangeDashboard(dashboardId: string): void {
    this.activeDashboard.set(dashboardId);
    this.changeDashboard.emit(dashboardId);
  }

  private updateExpandedState(): void {
    if (!this.window) {
      return;
    }

    const innerWidth = this.window.innerWidth;
    const isMobile = innerWidth < SIDEBAR_CLOSE_BREAKPOINT;
    const shouldShowHeader = innerWidth >= SIDEBAR_MIN_OPEN_WIDTH;

    this.isExpanded.set(!isMobile);
    this.isDesktopWidth.set(shouldShowHeader);
  }
}
