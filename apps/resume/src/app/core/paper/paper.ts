import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  signal,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCodepen,
  faGithub,
  faLinkedin,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faLink,
  faEnvelope,
  faPhone,
  faLocationDot,
  faFileArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image-more';
import { CONTACT_DETAILS, LINKS, EXPERIENCE, RIGHT_PANEL } from './paper-data';
import type {
  ContactDetail,
  Links,
  Experience,
  RightPanelSection,
} from './paper-types';

export const Icon = {
  faLinkedin,
  faGlobe,
  faGithub,
  faCodepen,
  faLink,
  faLocationDot,
  faEnvelope,
  faPhone,
  faFileArrowDown,
} as const satisfies Record<string, IconDefinition>;

@Component({
  selector: 'app-paper',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './paper.html',
  styleUrl: './paper.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Paper {
  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;
  copied = signal<boolean>(false);

  icon = Icon;
  contactDetails = CONTACT_DETAILS;
  links = LINKS;
  experience = EXPERIENCE;
  rightPanel = RIGHT_PANEL;
  copyUrlToClipboard() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      this.copied.set(true);

      // Revert tooltip after 1 seconds
      setTimeout(() => {
        this.copied.set(false);
      }, 1000);
    });
  }

  exportToPDF() {
    if (!this.pdfContent) return;

    const original = this.pdfContent.nativeElement;
    const node = original.cloneNode(true) as HTMLElement;

    // Optional: add export-specific class
    node.classList.add('printable');

    const scale = 3;

    // Off-screen clone
    Object.assign(node.style, {
      position: 'absolute',
      top: '-9999px',
      left: '-9999px',
      zIndex: '-1',
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
    });

    this.pdfContent.nativeElement.appendChild(node);

    // Clean up conflicting SVG styles (Font Awesome, etc.)
    const faSvgs = node.querySelectorAll('svg.svg-inline--fa, svg.fa-icon');
    faSvgs.forEach((svg: any) => {
      svg.style.border = 'none';
    });

    // High resolution export scale
    const width = original.offsetWidth;
    const height = original.offsetHeight;
    requestIdleCallback(() => {
      domtoimage
        .toPng(node, {
          width: width * scale,
          height: height * scale,
          style: {
            width: `${width * scale}px`,
            height: `${height * scale}px`,
          },
        })
        .then((dataUrl: string) => {
          this.pdfContent.nativeElement.removeChild(node); // Clean up

          const pdf = new jsPDF();
          const imgProps = pdf.getImageProperties(dataUrl);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

          pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('Leith Osborne Resume.pdf');
        })
        .catch((error: any) => {
          console.error('Error generating PDF:', error);
          this.pdfContent.nativeElement.removeChild(node); // Clean up even on failure
        });
    });
  }
}
