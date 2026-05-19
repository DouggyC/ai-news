import { NextResponse } from 'next/server';

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

export interface CompareModel {
  id: string;
  name: string;
  provider: string;
  openSource: boolean;
  license: string;
  releaseDate: string;
  parameters: number;
  modelSizeGB: number;
  contextLength: number;
  inputPrice: number;
  outputPrice: number;
  free: boolean;
  mmlu: number;
  mmluPlus: number;
  humaneval: number;
  liveBench: number;
  multimodal: boolean;
  vision: boolean;
  functionCalling: boolean;
  json: boolean;
  search: boolean;
}

// Our model ID → AA slug mapping (we track these specific frontier models)
const MODEL_SLUGS: Record<string, string> = {
  'gpt-5.5': 'openai/gpt-5.5',
  'gpt-5.5-pro': 'openai/gpt-5.5-pro',
  'gpt-5.4-pro': 'openai/gpt-5.4-pro',
  'gpt-5.4-thinking': 'openai/gpt-5.4-thinking',
  'gpt-5.4-mini': 'openai/gpt-5.4-mini',
  'claude-opus-4.7': 'anthropic/claude-opus-4.7',
  'claude-opus-4.6': 'anthropic/claude-opus-4.6',
  'claude-sonnet-4.6': 'anthropic/claude-sonnet-4.6',
  'claude-haiku-4.5': 'anthropic/claude-haiku-4.5',
  'gemini-3.1-pro': 'google/gemini-3.1-pro-preview',
  'gemini-2.5-pro': 'google/gemini-2.5-pro-preview-05-06',
  'gemini-3.1-flash-lite': 'google/gemini-3.1-flash-lite',
  'llama-4-maverick': 'meta/llama-4-maverick-17b-128e-instruct',
  'llama-4-scout': 'meta/llama-4-scout-17b-128e-instruct',
  'llama-4-behemoth': 'meta/llama-4-behemoth',
  'grok-4.3': 'xai/grok-4',
  'grok-4.1-fast': 'xai/grok-4-fast',
  'nemotron-3-super': 'nvidia/nemotron-3-super-120b-a12b',
  'nemotron-3-nano': 'nvidia/nemotron-3-nano-30b-a3b',
  'deepseek-v4-pro': 'deepseek/deepseek-v4-pro',
  'deepseek-v4-flash': 'deepseek/deepseek-v4-flash',
  'qwen3.5': 'qwen/qwen3.5-27b',
  'qwen-3.6-max': 'qwen/qwen3-max',
  'doubao-2.0': 'bytedance-seed/seed-2.0-lite',
  'kimi-2.6': 'moonshotai/kimi-k2.6',
  'minimax-m2.7': 'minimaxai/minimax-m2.7',
  'mistral-medium-3.5': 'mistralai/mistral-medium-3-5',
};

// AA API key
const AA_API_URL = 'https://artificialanalysis.ai/api/v2/data/llms/models';
const AA_API_KEY = process.env.AA;

// Try fetching from AA API
async function fetchAAData(): Promise<Record<string, any>> {
  if (!AA_API_KEY) {
    return {};
  }

  try {
    const response = await fetch(AA_API_URL, {
      headers: {
        'x-api-key': AA_API_KEY,
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return {};
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      const bySlug: Record<string, any> = {};
      for (const model of data) {
        bySlug[model.slug] = model;
      }
      return bySlug;
    }
    return {};
  } catch {
    return {};
  }
}

// Load supplemental data (fields AA doesn't provide - parameters, pricing, capabilities)
async function loadSupplementalData(): Promise<Record<string, any>> {
  const supplemental = await import('@/data/supplemental-models.json');
  return supplemental.default;
}

// Load benchmark data fallback (has mmlu, humaneval, livebench, mmluPlus, gpqa)
async function loadBenchmarkData(): Promise<Record<string, any>[]> {
  const data = await import('@/data/benchmarkModels.json');
  return data.default;
}

export async function GET() {
  try {
    const [aaModelsBySlug, supplemental, benchmarkData] = await Promise.all([
      fetchAAData(),
      loadSupplementalData(),
      loadBenchmarkData(),
    ]);

    // Build benchmark lookup from local JSON
    const benchmarkById: Record<string, any> = {};
    for (const model of benchmarkData) {
      benchmarkById[model.id] = model;
    }

    // Build result models by mapping AA data + supplemental + local benchmark data
    const benchmarkModels: BenchmarkModel[] = [];
    const compareModels: CompareModel[] = [];

    for (const [modelId, aaSlug] of Object.entries(MODEL_SLUGS)) {
      const aaModel = aaModelsBySlug[aaSlug];
      const sup = supplemental[modelId] || {};
      const bm = benchmarkById[modelId] || {};

      // Build model name - AA API canonical name is source of truth, then supplemental, then local benchmark, then derive from id
      const name = aaModel?.name || sup.name || bm.name || modelId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const provider = aaModel?.model_creator?.name || sup.provider || bm.provider || modelId.split('-')[0];

      // Get benchmark scores from local benchmark JSON (which has all scores)
      // Only use AA if it has better data
      const ev = aaModel?.evaluations || {};

      // For benchmark scores, prefer local JSON (has all 5 scores) over AA
      // AA only has mmlu_pro, gpqa, livecodebench
      const mmluPlus = ev.mmlu_pro != null
        ? Math.round(ev.mmlu_pro * 100 * 10) / 10
        : (bm.mmluPlus ?? null);
      const gpqa = ev.gpqa != null
        ? Math.round(ev.gpqa * 100 * 10) / 10
        : (bm.gpqa ?? null);
      const livebench = ev.livecodebench != null
        ? Math.round(ev.livecodebench * 100 * 10) / 10
        : (bm.livebench ?? null);
      const mmlu = bm.mmlu ?? sup.mmlu ?? null;
      const humaneval = bm.humaneval ?? sup.humaneval ?? null;

      // Build benchmark model
      benchmarkModels.push({
        id: modelId,
        name,
        provider,
        openSource: sup.openSource ?? bm.openSource ?? false,
        mmlu,
        humaneval,
        livebench,
        mmluPlus,
        gpqa,
      });

      // Build compare model
      const pricing = aaModel?.pricing || {};
      compareModels.push({
        id: modelId,
        name,
        provider,
        openSource: sup.openSource ?? bm.openSource ?? false,
        license: sup.license || 'Proprietary',
        releaseDate: sup.releaseDate || bm.releaseDate || aaModel?.release_date || 'TBD',
        parameters: sup.parameters || bm.parameters || 0,
        modelSizeGB: sup.modelSizeGB || bm.modelSizeGB || 0,
        contextLength: sup.contextLength || 128000,
        inputPrice: pricing.price_1m_input_tokens || sup.inputPrice || 0,
        outputPrice: pricing.price_1m_output_tokens || sup.outputPrice || 0,
        free: pricing.price_1m_input_tokens === 0 && pricing.price_1m_output_tokens === 0,
        mmlu: mmlu || 0,
        mmluPlus: mmluPlus || 0,
        humaneval: humaneval || 0,
        liveBench: livebench || 0,
        multimodal: sup.multimodal ?? false,
        vision: sup.vision ?? false,
        functionCalling: sup.functionCalling ?? false,
        json: sup.json ?? false,
        search: sup.search ?? false,
      });
    }

    return NextResponse.json({
      benchmarks: benchmarkModels,
      compare: compareModels,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch model data', benchmarks: [], compare: [] },
      { status: 500 }
    );
  }
}