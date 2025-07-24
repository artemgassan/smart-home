import { Component } from '@angular/core';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';
import { Dashboard } from '@/widgets/dashboard';

@Component({
  selector: 'app-dashboard-page',
  imports: [Header, Sidebar, Dashboard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {}
