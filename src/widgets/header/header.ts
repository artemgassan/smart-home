import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiHeaderComponent } from '@taiga-ui/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TuiHeaderComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
