import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CONTACT_DETAILS, LINKS, EXPERIENCE, RIGHT_PANEL } from './paper-data';
import type {
  ContactDetail,
  Links,
  Experience,
  RightPanelSection,
} from './paper-types';
import { Icon } from '@app/constants/icon-constants';
import { ExportPdfDirective } from './export-pdf.directive';

@Component({
  selector: 'app-paper',
  imports: [CommonModule, FontAwesomeModule, ExportPdfDirective],
  templateUrl: './paper.html',
  styleUrl: './paper.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Paper {
  readonly icon = Icon;
  readonly contactDetails = CONTACT_DETAILS;
  readonly links = LINKS;
  readonly experience = EXPERIENCE;
  readonly rightPanel = RIGHT_PANEL;

  private readonly COPIED_RESET_DELAY_MS = 1000;

  copied = signal<boolean>(false);

  async copyUrlToClipboard(): Promise<void> {
    try {
      await navigator.clipboard.writeText(window.location.href);
      this.copied.set(true);

      setTimeout(() => {
        this.copied.set(false);
      }, this.COPIED_RESET_DELAY_MS);
    } catch (error) {
      console.error('Failed to copy URL to clipboard:', error);
    }
  }
}
