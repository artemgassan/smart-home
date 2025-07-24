import { TuiButton } from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiBlockStatusComponent, TuiBlockStatusDirective } from '@taiga-ui/layout';

@Component({
  selector: 'app-not-found-page',
  imports: [TuiBlockStatusComponent, TuiBlockStatusDirective, TuiButton],
  standalone: true,
  templateUrl: './not-found-page.html',
  styleUrl: './not-found-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {}
