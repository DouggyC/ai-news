'use client';

import { formatNumber } from '@/lib/utils';

interface FrontierModel {
  id: string;
  name: string;
  provider: string;
  openSource: boolean;
  releaseDate: string;
  parameters: number;
  modelSizeGB: number;
  contextLength: number;
  inputPrice: number;
  outputPrice: number;
  free: boolean;
  mmlu: number;
  humaneval: number;
  mmluPlus: number;
  liveBench: number;
  multimodal: boolean;
  vision: boolean;
  functionCalling: boolean;
  json: boolean;
  search: boolean;
}

const frontierModels: FrontierModel[] = [
  {
    id: 'gpt-5.4-thinking',
    name: 'GPT-5.4 Thinking',
    provider: 'OpenAI',
    openSource: false,
    releaseDate: '2026-03-05',
    parameters: 2_000_000_000_000,
    modelSizeGB: 1500,
    contextLength: 1000000,
    inputPrice: 90,
    outputPrice: 180,
    free: false,
    mmlu: 87.2,
    humaneval: 73.8,
    mmluPlus: 88.5,
    liveBench: 63.5,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: true,
  },
  {
    id: 'gpt-5.4-pro',
    name: 'GPT-5.4 Pro',
    provider: 'OpenAI',
    openSource: false,
    releaseDate: '2026-03-05',
    parameters: 2_000_000_000_000,
    modelSizeGB: 1500,
    contextLength: 1000000,
    inputPrice: 150,
    outputPrice: 300,
    free: false,
    mmlu: 88.9,
    humaneval: 75.2,
    mmluPlus: 90.1,
    liveBench: 66.8,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: true,
  },
  {
    id: 'gpt-5.3-instant',
    name: 'GPT-5.3 Instant',
    provider: 'OpenAI',
    openSource: false,
    releaseDate: '2026-03-03',
    parameters: 180_000_000_000,
    modelSizeGB: 350,
    contextLength: 200000,
    inputPrice: 1.25,
    outputPrice: 5,
    free: false,
    mmlu: 84.5,
    humaneval: 86.4,
    mmluPlus: 86.2,
    liveBench: 52.3,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: true,
  },
  {
    id: 'gpt-5.3-codex',
    name: 'GPT-5.3 Codex',
    provider: 'OpenAI',
    openSource: false,
    releaseDate: '2026-02-24',
    parameters: 180_000_000_000,
    modelSizeGB: 350,
    contextLength: 128000,
    inputPrice: 2.5,
    outputPrice: 10,
    free: false,
    mmlu: 82.1,
    humaneval: 94.5,
    mmluPlus: 84.8,
    liveBench: 58.2,
    multimodal: false,
    vision: false,
    functionCalling: true,
    json: true,
    search: false,
  },
  {
    id: 'gemini-3.1-pro',
    name: 'Gemini 3.1 Pro',
    provider: 'Google',
    openSource: false,
    releaseDate: '2026-02-19',
    parameters: 200_000_000_000,
    modelSizeGB: 400,
    contextLength: 2000000,
    inputPrice: 1.5,
    outputPrice: 6,
    free: false,
    mmlu: 87.8,
    humaneval: 86.2,
    mmluPlus: 89.1,
    liveBench: 58.9,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: true,
  },
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    openSource: false,
    releaseDate: '2024-12-10',
    parameters: 156_000_000_000,
    modelSizeGB: 320,
    contextLength: 2000000,
    inputPrice: 1.25,
    outputPrice: 5,
    free: false,
    mmlu: 85.9,
    humaneval: 84.1,
    mmluPlus: 87.2,
    liveBench: 48.5,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: true,
  },
  {
    id: 'claude-opus-4.6',
    name: 'Claude Opus 4.6',
    provider: 'Anthropic',
    openSource: false,
    releaseDate: '2026-02-05',
    parameters: 200_000_000_000,
    modelSizeGB: 420,
    contextLength: 200000,
    inputPrice: 15,
    outputPrice: 75,
    free: false,
    mmlu: 89.2,
    humaneval: 94.5,
    mmluPlus: 91.0,
    liveBench: 72.4,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: true,
  },
  {
    id: 'claude-sonnet-4.6',
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    openSource: false,
    releaseDate: '2026-02-17',
    parameters: 175_000_000_000,
    modelSizeGB: 360,
    contextLength: 200000,
    inputPrice: 3,
    outputPrice: 15,
    free: false,
    mmlu: 87.5,
    humaneval: 92.8,
    mmluPlus: 89.7,
    liveBench: 66.1,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: true,
  },
  {
    id: 'llama-4-scout',
    name: 'Llama 4 Scout',
    provider: 'Meta',
    openSource: true,
    releaseDate: '2025-04-05',
    parameters: 109_000_000_000,
    modelSizeGB: 218,
    contextLength: 10000000,
    inputPrice: 0,
    outputPrice: 0,
    free: true,
    mmlu: 87.3,
    humaneval: 86.4,
    mmluPlus: 88.9,
    liveBench: 54.8,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: false,
  },
  {
    id: 'llama-4-maverick',
    name: 'Llama 4 Maverick',
    provider: 'Meta',
    openSource: true,
    releaseDate: '2025-04-05',
    parameters: 400_000_000_000,
    modelSizeGB: 800,
    contextLength: 1000000,
    inputPrice: 0,
    outputPrice: 0,
    free: true,
    mmlu: 88.1,
    humaneval: 88.9,
    mmluPlus: 89.7,
    liveBench: 58.6,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: false,
  },
  {
    id: 'llama-4-behemoth',
    name: 'Llama 4 Behemoth',
    provider: 'Meta',
    openSource: true,
    releaseDate: '2026-02-10',
    parameters: 500_000_000_000,
    modelSizeGB: 1000,
    contextLength: 1000000,
    inputPrice: 0,
    outputPrice: 0,
    free: true,
    mmlu: 89.5,
    humaneval: 90.2,
    mmluPlus: 91.2,
    liveBench: 62.1,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: false,
  },
  {
    id: 'deepseek-v3.2-exp',
    name: 'DeepSeek-V3.2-Exp',
    provider: 'DeepSeek',
    openSource: true,
    releaseDate: '2025-12-01',
    parameters: 685_000_000_000,
    modelSizeGB: 1320,
    contextLength: 64000,
    inputPrice: 0,
    outputPrice: 0,
    free: true,
    mmlu: 89.8,
    humaneval: 75.8,
    mmluPlus: 90.5,
    liveBench: 52.4,
    multimodal: false,
    vision: false,
    functionCalling: true,
    json: true,
    search: false,
  },
  {
    id: 'kimi-k2',
    name: 'Kimi K2',
    provider: 'Moonshot AI',
    openSource: false,
    releaseDate: '2025-10-15',
    parameters: 140_000_000_000,
    modelSizeGB: 280,
    contextLength: 200000,
    inputPrice: 0.6,
    outputPrice: 2.4,
    free: false,
    mmlu: 84.2,
    humaneval: 78.5,
    mmluPlus: 85.8,
    liveBench: 48.9,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: true,
  },
  {
    id: 'kimi-k2-thinking',
    name: 'Kimi K2 Thinking',
    provider: 'Moonshot AI',
    openSource: true,
    releaseDate: '2025-11-06',
    parameters: 1000_000_000_000,
    modelSizeGB: 600,
    contextLength: 256000,
    inputPrice: 0.15,
    outputPrice: 0.15,
    free: false,
    mmlu: 90.0,
    humaneval: 83.0,
    mmluPlus: 91.2,
    liveBench: 55.2,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: true,
  },
  {
    id: 'qwen-3.5',
    name: 'Qwen 3.5',
    provider: 'Alibaba',
    openSource: true,
    releaseDate: '2025-09-25',
    parameters: 128_000_000_000,
    modelSizeGB: 256,
    contextLength: 131072,
    inputPrice: 0,
    outputPrice: 0,
    free: true,
    mmlu: 83.5,
    humaneval: 82.1,
    mmluPlus: 85.2,
    liveBench: 49.8,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: false,
  },
  {
    id: 'qwen-3.5-plus',
    name: 'Qwen 3.5 Plus',
    provider: 'Alibaba',
    openSource: true,
    releaseDate: '2026-02-16',
    parameters: 256_000_000_000,
    modelSizeGB: 512,
    contextLength: 131072,
    inputPrice: 0,
    outputPrice: 0,
    free: true,
    mmlu: 86.8,
    humaneval: 85.4,
    mmluPlus: 88.4,
    liveBench: 54.2,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: false,
  },
  {
    id: 'mistral-large-3',
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    openSource: true,
    releaseDate: '2025-12-02',
    parameters: 140_000_000_000,
    modelSizeGB: 280,
    contextLength: 128000,
    inputPrice: 0,
    outputPrice: 0,
    free: true,
    mmlu: 86.2,
    humaneval: 84.8,
    mmluPlus: 87.5,
    liveBench: 50.1,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: false,
  },
  {
    id: 'magistral',
    name: 'Magistral',
    provider: 'Mistral AI',
    openSource: false,
    releaseDate: '2025-09-15',
    parameters: 80_000_000_000,
    modelSizeGB: 160,
    contextLength: 128000,
    inputPrice: 0.5,
    outputPrice: 1.5,
    free: false,
    mmlu: 81.5,
    humaneval: 76.2,
    mmluPlus: 83.1,
    liveBench: 44.8,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: true,
  },
  {
    id: 'glm-4.5',
    name: 'GLM-4.5',
    provider: 'Zhipu AI',
    openSource: true,
    releaseDate: '2025-07-28',
    parameters: 120_000_000_000,
    modelSizeGB: 240,
    contextLength: 128000,
    inputPrice: 0,
    outputPrice: 0,
    free: true,
    mmlu: 82.4,
    humaneval: 78.9,
    mmluPlus: 84.1,
    liveBench: 46.2,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: false,
  },
  {
    id: 'glm-4.7',
    name: 'GLM-4.7',
    provider: 'Zhipu AI',
    openSource: true,
    releaseDate: '2025-12-22',
    parameters: 200_000_000_000,
    modelSizeGB: 400,
    contextLength: 200000,
    inputPrice: 0,
    outputPrice: 0,
    free: true,
    mmlu: 85.8,
    humaneval: 83.5,
    mmluPlus: 87.2,
    liveBench: 51.8,
    multimodal: true,
    vision: true,
    functionCalling: true,
    json: true,
    search: false,
  },
];

function getFeatureIcon(enabled: boolean): string {
  return enabled ? '✅' : '❌';
}

function getPriceDisplay(price: number, free: boolean): string {
  if (free) return 'Free';
  return `$${price}/M`;
}

function getProviderColor(provider: string): string {
  const colors: Record<string, string> = {
    'OpenAI': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    'Anthropic': 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    'Google': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    'Meta': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    'DeepSeek': 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    'Moonshot AI': 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
    'Alibaba': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    'Mistral AI': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
    'Zhipu AI': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
  };
  return colors[provider] || 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300';
}

function getOpenSourceColor(openSource: boolean): string {
  return openSource
    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300'
    : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
}

function getScoreColor(score: number | undefined): string {
  if (score === undefined) return 'text-zinc-400';
  if (score >= 90) return 'text-emerald-600 font-bold';
  if (score >= 80) return 'text-green-600 font-semibold';
  if (score >= 70) return 'text-lime-600 font-medium';
  if (score >= 60) return 'text-yellow-600';
  return 'text-orange-600';
}

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0f2744]">
      <main className="max-w-[98vw] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            ⚖️ Frontier Model Comparison
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Compare the latest flagship AI models across pricing, benchmarks, and capabilities
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800">
                <th className="text-left p-3 font-semibold text-zinc-700 dark:text-zinc-300 sticky left-0 bg-zinc-50 dark:bg-zinc-800 z-10 text-sm">
                  Model
                </th>
                <th className="text-left p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  Provider
                </th>
                <th className="text-center p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  License
                </th>
                <th className="text-left p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  Released
                </th>
                <th className="text-right p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  Params
                </th>
                <th className="text-right p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  Size
                </th>
                <th className="text-right p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  Context
                </th>
                <th className="text-center p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  Input
                </th>
                <th className="text-center p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  Output
                </th>
                <th className="text-right p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  MMLU
                </th>
                <th className="text-right p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  HumanEval
                </th>
                <th className="text-right p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  MMLU+
                </th>
                <th className="text-right p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  LiveBench
                </th>
                <th className="text-center p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  Multi
                </th>
                <th className="text-center p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  Vision
                </th>
                <th className="text-center p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  Func
                </th>
                <th className="text-center p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  JSON
                </th>
                <th className="text-center p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  Search
                </th>
              </tr>
            </thead>
            <tbody>
              {frontierModels.map((model) => (
                <tr
                  key={model.id}
                  className="border-t border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                >
                  <td className="p-3 sticky left-0 bg-white dark:bg-zinc-900">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                      {model.name}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProviderColor(model.provider)}`}>
                      {model.provider}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOpenSourceColor(model.openSource)}`}>
                      {model.openSource ? 'Open' : 'Closed'}
                    </span>
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400 text-sm">
                    {new Date(model.releaseDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </td>
                  <td className="p-3 text-right text-zinc-900 dark:text-zinc-100 font-medium text-sm">
                    {formatNumber(model.parameters)}
                  </td>
                  <td className="p-3 text-right text-zinc-900 dark:text-zinc-100 font-medium text-sm">
                    {model.modelSizeGB} GB
                  </td>
                  <td className="p-3 text-right text-zinc-900 dark:text-zinc-100 font-medium text-sm">
                    {formatNumber(model.contextLength)}
                  </td>
                  <td className="p-3 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${model.free ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300' : 'text-zinc-900 dark:text-zinc-100'}`}>
                      {getPriceDisplay(model.inputPrice, model.free)}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${model.free ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300' : 'text-zinc-900 dark:text-zinc-100'}`}>
                      {getPriceDisplay(model.outputPrice, model.free)}
                    </span>
                  </td>
                  <td className={`p-3 text-right ${getScoreColor(model.mmlu)} text-sm`}>
                    {model.mmlu}%
                  </td>
                  <td className={`p-3 text-right ${getScoreColor(model.humaneval)} text-sm`}>
                    {model.humaneval}%
                  </td>
                  <td className={`p-3 text-right ${getScoreColor(model.mmluPlus)} text-sm`}>
                    {model.mmluPlus}%
                  </td>
                  <td className={`p-3 text-right ${getScoreColor(model.liveBench)} text-sm`}>
                    {model.liveBench}%
                  </td>
                  <td className="p-3 text-center text-lg">
                    {getFeatureIcon(model.multimodal)}
                  </td>
                  <td className="p-3 text-center text-lg">
                    {getFeatureIcon(model.vision)}
                  </td>
                  <td className="p-3 text-center text-lg">
                    {getFeatureIcon(model.functionCalling)}
                  </td>
                  <td className="p-3 text-center text-lg">
                    {getFeatureIcon(model.json)}
                  </td>
                  <td className="p-3 text-center text-lg">
                    {getFeatureIcon(model.search)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            📊 Pricing Legend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">Free</span>
              <span className="text-zinc-600 dark:text-zinc-400">- Available at no cost</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-900 dark:text-zinc-100">$X/M</span>
              <span className="text-zinc-600 dark:text-zinc-400">- Price per million tokens</span>
            </div>
          </div>
          
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 mt-6">
            📈 Benchmark Legend
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">MMLU</span>
              <p className="text-zinc-500 dark:text-zinc-400">Massive Multitask Language Understanding</p>
            </div>
            <div>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">HumanEval</span>
              <p className="text-zinc-500 dark:text-zinc-400">Code generation benchmark</p>
            </div>
            <div>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">MMLU+</span>
              <p className="text-zinc-500 dark:text-zinc-400">Enhanced MMLU with few-shot</p>
            </div>
            <div>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">LiveBench</span>
              <p className="text-zinc-500 dark:text-zinc-400">Contamination-free evaluation</p>
            </div>
          </div>
          
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 mt-6">
            🔧 Capabilities Legend
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-lg">✅</span>
              <span className="text-zinc-600 dark:text-zinc-400">Supported</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">❌</span>
              <span className="text-zinc-600 dark:text-zinc-400">Not Supported</span>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 mt-6">
            📜 License Legend
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">Open</span>
              <span className="text-zinc-600 dark:text-zinc-400">- Open source model</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">Closed</span>
              <span className="text-zinc-600 dark:text-zinc-400">- Proprietary/closed model</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>Pricing and benchmark data as of March 2026. Data sourced from official model releases.</p>
        </div>
      </main>
    </div>
  );
}
