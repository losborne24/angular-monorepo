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
};
export interface ContactDetail {
  icon: IconDefinition;
  text: string;
  href?: string;
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
}
