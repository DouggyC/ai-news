'use client';

import { useRef, useState, useEffect } from 'react';
import { ProductRow } from '@/types/index';

interface ProductTableProps {
  productData: ProductRow[];
}

const companyOrder = [
  'Apple',
  'NVIDIA',
  'NVIDIA-Vera',
  'Microsoft',
  'Microsoft-Code',
  'Google',
  'Google-NanoBanana-Lite',
  'Google-Omni-Flash',
  'Amazon',
  'Meta',
  'Oracle',
  'ByteDance',
  'Adobe',
  'Tencent',
  'Alibaba',
  'Baidu',
  'Z.ai',
  'Salesforce',
  'OpenAI',
  'Anthropic',
  'Claude Tag',
  'Anthropic-Sonnet-5',
  'Claude Science',
  'OpenAI-Realtime-2',
  'OpenAI-Realtime-Translate',
  'OpenAI-Realtime-Whisper',
  'xAI',
  'DeepSeek',
  'xAI-Voice-Builder',
  'Mistral',
  'MiniMax',
  'Moonshot',
  'JetBrains',
  'Perplexity',
  'Computer for Counsel',
  'Cursor',
  'Cloudflare',
  'Cohere',
  'Cognition',
  'Midjourney',
  'Runway',
  'Pika',
  'Runway Characters',
  'HeyGen',
  'Luma',
  'StabilityAI',
  'BlackForest',
  'LangChain',
  'LangGraph',
  'LangGraph-Cloud',
  'Langflow',
  'AssemblyAI',
  'Suno',
  'Udio',
  'ElevenLabs',
  'PlayHT',
  'WellSaid',
  'Murf',
  'Coqui',
  'Temporal',
  'Make',
  'Courier',
  'Zapier',
  'HuggingFace',
'HuggingFace-Serge',
'OpenRouter',
'Replicate',
  'OpenRouter-Advisor',
  'OpenRouter-Subagent',
  'OpenRouter-MCP',
  'OpenRouter-Image',
  'Replicate',
  'Reve',
  'Ollama',
  'LMStudio',
  'Cresta',
  'CrewAI',
  'AutoGen',
  'Nous Research',
  'Kilo',
  'n8n',
  'OpenClaw',
  'deepset',
  'FlowiseAI',
  'Jan',
  'LocalAI',
  'vLLM',
  'Vellum',
  'Sakana',
];


function getCompanyBadgeStyle(company: string): React.CSSProperties {
  const colors: Record<string, string> = {
    Apple:
      'backgroundColor:rgba(156, 163, 175, 0.2);color:#9ca3af;borderColor:rgba(156, 163, 175, 0.3)',
    NVIDIA:
      'backgroundColor:rgba(118, 185, 0, 0.2);color:#76b900;borderColor:rgba(118, 185, 0, 0.3)',
    Microsoft:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    Google:
      'backgroundColor:rgba(59, 130, 246, 0.2);color:#60a5fa;borderColor:rgba(59, 130, 246, 0.3)',
    Amazon:
      'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    Meta: 'backgroundColor:rgba(168, 85, 247, 0.2);color:#c084fc;borderColor:rgba(168, 85, 247, 0.3)',
    Oracle:
      'backgroundColor:rgba(239, 68, 68, 0.2);color:#ef4444;borderColor:rgba(239, 68, 68, 0.3)',
    ByteDance:
      'backgroundColor:rgba(239, 68, 68, 0.2);color:#f87171;borderColor:rgba(239, 68, 68, 0.3)',
    Adobe:
      'backgroundColor:rgba(239, 68, 68, 0.2);color:#f87171;borderColor:rgba(239, 68, 68, 0.3)',
    Tencent:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    Alibaba:
      'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    Baidu:
      'backgroundColor:rgba(59, 130, 246, 0.2);color:#60a5fa;borderColor:rgba(59, 130, 246, 0.3)',
    'Z.ai':
      'backgroundColor:rgba(236, 72, 153, 0.2);color:#f472b6;borderColor:rgba(236, 72, 153, 0.3)',

    OpenAI:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    Anthropic:
      'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    'Claude Tag': 'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    xAI: 'backgroundColor:rgba(255, 255, 255, 0.1);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.15)',
    DeepSeek:
      'backgroundColor:rgba(239, 68, 68, 0.2);color:#f87171;borderColor:rgba(239, 68, 68, 0.3)',
    Mistral:
      'backgroundColor:rgba(6, 182, 212, 0.2);color:#22d3ee;borderColor:rgba(6, 182, 212, 0.3)',
    'MiniMax':
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    JetBrains:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    Perplexity:
      'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    'Computer for Counsel': 'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    Cursor:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    Midjourney:
      'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.1)',
    Runway:
      'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.1)',
    Pika: 'backgroundColor:rgba(236, 72, 153, 0.2);color:#f472b6;borderColor:rgba(236, 72, 153, 0.3)',
    HeyGen:
      'backgroundColor:rgba(139, 92, 246, 0.2);color:#a78bfa;borderColor:rgba(139, 92, 246, 0.3)',
    Luma: 'backgroundColor:rgba(56, 189, 248, 0.2);color:#38bdf8;borderColor:rgba(56, 189, 248, 0.3)',
    StabilityAI:
      'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    BlackForest:
      'backgroundColor:rgba(59, 130, 246, 0.2);color:#60a5fa;borderColor:rgba(59, 130, 246, 0.3)',
    LangChain:
      'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    AssemblyAI:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    Suno: 'backgroundColor:rgba(236, 72, 153, 0.2);color:#f472b6;borderColor:rgba(236, 72, 153, 0.3)',
    Udio: 'backgroundColor:rgba(244, 63, 94, 0.2);color:#fb7185;borderColor:rgba(244, 63, 94, 0.3)',
    ElevenLabs:
      'backgroundColor:rgba(168, 85, 247, 0.2);color:#c084fc;borderColor:rgba(168, 85, 247, 0.3)',
    PlayHT:
      'backgroundColor:rgba(59, 130, 246, 0.2);color:#60a5fa;borderColor:rgba(59, 130, 246, 0.3)',
    WellSaid:
      'backgroundColor:rgba(139, 92, 246, 0.2);color:#a78bfa;borderColor:rgba(139, 92, 246, 0.3)',
    Murf: 'backgroundColor:rgba(236, 72, 153, 0.2);color:#f472b6;borderColor:rgba(236, 72, 153, 0.3)',
    Coqui:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    Temporal:
      'backgroundColor:rgba(139, 92, 246, 0.2);color:#a78bfa;borderColor:rgba(139, 92, 246, 0.3)',
    Make: 'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    Courier:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    Zapier:
      'backgroundColor:rgba(239, 68, 68, 0.2);color:#ef4444;borderColor:rgba(239, 68, 68, 0.3)',
    HuggingFace:
      'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    Replicate:
      'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.1)',
    OpenRouter:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',

    Reve:
      'backgroundColor:rgba(217, 70, 239, 0.2);color:#e879f9;borderColor:rgba(217, 70, 239, 0.3)',
    Ollama:
      'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.1)',
    LMStudio:
      'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.1)',
    Cresta:
      'backgroundColor:rgba(20, 184, 166, 0.2);color:#2dd4bf;borderColor:rgba(20, 184, 166, 0.3)',
    CrewAI:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    MultiOn:
      'backgroundColor:rgba(59, 130, 246, 0.2);color:#60a5fa;borderColor:rgba(59, 130, 246, 0.3)',
    AutoGen:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    LangGraph:
      'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    n8n: 'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    OpenClaw:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    deepset:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    FlowiseAI:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    vLLM: 'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    Vellum: 'backgroundColor:rgba(168, 85, 247, 0.2);color:#c084fc;borderColor:rgba(168, 85, 247, 0.3)',
    Sakana: 'backgroundColor:rgba(14, 165, 233, 0.2);color:#0ea5e9;borderColor:rgba(14, 165, 233, 0.3)',
    'LangGraph-Cloud': 'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    Langflow: 'backgroundColor:rgba(168, 85, 247, 0.2);color:#c084fc;borderColor:rgba(168, 85, 247, 0.3)',
    'Nous Research': 'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    Kilo: 'backgroundColor:rgba(6, 182, 212, 0.2);color:#22d3ee;borderColor:rgba(6, 182, 212, 0.3)',
    Cloudflare:
      'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    Cognition:
      'backgroundColor:rgba(20, 184, 166, 0.2);color:#2dd4bf;borderColor:rgba(20, 184, 166, 0.3)',
    'NVIDIA-Vera':
      'backgroundColor:rgba(118, 185, 0, 0.2);color:#76b900;borderColor:rgba(118, 185, 0, 0.3)',
    'OpenAI-Realtime-2':
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    'OpenAI-Realtime-Translate':
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    'OpenAI-Realtime-Whisper':
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    'Runway Characters': 'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.1)',

    Jan: 'backgroundColor:rgba(244, 63, 94, 0.2);color:#fb7185;borderColor:rgba(244, 63, 94, 0.3)',
    LocalAI: 'backgroundColor:rgba(20, 184, 166, 0.2);color:#2dd4bf;borderColor:rgba(20, 184, 166, 0.3)',
    Salesforce: 'backgroundColor:rgba(14, 165, 233, 0.2);color:#0ea5e9;borderColor:rgba(14, 165, 233, 0.3)',
    Cohere: 'backgroundColor:rgba(185, 28, 28, 0.2);color:#b91c1c;borderColor:rgba(185, 28, 28, 0.3)',
    Moonshot: 'backgroundColor:rgba(124, 58, 237, 0.2);color:#7c3aed;borderColor:rgba(124, 58, 237, 0.3)',
    'Microsoft-Code': 'backgroundColor:rgba(99, 102, 241, 0.2);color:#a5b4fc;borderColor:rgba(99, 102, 241, 0.3)',
    'HuggingFace-Serge': 'backgroundColor:rgba(234, 179, 8, 0.2);color:#fde047;borderColor:rgba(234, 179, 8, 0.3)',
    'Anthropic-Sonnet-5': 'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    'Claude Science': 'backgroundColor:rgba(249, 115, 22, 0.2);color:#fdba74;borderColor:rgba(249, 115, 22, 0.3)',
    'Google-NanoBanana-Lite': 'backgroundColor:rgba(59, 130, 246, 0.2);color:#93c5fd;borderColor:rgba(59, 130, 246, 0.3)',
    'Google-Omni-Flash': 'backgroundColor:rgba(56, 189, 248, 0.2);color:#7dd3fc;borderColor:rgba(56, 189, 248, 0.3)',
    'xAI-Voice-Builder': 'backgroundColor:rgba(255, 255, 255, 0.1);color:rgba(255, 255, 255, 0.85);borderColor:rgba(255, 255, 255, 0.25)',
    'OpenRouter-Advisor': 'backgroundColor:rgba(99, 102, 241, 0.2);color:#a5b4fc;borderColor:rgba(99, 102, 241, 0.3)',
    'OpenRouter-Subagent': 'backgroundColor:rgba(99, 102, 241, 0.2);color:#c7d2fe;borderColor:rgba(99, 102, 241, 0.3)',
    'OpenRouter-MCP': 'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.4)',
    'OpenRouter-Image': 'backgroundColor:rgba(99, 102, 241, 0.2);color:#6366f1;borderColor:rgba(99, 102, 241, 0.3)',
  };

  const style =
    colors[company] ||
    'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.5);borderColor:rgba(255, 255, 255, 0.08)';

  const result: Record<string, string> = {};
  const parts = style.split(';').filter(Boolean);
  for (const part of parts) {
    const [key, value] = part.split(':').map((s) => s.trim());
    if (key && value) {
      const camelKey = key.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase(),
      );
      result[camelKey] = value;
    }
  }
  return result as React.CSSProperties;
}

export function ProductTable({ productData }: ProductTableProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const activeCompanies = companyOrder.filter((company) =>
    productData.some(
      (row) =>
        row.products[company] !== null && row.products[company] !== undefined,
    ),
  );

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const checkOverflow = () => {
      setShowLeftArrow(scrollEl.scrollLeft > 0);
      setShowRightArrow(
        scrollEl.scrollLeft < scrollEl.scrollWidth - scrollEl.clientWidth - 1
      );
    };

    checkOverflow();
    scrollEl.addEventListener('scroll', checkOverflow, { passive: true });
    window.addEventListener('resize', checkOverflow);
    return () => {
      scrollEl.removeEventListener('scroll', checkOverflow);
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  const scrollBy = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  return (
    <div
      style={{
        backgroundColor: '#333138',
        borderRadius: '4px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.15)',
        position: 'relative',
      }}
    >
      {showLeftArrow && (
        <button
          onClick={() => scrollBy('left')}
          className='btn-ghost absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 p-0 flex items-center justify-center'
          style={{ backgroundColor: 'rgba(51, 49, 56, 0.9)', backdropFilter: 'blur(4px)' }}
          aria-label='Scroll left'
        >
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path d='M10 12L6 8L10 4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
          </svg>
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={() => scrollBy('right')}
          className='btn-ghost absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 p-0 flex items-center justify-center'
          style={{ backgroundColor: 'rgba(51, 49, 56, 0.9)', backdropFilter: 'blur(4px)' }}
          aria-label='Scroll right'
        >
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path d='M6 12L10 8L6 4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
          </svg>
        </button>
      )}
      <div ref={scrollRef} className='overflow-x-auto custom-scrollbar'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <th
                className='py-4 px-6 font-medium'
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '13px',
                }}
              >
                Category
              </th>
              {activeCompanies.map((company) => (
                <th
                  key={company}
                  className='py-4 px-6 font-medium text-center'
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '13px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '2px',
                      fontSize: '11px',
                      fontWeight: 500,
                      ...getCompanyBadgeStyle(company),
                      borderWidth: '1px',
                      borderStyle: 'solid',
                    }}
                  >
                    {company}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className='divide-y'
            style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}
          >
            {productData.map((row) => (
              <tr
                key={row.category}
                className='hover:bg-white/5 transition-colors group'
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <td
                  className='py-2 px-6 font-medium'
                  style={{ color: '#ffffff', fontSize: '12px' }}
                >
                  {row.category}
                </td>
                {activeCompanies.map((company) => {
                  const product = row.products[company];
                  if (!product) {
                    return (
                      <td
                        key={company}
                        className='py-2 px-6 text-center'
                        style={{
                          color: 'rgba(255, 255, 255, 0.2)',
                          fontSize: '12px',
                        }}
                      >
                        —
                      </td>
                    );
                  }
                  return (
                    <td key={company} className='py-2 px-6 text-center'>
                      {product.url ? (
                        <a
                          href={product.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          style={{
                            fontSize: '12px',
                            color: '#00ffff',
                            fontWeight: 500,
                            textDecoration: 'none',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.textDecoration = 'underline';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.textDecoration = 'none';
                          }}
                        >
                          {product.name}
                        </a>
                      ) : (
                        <span
                          style={{
                            fontSize: '12px',
                            color: '#ffffff',
                            fontWeight: 500,
                          }}
                        >
                          {product.name}
                        </span>
                      )}
                      {product.description && (
                        <p
                          style={{
                            fontSize: '10px',
                            color: 'rgba(255, 255, 255, 0.4)',
                            marginTop: '2px',
                            lineHeight: '1.4',
                          }}
                        >
                          {product.description}
                        </p>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}