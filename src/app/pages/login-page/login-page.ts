import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginForm } from '@/app/components/login-form/login-form';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {}
