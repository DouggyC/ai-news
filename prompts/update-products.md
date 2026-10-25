# Update Products Page

## Objective
Research latest AI products across all categories, then update the data file. The page displays products automatically from data.

## 3-Step Process

### Step 1: Research (DO THIS FIRST)
Research current AI product landscape. **Do NOT assume existing products are still current.**

Research queries to execute:
```
OpenAI AI products September 2026 site:openai.com OR site:techcrunch.com
Anthropic Claude products September 2026 site:anthropic.com OR site:techcrunch.com
Google AI products September 2026 site:deepmind.google OR site:techcrunch.com
Meta AI products September 2026 site:ai.meta.com OR site:techcrunch.com
xAI Grok products September 2026 site:x.ai OR site:techcrunch.com
NVIDIA AI products September 2026 site:nvidia.com OR site:techcrunch.com
OpenRouter AI products 2026 site:openrouter.ai OR site:artificialanalysis.ai
DeepSeek AI products September 2026 site:deepseek.com OR site:techcrunch.com
Cursor AI editor September 2026 site:cursor.com OR site:techcrunch.com
JetBrains AI tools September 2026 site:jetbrains.com OR site:techcrunch.com
Midjourney September 2026 site:midjourney.com OR site:techcrunch.com
Runway AI video September 2026 site:runwayml.com OR site:techcrunch.com
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
- **Routing/distribution note**: OpenRouter (https://openrouter.ai) is a unified LLM router exposing 200+ models from 50+ providers behind a single OpenAI-compatible API. When a frontier model is also distributed via OpenRouter, note "Also on OpenRouter" in the description (already done for several models).
- Mistral → Le Chat / Mistral Large

### Step 3: Company Badge Colors (if new company)
The products page has **no** `providerColors` map. Company colors live in the
`getCompanyBadgeStyle()` function in `src/components/ProductTable.tsx` — a
`Record<string, string>` of inline style strings keyed by company name. When a
new company (or sub-product key) is added to `products-page-data.json`, add a
matching entry there, e.g.:

```
Canva: 'backgroundColor:rgba(125, 42, 232, 0.2);color:#c084fc;borderColor:rgba(125, 42, 232, 0.3)',
```

Sub-product keys of an existing company (e.g. `Anthropic-Duet`) get their own
entry too, usually a lighter tint of the parent's color. If a company has no
entry, the badge falls back to the default style and will look unstyled.

## Verification
1. `npm run build` — must succeed
2. All product URLs return HTTP 200
3. New products appear in data file
4. Discontinued products removed

## Constraints
- **DO NOT modify UI or CSS** in `page.tsx` or components
- Only update `products-page-data.json`
- Products organized by category — maintain structure

## Honesty Rules (MANDATORY)
- **NO FABRICATION**: only include data points (URLs, summaries, benchmark scores, prices) that you actually found via web search or AA API and verified. Never invent URLs, scores, or descriptions to make the data look fresher.
- **Skip if no verified delta**: if research finds no verifiable changes, leave the existing data file untouched. Report "no verified updates" and exit. DO NOT bump the header date or rotate data speculatively — the date stamp alone misleads readers about what was actually changed.
- **Date window**: queries target the most recent period from today (update the month in this prompt file each run if you keep it).


---

## Preventing Data/Table Mismatch (CRITICAL)

This project has TWO places where company names are defined:
1. **`src/data/products-page-data.json`** — product keys per category (e.g., `"Vellum": {...}`)
2. **`src/components/ProductTable.tsx`** — `companyOrder` array (lines 10-70) controls column display

**PROBLEM**: If you add `"Vellum"` to JSON but forget to add `"Vellum"` to `companyOrder`, it WON'T appear in the table.

**SOLUTION**: Follow this rule EXACTLY:

### Rule: Dual Update Required
When adding a NEW company to ANY category in the JSON:
1. Add the product entry to `products-page-data.json`
2. IMMEDIATELY add the company name to `companyOrder` in `ProductTable.tsx` (keep alphabetical order)
3. IMMEDIATELY add a color entry to `getCompanyBadgeStyle()` in `ProductTable.tsx`

### Rule: Key Consistency
Company keys in JSON MUST match exactly how they appear in `companyOrder`. Use canonical names:
- `"Vellum"` not `"vellum"` or `"Vellum AI"`
- `"LangGraph-Cloud"` for hosted LangSmith (distinguish from `"LangGraph"` base)
- `"Amazon"` for Amazon general brand (Q, Bedrock, etc.)
- `"NVIDIA-Vera"` for Vera CPU (distinguish from `"NVIDIA"`)

### Rule: Removing Companies
When removing a company from ALL categories in JSON:
1. Remove product entries from `products-page-data.json`
2. REMOVE the company name from `companyOrder` in `ProductTable.tsx`
3. REMOVE the color entry from `getCompanyBadgeStyle()` in `ProductTable.tsx`

### Verification Step
Run this check AFTER every update — if a company appears in JSON but NOT as a table column header, it's misaligned.

### `companyOrder` Reference (LIVE — read from source)
**DO NOT** rely on a hand-maintained list — the actual `companyOrder` array in `src/components/ProductTable.tsx` evolves faster than this prompt. Before any update:

1. Read the current `companyOrder` array from `src/components/ProductTable.tsx` (it starts at line ~11 with `const companyOrder = [`).
2. Diff against the company keys present in `src/data/products-page-data.json`.
3. For each NEW company key in JSON but NOT in `companyOrder`: add it to `companyOrder` (preserve the existing ordering style — this file currently mixes parent-company and sub-product keys; match that pattern) AND add a color entry to `getCompanyBadgeStyle()` in the same file.
4. For each company REMOVED from all JSON categories: remove from `companyOrder` AND `getCompanyBadgeStyle()`.

The previous hand-maintained reference list in this prompt is **deprecated** and must not be used.

Companies in JSON but NOT in companyOrder (CHECK EACH RUN):
- **VERIFY at runtime** by running the live-read directive above — this hand-maintained list goes stale immediately. Do not trust it.

---

## Company Order (LIVE)
The actual `companyOrder` in `src/components/ProductTable.tsx` mixes parent-company keys (e.g., `'NVIDIA'`, `'Microsoft'`) with sub-product keys (e.g., `'Microsoft-Code'`, `'Google-Gemini-Robotics-2'`). **The current ordering is NOT a strict market-value sort** — it has been edited many times as the product landscape shifted. Treat the live array as authoritative; the previous "ordered by market value" framing is deprecated.

When adding a new product:
- If the parent company exists in `companyOrder`, decide based on how the file currently treats sub-products of that parent (look at existing `'Microsoft-*'`, `'Google-*'`, `'OpenAI-*'`, `'Anthropic-*'` entries for the pattern).
- If neither parent nor sub-product key exists, add the parent company to `companyOrder` and add a color to `getCompanyBadgeStyle()`. Sub-product keys go alongside.

## Constraints
- **DO NOT modify UI or CSS** in `page.tsx`
- Update BOTH `products-page-data.json` AND `companyOrder`/`getCompanyBadgeStyle` in ProductTable.tsx
- Products organized by category — maintain structure