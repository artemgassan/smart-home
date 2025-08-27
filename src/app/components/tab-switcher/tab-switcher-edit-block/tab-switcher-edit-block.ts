import { TuiButton } from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tab-switcher-edit-block',
  imports: [TuiButton],
  templateUrl: './tab-switcher-edit-block.html',
  styleUrl: './tab-switcher-edit-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabSwitcherEditBlock {}
