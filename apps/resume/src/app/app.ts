import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Paper } from './paper/paper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Paper, CommonModule],
})
export class App {
  protected title = 'resume';
  dataTheme = signal<string>('corporate');

  themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'pastel',
    'fantasy',
    'wireframe',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'winter',
    'dim',
    'nord',
    'sunset',
  ];
  setTheme(theme: string) {
    this.dataTheme.set(theme);
  }
}
