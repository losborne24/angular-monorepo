import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
  dataTheme = signal<string>('corporate');
  setTheme(theme: string) {
    this.dataTheme.set(theme);
  }
}
