import { TuiHeaderComponent } from '@taiga-ui/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TuiHeaderComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
