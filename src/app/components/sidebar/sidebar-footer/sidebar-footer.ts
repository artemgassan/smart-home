import { TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { UserService } from '@/app/services/user.service';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar-footer',
  imports: [TuiAvatar, TuiTitle],
  templateUrl: './sidebar-footer.html',
  styleUrl: './sidebar-footer.scss',
})
export class SidebarFooter {
  public expanded = input.required<boolean>();
  protected userName = signal<string>('');
  protected userInitials = signal<string>('');
  private userService = inject(UserService);

  constructor() {
    this.userService.getUser().subscribe({
      next: (value) => {
        this.userName.set(value.fullName);
        this.userInitials.set(value.initials);
      },
    });
  }
}
