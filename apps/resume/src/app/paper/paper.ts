import { ChangeDetectionStrategy, Component } from '@angular/core';
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
} from '@fortawesome/free-solid-svg-icons';

export const Icon = {
  faLinkedin,
  faGlobe,
  faGithub,
  faCodepen,
  faLink,
  faLocationDot,
  faEnvelope,
  faPhone,
} as const satisfies Record<string, IconDefinition>;

export interface ContactDetail {
  icon: IconDefinition;
  text: string;
  href?: string;
}
export interface Links {
  icon: IconDefinition;
  href?: string;
  link?: string;
}

@Component({
  selector: 'app-paper',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './paper.html',
  styleUrl: './paper.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Paper {
  icon = Icon;
  contactDetails: ContactDetail[] = [
    { icon: Icon.faLocationDot, text: 'Surrey, England' },
    { icon: Icon.faPhone, text: '+44 7494 391933' },
    {
      icon: Icon.faEnvelope,
      text: 'osborneleith@gmail.com',
      href: 'mailto:osborneleith@gmail.com',
    },
  ];
  links: Links[] = [
    { icon: Icon.faLinkedin },
    { icon: Icon.faGithub },
    { icon: Icon.faGlobe },
    { icon: Icon.faCodepen },
  ];
}
