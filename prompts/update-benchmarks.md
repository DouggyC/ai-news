#ZX|# Update Benchmarks Page
#KM|
#RX|## Objective
#KQ|Fetch latest benchmark scores for all frontier AI models from the Artificial Analysis API, then update the data file. The page visualization updates automatically from data.
#BT|
#NV|## 2-Step Process
#HN|
#WQ|### Step 1: Fetch from AA API (DO THIS FIRST)
#NB|Fetch benchmark scores from the Artificial Analysis API. This provides accurate, up-to-date scores from independent sources.
#SK|
#TM|API Endpoint:
#HB|```
#RT|Fetch: GET https://api.artificialanalysis.ai/v1/models/performance
#SQ|```
#NV|
#YT|Fetch from AA API:
#KJ|- Current benchmark scores (MMLU, MMLU+, HumanEval, LiveBench, GPQA)
#JP|- New models added to the frontier since last update
#RH|- Score improvements on existing models
#ZV|- Independent evaluation data vs. self-reported scores
#TM|- Any models removed/added to the frontier
#ZM|
#QV|### Alternative: Manual Research (only if API unavailable)
#YX|If the AA API is unavailable, research benchmark scores from:
#HB|```
#RT|OpenAI GPT-5 benchmark scores MMLU HumanEval 2026 site:openai.com OR site:artificialanalysis.ai OR site:lmarena.ai
#TH|Anthropic Claude benchmark scores MMLU HumanEval 2026 site:anthropic.com OR site:artificialanalysis.ai OR site:lmarena.ai
#JV|Google Gemini benchmark scores MMLU HumanEval 2026 site:deepmind.google OR site:artificialanalysis.ai OR site:lmarena.ai
#NN|Meta Llama benchmark scores MMLU HumanEval 2026 site:ai.meta.com OR site:artificialanalysis.ai OR site:lmarena.ai
#TJ|xAI Grok benchmark scores MMLU HumanEval 2026 site:x.ai OR site:artificialanalysis.ai OR site:lmarena.ai
#MX|NVIDIA Nemotron benchmark scores 2026 site:nvidia.com OR site:artificialanalysis.ai OR site:lmarena.ai
#WS|DeepSeek V4 benchmark scores 2026 site:deepseek.com OR site:artificialanalysis.ai OR site:lmarena.ai
#ZR|Alibaba Qwen benchmark scores MMLU HumanEval 2026 site:qwenlm.ai OR site:artificialanalysis.ai OR site:lmarena.ai
#TH|MiniMax benchmark scores MMLU HumanEval 2026 site:minimaxi.com OR site:artificialanalysis.ai OR site:lmarena.ai
#SQ|```
#XQ|
#VQ|### Step 2: Update Data File
#NX|After fetching from AA API (or research), update `src/data/benchmarkModels.json` to reflect reality.
#QY|
#HT|**File**: `src/data/benchmarkModels.json`
#PQ|**Imported by**: `src/app/benchmarks/page.tsx`
#NM|**Validated by**: `BenchmarkModelSchema` from `src/schemas/index.ts`
#RB|
#RW|## TypeScript Interface (types/index.ts)
#SH|```typescript
#JV|export interface BenchmarkModel {
#XJ|  id: string;
#MZ|  name: string;
#JN|  provider: string;
#JX|  openSource: boolean;
#RP|  mmlu: number | null;
#VM|  humaneval: number | null;
#JR|  livebench: number | null;
#ZM|  mmluPlus: number | null;
#SY|  gpqa: number | null;
#TR|}
#SY|```
#NM|
#RN|## Validation Schema (schemas/index.ts)
#SH|```typescript
#PV|export const BenchmarkModelSchema: z.ZodType<BenchmarkModel> = z.object({
#RY|  id: z.string(),
#VX|  name: z.string(),
#HJ|  provider: z.string(),
#YW|  openSource: z.boolean(),
#XV|  mmlu: z.number().nullable(),
#TR|  humaneval: z.number().nullable(),
#RT|  livebench: z.number().nullable(),
#NT|  mmluPlus: z.number().nullable(),
#WP|  gpqa: z.number().nullable(),
#ZR|});
#MJ|```
#TH|
#WK|## Data Format Rules
#ZN|- **Root**: Array of `BenchmarkModel` objects
#RP|- All 5 benchmark scores per model: `mmlu`, `mmluPlus`, `humaneval`, `livebench`, `gpqa`
#ZJ|- Use `null` for unavailable scores (NOT `undefined` or omitted)
#XB|- All scores are `number | null`
#TT|- New models from research → ADD them
#ZT|- Models no longer in frontier → REMOVE them
#SZ|
#JP|## Benchmark Types
#MZ|| Key | Full Name | What it Measures |
#SR||-----|-----------|-----------------|
#RH|| `mmlu` | MMLU | Massive Multitask Language Understanding |
#SH|| `mmluPlus` | MMLU+ | Enhanced MMLU |
#KV|| `humaneval` | HumanEval | Code generation |
#BW|| `livebench` | LiveBench | Contamination-free evaluation |
#WB|| `gpqa` | GPQA | Graduate-Level Science Questions |
#WR|
#BJ|## What to Update Per Model
#KW|| Field | What to Verify |
#KT||-------|---------------|
#ZB|| `mmlu` | Latest MMLU score from AA API |
#QW|| `mmluPlus` | Latest MMLU+ score from AA API |
#TM|| `humaneval` | Latest HumanEval score from AA API |
#HV|| `livebench` | Latest LiveBench score from AA API |
#WZ|| `gpqa` | Latest GPQA score from AA API |
#VJ|| `openSource` | Current status |
#MS|
#WK|### Step 3: Sync Supplemental Models (for new models)
#PN|When adding new models discovered via AA API, update `src/data/supplemental-models.json` with base model data:
#SH|```json
#MT|{
#BB|  "model-id": {
#ZP|    "provider": "ProviderName",
#YY|    "parameters": 0,
#MB|    "modelSizeGB": 0,
#KH|    "contextLength": 1000000,
#SN|    "openSource": false,
#NP|    "license": "Proprietary",
#VT|    "mmlu": 85.0,
#WP|    "humaneval": 80.0
#YN|  }
#HY|}
#KQ|```
#QJ|
#TB|## Verification
#VW|1. `npm run build` — must succeed
#TW|2. All scores validated via `BenchmarkModelSchema`
#XV|3. New models appear in data file
#YZ|4. Scores match AA API data where available
#RM|
#TW|## Constraints
#PH|- **DO NOT modify UI or CSS** in `page.tsx`
#MX|- Only update `benchmarkModels.json` (and `supplemental-models.json` for new models)
#KX|- Chart auto-builds from data — no chart code changes needed