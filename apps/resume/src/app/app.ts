import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';
import { Paper } from './core/paper/paper';
import { CommonModule } from '@angular/common';
import { DAISYUI_THEMES } from './constants/daisyui-constants';
import { ThemePicker } from './features/theme-picker/theme-picker';
import { Theme } from './models/daisyui-models';
import { Font } from './models/fonts-models';
import { FontPicker } from './features/font-picker/font-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Paper, CommonModule, FontPicker, ThemePicker],
})
export class App {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = window.innerWidth;
    this.scaleFactor.set(Math.min(1, screenWidth / 950));
  }

  selectedTheme = signal<Theme>('corporate');
  selectedFont = signal<string>('serif');
  scaleFactor = signal<number>(1);

  constructor() {
    this.onResize(null);
  }

  onFontChanged(font: Font): void {
    this.selectedFont.set(font);
  }
  onThemeChanged(theme: Theme): void {
    this.selectedTheme.set(theme);
  }
}
