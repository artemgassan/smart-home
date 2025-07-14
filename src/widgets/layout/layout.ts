import { Component } from '@angular/core';
import { Dashboard } from '@/widgets/dashboard/dashboard';
import { Sidebar } from '@/widgets/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [Dashboard, Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
