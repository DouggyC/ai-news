#ZQ|# Update Compare Page Model Data
#KM|
#RX|## Objective
#HK|Fetch latest frontier AI model data from the Artificial Analysis API, then update the data file to reflect reality. The page content updates automatically from data.
#BT|
#NV|## 2-Step Process
#HN|
#WQ|### Step 1: Fetch from AA API (DO THIS FIRST)
#VN|Fetch model data from the Artificial Analysis API. This provides accurate, up-to-date information on all frontier models.
#SK|
#TM|API Endpoint:
#HB|```
#MS|Fetch: GET https://api.artificialanalysis.ai/v1/models/
#WV|```
#KW|
#YT|Fetch from AA API:
#QH|- Model releases since last update
#NP|- Discontinued/replaced models
#HW|- Major version jumps (V3 → V4)
#QX|- Open source ↔ proprietary status changes
#QQ|- Accurate benchmark scores
#NK|- Current pricing
#MH|- Correct context lengths and parameters
#QY|
#QV|### Alternative: Manual Research (only if API unavailable)
#YX|If the AA API is unavailable, research from:
#HB|```
#MS|OpenAI GPT-5 models 2026 site:openai.com OR site:artificialanalysis.ai
#WV|Anthropic Claude models 2026 site:anthropic.com OR site:lmarena.ai
#TK|Google Gemini models 2026 site:deepmind.google OR site:artificialanalysis.ai
#PR|Meta Llama models 2026 site:ai.meta.com OR site:lmarena.ai
#TX|xAI Grok models 2026 site:x.ai OR site:lmarena.ai
#BS|NVIDIA Nemotron models 2026 site:nvidia.com OR site:artificialanalysis.ai
#XN|DeepSeek models 2026 site:deepseek.com OR site:artificialanalysis.ai
#BN|Alibaba Qwen models 2026 site:qwenlm.ai OR site:artificialanalysis.ai
#RJ|MiniMax models 2026 site:minimaxi.com OR site:artificialanalysis.ai
#BR|ByteDance Doubao models 2026
#ZX|```
#XQ|
#VQ|### Step 2: Update Data File
#TZ|After fetching from AA API (or research), update `src/data/compare-page-data.json` to reflect reality.
#MV|
#TS|**File**: `src/data/compare-page-data.json`
#TJ|**Imported by**: `src/app/compare/page.tsx` (no validation schema — direct import)
#MS|
#QB|## TypeScript Interface (in page.tsx)
#SH|```typescript
#WX|export interface FrontierModel {
#XJ|  id: string;
#MZ|  name: string;
#JN|  provider: string;
#JX|  openSource: boolean;
#NY|  license?: string;
#MP|  releaseDate: string;
#KB|  parameters: number;
#NM|  modelSizeGB: number;
#RV|  contextLength: number;
#PB|  inputPrice: number;
#QN|  outputPrice: number;
#HR|  free: boolean;
#RB|  mmlu: number;
#JP|  mmluPlus?: number;
#NZ|  humaneval: number;
#ZW|  liveBench: number;
#TP|  multimodal: boolean;
#NS|  vision: boolean;
#MQ|  functionCalling: boolean;
#PH|  json: boolean;
#ZN|  search: boolean;
#YP|}
#PV|```
#JQ|
#WK|## Data Format Rules
#XW|- **Root**: Direct array of `FrontierModel` objects (NOT `{ productData: [...] }`)
#YV|- All fields required unless marked `?`
#KX|- `parameters`, `modelSizeGB`, `contextLength`: integers
#SQ|- `inputPrice`, `outputPrice`, `mmlu`, `mmluPlus`, `humaneval`, `liveBench`: numbers
#TN|- `openSource`, `free`, `multimodal`, `vision`, `functionCalling`, `json`, `search`: booleans
#HQ|- `license`: `'Proprietary'` or actual license name (`'Apache 2.0'`, `'MIT'`, etc.)
#TW|- `releaseDate`: `'YYYY-MM-DD'` or `'TBD'` for unreleased
#YV|- New models discovered via AA API → ADD them (don't just update existing)
#PP|- Models no longer current → REMOVE them
#VB|
#BJ|## What to Update Per Model
#KW|| Field | What to Verify |
#TT||-------|---------------|
#MJ|| `releaseDate` | From AA API or official source |
#XN|| `parameters` | Current confirmed value from AA API |
#ZS|| `contextLength` | Current max context (tokens) from AA API |
#YN|| `inputPrice` / `outputPrice` | Per 1M tokens, from AA API |
#RX|| `free` | `true` if no API cost |
#KV|| `mmlu`, `mmluPlus`, `humaneval`, `liveBench` | Latest benchmark scores from AA API |
#YM|| `multimodal`, `vision`, `functionCalling`, `json`, `search` | Current capabilities |
#YK|| `license` | `'Proprietary'` or actual open source license |
#RR|| `modelSizeGB` | VRAM requirement |
#QT|
#YM|### Step 3: Update Page Header Date
#HS|Update "Last updated:" in `src/app/compare/page.tsx` to today (e.g., `'May 26, 2026'`).
#BX|
#YM|### Step 4: Sync Supplemental Models (for new models)
#BC|When adding new models discovered via AA API, update `src/data/supplemental-models.json` with base model data:
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
#MW|## Existing Provider Colors (sync if new provider added)
#SH|```typescript
#MT|const providerColors: Record<string, string> = {
#BB|  OpenAI: '#4ade80',
#ZP|  Anthropic: '#fb923c',
#YY|  Google: '#60a5fa',
#MB|  xAI: 'rgba(255, 255, 255, 0.7)',
#KH|  Meta: '#c084fc',
#SN|  DeepSeek: '#f87171',
#NP|  Alibaba: '#fbbf24',
#VT|  Mistral: '#22d3ee',
#WP|  NVIDIA: '#76b900',
#YN|  MiniMax: '#818cf8',
#HY|  Moonshot: '#c084fc',
#NV|};
#NZ|```
#WY|
#TB|## Verification
#VW|1. `npm run build` — must succeed
#XN|2. New models from AA API appear in data file
#MY|3. Removed models no longer in data file
#BT|4. All URLs return HTTP 200
#BK|
#TW|## Constraints
#PH|- **DO NOT modify UI or CSS** in `page.tsx`
#XZ|- Only update data in `compare-page-data.json` and date in page header
#KX|- For new models, also update `supplemental-models.json`