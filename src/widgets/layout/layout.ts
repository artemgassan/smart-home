import { Component } from '@angular/core';
import { Dashboard } from '@/widgets/dashboard/dashboard';
import { Sidebar } from '@/widgets/sidebar/sidebar';
import { TabSwitcher } from '@/features/tab-switcher/tab-switcher';

@Component({
  selector: 'app-layout',
  imports: [Dashboard, Sidebar, TabSwitcher],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
