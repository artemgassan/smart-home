import { TuiRoot } from '@taiga-ui/core';
import { Layout } from '@/widgets/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
