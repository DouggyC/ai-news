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
import { BenchmarkModel } from '@/types/index';

interface BenchmarkChartProps {
  benchmarkModels: BenchmarkModel[];
  providerColors: Record<string, string>;
}

interface CustomLegendProps {
  models: BenchmarkModel[];
  activeModels: string[];
  toggleModel: (modelId: string) => void;
  providerColors: Record<string, string>;
}

function CustomLegend({
  models,
  activeModels,
  toggleModel,
  providerColors,
}: CustomLegendProps) {
  return (
    <div className='flex flex-wrap justify-center gap-3 mt-8'>
      {models.map((model) => {
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

export default function BenchmarkChart({
  benchmarkModels,
  providerColors,
}: BenchmarkChartProps) {
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

  return (
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
            <linearGradient id='grid-gradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#00ffff' stopOpacity={0.1} />
              <stop offset='100%' stopColor='#0007cd' stopOpacity={0.05} />
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
                models={benchmarkModels}
                activeModels={activeModels}
                toggleModel={toggleModel}
                providerColors={providerColors}
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
  );
}
