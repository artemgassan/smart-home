import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar } from '@/widgets/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {}
