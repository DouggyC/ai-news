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
    mmlu: 92.5,
    humaneval: 93,
    livebench: 80.71,
    mmluPlus: 87,
    gpqa: 93.5,
  },
  {
    id: 'claude-opus-4.7',
    name: 'Claude Opus 4.7',
    provider: 'Anthropic',
    openSource: false,
    mmlu: 91.2,
    humaneval: 95,
    livebench: 76.91,
    mmluPlus: 89,
    gpqa: 94,
  },
  {
    id: 'claude-sonnet-4.6',
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    openSource: false,
    mmlu: 90.4,
    humaneval: 90.8,
    livebench: 75.47,
    mmluPlus: 87.5,
    gpqa: 89.9,
  },
  {
    id: 'gemini-3.1-pro',
    name: 'Gemini 3.1 Pro',
    provider: 'Google',
    openSource: false,
    mmlu: 91.4,
    humaneval: 92,
    livebench: 79.93,
    mmluPlus: 89.8,
    gpqa: 94.1,
  },
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    openSource: false,
    mmlu: 89.8,
    humaneval: 88.4,
    livebench: 65.35,
    mmluPlus: 86,
    gpqa: 84,
  },
  {
    id: 'llama-4-behemoth',
    name: 'Llama 4 Behemoth',
    provider: 'Meta',
    openSource: true,
    mmlu: 90,
    humaneval: 88,
    livebench: 58,
    mmluPlus: 82.2,
    gpqa: 73.7,
  },
  {
    id: 'llama-4-scout',
    name: 'Llama 4 Scout',
    provider: 'Meta',
    openSource: true,
    mmlu: 79.6,
    humaneval: 79.4,
    livebench: 32.8,
    mmluPlus: 74.3,
    gpqa: 57.2,
  },
  {
    id: 'grok-4.20-beta',
    name: 'Grok 4.20 Beta',
    provider: 'xAI',
    openSource: false,
    mmlu: 88.5,
    humaneval: 94.1,
    livebench: 67.96,
    mmluPlus: 83.5,
    gpqa: 88,
  },
  {
    id: 'nemotron-3-super',
    name: 'Nemotron 3 Super',
    provider: 'NVIDIA',
    openSource: true,
    mmlu: 86.01,
    humaneval: 79.4,
    livebench: 55.3,
    mmluPlus: 75.65,
    gpqa: 60,
  },
  {
    id: 'deepseek-v4',
    name: 'DeepSeek V4',
    provider: 'DeepSeek',
    openSource: true,
    mmlu: 89.4,
    humaneval: 94.2,
    livebench: 73.58,
    mmluPlus: 87.5,
    gpqa: 90.1,
  },
  {
    id: 'qwen3.5',
    name: 'Qwen3.5',
    provider: 'Alibaba',
    openSource: true,
    mmlu: 88.7,
    humaneval: 83,
    livebench: 56.4,
    mmluPlus: 87.8,
    gpqa: 88.4,
  },
  {
    id: 'doubao-2.0',
    name: 'Doubao 2.0',
    provider: 'ByteDance',
    openSource: false,
    mmlu: 84,
    humaneval: 82,
    livebench: 54.8,
    mmluPlus: 87,
    gpqa: 88.9,
  },
  {
    id: 'minimax-m2.7',
    name: 'MiniMax M2.7',
    provider: 'MiniMax',
    openSource: true,
    mmlu: 86.5,
    humaneval: 91,
    livebench: 61,
    mmluPlus: 82.1,
    gpqa: 76.8,
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
            className='flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300'
            style={{
              backgroundColor: isActive
                ? 'rgba(255, 255, 255, 0.1)'
                : 'transparent',
              border: `1px solid ${isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.06)'}`,
              opacity: isActive ? 1 : 0.4,
            }}
          >
            <div
              className='w-3 h-3 rounded-full'
              style={{
                backgroundColor: providerColors[model.provider] || '#ccc',
              }}
            />
            <span
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: isActive
                  ? 'rgba(255, 255, 255, 0.9)'
                  : 'rgba(255, 255, 255, 0.4)',
              }}
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
    <div className='min-h-screen'>
      <main className='mx-auto px-4 sm:px-6 lg:px-10 py-8'>
        <div className='mb-12'>
          <h1
            style={{
              fontSize: '3rem',
              lineHeight: '0.87',
              fontWeight: 400,
              color: '#ffffff',
              marginBottom: '8px',
            }}
          >
            AI Model Benchmarks
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '48rem',
              lineHeight: '1.5',
            }}
          >
            Explore and compare the performance of leading AI models across
            industry-standard evaluations. Use the filters and sorting below to
            find the right model capabilities.
          </p>
        </div>

        {/* Enhanced Line Chart Section */}
        <div className='mb-16'>
          <div
            style={{
              backgroundColor: '#333138',
              borderRadius: '4px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '24px',
              boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.15)',
            }}
          >
            <div
              className='mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center'
              style={{ marginBottom: '24px' }}
            >
              <h2
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#ffffff',
                  lineHeight: '1.2',
                }}
              >
                Performance Landscape
              </h2>
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.4)',
                  marginTop: '8px',
                }}
              >
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
                    <stop offset='0%' stopColor='#00ffff' stopOpacity={0.1} />
                    <stop
                      offset='100%'
                      stopColor='#0007cd'
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
                  tick={{
                    fill: 'rgba(255, 255, 255, 0.5)',
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                  axisLine={{
                    stroke: 'rgba(255, 255, 255, 0.1)',
                    strokeWidth: 1,
                  }}
                  tickLine={false}
                  dy={10}
                />
                <YAxis
                  domain={[40, 100]}
                  tick={{
                    fill: 'rgba(255, 255, 255, 0.5)',
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                  axisLine={false}
                  tickLine={false}
                  dx={-10}
                />
                <Tooltip
                  cursor={{
                    stroke: 'rgba(255, 255, 255, 0.2)',
                    strokeWidth: 1,
                    strokeDasharray: '4 4',
                  }}
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.95)',
                    border: '1px solid rgba(0, 255, 255, 0.2)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
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
                      stroke: '#000',
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

        <div
          className='mb-4 text-right'
          style={{
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.4)',
            paddingRight: '24px',
          }}
        >
          Last updated: April 23, 2026
        </div>

        {/* Comparison Table Section */}
        <div className='mb-12'>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 500,
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: '1.2',
            }}
          >
            Detailed Comparison
          </h2>

          <div
            style={{
              backgroundColor: '#333138',
              borderRadius: '4px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.15)',
            }}
          >
            <div className='overflow-x-auto custom-scrollbar'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <th
                      className='py-4 px-6 font-medium cursor-pointer hover:bg-white/5 transition-colors'
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '13px',
                      }}
                      onClick={() => handleSort('name')}
                    >
                      <div className='flex items-center gap-2'>
                        Model{' '}
                        {sortField === 'name' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th
                      className='py-4 px-6 font-medium cursor-pointer hover:bg-white/5 transition-colors'
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '13px',
                      }}
                      onClick={() => handleSort('provider')}
                    >
                      <div className='flex items-center gap-2'>
                        Provider{' '}
                        {sortField === 'provider' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th
                      className='py-4 px-6 font-medium'
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '13px',
                      }}
                    >
                      Type
                    </th>
                    <th
                      className='py-4 px-6 font-medium text-right cursor-pointer hover:bg-white/5 transition-colors'
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '13px',
                      }}
                      onClick={() => handleSort('mmlu')}
                    >
                      <div className='flex items-center justify-end gap-2'>
                        MMLU{' '}
                        {sortField === 'mmlu' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th
                      className='py-4 px-6 font-medium text-right cursor-pointer hover:bg-white/5 transition-colors'
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '13px',
                      }}
                      onClick={() => handleSort('mmluPlus')}
                    >
                      <div className='flex items-center justify-end gap-2'>
                        MMLU+{' '}
                        {sortField === 'mmluPlus' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th
                      className='py-4 px-6 font-medium text-right cursor-pointer hover:bg-white/5 transition-colors'
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '13px',
                      }}
                      onClick={() => handleSort('humaneval')}
                    >
                      <div className='flex items-center justify-end gap-2'>
                        HumanEval{' '}
                        {sortField === 'humaneval' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th
                      className='py-4 px-6 font-medium text-right cursor-pointer hover:bg-white/5 transition-colors'
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '13px',
                      }}
                      onClick={() => handleSort('livebench')}
                    >
                      <div className='flex items-center justify-end gap-2'>
                        LiveBench{' '}
                        {sortField === 'livebench' &&
                          (sortOrder === 'asc' ? '↑' : '↓')}
                      </div>
                    </th>
                    <th
                      className='py-4 px-6 font-medium text-right cursor-pointer hover:bg-white/5 transition-colors'
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '13px',
                      }}
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
                <tbody
                  className='divide-y'
                  style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}
                >
                  {sortedModels.map((model) => (
                    <tr
                      key={model.id}
                      className='hover:bg-white/5 transition-colors group'
                      style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      <td
                        className='py-4 px-6 font-medium'
                        style={{ color: '#ffffff', fontSize: '14px' }}
                      >
                        {model.name}
                      </td>
                      <td
                        className='py-4 px-6'
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                      >
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
                          style={{
                            display: 'inline-flex',
                            padding: '2px 10px',
                            borderRadius: '2px',
                            fontSize: '11px',
                            fontWeight: 500,
                            backgroundColor: model.openSource
                              ? 'rgba(34, 197, 94, 0.1)'
                              : 'rgba(99, 102, 241, 0.1)',
                            color: model.openSource ? '#4ade80' : '#818cf8',
                            border: `1px solid ${model.openSource ? 'rgba(34, 197, 94, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`,
                          }}
                        >
                          {model.openSource ? 'Open Source' : 'Proprietary'}
                        </span>
                      </td>
                      <td
                        className='py-4 px-6 text-right font-medium'
                        style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '14px',
                        }}
                      >
                        {model.mmlu.toFixed(1)}%
                      </td>
                      <td
                        className='py-4 px-6 text-right font-medium'
                        style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '14px',
                        }}
                      >
                        {model.mmluPlus.toFixed(1)}%
                      </td>
                      <td
                        className='py-4 px-6 text-right font-medium'
                        style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '14px',
                        }}
                      >
                        {model.humaneval.toFixed(1)}%
                      </td>
                      <td
                        className='py-4 px-6 text-right font-medium'
                        style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '14px',
                        }}
                      >
                        {model.livebench.toFixed(1)}%
                      </td>
                      <td
                        className='py-4 px-6 text-right font-medium'
                        style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '14px',
                        }}
                      >
                        {model.gpqa.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#333138',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '32px',
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: '1.2',
            }}
          >
            Benchmark Definitions
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='group'>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '2px',
                  fontSize: '13px',
                  fontWeight: 500,
                  marginBottom: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                MMLU
              </span>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: '1.7',
                  fontSize: '14px',
                }}
              >
                Massive Multitask Language Understanding - comprehensively tests
                knowledge across 57 distinct academic subjects.
              </p>
            </div>
            <div className='group'>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '2px',
                  fontSize: '13px',
                  fontWeight: 500,
                  marginBottom: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                MMLU+
              </span>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: '1.7',
                  fontSize: '14px',
                }}
              >
                Enhanced version of MMLU with improved few-shot evaluations to
                prevent statistical contamination.
              </p>
            </div>
            <div className='group'>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '2px',
                  fontSize: '13px',
                  fontWeight: 500,
                  marginBottom: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                HumanEval
              </span>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: '1.7',
                  fontSize: '14px',
                }}
              >
                Rigorous code generation benchmark evaluating functional
                correctness across 164 Python programming problems.
              </p>
            </div>
            <div className='group'>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '2px',
                  fontSize: '13px',
                  fontWeight: 500,
                  marginBottom: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                LiveBench
              </span>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: '1.7',
                  fontSize: '14px',
                }}
              >
                Continuously updated, contamination-free evaluation set designed
                to measure zero-shot instruction following.
              </p>
            </div>
            <div className='group'>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '2px',
                  fontSize: '13px',
                  fontWeight: 500,
                  marginBottom: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                GPQA
              </span>
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: '1.7',
                  fontSize: '14px',
                }}
              >
                Graduate-Level Science Questions - extremely robust evaluate of
                PhD-level reasoning in physics, chemistry, and biology.
              </p>
            </div>
          </div>
        </div>

        <div
          className='mt-8 text-center'
          style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)' }}
        >
          <p>
            Benchmark data aggregated from independent framework evaluations •
            Last Updated: April 23, 2026
          </p>
        </div>
      </main>
    </div>
  );
}
