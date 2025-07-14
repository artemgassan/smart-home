import { Component } from '@angular/core';
import { SidebarHeader } from '@/features/sidebar-header/sidebar-header';
import { SidebarMenu } from '@/features/sidebar-menu/sidebar-menu';
import { SidebarFooter } from '@/features/sidebar-footer/sidebar-footer';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarHeader, SidebarMenu, SidebarFooter],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {}
