export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface JobPosition {
  title: string;
  icon: string;
  badge: string;
  badgeColor: string;
  description: string;
  salary: string;
  salaryNote: string;
  requirements: string[];
  location: string;
}

export interface CompanyInfo {
  label: string;
  value: string;
}

export interface CultureImage {
  src: string;
  alt: string;
  caption?: string;
  colSpan: number;
  rowSpan?: number;
}
