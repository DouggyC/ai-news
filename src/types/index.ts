// Shared TypeScript interfaces for AI News data structures

export interface NewsCard {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  imageUrl: string;
  category: 'model' | 'product' | 'tool' | 'capability' | 'research';
  publishedAt: string;
}

export interface BenchmarkModel {
  id: string;
  name: string;
  provider: string;
  openSource: boolean;
  mmlu: number;
  humaneval: number;
  livebench: number;
  mmluPlus: number;
  gpqa: number;
}

export interface Product {
  name: string;
  description?: string;
  url?: string;
}

export interface ProductRow {
  category: string;
  products: Record<string, Product | null>;
}