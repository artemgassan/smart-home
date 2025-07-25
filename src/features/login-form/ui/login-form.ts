import {AsyncPipe} from '@angular/common';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  TuiAppearance,
  TuiButton,
  TuiError,
  TuiLabel,
  TuiTextfieldComponent,
  TuiTextfieldDirective, TuiTitle
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
    TuiTitle
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm {
  protected readonly form = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl(''),
  });
}
