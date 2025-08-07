import { TuiNavigation } from '@taiga-ui/layout';
import { TuiAvatar, TuiFade } from '@taiga-ui/kit';
import { UserService } from '@/app/services/user.service';
import { AuthService } from '@/app/services/auth.service';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  imports: [TuiNavigation, TuiAvatar, TuiFade],
  templateUrl: './sidebar-header.html',
  styleUrl: './sidebar-header.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarHeader {
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
