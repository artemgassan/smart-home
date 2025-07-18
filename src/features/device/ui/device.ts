import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-device',
  imports: [],
  templateUrl: './device.html',
  styleUrl: './device.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Device {}
