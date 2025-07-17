import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tab-switcher',
  imports: [],
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabSwitcher {}
