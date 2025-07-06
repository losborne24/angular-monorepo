import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Paper } from './paper/paper';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Paper],
})
export class App {
  protected title = 'resume';
}
