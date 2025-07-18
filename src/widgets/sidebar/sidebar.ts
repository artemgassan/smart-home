import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tuiLayoutIconsProvider } from '@taiga-ui/layout';
import { SidebarMenu } from '@/features/sidebar-menu/sidebar-menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, SidebarMenu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  providers: [tuiLayoutIconsProvider({ grid: '@tui.align-justify' })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {}
