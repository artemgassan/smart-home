import { TuiAvatar, TuiFade } from '@taiga-ui/kit';
import { UserService } from '@/app/services/user.service';
import { AuthService } from '@/app/services/auth.service';
import { Component, inject, input, signal } from '@angular/core';
import { TuiAsideItemDirective, TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-sidebar-footer',
  imports: [TuiAvatar, TuiAsideItemDirective, TuiFade, TuiNavigation],
  templateUrl: './sidebar-footer.html',
  styleUrl: './sidebar-footer.scss',
})
export class SidebarFooter {
  public expanded = input.required<boolean>();
  protected userName = signal<string>('');
  protected userInitials = signal<string>('');
  protected authService = inject(AuthService);
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
