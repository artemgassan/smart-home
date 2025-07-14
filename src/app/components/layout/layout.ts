import { Component } from '@angular/core';
import { Dashboard } from '@/app/components/dashboard/dashboard';

@Component({
  selector: 'app-layout',
  imports: [Dashboard],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
