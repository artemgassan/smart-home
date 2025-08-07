import { TUI_DOC_ICONS } from '@taiga-ui/addon-doc';
import { TuiHeaderComponent, TuiNavigation } from '@taiga-ui/layout';
import { TUI_DARK_MODE, TuiButton, TuiIcon } from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TuiBadge } from '@taiga-ui/kit';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TuiHeaderComponent, TuiButton, TuiNavigation, TuiIcon, TuiBadge],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly darkMode = inject(TUI_DARK_MODE);
  protected readonly icon = computed(() => (this.darkMode() ? this.icons.light : this.icons.dark));
  private readonly icons = inject(TUI_DOC_ICONS);
}
