import { z } from 'zod';
import type {
  NewsCard,
  BenchmarkModel,
  Product,
  ProductRow,
} from '@/types/index';

export const NewsCardSchema: z.ZodType<NewsCard> = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  source: z.string(),
  sourceUrl: z.string(),
  imageUrl: z.string(),
  category: z.enum(['model', 'product', 'tool', 'capability', 'research']),
  publishedAt: z.string(),
});

export const BenchmarkModelSchema: z.ZodType<BenchmarkModel> = z.object({
  id: z.string(),
  name: z.string(),
  provider: z.string(),
  openSource: z.boolean(),
  mmlu: z.number().nullable(),
  humaneval: z.number().nullable(),
  livebench: z.number().nullable(),
  mmluPlus: z.number().nullable(),
  gpqa: z.number().nullable(),
});

export const ProductSchema: z.ZodType<Product> = z.object({
  name: z.string(),
  description: z.string().optional(),
  url: z.string().optional(),
});

export const ProductRowSchema: z.ZodType<ProductRow> = z.object({
  category: z.string(),
  products: z.record(z.string(), ProductSchema.nullable()),
});

export function validateData<T>(
  schema: z.ZodType<T>,
  data: unknown,
  filename: string,
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Validation failed for ${filename}: ${result.error.message}`,
    );
  }
  return result.data;
}
