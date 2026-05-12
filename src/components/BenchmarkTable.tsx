'use client';

import { useState } from 'react';
import { BenchmarkModel } from '@/types/index';

interface BenchmarkTableProps {
  benchmarkModels: BenchmarkModel[];
  providerColors: Record<string, string>;
}

export default function BenchmarkTable({
  benchmarkModels,
  providerColors,
}: BenchmarkTableProps) {
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

    return 0;
  });
  return (
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
                  {sortField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
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
                  MMLU {sortField === 'mmlu' && (sortOrder === 'asc' ? '↑' : '↓')}
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
                  GPQA {sortField === 'gpqa' && (sortOrder === 'asc' ? '↑' : '↓')}
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
                  {model.mmlu !== null ? `${model.mmlu.toFixed(1)}%` : 'N/A'}
                </td>
                <td
                  className='py-4 px-6 text-right font-medium'
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '14px',
                  }}
                >
                  {model.mmluPlus !== null ? `${model.mmluPlus.toFixed(1)}%` : 'N/A'}
                </td>
                <td
                  className='py-4 px-6 text-right font-medium'
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '14px',
                  }}
                >
                  {model.humaneval !== null ? `${model.humaneval.toFixed(1)}%` : 'N/A'}
                </td>
                <td
                  className='py-4 px-6 text-right font-medium'
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '14px',
                  }}
                >
                  {model.livebench !== null ? `${model.livebench.toFixed(1)}%` : 'N/A'}
                </td>
                <td
                  className='py-4 px-6 text-right font-medium'
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '14px',
                  }}
                >
                  {model.gpqa !== null ? `${model.gpqa.toFixed(1)}%` : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}