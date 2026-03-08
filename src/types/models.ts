// Types for AI Model tracking

export interface AIModel {
  id: string;
  name: string;
  author: string;
  lastModified: string;
  createdAt: string;
  downloads: number;
  likes: number;
  tags: string[];
  pipeline_tag?: string;
  library_name?: string;
  private: boolean;
  gated: boolean;
  // Additional computed/extended fields
  parameters?: number;
  modelSize?: string; // e.g., "7B", "70B", "405B"
  benchmarks?: {
    mmlu?: number;
    humaneval?: number;
    hellaswag?: number;
  };
  researchPaper?: string;
  contextLength?: number;
  license?: string;
}

export interface ModelFilters {
  search: string;
  sortBy: 'downloads' | 'likes' | 'newest';
  pipeline?: string;
  tags?: string[];
}

export interface DashboardStats {
  totalModels: number;
  totalDownloads: number;
  topModels: number;
  newThisWeek: number;
}
