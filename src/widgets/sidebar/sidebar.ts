import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tuiLayoutIconsProvider } from '@taiga-ui/layout';
import { SidebarHeader } from '@/features/sidebar-header/sidebar-header';
import { SidebarAside } from '@/features/sidebar-aside/sidebar-aside';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, SidebarHeader, SidebarAside],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  providers: [tuiLayoutIconsProvider({ grid: '@tui.align-justify' })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {}
