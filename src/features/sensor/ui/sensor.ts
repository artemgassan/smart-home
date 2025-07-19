import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiBlock, TuiSwitch } from '@taiga-ui/kit';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-sensor',
  imports: [TuiBlock, TuiHeader, TuiIcon, TuiSwitch],
  templateUrl: './sensor.html',
  styleUrl: './sensor.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sensor {
  public square = input<boolean>(false);
}
