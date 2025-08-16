import {
  FormGroup,
  Validators,
  FormsModule,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import type { OnInit } from '@angular/core';
import { TuiConfirmService } from '@taiga-ui/kit';
import { Component, inject } from '@angular/core';
import { iconsConfig } from '@/app/consts/icons.const';
import { DashboardsService } from '@/app/services/dashboards.service';
import { TuiButton, TuiGroup, TuiIcon, TuiTextfield } from '@taiga-ui/core';

@Component({
  selector: 'app-add-dashboard-modal',
  imports: [ReactiveFormsModule, FormsModule, TuiTextfield, TuiButton, TuiIcon, TuiGroup],
  templateUrl: './add-dashboard-modal.html',
  styleUrl: './add-dashboard-modal.scss',
})
export class AddDashboardModal implements OnInit {
  protected icons = Object.values(iconsConfig);
  protected readonly form = new FormGroup({
    id: new FormControl<string>('', { nonNullable: true }),
    name: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    icon: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  });

  private readonly confirm = inject(TuiConfirmService);
  private readonly api = inject(DashboardsService);

  public ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      if (this.form.dirty) {
        this.confirm.markAsDirty();
      }
    });
  }

  protected selectIcon(icon: string): void {
    this.form.controls.icon.setValue(icon);
  }

  protected onSubmit(): void {
    const icon = this.form.controls.icon.value;
    const name = this.form.controls.name.value;
    const id = name.trim().toLowerCase();
    this.form.controls.id.setValue(id);

    if (this.form.valid) {
      this.api.addDashboard(id, name, icon).subscribe();
    } else {
      this.form.markAsPristine();
    }
  }
}
