'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BenchmarkModel {
  id: string;
  name: string;
  provider: string;
  openSource: boolean;
  mmlu: number;
  humaneval: number;
  livebench: number;
  mmluPlus: number;
  gpqa: number;
}

const benchmarkModels: BenchmarkModel[] = [
  {
    id: 'gpt-5.4-pro',
    name: 'GPT-5.4 Pro',
    provider: 'OpenAI',
    openSource: false,
    mmlu: 88.9,
    humaneval: 75.2,
    livebench: 66.8,
    mmluPlus: 90.1,
    gpqa: 52.3,
  },
  {
    id: 'gpt-5.4-thinking',
    name: 'GPT-5.4 Thinking',
    provider: 'OpenAI',
    openSource: false,
    mmlu: 87.2,
    humaneval: 73.8,
    livebench: 63.5,
    mmluPlus: 88.5,
    gpqa: 50.1,
  },
  {
    id: 'claude-opus-4.6',
    name: 'Claude Opus 4.6',
    provider: 'Anthropic',
    openSource: false,
    mmlu: 89.2,
    humaneval: 94.5,
    livebench: 72.4,
    mmluPlus: 91.0,
    gpqa: 54.8,
  },
  {
    id: 'claude-sonnet-4.6',
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    openSource: false,
    mmlu: 87.5,
    humaneval: 92.8,
    livebench: 66.1,
    mmluPlus: 89.7,
    gpqa: 48.2,
  },
  {
    id: 'gemini-3.1-pro',
    name: 'Gemini 3.1 Pro',
    provider: 'Google',
    openSource: false,
    mmlu: 87.8,
    humaneval: 86.2,
    livebench: 58.9,
    mmluPlus: 89.1,
    gpqa: 46.5,
  },
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    openSource: false,
    mmlu: 85.9,
    humaneval: 84.1,
    livebench: 48.5,
    mmluPlus: 87.2,
    gpqa: 42.1,
  },
  {
    id: 'grok-4',
    name: 'Grok 4',
    provider: 'xAI',
    openSource: false,
    mmlu: 86.5,
    humaneval: 78.2,
    livebench: 61.2,
    mmluPlus: 88.0,
    gpqa: 47.8,
  },
  {
    id: 'llama-4-behemoth',
    name: 'Llama 4 Behemoth',
    provider: 'Meta',
    openSource: true,
    mmlu: 89.5,
    humaneval: 90.2,
    livebench: 62.1,
    mmluPlus: 91.2,
    gpqa: 51.3,
  },
  {
    id: 'llama-4-maverick',
    name: 'Llama 4 Maverick',
    provider: 'Meta',
    openSource: true,
    mmlu: 88.1,
    humaneval: 88.9,
    livebench: 58.6,
    mmluPlus: 89.7,
    gpqa: 48.7,
  },
  {
    id: 'llama-4-scout',
    name: 'Llama 4 Scout',
    provider: 'Meta',
    openSource: true,
    mmlu: 87.3,
    humaneval: 86.4,
    livebench: 54.8,
    mmluPlus: 88.9,
    gpqa: 45.2,
  },
  {
    id: 'deepseek-v3.2',
    name: 'DeepSeek-V3.2',
    provider: 'DeepSeek',
    openSource: true,
    mmlu: 89.8,
    humaneval: 75.8,
    livebench: 52.4,
    mmluPlus: 90.5,
    gpqa: 49.1,
  },
  {
    id: 'qwen-3.5-plus',
    name: 'Qwen 3.5 Plus',
    provider: 'Alibaba',
    openSource: true,
    mmlu: 86.8,
    humaneval: 85.4,
    livebench: 54.2,
    mmluPlus: 88.4,
    gpqa: 44.8,
  },
  {
    id: 'kimi-k2-thinking',
    name: 'Kimi K2 Thinking',
    provider: 'Moonshot AI',
    openSource: true,
    mmlu: 90.0,
    humaneval: 83.0,
    livebench: 55.2,
    mmluPlus: 91.2,
    gpqa: 50.5,
  },
  {
    id: 'glm-4.7',
    name: 'GLM-4.7',
    provider: 'Zhipu AI',
    openSource: true,
    mmlu: 85.8,
    humaneval: 83.5,
    livebench: 51.8,
    mmluPlus: 87.2,
    gpqa: 43.2,
  },
  {
    id: 'mistral-large-3',
    name: 'Mistral Large 3',
    provider: 'Mistral',
    openSource: true,
    mmlu: 86.2,
    humaneval: 84.8,
    livebench: 50.1,
    mmluPlus: 87.5,
    gpqa: 42.8,
  },
];

const providerColors: Record<string, string> = {
  OpenAI: '#22c55e',
  Anthropic: '#f97316',
  Google: '#3b82f6',
  xAI: '#374151',
  Meta: '#a855f7',
  DeepSeek: '#ef4444',
  Alibaba: '#eab308',
  'Moonshot AI': '#ec4899',
  'Zhipu AI': '#10b981',
  Mistral: '#06b6d4',
};

const chartData: Array<Record<string, string | number>> = [
  { benchmark: 'MMLU' },
  { benchmark: 'MMLU+' },
  { benchmark: 'HumanEval' },
  { benchmark: 'LiveBench' },
  { benchmark: 'GPQA' },
];

benchmarkModels.forEach(model => {
  chartData[0][model.name] = model.mmlu;
  chartData[1][model.name] = model.mmluPlus;
  chartData[2][model.name] = model.humaneval;
  chartData[3][model.name] = model.livebench;
  chartData[4][model.name] = model.gpqa;
});

function CustomLegend({ payload, onHover }: { payload?: Array<{ value: string; color: string; payload?: { strokeWidth?: number } }>; onHover?: (name: string | null) => void }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {payload?.map((entry, index) => (
        <button
          key={index}
          className="flex items-center gap-1.5 px-2 py-1 rounded transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onMouseEnter={() => onHover?.(entry.value)}
          onMouseLeave={() => onHover?.(null)}
        >
          <div 
            className="w-3 h-0.5 rounded" 
            style={{ backgroundColor: entry.color, height: 2 }}
          />
          <span className="text-xs text-zinc-600 dark:text-zinc-400">
            {entry.value}
          </span>
        </button>
      ))}
    </div>
  );
}

function ModelCard({ model }: { model: BenchmarkModel }) {
  return (
    <div id={model.id} className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{model.name}</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{model.provider}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          model.openSource 
            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300' 
            : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
        }`}>
          {model.openSource ? 'Open' : 'Closed'}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-2">
          <span className="text-zinc-500 dark:text-zinc-400">MMLU</span>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">{model.mmlu}%</p>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-2">
          <span className="text-zinc-500 dark:text-zinc-400">HumanEval</span>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">{model.humaneval}%</p>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-2">
          <span className="text-zinc-500 dark:text-zinc-400">LiveBench</span>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">{model.livebench}%</p>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-2">
          <span className="text-zinc-500 dark:text-zinc-400">GPQA</span>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">{model.gpqa}%</p>
        </div>
      </div>
    </div>
  );
}

export default function BenchmarksPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0f2744]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            📊 Benchmarks
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Compare all flagship AI models across major benchmarks
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
            <ResponsiveContainer width="100%" height={600}>
              <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis 
                  dataKey="benchmark" 
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  axisLine={{ stroke: '#4b5563' }}
                />
                <YAxis 
                  domain={[40, 100]} 
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  axisLine={{ stroke: '#4b5563' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#f9fafb'
                  }}
                />
                <Legend content={<CustomLegend />} />
                {benchmarkModels.map((model) => (
                  <Line
                    key={model.id}
                    type="monotone"
                    dataKey={model.name}
                    stroke={providerColors[model.provider]}
                    strokeWidth={2}
                    dot={{ r: 4, fill: providerColors[model.provider], strokeWidth: 0 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                    connectNulls
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
            Model Details
          </h2>
          
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">
            Closed Source
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {benchmarkModels.filter(m => !m.openSource).map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
          
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">
            Open Source
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benchmarkModels.filter(m => m.openSource).map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            📖 Benchmark Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">MMLU</span>
              <p className="text-zinc-500 dark:text-zinc-400">Massive Multitask Language Understanding - tests knowledge across 57 subjects</p>
            </div>
            <div>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">MMLU+</span>
              <p className="text-zinc-500 dark:text-zinc-400">Enhanced MMLU with improved few-shot evaluation</p>
            </div>
            <div>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">HumanEval</span>
              <p className="text-zinc-500 dark:text-zinc-400">Code generation benchmark with 164 programming problems</p>
            </div>
            <div>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">LiveBench</span>
              <p className="text-zinc-500 dark:text-zinc-400">Contamination-free evaluation with monthly updated problems</p>
            </div>
            <div>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">GPQA</span>
              <p className="text-zinc-500 dark:text-zinc-400">Graduate-Level Science Questions - PhD-level science knowledge</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>Benchmark data from independent evaluations • March 2026</p>
        </div>
      </main>
    </div>
  );
}
