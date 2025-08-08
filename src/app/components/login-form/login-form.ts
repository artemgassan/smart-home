import {
  TuiTitle,
  TuiError,
  TuiLabel,
  TuiButton,
  TuiAppearance,
  TuiTextfieldComponent,
  TuiTextfieldDirective,
} from '@taiga-ui/core';
import { AsyncPipe } from '@angular/common';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { AuthService } from '@/app/services/auth.service';
import type { HttpErrorResponse } from '@angular/common/http';
import { TuiCardLarge, TuiForm, TuiHeader } from '@taiga-ui/layout';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TuiAppearance,
    TuiButton,
    TuiCardLarge,
    TuiError,
    TuiFieldErrorPipe,
    TuiForm,
    TuiHeader,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiTitle,
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm {
  protected readonly form = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  protected authErrorMessage = signal<string | null>(null);
  private authService = inject(AuthService);

  protected onSubmit(): void {
    this.authErrorMessage.set(null);
    if (this.form.valid) {
      const { login, password } = this.form.value;
      this.authService.login(login!, password!).subscribe({
        error: (error: HttpErrorResponse) => {
          if (error.status === 401) this.authErrorMessage.set('Invalid login or password.');
          else this.authErrorMessage.set('Unknown error occurred. Please try again later.');
        },
      });
    }
  }
}
