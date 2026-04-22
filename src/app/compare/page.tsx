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
    // Load model data from JSON file
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
        // Fallback to minimal hardcoded data if JSON fails
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
      setSortOrder('desc'); // Default to desc for metrics when switching
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
  };

  function getFeatureIcon(enabled: boolean): string {
    return enabled ? '✅' : '❌';
  }

  function getPriceDisplay(price: number, free: boolean): string {
    if (free) return 'Free';
    return `$${price.toFixed(2)}`;
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-zinc-50 dark:bg-[#0f2744] flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500'></div>
          <p className='mt-4 text-zinc-500 dark:text-zinc-400'>
            Loading model data...
          </p>
        </div>
      </div>
    );
  }

  if (error && frontierModels.length === 0) {
    return (
      <div className='min-h-screen bg-zinc-50 dark:bg-[#0f2744] flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-red-500 dark:text-red-400'>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-zinc-50 dark:bg-[#0f2744]'>
      <main className='max-w-[98vw] mx-auto px-4 sm:px-6 lg:px-10 py-8'>
        <div className='mb-12'>
          <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 tracking-tight'>
            ⚖️ Frontier Model Comparison
          </h1>
          <p className='text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl'>
            Compare the latest flagship AI models across pricing, capabilities,
            parameters, and benchmarks. Use the interactive column headers to
            sort the table.
          </p>
        </div>

        <div className='mb-4 text-right text-sm text-zinc-500 dark:text-zinc-400 px-6'>
          Last updated: April 23, 2026
        </div>
        <div className='bg-white dark:bg-[#153457] rounded-2xl border border-zinc-200 dark:border-zinc-800/50 shadow-xl shadow-blue-900/5 overflow-hidden mb-12'>
          <div className='overflow-x-auto custom-scrollbar'>
            <table className='w-full text-left border-collapse whitespace-nowrap'>
              <thead>
                <tr className='bg-zinc-50 dark:bg-zinc-800/50 text-sm border-b border-zinc-200 dark:border-zinc-800/50'>
                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors sticky left-0 z-10 bg-zinc-50 dark:bg-zinc-800/50 backdrop-blur'
                    onClick={() => handleSort('name')}
                  >
                    Model{' '}
                    {sortField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                    onClick={() => handleSort('provider')}
                  >
                    Provider{' '}
                    {sortField === 'provider' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                    onClick={() => handleSort('openSource')}
                  >
                    License{' '}
                    {sortField === 'openSource' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200'>
                    Released
                  </th>
                  <th className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-center'>
                    Size (TB)
                  </th>
                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-right cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                    onClick={() => handleSort('parameters')}
                  >
                    Params{' '}
                    {sortField === 'parameters' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-right cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                    onClick={() => handleSort('contextLength')}
                  >
                    Context{' '}
                    {sortField === 'contextLength' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>                  
                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-right cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                    onClick={() => handleSort('inputPrice')}
                  >
                    In ($/M){' '}
                    {sortField === 'inputPrice' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-right cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                    onClick={() => handleSort('outputPrice')}
                  >
                    Out ($/M){' '}
                    {sortField === 'outputPrice' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>

                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-right cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                    onClick={() => handleSort('liveBench')}
                  >
                    LiveBench{' '}
                    {sortField === 'liveBench' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-center cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                    onClick={() => handleSort('multimodal')}
                  >
                    Multi{' '}
                    {sortField === 'multimodal' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-center cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                    onClick={() => handleSort('vision')}
                  >
                    Vision{' '}
                    {sortField === 'vision' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-center cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                    onClick={() => handleSort('functionCalling')}
                  >
                    Func{' '}
                    {sortField === 'functionCalling' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-center cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                    onClick={() => handleSort('search')}
                  >
                    Search{' '}
                    {sortField === 'search' &&
                      (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-zinc-200 dark:divide-zinc-800/50'>
                {sortedModels.map((model) => (
                  <tr
                    key={model.id}
                    className='hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group'
                  >
                    <td className='py-4 px-6 font-medium text-zinc-900 dark:text-zinc-100 sticky left-0 z-10 bg-white dark:bg-[#153457] group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/80'>
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
                        {model.openSource ? model.license : 'Proprietary'}
                      </span>
                    </td>
                    <td className='py-4 px-6 text-zinc-600 dark:text-zinc-400 text-sm'>
                      {model.releaseDate}
                    </td>
                    <td className='py-4 px-6 text-center'>
                      {model.modelSizeGB >= 1000
                        ? (model.modelSizeGB / 1000).toFixed(1) + ' TB'
                        : 'n/a'}
                    </td>
                    <td className='py-4 px-6 text-right font-medium text-zinc-700 dark:text-zinc-300'>
                      {formatNumber(model.parameters)}
                      <span className='text-xs text-zinc-400 block'>
                        {model.modelSizeGB}GB VRAM
                      </span>
                    </td>
                    <td className='py-4 px-6 text-right font-medium text-zinc-700 dark:text-zinc-300'>
                      {formatNumber(model.contextLength)}
                    </td>
                    <td className='py-4 px-6 text-right'>
                      <span
                        className={`font-medium ${model.free ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-700 dark:text-zinc-300'}`}
                      >
                        {getPriceDisplay(model.inputPrice, model.free)}
                      </span>
                    </td>
                    <td className='py-4 px-6 text-right'>
                      <span
                        className={`font-medium ${model.free ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-700 dark:text-zinc-300'}`}
                      >
                        {getPriceDisplay(model.outputPrice, model.free)}
                      </span>
                    </td>

                    <td className='py-4 px-6 text-right font-semibold text-zinc-700 dark:text-zinc-300'>
                      {model.liveBench.toFixed(1)}%
                    </td>
                    <td className='py-4 px-6 text-center text-lg'>
                      {getFeatureIcon(model.multimodal)}
                    </td>
                    <td className='py-4 px-6 text-center text-lg'>
                      {getFeatureIcon(model.vision)}
                    </td>
                    <td className='py-4 px-6 text-center text-lg'>
                      {getFeatureIcon(model.functionCalling)}
                    </td>
                    <td className='py-4 px-6 text-center text-lg'>
                      {getFeatureIcon(model.search)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white dark:bg-[#153457] rounded-2xl border border-zinc-200 dark:border-zinc-800/50 p-8 shadow-xl shadow-blue-900/5'>
          <div>
            <h2 className='text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2'>
              <span className='text-blue-500'>💰</span> Pricing
            </h2>
            <ul className='space-y-3 text-sm text-zinc-600 dark:text-zinc-400'>
              <li className='flex items-center gap-2'>
                <span className='px-2 py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 rounded font-medium border border-emerald-200 dark:border-emerald-500/20'>
                  Free
                </span>
                <span>Open weights/No API cost</span>
              </li>
              <li className='flex items-center gap-2'>
                <strong className='text-zinc-900 dark:text-zinc-100'>
                  $X.XX
                </strong>
                <span>Price per 1 Million Tokens</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2'>
              <span className='text-purple-500'>📜</span> Licensing
            </h2>
            <ul className='space-y-3 text-sm text-zinc-600 dark:text-zinc-400'>
              <li className='flex items-center gap-2'>
                <span className='px-2 py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 rounded font-medium border border-emerald-200 dark:border-emerald-500/20'>
                  Open Source
                </span>
                <span>Available for download</span>
              </li>
              <li className='flex items-center gap-2'>
                <span className='px-2 py-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 rounded font-medium border border-indigo-200 dark:border-indigo-500/20'>
                  Proprietary
                </span>
                <span>API/Hosted access only</span>
              </li>
            </ul>
          </div>

          <div className='col-span-1 lg:col-span-2'>
            <h2 className='text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2'>
              <span className='text-amber-500'>⚙️</span> Feature Ticks
            </h2>
            <div className='grid grid-cols-2 gap-4 text-sm text-zinc-600 dark:text-zinc-400'>
              <div className='flex items-center gap-2'>
                <span className='text-lg'>✅</span> Supported out-of-the-box
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-lg'>❌</span> Lacking capability
              </div>
              <div>
                <strong>Multi:</strong> Natively Multimodal architecture
              </div>
              <div>
                <strong>Vision:</strong> Vision/Image input allowed
              </div>
              <div>
                <strong>Func:</strong> Native Function Calling support
              </div>
              <div>
                <strong>Search:</strong> Web Search grounding supported
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
