import { Component } from '@angular/core';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';

@Component({
  selector: 'app-dashboard-page',
  imports: [Header, Sidebar],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {}
