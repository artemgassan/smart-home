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
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { DashboardsService } from '@/app/services/dashboards.service';

@Component({
  selector: 'app-add-dashboard-modal',
  imports: [ReactiveFormsModule, FormsModule, TuiTextfield, TuiButton],
  templateUrl: './add-dashboard-modal.html',
  styleUrl: './add-dashboard-modal.scss',
})
export class AddDashboardModal implements OnInit {
  protected readonly form = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    icon: new FormControl('', Validators.required),
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

  protected onSubmit(): void {
    if (this.form.valid) {
      const { id, name, icon } = this.form.value;
      this.api.addDashboard(id!, name!, icon!).subscribe();
    } else {
      this.form.markAsPristine();
    }
  }
}
