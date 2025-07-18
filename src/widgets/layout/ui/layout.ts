import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar/sidebar';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {}
