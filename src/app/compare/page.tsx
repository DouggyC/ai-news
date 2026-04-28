'use client';

import { useEffect, useState } from 'react';
import { formatNumber } from '@/lib/utils';

interface FrontierModel {
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

export default function ComparePage() {
  const [frontierModels, setFrontierModels] = useState<FrontierModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortField, setSortField] = useState<keyof FrontierModel>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    fetch('/data/models-data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: FrontierModel[]) => {
        setFrontierModels(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading model data:', error);
        setError('Failed to load model data');
        setLoading(false);
        setFrontierModels([
          {
            id: 'gpt-5.4-thinking',
            name: 'GPT-5.4 Thinking',
            provider: 'OpenAI',
            openSource: false,
            license: 'Proprietary',
            releaseDate: '2026-03-05',
            parameters: 2_000_000_000_000,
            modelSizeGB: 1500,
            contextLength: 1000000,
            inputPrice: 2.5,
            outputPrice: 15.0,
            free: false,
            mmlu: 87.2,
            mmluPlus: 88.5,
            humaneval: 73.8,
            liveBench: 63.5,
            multimodal: true,
            vision: true,
            functionCalling: true,
            json: true,
            search: true,
          },
        ]);
        setLoading(false);
      });
  }, []);

  const handleSort = (field: keyof FrontierModel) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const sortedModels = [...frontierModels].sort((a, b) => {
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
    if (typeof valA === 'boolean' && typeof valB === 'boolean') {
      return sortOrder === 'asc'
        ? valA === valB
          ? 0
          : valA
            ? -1
            : 1
        : valA === valB
          ? 0
          : valA
            ? 1
            : -1;
    }
    return 0;
  });

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

  function getFeatureIcon(enabled: boolean): string {
    return enabled ? '✓' : '—';
  }

  function getPriceDisplay(price: number, free: boolean): string {
    if (free) return 'Free';
    return `$${price.toFixed(2)}`;
  }

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderTopColor: '#00ffff',
              animation: 'spin 1s linear infinite',
            }}
          />
          <p
            style={{
              marginTop: '16px',
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '14px',
            }}
          >
            Loading model data...
          </p>
        </div>
      </div>
    );
  }

  if (error && frontierModels.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <p style={{ color: '#ef4444' }}>{error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              backgroundColor: '#00ffff',
              color: '#000',
              borderRadius: '4px',
              fontWeight: 500,
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      <main className='max-w-[98vw] mx-auto px-4 sm:px-6 lg:px-10 py-8'>
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
            Frontier Model Comparison
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '48rem',
              lineHeight: '1.5',
            }}
          >
            Compare the latest flagship AI models across pricing, capabilities,
            parameters, and benchmarks. Use the interactive column headers to
            sort the table.
          </p>
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
        <div
          style={{
            backgroundColor: '#333138',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            marginBottom: '48px',
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div className='overflow-x-auto custom-scrollbar'>
            <table className='w-full text-left border-collapse whitespace-nowrap'>
              <thead>
                <tr
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <th
                    className='py-4 px-6 font-medium cursor-pointer hover:bg-white/5 transition-colors sticky left-0 z-10'
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      backdropFilter: 'blur(8px)',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('name')}
                  >
                    Model{' '}
                    {sortField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-medium cursor-pointer hover:bg-white/5 transition-colors'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('provider')}
                  >
                    Provider{' '}
                    {sortField === 'provider' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-medium cursor-pointer hover:bg-white/5 transition-colors'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('openSource')}
                  >
                    License{' '}
                    {sortField === 'openSource' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-medium'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                  >
                    Released
                  </th>
                  <th
                    className='py-4 px-6 font-medium text-center'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                  >
                    Size (TB)
                  </th>
                  <th
                    className='py-4 px-6 font-medium text-right cursor-pointer hover:bg-white/5 transition-colors'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('parameters')}
                  >
                    Params{' '}
                    {sortField === 'parameters' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-medium text-right cursor-pointer hover:bg-white/5 transition-colors'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('contextLength')}
                  >
                    Context{' '}
                    {sortField === 'contextLength' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-medium text-right cursor-pointer hover:bg-white/5 transition-colors'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('inputPrice')}
                  >
                    In ($/M){' '}
                    {sortField === 'inputPrice' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-medium text-right cursor-pointer hover:bg-white/5 transition-colors'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('outputPrice')}
                  >
                    Out ($/M){' '}
                    {sortField === 'outputPrice' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-medium text-right cursor-pointer hover:bg-white/5 transition-colors'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('liveBench')}
                  >
                    LiveBench{' '}
                    {sortField === 'liveBench' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-medium text-center cursor-pointer hover:bg-white/5 transition-colors'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('multimodal')}
                  >
                    Multi{' '}
                    {sortField === 'multimodal' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-medium text-center cursor-pointer hover:bg-white/5 transition-colors'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('vision')}
                  >
                    Vision{' '}
                    {sortField === 'vision' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-medium text-center cursor-pointer hover:bg-white/5 transition-colors'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('functionCalling')}
                  >
                    Func{' '}
                    {sortField === 'functionCalling' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-medium text-center cursor-pointer hover:bg-white/5 transition-colors'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                    onClick={() => handleSort('search')}
                  >
                    Search{' '}
                    {sortField === 'search' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
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
                      className='py-4 px-6 font-medium sticky left-0 z-10'
                      style={{
                        backgroundColor: '#333138',
                        color: '#ffffff',
                        fontSize: '14px',
                      }}
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
                        {model.openSource ? model.license : 'Proprietary'}
                      </span>
                    </td>
                    <td
                      className='py-4 px-6'
                      style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '13px',
                      }}
                    >
                      {model.releaseDate}
                    </td>
                    <td
                      className='py-4 px-6 text-center'
                      style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                      {model.modelSizeGB >= 1000
                        ? (model.modelSizeGB / 1000).toFixed(1) + ' TB'
                        : 'n/a'}
                    </td>
                    <td
                      className='py-4 px-6 text-right font-medium'
                      style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '14px',
                      }}
                    >
                      {formatNumber(model.parameters)}
                      <span
                        style={{
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.4)',
                          display: 'block',
                        }}
                      >
                        {model.modelSizeGB}GB VRAM
                      </span>
                    </td>
                    <td
                      className='py-4 px-6 text-right font-medium'
                      style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '14px',
                      }}
                    >
                      {formatNumber(model.contextLength)}
                    </td>
                    <td className='py-4 px-6 text-right'>
                      <span
                        style={{
                          fontWeight: 500,
                          color: model.free
                            ? '#4ade80'
                            : 'rgba(255, 255, 255, 0.9)',
                        }}
                      >
                        {getPriceDisplay(model.inputPrice, model.free)}
                      </span>
                    </td>
                    <td className='py-4 px-6 text-right'>
                      <span
                        style={{
                          fontWeight: 500,
                          color: model.free
                            ? '#4ade80'
                            : 'rgba(255, 255, 255, 0.9)',
                        }}
                      >
                        {getPriceDisplay(model.outputPrice, model.free)}
                      </span>
                    </td>
                    <td
                      className='py-4 px-6 text-right font-medium'
                      style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '14px',
                      }}
                    >
                      {model.liveBench.toFixed(1)}%
                    </td>
                    <td
                      className='py-4 px-6 text-center'
                      style={{ fontSize: '16px' }}
                    >
                      <span
                        style={{
                          color: model.multimodal
                            ? '#00ffff'
                            : 'rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {getFeatureIcon(model.multimodal)}
                      </span>
                    </td>
                    <td
                      className='py-4 px-6 text-center'
                      style={{ fontSize: '16px' }}
                    >
                      <span
                        style={{
                          color: model.vision
                            ? '#00ffff'
                            : 'rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {getFeatureIcon(model.vision)}
                      </span>
                    </td>
                    <td
                      className='py-4 px-6 text-center'
                      style={{ fontSize: '16px' }}
                    >
                      <span
                        style={{
                          color: model.functionCalling
                            ? '#00ffff'
                            : 'rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {getFeatureIcon(model.functionCalling)}
                      </span>
                    </td>
                    <td
                      className='py-4 px-6 text-center'
                      style={{ fontSize: '16px' }}
                    >
                      <span
                        style={{
                          color: model.search
                            ? '#00ffff'
                            : 'rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {getFeatureIcon(model.search)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
          style={{
            backgroundColor: '#333138',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '32px',
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                color: '#ffffff',
                marginBottom: '16px',
                lineHeight: '1.2',
              }}
            >
              Pricing
            </h2>
            <ul
              className='space-y-3'
              style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}
            >
              <li className='flex items-center gap-2'>
                <span
                  style={{
                    padding: '2px 8px',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    color: '#4ade80',
                    borderRadius: '2px',
                    fontWeight: 500,
                    fontSize: '12px',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                  }}
                >
                  Free
                </span>
                <span>Open weights/No API cost</span>
              </li>
              <li className='flex items-center gap-2'>
                <strong style={{ color: '#ffffff' }}>$X.XX</strong>
                <span>Price per 1 Million Tokens</span>
              </li>
            </ul>
          </div>

          <div>
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                color: '#ffffff',
                marginBottom: '16px',
                lineHeight: '1.2',
              }}
            >
              Licensing
            </h2>
            <ul
              className='space-y-3'
              style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}
            >
              <li className='flex items-center gap-2'>
                <span
                  style={{
                    padding: '2px 8px',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    color: '#4ade80',
                    borderRadius: '2px',
                    fontWeight: 500,
                    fontSize: '12px',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                  }}
                >
                  Open Source
                </span>
                <span>Available for download</span>
              </li>
              <li className='flex items-center gap-2'>
                <span
                  style={{
                    padding: '2px 8px',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    color: '#818cf8',
                    borderRadius: '2px',
                    fontWeight: 500,
                    fontSize: '12px',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                  }}
                >
                  Proprietary
                </span>
                <span>API/Hosted access only</span>
              </li>
            </ul>
          </div>

          <div className='col-span-1 lg:col-span-2'>
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                color: '#ffffff',
                marginBottom: '16px',
                lineHeight: '1.2',
              }}
            >
              Feature Ticks
            </h2>
            <div
              className='grid grid-cols-2 gap-4'
              style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}
            >
              <div className='flex items-center gap-2'>
                <span style={{ fontSize: '16px', color: '#00ffff' }}>✓</span>
                <span>Supported out-of-the-box</span>
              </div>
              <div className='flex items-center gap-2'>
                <span
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.2)',
                  }}
                >
                  —
                </span>
                <span>Lacking capability</span>
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Multi:</strong> Natively
                Multimodal architecture
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Vision:</strong>{' '}
                Vision/Image input allowed
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Func:</strong> Native
                Function Calling support
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Search:</strong> Web Search
                grounding supported
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
