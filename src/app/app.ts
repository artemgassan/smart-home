import { Component } from '@angular/core';
import { Layout } from '@/widgets/layout/layout';
import { TuiRoot } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  imports: [Layout, TuiRoot],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
