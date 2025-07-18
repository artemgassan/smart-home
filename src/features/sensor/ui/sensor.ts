import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sensor',
  imports: [],
  templateUrl: './sensor.html',
  styleUrl: './sensor.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sensor {}
