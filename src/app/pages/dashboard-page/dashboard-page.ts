import { Component } from '@angular/core';
import { Dashboard } from '@/widgets/dashboard';
import { Header } from '@/app/components/header/header';
import { Sidebar } from '@/app/components/sidebar/sidebar';

@Component({
  selector: 'app-dashboard-page',
  imports: [Header, Sidebar, Dashboard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {}
