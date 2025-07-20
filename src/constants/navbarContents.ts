export interface NavigationItem {
  label: string;
  isLast?: boolean;
  isHeader?: boolean;
}

export interface NavigationSection {
  label: string;
  data: NavigationItem[];
}

export const NAVBAR_CONTENT: NavigationSection[] = [
  {
    label: 'Why Spring',
    data: [
      { label: 'Overview' },
      { label: 'Generative AI' },
      { label: 'Microservices' },
      { label: 'Reactive' },
      { label: 'Event Driven' },
      { label: 'Cloud' },
      { label: 'Web Applications' },
      { label: 'Serverless' },
      { label: 'Batch' },
    ],
  },
  {
    label: 'Learn',
    data: [
      { label: 'Overview' },
      { label: 'Quickstart' },
      { label: 'Guides' },
      { label: 'Blog' },
      { label: 'Security Advisors' },
    ],
  },
  {
    label: 'Projects',
    data: [
      { label: 'Overview' },
      { label: 'Spring Boot' },
      { label: 'Spring Framework' },
      { label: 'Spring Cloud' },
      { label: 'Spring Cloud Data Flow' },
      { label: 'Spring Data' },
      { label: 'Spring Integration' },
      { label: 'Spring Batch' },
      { label: 'Spring Security' },
      { label: 'Spring AI', isLast: true },
      { label: 'Release Calendar' },
      { label: 'Security advisories', isLast: true },
      { label: 'DEVELOPMENT TOOLS', isHeader: true },
      { label: 'Spring Tools' },
      { label: 'Spring Initializr' },
    ],
  },
  {
    label: 'Academy',
    data: [{ label: 'Courses' }, { label: 'Get Certified' }],
  },
  {
    label: 'Community',
    data: [{ label: 'Overview' }, { label: 'Events' }, { label: 'Authors' }],
  },
  { label: 'Tanzu Spring', data: [] },
];
