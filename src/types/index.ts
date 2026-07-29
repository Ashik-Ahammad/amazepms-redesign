export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  span?: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}
