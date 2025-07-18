import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-tab-switcher',
  imports: [TuiButton],
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabSwitcher {}
