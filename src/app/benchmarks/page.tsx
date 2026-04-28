'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

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
    id: 'gpt-5.5',
    name: 'GPT-5.5',
    provider: 'OpenAI',
    openSource: false,
    mmlu: 92.1,
    humaneval: 95.0,
    livebench: 80.0,
    mmluPlus: 93.0,
    gpqa: 94.4,
  },
  {
    id: 'claude-opus-4.7',
    name: 'Claude Opus 4.7',
    provider: 'Anthropic',
    openSource: false,
    mmlu: 91.5,
    humaneval: 96.0,
    livebench: 79.0,
    mmluPlus: 83.0,
    gpqa: 94.2,
  },
  {
    id: 'claude-sonnet-4.6',
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    openSource: false,
    mmlu: 91.2,
    humaneval: 95.0,
    livebench: 73.2,
    mmluPlus: 79.0,
    gpqa: 89.9,
  },
  {
    id: 'gemini-3.1-pro',
    name: 'Gemini 3.1 Pro',
    provider: 'Google',
    openSource: false,
    mmlu: 92.6,
    humaneval: 80.6,
    livebench: 78.0,
    mmluPlus: 88.0,
    gpqa: 94.3,
  },
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    openSource: false,
    mmlu: 88.6,
    humaneval: 88.0,
    livebench: 75.6,
    mmluPlus: 86.0,
    gpqa: 83.0,
  },
  {
    id: 'llama-4-behemoth',
    name: 'Llama 4 Behemoth',
    provider: 'Meta',
    openSource: true,
    mmlu: 88.0,
    humaneval: 88.0,
    livebench: 58.0,
    mmluPlus: 85.0,
    gpqa: 55.0,
  },
  {
    id: 'llama-4-scout',
    name: 'Llama 4 Scout',
    provider: 'Meta',
    openSource: true,
    mmlu: 79.6,
    humaneval: 74.1,
    livebench: 58.3,
    mmluPlus: 74.3,
    gpqa: 57.2,
  },
  {
    id: 'grok-4.20-beta',
    name: 'Grok 4.20 Beta',
    provider: 'xAI',
    openSource: false,
    mmlu: 90.0,
    humaneval: 94.1,
    livebench: 72.0,
    mmluPlus: 83.5,
    gpqa: 88.5,
  },
  {
    id: 'nemotron-3-super',
    name: 'Nemotron 3 Super',
    provider: 'NVIDIA',
    openSource: true,
    mmlu: 88.0,
    humaneval: 79.4,
    livebench: 55.3,
    mmluPlus: 83.7,
    gpqa: 79.2,
  },
  {
    id: 'deepseek-v4',
    name: 'DeepSeek V4',
    provider: 'DeepSeek',
    openSource: true,
    mmlu: 88.0,
    humaneval: 90.0,
    livebench: 56.8,
    mmluPlus: 85.0,
    gpqa: 55.0,
  },
  {
    id: 'qwen3.5',
    name: 'Qwen3.5',
    provider: 'Alibaba',
    openSource: true,
    mmlu: 88.6,
    humaneval: 82.6,
    livebench: 56.4,
    mmluPlus: 87.8,
    gpqa: 88.4,
  },
  {
    id: 'doubao-2.0',
    name: 'Doubao 2.0',
    provider: 'ByteDance',
    openSource: false,
    mmlu: 84.0,
    humaneval: 82.0,
    livebench: 54.8,
    mmluPlus: 87.0,
    gpqa: 88.9,
  },
  {
    id: 'minimax-m2.7',
    name: 'MiniMax M2.7',
    provider: 'MiniMax',
    openSource: true,
    mmlu: 82.0,
    humaneval: 93.0,
    livebench: 66.0,
    mmluPlus: 74.0,
    gpqa: 85.0,
  },
  {
    id: 'kimi-2.6',
    name: 'Kimi 2.6',
    provider: 'Moonshot',
    openSource: true,
    mmlu: 88.0,
    humaneval: 90.0,
    livebench: 78.0,
    mmluPlus: 85.0,
    gpqa: 55.0,
  },
  {
    id: 'qwen-3.6-max',
    name: 'Qwen 3.6 Max',
    provider: 'Alibaba',
    openSource: false,
    mmlu: 89.0,
    humaneval: 91.0,
    livebench: 79.0,
    mmluPlus: 88.0,
    gpqa: 89.0,
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
  Mistral: '#06b6d4',
  NVIDIA: '#76b900',
  MiniMax: '#ff4d4f',
  Moonshot: '#8b5cf6',
};

const chartData: Array<Record<string, string | number>> = [
  { benchmark: 'MMLU' },
  { benchmark: 'MMLU+' },
  { benchmark: 'HumanEval' },
  { benchmark: 'LiveBench' },
  { benchmark: 'GPQA' },
];

benchmarkModels.forEach((model) => {
  chartData[0][model.name] = model.mmlu;
  chartData[1][model.name] = model.mmluPlus;
  chartData[2][model.name] = model.humaneval;
  chartData[3][model.name] = model.livebench;
  chartData[4][model.name] = model.gpqa;
});

interface CustomLegendProps {
  activeModels: string[];
  toggleModel: (modelId: string) => void;
}

function CustomLegend({ activeModels, toggleModel }: CustomLegendProps) {
  return (
    <div className='flex flex-wrap justify-center gap-3 mt-8'>
      {benchmarkModels.map((model) => {
        const isActive = activeModels.includes(model.id);

        return (
          <button
            key={model.id}
            onClick={() => toggleModel(model.id)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 border 
              ${
                isActive
                  ? 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 shadow-sm'
                  : 'bg-transparent border-zinc-200 dark:border-zinc-700 opacity-40 hover:opacity-100 grayscale'
              }`}
          >
            <div
              className='w-3 h-3 rounded-full'
              style={{
                backgroundColor: providerColors[model.provider] || '#ccc',
              }}
            />
            <span
              className={`text-xs font-medium ${isActive ? 'text-zinc-700 dark:text-zinc-300' : 'text-zinc-500 dark:text-zinc-400'}`}
            >
              {model.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function BenchmarksPage() {
  const [activeModels, setActiveModels] = useState<string[]>(
    benchmarkModels.map((m) => m.id),
  );

  const toggleModel = (modelId: string) => {
    setActiveModels((prev) =>
      prev.includes(modelId)
        ? prev.filter((id) => id !== modelId)
        : [...prev, modelId],
    );
  };

  const getFilteredModels = () =>
    benchmarkModels.filter((m) => activeModels.includes(m.id));

  // Sort logic for the new table
  const [sortField, setSortField] = useState<keyof BenchmarkModel>('mmlu');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleSort = (field: keyof BenchmarkModel) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const sortedModels = [...benchmarkModels].sort((a, b) => {
    const valA = a[sortField];
    const valB = b[sortField];
    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortOrder === 'asc' ? valA - valB : valB - valA;
    }
    if (typeof valA === 'string' && typeof valB === 'string') {
      return sortOrder === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }
    return 0;
  });

  return (
    <div className='min-h-screen bg-zinc-50 dark:bg-[#0f2744]'>
      <main className='mx-auto px-4 sm:px-6 lg:px-10 py-8'>
        <div className='mb-12'>
          <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 tracking-tight'>
            AI Model Benchmarks
          </h1>
          <p className='text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl'>
            Explore and compare the performance of leading AI models across
            industry-standard evaluations. Use the filters and sorting below to
            find the right model capabilities.
          </p>
        </div>

        {/* Enhanced Line Chart Section */}
        <div className='mb-16'>
          <div className='bg-white dark:bg-[#153457] rounded-2xl border border-zinc-200 dark:border-zinc-800/50 p-6 shadow-xl shadow-blue-900/5'>
            <div className='mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center'>
              <h2 className='text-2xl font-bold text-zinc-900 dark:text-zinc-100'>
                Performance Landscape
              </h2>
              <div className='text-sm text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0'>
                Click legend items to toggle models
              </div>
            </div>

            <ResponsiveContainer width='100%' height={600}>
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <defs>
                  <linearGradient
                    id='grid-gradient'
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'
                  >
                    <stop offset='0%' stopColor='#3b82f6' stopOpacity={0.1} />
                    <stop
                      offset='100%'
                      stopColor='#8b5cf6'
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray='4 4'
                  stroke='url(#grid-gradient)'
                  vertical={false}
                />
                <XAxis
                  dataKey='benchmark'
                  tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
                  axisLine={{ stroke: '#cbd5e1', strokeWidth: 2 }}
                  tickLine={false}
                  dy={10}
                />
                <YAxis
                  domain={[40, 100]}
                  tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
                  axisLine={false}
                  tickLine={false}
                  dx={-10}
                />
                <Tooltip
                  cursor={{
                    stroke: '#64748b',
                    strokeWidth: 1,
                    strokeDasharray: '4 4',
                  }}
                  contentStyle={{
                    backgroundColor: 'rgba(15, 39, 68, 0.95)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    borderRadius: '12px',
                    color: '#f8fafc',
                    boxShadow:
                      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    backdropFilter: 'blur(8px)',
                  }}
                  itemStyle={{ fontWeight: 500 }}
                />
                <Legend
                  content={
                    <CustomLegend
                      activeModels={activeModels}
                      toggleModel={toggleModel}
                    />
                  }
                />
                {getFilteredModels().map((model) => (
                  <Line
                    key={model.id}
                    type='monotone'
                    dataKey={model.name}
                    stroke={providerColors[model.provider]}
                    strokeWidth={2}
                    dot={{
                      r: 4,
                      fill: providerColors[model.provider],
                      strokeWidth: 1.5,
                      stroke: '#fff',
                    }}
                    activeDot={{
                      r: 6,
                      strokeWidth: 0,
                      fill: providerColors[model.provider],
                    }}
                    animationDuration={1500}
                    animationEasing='ease-in-out'
                    connectNulls
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='mb-4 text-right text-sm text-zinc-500 dark:text-zinc-400 px-6'>
          Last updated: April 23, 2026
        </div>

        {/* Comparison Table Section */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6'>
            Detailed Comparison
          </h2>

          <div className='bg-white dark:bg-[#153457] rounded-2xl border border-zinc-200 dark:border-zinc-800/50 shadow-xl shadow-blue-900/5 overflow-hidden'>
            <div className='overflow-x-auto'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr className='bg-zinc-50 dark:bg-zinc-800/50 text-sm border-b border-zinc-200 dark:border-zinc-800/50'>
                    <th
                      className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                      onClick={() => handleSort('name')}
                    >
                      <div className='flex items-center gap-2'>
                        Model{' '}
                        {sortField === 'name' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th
                      className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                      onClick={() => handleSort('provider')}
                    >
                      <div className='flex items-center gap-2'>
                        Provider{' '}
                        {sortField === 'provider' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200'>
                      Type
                    </th>
                    <th
                      className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-right cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                      onClick={() => handleSort('mmlu')}
                    >
                      <div className='flex items-center justify-end gap-2'>
                        MMLU{' '}
                        {sortField === 'mmlu' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th
                      className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-right cursor-pointer hover:bg-zinc-100 dark:bg-zinc-800 transition-colors'
                      onClick={() => handleSort('mmluPlus')}
                    >
                      <div className='flex items-center justify-end gap-2'>
                        MMLU+{' '}
                        {sortField === 'mmluPlus' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th
                      className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-right cursor-pointer hover:bg-zinc-100 dark:bg-zinc-800 transition-colors'
                      onClick={() => handleSort('humaneval')}
                    >
                      <div className='flex items-center justify-end gap-2'>
                        HumanEval{' '}
                        {sortField === 'humaneval' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th
                      className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-right cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                      onClick={() => handleSort('livebench')}
                    >
                      <div className='flex items-center justify-end gap-2'>
                        LiveBench{' '}
                        {sortField === 'livebench' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th
                      className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-right cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                      onClick={() => handleSort('gpqa')}
                    >
                      <div className='flex items-center justify-end gap-2'>
                        GPQA{' '}
                        {sortField === 'gpqa' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-zinc-200 dark:divide-zinc-800/50'>
                  {sortedModels.map((model) => (
                    <tr
                      key={model.id}
                      className='hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group'
                    >
                      <td className='py-4 px-6 font-medium text-zinc-900 dark:text-zinc-100'>
                        {model.name}
                      </td>
                      <td className='py-4 px-6 text-zinc-600 dark:text-zinc-400'>
                        <div className='flex items-center gap-2'>
                          <div
                            className='w-2.5 h-2.5 rounded-full'
                            style={{
                              backgroundColor:
                                providerColors[model.provider] || '#94a3b8',
                            }}
                          />
                          {model.provider}
                        </div>
                      </td>
                      <td className='py-4 px-6'>
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border
                          ${
                            model.openSource
                              ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20'
                              : 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20'
                          }`}
                        >
                          {model.openSource ? 'Open Source' : 'Proprietary'}
                        </span>
                      </td>
                      <td className='py-4 px-6 text-right font-semibold text-zinc-700 dark:text-zinc-300'>
                        {model.mmlu.toFixed(1)}%
                      </td>
                      <td className='py-4 px-6 text-right font-semibold text-zinc-700 dark:text-zinc-300'>
                        {model.mmluPlus.toFixed(1)}%
                      </td>
                      <td className='py-4 px-6 text-right font-semibold text-zinc-700 dark:text-zinc-300'>
                        {model.humaneval.toFixed(1)}%
                      </td>
                      <td className='py-4 px-6 text-right font-semibold text-zinc-700 dark:text-zinc-300'>
                        {model.livebench.toFixed(1)}%
                      </td>
                      <td className='py-4 px-6 text-right font-semibold text-zinc-700 dark:text-zinc-300'>
                        {model.gpqa.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='bg-white dark:bg-[#153457] rounded-2xl border border-zinc-200 dark:border-zinc-800/50 p-8 shadow-xl shadow-blue-900/5'>
          <h2 className='text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2'>
            <span className='text-blue-500'>📖</span> Benchmark Definitions
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='group'>
              <span className='inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors'>
                MMLU
              </span>
              <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                Massive Multitask Language Understanding - comprehensively tests
                knowledge across 57 distinct academic subjects.
              </p>
            </div>
            <div className='group'>
              <span className='inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-3 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-colors'>
                MMLU+
              </span>
              <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                Enhanced version of MMLU with improved few-shot evaluations to
                prevent statistical contamination.
              </p>
            </div>
            <div className='group'>
              <span className='inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-3 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors'>
                HumanEval
              </span>
              <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                Rigorous code generation benchmark evaluating functional
                correctness across 164 Python programming problems.
              </p>
            </div>
            <div className='group'>
              <span className='inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-3 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors'>
                LiveBench
              </span>
              <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                Continuously updated, contamination-free evaluation set designed
                to measure zero-shot instruction following.
              </p>
            </div>
            <div className='group'>
              <span className='inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-3 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors'>
                GPQA
              </span>
              <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                Graduate-Level Science Questions - extremely robust evaluate of
                PhD-level reasoning in physics, chemistry, and biology.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-8 text-center text-sm font-medium text-zinc-400 dark:text-zinc-500'>
          <p>
            Benchmark data aggregated from independent framework evaluations •
            Last Updated: April 23, 2026
          </p>
        </div>
      </main>
    </div>
  );
}
