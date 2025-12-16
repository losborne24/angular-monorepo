import { Icon } from './paper';
import type {
  ContactDetail,
  Links,
  Experience,
  RightPanelSection,
} from './paper-types';

export const CONTACT_DETAILS: ContactDetail[] = [
  { icon: Icon.faLocationDot, text: 'Surrey, England' },
  { icon: Icon.faPhone, text: '+44 7494 391933' },
  {
    icon: Icon.faEnvelope,
    text: 'osborneleith@gmail.com',
    href: 'mailto:osborneleith@gmail.com',
  },
];

export const LINKS: Links[] = [
  {
    icon: Icon.faLinkedin,
    href: 'https://www.linkedin.com/in/leith-osborne-5946161b3',
  },
  { icon: Icon.faGithub, href: 'https://github.com/losborne24' },
  { icon: Icon.faGlobe, href: 'https://losborne24.github.io' },
];

export const EXPERIENCE: Experience[] = [
  {
    companyName: 'OpenGamma',
    positions: [
      {
        position: 'Full-Stack Engineer',
        period: 'JAN 2025 - PRESENT',
        techStack: [
          'Angular',
          'Java',
          'PostgreSQL',
          'TypeScript',
          'Node',
          'AWS',
        ],
        contributions: [
          {
            category: 'Full UI Ownership',
            contribution:
              "Backbone of a lean 1.5–3 developer team, holding complete UI ownership of the company's flagship fintech SaaS product generating multi-million ARR.",
          },
          {
            category: 'BI Integration',
            contribution:
              'Built dynamic filter support for embedded AWS QuickSight dashboards, integrating date pickers and calculation logic with API-driven parameterisation for interactive analytics.',
          },
          {
            category: 'Full-Stack Development',
            contribution:
              'Led full-stack development of a dynamic UI profiles system, allowing non-engineering teams to configure tenant-specific profiles, modules, menus, and dashboards via static data.',
          },
        ],
      },
      {
        position: 'UI Developer',
        period: 'APR 2022 - JAN 2025',
        techStack: [
          'Angular',
          'TypeScript',
          'RxJS',
          'AG Grid',
          'Figma',
          'Node',
          'AWS',
        ],
        contributions: [
          {
            category: 'Product Development',
            contribution:
              'Contributed to the design and delivery of client-facing risk tools, including a portfolio editor and on-demand calculation runner, allowing users to perform real-time stressed margin analysis on modified portfolios.',
          },
          {
            category: 'Configuration & Settings Management',
            contribution:
              'Built a dynamic, tenant-level settings interface using editable AG Grid tables to manage complex business and system configurations, incorporating custom field components, validations, attributes, and integrated review/approval workflows.',
          },
          {
            category: 'Cloud Hosting',
            contribution:
              "Delivered a scalable, static cloud hosting solution for the Angular-based Treasury SPA using Amazon S3 and CloudFront, facilitating its evolution into the organization's core platform.",
          },
          {
            category: 'Design Systems',
            contribution:
              'Developed a Figma component library derived from our reusable, stateless UI components, promoting design-development consistency and streamlining mockup creation.',
          },
        ],
      },
    ],
  },
  {
    companyName: 'Policy Monitor Limited',
    positions: [
      {
        position: 'Software Engineer',
        period: 'OCT 2020 - APR 2022',
        techStack: [
          'Angular',
          'Java',
          'MySQL',
          'TypeScript',
          'RxJS',
          'Node',
          'AWS',
        ],
        contributions: [
          {
            category: 'Frontend Modernisation',
            contribution:
              'Played a key role in developing a B2B cybersecurity policy monitoring SaaS product; migrated legacy Dojo.js codebase to Angular 11 using NGXS, RxJS, Angular Material, and Storybook to improve scalability, maintainability, and UI consistency.',
          },
          {
            category: 'API Integration',
            contribution:
              'Integrated frontend components with a Java-based backend API and external platforms including Xero and GoCardless for accounting and payment processing functionality.',
          },
          {
            category: 'DevOps / CI/CD',
            contribution:
              'Upgraded AWS CloudFormation templates for automated, repeatable cloud provisioning and streamlined Bitbucket Pipelines to optimize CI/CD workflows, reducing release cycle time and enhancing deployment reliability.',
          },
        ],
      },
    ],
  },
];

export const RIGHT_PANEL: RightPanelSection[] = [
  {
    header: 'ACHIEVEMENTS',
    items: [
      '2022 First Year Impact Award, OpenGamma',
      '2019/20 Durham University Badminton Club 2nd Team Captain',
      '2018/19 Durham University Badminton Club Vice President',
      '2015/16 Gold Duke Of Edinburgh Award',
      '2014/15 Silver Duke Of Edinburgh Award',
      '2013/14 Bronze Duke Of Edinburgh Award',
    ],
  },
  {
    header: 'CERTIFICATIONS',
    items: [
      'AWS Certified Developer - Associate',
      'AWS Certified Cloud Practitioner',
      'The Open Group Certified: TOGAF® 9 Certified',
    ],
  },
  {
    header: 'VOLUNTEERING',
    items: [
      '2017 - 2020 Badminton Coach, Durham University Badminton Club',
      '2017 Badminton Coach, Dorking Badminton Club',
    ],
  },
];
