export interface ServiceItem {
  id: string;
  tag: string;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  deliverables: string[];
  technologies: string[];
}

export interface MethodologyStep {
  number: string;
  title: string;
  summary: string;
  details: string;
  duration: string;
  deliverables: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  ctaText: string;
  features: string[];
  metricsPreview: {
    label: string;
    value: string;
  }[];
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}

export interface DiagnosticFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  primaryChallenge: string;
  teamSize: string;
  currentBottleneck: string;
  preferredContact: 'whatsapp' | 'email' | 'call';
}
