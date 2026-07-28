export interface HeroData {
  badge: string;
  title: string;
  highlightedTitle: string;
  subtitle: string;
  primaryCta: {
    label: string;
    url: string;
  };
  secondaryCta: {
    label: string;
    url: string;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
}

export interface DeliverableItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  type: string;
  description: string;
  isUpcoming: boolean;
  downloadUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
}

export interface NavItem {
  label: string;
  path: string;
  requiresAuth?: boolean;
}

export interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    url: string;
    isExternal?: boolean;
  }>;
}
