import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar } from '@/widgets/sidebar/sidebar';
import { Header } from '@/widgets/header/header';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {}
