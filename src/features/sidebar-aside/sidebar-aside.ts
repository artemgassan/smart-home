import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-aside',
  imports: [],
  templateUrl: './sidebar-aside.html',
  styleUrl: './sidebar-aside.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarAside {}
