import type { OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TUI_DARK_MODE, TuiRoot } from '@taiga-ui/core';
import { ServerService } from '@/app/services/server.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  protected readonly darkMode = inject(TUI_DARK_MODE);
  private server = inject(ServerService);

  public ngOnInit(): void {
    this.server.serverPoll();
  }
}
