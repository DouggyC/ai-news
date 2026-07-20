'use client';

import { useState } from 'react';
import newsCardsData from '@/data/newsCards.json';
import { NewsCard } from '@/types/index';
import { validateData, NewsCardSchema } from '@/schemas/index';

const newsCards = validateData(
  NewsCardSchema.array(),
  newsCardsData,
  'newsCards.json',
);

const top15Companies = [
  'NVIDIA',
  'Microsoft',
  'Google',
  'Amazon',
  'Meta',
  'Oracle',
  'ByteDance',
  'Adobe',
  'Alibaba',
  'OpenAI',
  'Anthropic',
  'SpaceXAI',
  'DeepSeek',
  'Mistral',
  'Minimax',
  'Moonshot',
  'Apple',
  'StabilityAI',
  'Runway',
  'Perplexity',
  'Hugging Face',
  'Zhipu AI',
  'Corti',
  'Pony.ai',
];

function getCategoryColor(category: NewsCard['category']): string {
  const colors = {
    model:
      'background: rgba(0, 255, 255, 0.12); color: #00ffff; border: 1px solid rgba(0, 150, 255, 0.5);',
    product:
      'background: rgba(0, 119, 255, 0.12); color: #0089ff; border: 1px solid rgba(0, 137, 255, 0.5);',
    tool: 'background: rgba(0, 150, 255, 0.12); color: #0096ff; border: 1px solid rgba(0, 137, 255, 0.5);',
    capability:
      'background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.5); border: 1px solid rgba(255, 255, 255, 0.08);',
    research:
      'background: rgba(255, 255, 255, 0.04); color: rgba(255, 255, 255, 0.5); border: 1px solid rgba(255, 255, 255, 0.04);',
  };
  return colors[category];
}

function getCategoryLabel(category: NewsCard['category']): string {
  const labels = {
    model: 'Model',
    product: 'Product',
    tool: 'Tool',
    capability: 'Capability',
    research: 'Research',
  };
  return labels[category];
}

function getCompanyColor(company: string): string {
  const colors: Record<string, string> = {
    NVIDIA: 'background: rgba(118, 185, 0, 0.2); color: #76b900;',
    Microsoft: 'background: rgba(99, 102, 241, 0.2); color: #818cf8;',
    Google: 'background: rgba(59, 130, 246, 0.2); color: #60a5fa;',
    Amazon: 'background: rgba(249, 115, 22, 0.2); color: #fb923c;',
    Meta: 'background: rgba(168, 85, 247, 0.2); color: #c084fc;',
    Oracle: 'background: rgba(239, 68, 68, 0.2); color: #ef4444;',
    ByteDance: 'background: rgba(239, 68, 68, 0.2); color: #f87171;',
    Adobe: 'background: rgba(239, 68, 68, 0.2); color: #f87171;',
    Alibaba: 'background: rgba(234, 179, 8, 0.2); color: #fbbf24;',
    OpenAI: 'background: rgba(34, 197, 94, 0.2); color: #4ade80;',
    Anthropic: 'background: rgba(249, 115, 22, 0.2); color: #fb923c;',
    SpaceXAI: 'background: rgba(229, 231, 235, 0.12); color: #e5e7eb; border: 1px solid rgba(229, 231, 235, 0.3);',
    DeepSeek: 'background: rgba(239, 68, 68, 0.2); color: #f87171;',
    Mistral: 'background: rgba(6, 182, 212, 0.2); color: #22d3ee;',
    Minimax: 'background: rgba(99, 102, 241, 0.2); color: #818cf8;',
    Moonshot: 'background: rgba(168, 85, 247, 0.2); color: #c084fc;',
  };
  return (
    colors[company] ||
    'background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.5);'
  );
}

export default function AINewsPage() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const companies = [
    'OpenAI',
    'Anthropic',
    'Google',
    'Meta',
    'SpaceXAI',
    'NVIDIA',
    'DeepSeek',
    'Minimax',
    'Mistral',
    'ByteDance',
    'Alibaba',
    'Apple',
  ];

  const filteredCards = newsCards
    .filter((card) => top15Companies.includes(card.source))
    .filter((card) => !selectedCompany || card.source === selectedCompany)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 24);

  return (
    <div className='min-h-screen'>
      <main className='mx-auto px-4 sm:px-6 lg:px-10 py-8'>
        <div className='mb-8'>
          <h1
            style={{
              fontSize: '3rem',
              lineHeight: '0.87',
              fontWeight: 400,
              color: '#ffffff',
              marginBottom: '8px',
            }}
          >
            AI News
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1rem' }}>
            Last updated: July 19, 2026
          </p>
        </div>

        <div className='flex flex-wrap gap-2 mb-8'>
          <button
            onClick={() => setSelectedCompany(null)}
            className='px-3 py-1.5 rounded text-sm font-medium transition-all'
            style={{
              background:
                selectedCompany === null
                  ? 'rgba(0, 255, 255, 0.15)'
                  : 'rgba(255, 255, 255, 0.06)',
              color:
                selectedCompany === null
                  ? '#00ffff'
                  : 'rgba(255, 255, 255, 0.5)',
              border:
                selectedCompany === null
                  ? '1px solid rgba(0, 255, 255, 0.4)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            All
          </button>
          {companies.map((company) => (
            <button
              key={company}
              onClick={() =>
                setSelectedCompany(selectedCompany === company ? null : company)
              }
              className='px-3 py-1.5 rounded text-sm font-medium transition-all'
              style={{
                background:
                  selectedCompany === company
                    ? 'rgba(0, 255, 255, 0.15)'
                    : 'rgba(255, 255, 255, 0.06)',
                color:
                  selectedCompany === company
                    ? '#00ffff'
                    : 'rgba(255, 255, 255, 0.5)',
                border:
                  selectedCompany === company
                    ? '1px solid rgba(0, 255, 255, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {company}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {filteredCards.map((card) => (
            <a
              key={card.id}
              href={card.sourceUrl}
              target='_blank'
              rel='noopener noreferrer'
              title={card.title}
              className='group'
              style={{
                backgroundColor: '#333138',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.3)';
                e.currentTarget.style.boxShadow =
                  '4px 4px 0px 0px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className='relative h-40 overflow-hidden'>
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  style={{ backgroundColor: '#1a1a1a' }}
                />
                <div className='absolute top-3 left-3 flex gap-2'>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '2px',
                      fontSize: '11px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.3px',
                      ...Object.fromEntries(
                        getCategoryColor(card.category)
                          .split(';')
                          .filter((s) => s.trim())
                          .map((s) => {
                            const [k, v] = s.split(':').map((x) => x.trim());
                            return [k, v];
                          }),
                      ),
                    }}
                  >
                    {getCategoryLabel(card.category)}
                  </span>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '2px',
                      fontSize: '11px',
                      fontWeight: 500,
                      ...Object.fromEntries(
                        getCompanyColor(card.source)
                          .split(';')
                          .filter((s) => s.trim())
                          .map((s) => {
                            const [k, v] = s.split(':').map((x) => x.trim());
                            return [k, v];
                          }),
                      ),
                    }}
                  >
                    {card.source}
                  </span>
                </div>
              </div>

              <div className='p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <span
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.4)',
                    }}
                  >
                    {new Date(card.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <h3
                  className='mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors'
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    lineHeight: '1.2',
                    color: '#ffffff',
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className='text-sm line-clamp-2'
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '14px',
                    lineHeight: '1.5',
                  }}
                >
                  {card.summary}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className='mt-8 text-center'>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.4)' }}>
            Showing {filteredCards.length} news items from top 15 foundation
            model companies • Click cards to read full articles
          </p>
        </div>
      </main>
    </div>
  );
}
