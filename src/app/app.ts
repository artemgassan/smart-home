import { TuiRoot } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { Layout } from '@/widgets/layout/layout';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
