# Update Benchmarks Page

## Objective
Research latest benchmark scores for all frontier AI models, then update the data file. The page visualization updates automatically from data.

## 3-Step Process

### Step 1: Research (DO THIS FIRST)
Research current benchmark scores from independent sources. **Do NOT assume existing scores are still current.**

Research queries to execute:
```
OpenAI GPT-5 benchmark scores MMLU HumanEval 2026 site:openai.com OR site:artificialanalysis.ai OR site:lmarena.ai
Anthropic Claude benchmark scores MMLU HumanEval 2026 site:anthropic.com OR site:artificialanalysis.ai OR site:lmarena.ai
Google Gemini benchmark scores MMLU HumanEval 2026 site:deepmind.google OR site:artificialanalysis.ai OR site:lmarena.ai
Meta Llama benchmark scores MMLU HumanEval 2026 site:ai.meta.com OR site:artificialanalysis.ai OR site:lmarena.ai
xAI Grok benchmark scores MMLU HumanEval 2026 site:x.ai OR site:artificialanalysis.ai OR site:lmarena.ai
NVIDIA Nemotron benchmark scores 2026 site:nvidia.com OR site:artificialanalysis.ai OR site:lmarena.ai
DeepSeek V4 benchmark scores 2026 site:deepseek.com OR site:artificialanalysis.ai OR site:lmarena.ai
Alibaba Qwen benchmark scores MMLU HumanEval 2026 site:qwenlm.ai OR site:artificialanalysis.ai OR site:lmarena.ai
MiniMax benchmark scores MMLU HumanEval 2026 site:minimaxi.com OR site:artificialanalysis.ai OR site:lmarena.ai
```

Discover:
- New benchmark scores released since last update
- New models with benchmark data
- Score improvements on existing models
- Independent evaluation sources vs. self-reported scores
- Any models removed/added to the frontier

### Step 2: Update Data File
After research, update `src/data/benchmarkModels.json` to reflect reality.

**File**: `src/data/benchmarkModels.json`
**Imported by**: `src/app/benchmarks/page.tsx`
**Validated by**: `BenchmarkModelSchema` from `src/schemas/index.ts`

## TypeScript Interface (types/index.ts)
```typescript
export interface BenchmarkModel {
  id: string;
  name: string;
  provider: string;
  openSource: boolean;
  mmlu: number | null;
  humaneval: number | null;
  livebench: number | null;
  mmluPlus: number | null;
  gpqa: number | null;
}
```

## Validation Schema (schemas/index.ts)
```typescript
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
```

## Data Format Rules
- **Root**: Array of `BenchmarkModel` objects
- All 5 benchmark scores per model: `mmlu`, `mmluPlus`, `humaneval`, `livebench`, `gpqa`
- Use `null` for unavailable scores (NOT `undefined` or omitted)
- All scores are `number | null`
- New models from research → ADD them
- Models no longer in frontier → REMOVE them

## Benchmark Types
| Key | Full Name | What it Measures |
|-----|-----------|-----------------|
| `mmlu` | MMLU | Massive Multitask Language Understanding |
| `mmluPlus` | MMLU+ | Enhanced MMLU |
| `humaneval` | HumanEval | Code generation |
| `livebench` | LiveBench | Contamination-free evaluation |
| `gpqa` | GPQA | Graduate-Level Science Questions |

## What to Update Per Model
| Field | What to Verify |
|-------|---------------|
| `mmlu` | Latest MMLU score |
| `mmluPlus` | Latest MMLU+ score |
| `humaneval` | Latest HumanEval score |
| `livebench` | Latest LiveBench score |
| `gpqa` | Latest GPQA score |
| `openSource` | Current status |

### Step 3: Provider Colors (if new provider)
Update `providerColors` in `src/app/benchmarks/page.tsx` if new providers added:
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
2. All scores validated via `BenchmarkModelSchema`
3. New models appear in data file
4. Scores match independent sources where available

## Constraints
- **DO NOT modify UI or CSS** in `page.tsx`
- Only update `benchmarkModels.json`
- Chart auto-builds from data — no chart code changes needed