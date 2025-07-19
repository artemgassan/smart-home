import { TuiIcon } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiBlock, TuiSwitch } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-device',
  imports: [TuiBlock, TuiSwitch, TuiIcon, ReactiveFormsModule, TuiHeader],
  templateUrl: './device.html',
  styleUrl: './device.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Device {
  public square = input<boolean>(false);
}
