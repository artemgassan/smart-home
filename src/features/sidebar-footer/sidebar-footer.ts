import { Component, input } from '@angular/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiTitle } from '@taiga-ui/core';

@Component({
  selector: 'app-sidebar-footer',
  imports: [TuiAvatar, TuiTitle],
  templateUrl: './sidebar-footer.html',
  styleUrl: './sidebar-footer.scss',
})
export class SidebarFooter {
  public expanded = input.required<boolean>();
}
