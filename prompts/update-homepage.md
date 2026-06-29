# Update AI News Homepage Cards

## Objective
Research latest AI news (model releases, product launches, major announcements) from the last 7-14 days, then update the news cards data file. The page displays cards automatically from data.

## 3-Step Process

### Step 1: Research (DO THIS FIRST)
Research recent AI news. **Do NOT assume existing news is still relevant or complete.**

Research queries to execute:
```
OpenAI AI news May 2026 site:openai.com OR site:techcrunch.com OR site:theverge.com
Anthropic AI news May 2026 site:anthropic.com OR site:techcrunch.com OR site:theverge.com
Google AI news May 2026 site:deepmind.google OR site:techcrunch.com OR site:theverge.com
Meta AI news May 2026 site:ai.meta.com OR site:techcrunch.com OR site:theverge.com
xAI Grok news May 2026 site:x.ai OR site:techcrunch.com OR site:theverge.com
NVIDIA AI news May 2026 site:nvidia.com OR site:techcrunch.com OR site:theverge.com
OpenRouter AI news 2026 site:openrouter.ai OR site:artificialanalysis.ai
DeepSeek AI news May 2026 site:deepseek.com OR site:techcrunch.com OR site:theverge.com
Alibaba Qwen AI news May 2026 site:qwenlm.ai OR site:techcrunch.com OR site:theverge.com
MiniMax AI news May 2026 site:minimaxi.com OR site:techcrunch.com OR site:theverge.com
Mistral AI news May 2026 site:mistral.ai OR site:techcrunch.com OR site:theverge.com
```

Discover:
- New model releases from the last 7-14 days
- Major product launches
- Significant capability announcements
- New companies entering the space
- Discontinued models/products

**Do NOT assume any previous news is still recent. Start fresh from research.**

### Step 2: Update Data File
After research, update `src/data/newsCards.json` to reflect current news.

**File**: `src/data/newsCards.json`
**Imported by**: `src/app/page.tsx`
**Validated by**: `NewsCardSchema` from `src/schemas/index.ts` via `validateData()`

## TypeScript Interface (types/index.ts)
```typescript
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
```

## Validation Schema (schemas/index.ts)
```typescript
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
```

## Data Format
```json
[
  {
    "id": "openai-gpt-5-5-pro-2026-05-15",
    "title": "GPT-5.5 Pro Released with 1M Token Context",
    "summary": "OpenAI announces GPT-5.5 Pro featuring improved reasoning and 1M token context window.",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/blog/gpt-5-5-pro",
    "imageUrl": "https://example.com/openai-logo.png",
    "category": "model",
    "publishedAt": "2026-05-15"
  }
]
```

## Card Fields
| Field | Rule |
|-------|------|
| `id` | Unique string, e.g. `'openai-gpt-5-5-pro-2026-05-15'` |
| `title` | Concise announcement title |
| `summary` | 1-2 sentences, key details |
| `source` | Company name (e.g. `'OpenAI'`) |
| `sourceUrl` | Direct link to announcement (HTTP 200 required) |
| `imageUrl` | Link to image (HTTP 200 required) |
| `category` | `model`, `product`, `tool`, `capability`, or `research` |
| `publishedAt` | `YYYY-MM-DD` format |

## Categories
| Value | When to Use |
|-------|-------------|
| `model` | AI model releases/updates |
| `product` | Product launches, AI-powered features |
| `tool` | Developer tools, APIs, IDEs |
| `capability` | Major capability announcements (not a product) |
| `research` | Research papers, benchmarks, milestones |

## Target Companies (Top 15+ frontier AI)
NVIDIA, Microsoft, Google, Amazon, Meta, Oracle, ByteDance, Adobe, Alibaba, OpenAI, Anthropic, xAI, DeepSeek, Mistral, MiniMax, Moonshot, Apple, StabilityAI, Runway, Perplexity, Hugging Face, Zhipu AI, Sakana AI, Inclusion AI, Nex AGI, DeepReinforce, Meituan / LongCat, OpenRouter (routing/gateway covering 50+ providers)

## Card Limits
- **Maximum**: 24 cards
- **Age**: Last 7-14 days preferred
- **Focus**: Model releases, product launches, major announcements

## Image Sources
- **Primary**: Company logos from `data/data/images.json`
- All images must return HTTP 200
- Never include broken image URLs

## What to Update
- Remove old/expired news (older than ~14 days)
- Add new news discovered in research
- Ensure all URLs work (HTTP 200)
- Correct category assignment
- Current `publishedAt` dates

### Step 3: Header Date
Update "Last updated:" in `src/app/page.tsx` to today.

## Verification
1. `npm run build` — must succeed
2. All 24 or fewer cards pass `NewsCardSchema` validation
3. All `sourceUrl` links return HTTP 200
4. All `imageUrl` links return HTTP 200
5. News is from last 7-14 days

## Constraints
- **DO NOT modify UI or CSS** in `page.tsx`
- Only update `newsCards.json` and header date
- Cards validated via `validateData(NewsCardSchema.array(), newsCardsData)`