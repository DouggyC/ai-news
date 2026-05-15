# Update Compare Page Model Data

## Objective
Research latest frontier AI model releases, then update the data file to reflect reality. The page content updates automatically from data.

## 3-Step Process

### Step 1: Research (DO THIS FIRST)
Research the current landscape for all frontier AI models. **Do NOT assume existing data is correct or complete.**

Research queries to execute:
```
OpenAI GPT-5 models 2026 site:openai.com OR site:artificialanalysis.ai
Anthropic Claude models 2026 site:anthropic.com OR site:lmarena.ai
Google Gemini models 2026 site:deepmind.google OR site:artificialanalysis.ai
Meta Llama models 2026 site:ai.meta.com OR site:lmarena.ai
xAI Grok models 2026 site:x.ai OR site:lmarena.ai
NVIDIA Nemotron models 2026 site:nvidia.com OR site:artificialanalysis.ai
DeepSeek models 2026 site:deepseek.com OR site:artificialanalysis.ai
Alibaba Qwen models 2026 site:qwenlm.ai OR site:lmarena.ai
MiniMax models 2026 site:minimaxi.com OR site:artificialanalysis.ai
ByteDance Doubao models 2026
```

Discover:
- New model releases since last update
- Discontinued/replaced models
- Major version jumps (V3 → V4)
- Open source ↔ proprietary status changes
- Accurate benchmark scores
- Current pricing
- Correct context lengths and parameters

### Step 2: Update Data File
After research, update `src/data/compare-page-data.json` to reflect reality.

**File**: `src/data/compare-page-data.json`
**Imported by**: `src/app/compare/page.tsx` (no validation schema — direct import)

## TypeScript Interface (in page.tsx)
```typescript
export interface FrontierModel {
  id: string;
  name: string;
  provider: string;
  openSource: boolean;
  license?: string;
  releaseDate: string;
  parameters: number;
  modelSizeGB: number;
  contextLength: number;
  inputPrice: number;
  outputPrice: number;
  free: boolean;
  mmlu: number;
  mmluPlus?: number;
  humaneval: number;
  liveBench: number;
  multimodal: boolean;
  vision: boolean;
  functionCalling: boolean;
  json: boolean;
  search: boolean;
}
```

## Data Format Rules
- **Root**: Direct array of `FrontierModel` objects (NOT `{ productData: [...] }`)
- All fields required unless marked `?`
- `parameters`, `modelSizeGB`, `contextLength`: integers
- `inputPrice`, `outputPrice`, `mmlu`, `mmluPlus`, `humaneval`, `liveBench`: numbers
- `openSource`, `free`, `multimodal`, `vision`, `functionCalling`, `json`, `search`: booleans
- `license`: `'Proprietary'` or actual license name (`'Apache 2.0'`, `'MIT'`, etc.)
- `releaseDate`: `'YYYY-MM-DD'` or `'TBD'` for unreleased
- New models discovered in research → ADD them (don't just update existing)
- Models no longer current → REMOVE them

## What to Update Per Model
| Field | What to Verify |
|-------|---------------|
| `releaseDate` | Verify from official source |
| `parameters` | Current confirmed value |
| `contextLength` | Current max context (tokens) |
| `inputPrice` / `outputPrice` | Per 1M tokens, current pricing |
| `free` | `true` if no API cost |
| `mmlu`, `mmluPlus`, `humaneval`, `liveBench` | Latest benchmark scores |
| `multimodal`, `vision`, `functionCalling`, `json`, `search` | Current capabilities |
| `license` | `'Proprietary'` or actual open source license |
| `modelSizeGB` | VRAM requirement |

### Step 3: Update Page Header Date
Update "Last updated:" in `src/app/compare/page.tsx` to today (e.g., `'May 15, 2026'`).

## Existing Provider Colors (sync if new provider added)
```typescript
const providerColors: Record<string, string> = {
  OpenAI: '#4ade80',
  Anthropic: '#fb923c',
  Google: '#60a5fa',
  xAI: 'rgba(255, 255, 255, 0.7)',
  Meta: '#c084fc',
  DeepSeek: '#f87171',
  Alibaba: '#fbbf24',
  Mistral: '#22d3ee',
  NVIDIA: '#76b900',
  MiniMax: '#818cf8',
  Moonshot: '#c084fc',
};
```

## Verification
1. `npm run build` — must succeed
2. New models from research appear in data file
3. Removed models no longer in data file
4. All URLs return HTTP 200

## Constraints
- **DO NOT modify UI or CSS** in `page.tsx`
- Only update data in `compare-page-data.json` and date in page header