export interface ServicePlan {
  title: string;
  features: string[];
  recommended?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface ReferenceItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}