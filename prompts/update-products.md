# Update Products Page

## Objective
Research latest AI products across all categories, then update the data file. The page displays products automatically from data.

## 3-Step Process

### Step 1: Research (DO THIS FIRST)
Research current AI product landscape. **Do NOT assume existing products are still current.**

Research queries to execute:
```
OpenAI AI products May 2026 site:openai.com OR site:techcrunch.com
Anthropic Claude products May 2026 site:anthropic.com OR site:techcrunch.com
Google AI products May 2026 site:deepmind.google OR site:techcrunch.com
Meta AI products May 2026 site:ai.meta.com OR site:techcrunch.com
xAI Grok products May 2026 site:x.ai OR site:techcrunch.com
NVIDIA AI products May 2026 site:nvidia.com OR site:techcrunch.com
DeepSeek AI products May 2026 site:deepseek.com OR site:techcrunch.com
Cursor AI editor May 2026 site:cursor.com OR site:techcrunch.com
JetBrains AI tools May 2026 site:jetbrains.com OR site:techcrunch.com
Midjourney May 2026 site:midjourney.com OR site:techcrunch.com
Runway AI video May 2026 site:runwayml.com OR site:techcrunch.com
```

Discover:
- New AI products launched since last update
- Discontinued/sunset products
- Current model powering each product (e.g., GPT-5.4, Claude Opus 4.6)
- New categories if any emerge
- Updated capabilities/features

### Step 2: Update Data File
After research, update `src/data/products-page-data.json` to reflect reality.

**File**: `src/data/products-page-data.json`
**Imported by**: `src/app/products/page.tsx`
**Validated by**: `ProductRowSchema` from `src/schemas/index.ts`

## TypeScript Interfaces (types/index.ts)
```typescript
export interface Product {
  name: string;
  description?: string;
  url?: string;
}

export interface ProductRow {
  category: string;
  products: Record<string, Product | null>;
}
```

## Validation Schema (schemas/index.ts)
```typescript
export const ProductSchema: z.ZodType<Product> = z.object({
  name: z.string(),
  description: z.string().optional(),
  url: z.string().optional(),
});

export const ProductRowSchema: z.ZodType<ProductRow> = z.object({
  category: z.string(),
  products: z.record(z.string(), ProductSchema.nullable()),
});
```

## Data Format
```json
[
  {
    "category": "Chat / Assistant",
    "products": {
      "OpenAI": { "name": "ChatGPT", "url": "https://chat.openai.com", "description": "Powered by GPT-5.4" },
      "Anthropic": { "name": "Claude", "url": "https://claude.ai", "description": "Powered by Claude Opus 4.6" }
    }
  }
]
```

## Current Categories (17)
1. Chat / Assistant
2. IDE / Code Editor
3. CLI
4. API / Developer
5. Hosting / Deployment
6. Automation / Orchestration
7. Image Generation
8. Video Generation
9. Voice / TTS
10. Audio / Music
11. Research
12. Sovereign Engine
13. Sovereign Agent
14. Sovereign Orchestrator
15. Enterprise Engine
16. Enterprise Agent
17. Enterprise Orchestrator

## What to Update Per Product
| Field | What to Verify |
|-------|---------------|
| `name` | Current product name |
| `url` | Working URL to product (must return HTTP 200) |
| `description` | Current model powering it (e.g., "Powered by GPT-5.4") |

## Product Updates Rules
- New product from research → ADD to appropriate category
- Discontinued product → REMOVE or set to `null`
- Changed model power → UPDATE description
- Broken URL → FIX or REMOVE product

## Company to Model Mapping (update descriptions with current models)
- OpenAI → GPT-5.4 series
- Anthropic → Claude Opus 4.6 / Sonnet 4.6
- Google → Gemini 3.1 Pro
- Meta → Llama 4
- xAI → Grok 4
- DeepSeek → DeepSeek V3.2
- Mistral → Le Chat / Mistral Large

### Step 3: Provider Colors (if new company)
Update `providerColors` in `src/app/products/page.tsx` if new companies added.

## Verification
1. `npm run build` — must succeed
2. All product URLs return HTTP 200
3. New products appear in data file
4. Discontinued products removed

## Constraints
- **DO NOT modify UI or CSS** in `page.tsx` or components
- Only update `products-page-data.json`
- Products organized by category — maintain structure