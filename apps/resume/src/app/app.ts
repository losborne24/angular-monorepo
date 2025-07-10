import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';
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
  selectedFont = signal<string>('serif');
  scaleFactor = signal<number>(1);
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
    'business',
    'acid',
    'lemonade',
    'night',
    'winter',
    'dim',
    'nord',
    'sunset',
  ];
  fonts = ['serif', 'sans', 'mono'];
  constructor() {
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = window.innerWidth;
    this.scaleFactor.set(Math.min(1, screenWidth / 950));
  }

  setTheme(theme: string): void {
    this.dataTheme.set(theme);
  }
  setFont(font: string): void {
    this.selectedFont.set(font);
  }
}
