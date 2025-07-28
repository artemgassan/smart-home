import { AsyncPipe } from '@angular/common';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { AuthService } from '@/app/services/auth.service';
import { TuiCardLarge, TuiForm, TuiHeader } from '@taiga-ui/layout';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  TuiAppearance,
  TuiButton,
  TuiError,
  TuiLabel,
  TuiTextfieldComponent,
  TuiTextfieldDirective,
  TuiTitle,
} from '@taiga-ui/core';

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

  private authService = inject(AuthService);

  protected get loginErrors(): readonly string[] {
    const errors = this.form.get('login')?.errors;
    return errors ? Object.keys(errors) : [];
  }

  protected get passwordErrors(): readonly string[] {
    const errors = this.form.get('password')?.errors;
    return errors ? Object.keys(errors) : [];
  }

  protected onSubmit(): void {
    if (this.form.valid) {
      const { login, password } = this.form.value;
      this.authService.login(login!, password!).subscribe();
    }
  }
}
