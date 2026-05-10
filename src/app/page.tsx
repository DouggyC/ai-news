'use client';

interface NewsCard {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  imageUrl: string;
  category: 'model' | 'product' | 'tool' | 'capability' | 'research';
  publishedAt: string;
}

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
  'xAI',
  'DeepSeek',
  'Mistral',
  'Minimax',
  'Moonshot',
  'Apple',
  'Apple',
  'StabilityAI',
  'Runway',
  'Perplexity',
  'Hugging Face',
  'Zhipu AI',
  'Corti',
  'Pony.ai',
];

const newsCards: NewsCard[] = [
  {
    id: '1',
    title: 'GPT-5.5 Instant launches with smarter, clearer responses and better personalization',
    summary: 'GPT-5.5 Instant launches with smarter, clearer responses and better personalization using past chats, files, and Gmail context. Memory features give users visibility and control.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/gpt-5-5-instant/',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-05-05',
  },
  {
    id: '2',
    title: 'OpenAI launches dedicated Codex Chrome extension for browser AI workflows',
    summary: 'OpenAI launches a dedicated Chrome extension for Codex, enabling AI-powered browser workflows and web automation directly from the browser.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/codex-chrome-extension/',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-05-07',
  },
  {
    id: '3',
    title: 'iOS 27 will let you choose between Gemini, Claude, and more for AI features',
    summary: 'iOS 27 will let users choose from multiple third-party AI models (Claude, Gemini, Grok) to power Apple Intelligence features.',
    source: 'Apple',
    sourceUrl: 'https://9to5mac.com/2026/05/05/ios-27-will-let-you-choose-between-gemini-claude-and-more-for-ai-features-report/',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-05-05',
  },
  {
    id: '4',
    title: 'Claude Opus 4.7 launches as Anthropic most capable generally available model',
    summary: 'Claude Opus 4.7 launches as Anthropic\'s most capable generally available model, with 13% resolution improvement over Opus 4.6 on coding benchmarks.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/claude-opus-4-7',
    imageUrl: 'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'model',
    publishedAt: '2026-04-16',
  },
  {
    id: '5',
    title: 'Mistral releases Medium 3.5, a 128B dense open-weight model replacing three prior products',
    summary: 'Mistral releases Medium 3.5, a 128B dense open-weight model replacing three prior products. Scores 77.6% on SWE-Bench Verified.',
    source: 'Mistral',
    sourceUrl: 'https://mistral.ai/news/mistral-medium-3-5',
    imageUrl: 'https://aihub.qualcomm.com/_next/image?url=%2Fimg%2Fecosystem%2F1920x1080%2Fmistral-ai.webp&w=3840&q=75',
    category: 'model',
    publishedAt: '2026-05-01',
  },
  {
    id: '6',
    title: 'Gemini 3.1 Flash-Lite, Google\'s fastest and most cost-efficient Gemini 3 series model, now GA',
    summary: 'Gemini 3.1 Flash-Lite, Google\'s fastest and most cost-efficient Gemini 3 series model, now generally available on Gemini Enterprise Agent Platform.',
    source: 'Google',
    sourceUrl: 'https://cloud.google.com/blog/products/ai-machine-learning/gemini-3-1-flash-lite-ga',
    imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'model',
    publishedAt: '2026-05-07',
  },
  {
    id: '7',
    title: 'Grok 4.20 and Grok 4.20 Multi-agent live in Enterprise API with multi-agent Beta',
    summary: 'Grok 4.20 and Grok 4.20 Multi-agent live in Enterprise API with multi-agent Beta access. Features 4-agent collaborative architecture.',
    source: 'xAI',
    sourceUrl: 'https://docs.x.ai/developers/models/grok-4.20',
    imageUrl: 'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'model',
    publishedAt: '2026-05-05',
  },
  {
    id: '8',
    title: 'NVIDIA\'s Nemotron-3-Super becomes top-performing open-source AI model',
    summary: 'NVIDIA\'s Nemotron-3-Super becomes top-performing open-source AI model, outpacing DeepSeek and GPT-OSS on key benchmarks.',
    source: 'NVIDIA',
    sourceUrl: 'https://blogs.nvidia.com/blog/nemotron-3-super-agentic-ai/',
    imageUrl: 'https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-05-04',
  },
  {
    id: '9',
    title: 'DeepSeek-V4-Pro launches as open-source with 1M token context',
    summary: 'DeepSeek-V4-Pro (1.6T total / 49B active params) launches as open-source with 1M token context. Achieves open-source SOTA in Agentic Coding.',
    source: 'DeepSeek',
    sourceUrl: 'https://api-docs.deepseek.com/news/news260424',
    imageUrl: 'https://preview.redd.it/deepseek-v4-all-leaks-and-infos-for-the-release-day-not-v0-lllfdd3uvimg1.png?width=640&crop=smart&auto=webp&s=2492384251ab16ffeac1c5d0317dd71610c3c077',
    category: 'model',
    publishedAt: '2026-04-24',
  },
  {
    id: '10',
    title: 'ByteDance releases Doubao-Seed-2.0-lite, first full-modal understanding model',
    summary: 'ByteDance releases Doubao-Seed-2.0-lite, the first full-modal understanding model achieving native unified understanding of video, images, audio, and text.',
    source: 'ByteDance',
    sourceUrl: 'https://www.volcengine.com/product/doubao',
    imageUrl: 'https://cdn.technobezz.com/c/Technobezz_2026_02_14_T092431_822_304d822711.png',
    category: 'model',
    publishedAt: '2026-05-07',
  },
  {
    id: '11',
    title: 'Google unveils Workspace Intelligence enabling Gemini to understand file relationships',
    summary: 'Google unveils Workspace Intelligence at Cloud Next 2026, enabling Gemini to understand relationships between files, projects, and collaborators.',
    source: 'Google',
    sourceUrl: 'https://workspaceupdates.googleblog.com/2026/04/new-gemini-capabilities-in-google-docs',
    imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-22',
  },
  {
    id: '12',
    title: 'Apple announces WWDC 2026 preview with redesigned Siri powered by Google Gemini',
    summary: 'Apple announces WWDC 2026 (June 8) will preview a redesigned Siri powered by Google\'s Gemini, with dynamic Island integration.',
    source: 'Apple',
    sourceUrl: 'https://macrumors.com/article/apple-wwdc-2026-preview',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-03-27',
  },
  {
    id: '13',
    title: 'Alibaba releases Qwen3.6-27B, a dense open-weight model scoring 77.2 on SWE-bench',
    summary: 'Alibaba releases Qwen3.6-27B, a dense open-weight model scoring 77.2 on SWE-bench Verified. First dense model in Qwen3.6 family with Apache 2.0 license.',
    source: 'Alibaba',
    sourceUrl: 'https://qwenlm.ai/blog/qwen3.6',
    imageUrl: 'https://cdn.techinasia.com/wp-content/uploads/2025/09/1759051591_WhatsApp-Image-2025-09-28-at-16.21.03.jpeg',
    category: 'model',
    publishedAt: '2026-04-22',
  },
  {
    id: '14',
    title: 'MiniMax releases M2.5 achieving state-of-the-art coding performance at $1 per hour',
    summary: 'MiniMax releases M2.5 achieving state-of-the-art coding performance at $1 per hour. 80.2% on SWE-Bench Verified, 51.3% on Multi-SWE-Bench.',
    source: 'Minimax',
    sourceUrl: 'https://github.com/MiniMax-AI/MiniMax-M2.5',
    imageUrl: 'https://file.cdn.minimax.io/public/60e15b62-aece-42ab-898f-ce97c59f3941.png',
    category: 'model',
    publishedAt: '2026-02-12',
  },
  {
    id: '15',
    title: 'Gemini Enterprise expands with autonomous agents that can run for days',
    summary: 'Gemini Enterprise expands with autonomous agents that can run for days, managed through unified Inbox command center.',
    source: 'Google',
    sourceUrl: 'https://cloud.google.com/blog/products/ai-machine-learning/gemini-enterprise-agents',
    imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-22',
  },
  {
    id: '16',
    title: 'Mistral launches Vibe remote coding agents that open pull requests when done',
    summary: 'Mistral launches Vibe remote coding agents that run in cloud sandboxes and open pull requests when done. Powered by Mistral Medium 3.5.',
    source: 'Mistral',
    sourceUrl: 'https://mistral.ai/news/vibe-coding-agents',
    imageUrl: 'https://aihub.qualcomm.com/_next/image?url=%2Fimg%2Fecosystem%2F1920x1080%2Fmistral-ai.webp&w=3840&q=75',
    category: 'product',
    publishedAt: '2026-05-05',
  },
  {
    id: '17',
    title: 'Grok 4.20 from xAI now available in Microsoft Foundry for enterprise deployment',
    summary: 'Grok 4.20 from xAI now available in Microsoft Foundry for enterprise evaluation and deployment.',
    source: 'Microsoft',
    sourceUrl: 'https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/grok-4-20-is-now-available-in-microsoft-foundry/4509377',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'tool',
    publishedAt: '2026-04-08',
  },
  {
    id: '18',
    title: 'OpenAI introduces new voice intelligence models in API for real-time audio processing',
    summary: 'OpenAI introduces new models in the API focused on voice intelligence capabilities, enhancing real-time audio processing.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/gpt-realtime-voice',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-05-07',
  },
  {
    id: '19',
    title: 'NVIDIA announces Nemotron 3 Ultra with frontier-level intelligence and 5x throughput',
    summary: 'NVIDIA announces Nemotron 3 Ultra with frontier-level intelligence and 5x throughput efficiency using NVFP4 format on Blackwell.',
    source: 'NVIDIA',
    sourceUrl: 'https://developer.nvidia.com/blog/introducing-nemotron-3-super',
    imageUrl: 'https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-16',
  },
  {
    id: '20',
    title: 'Alibaba releases Qwen3.5 with 397B parameters supporting 201 languages',
    summary: 'Alibaba releases Qwen3.5 with 397B total parameters supporting 201 languages. Native multimodal for text, images, and video analysis.',
    source: 'Alibaba',
    sourceUrl: 'https://www.cnbc.com/2026/02/17/alibaba-qwen3-launch',
    imageUrl: 'https://cdn.techinasia.com/wp-content/uploads/2025/09/1759051591_WhatsApp-Image-2025-09-28-at-16.21.03.jpeg',
    category: 'model',
    publishedAt: '2026-02-17',
  },
  {
    id: '21',
    title: 'DeepSeek-V4-Flash launches at $0.14 per million input tokens',
    summary: 'DeepSeek-V4-Flash (284B total / 13B active) launches at $0.14 per million input tokens, one of the cheapest frontier-class models.',
    source: 'DeepSeek',
    sourceUrl: 'https://api-docs.deepseek.com/news/news260424',
    imageUrl: 'https://preview.redd.it/deepseek-v4-all-leaks-and-infos-for-the-release-day-not-v0-lllfdd3uvimg1.png?width=640&crop=smart&auto=webp&s=2492384251ab16ffeac1c5d0317dd71610c3c077',
    category: 'model',
    publishedAt: '2026-04-24',
  },
  {
    id: '22',
    title: 'Gemini app for macOS launches as native desktop experience globally',
    summary: 'The Gemini app for macOS launches as a native desktop experience, available globally for macOS 15+.',
    source: 'Apple',
    sourceUrl: 'https://workspaceupdates.googleblog.com/2026/04/gemini-app-macos-launch',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-04-15',
  },
  {
    id: '23',
    title: 'Anthropic addresses three Claude Code quality issues in latest update',
    summary: 'Anthropic addresses three Claude Code quality issues including reverted reasoning effort change and fixed session idle timeout.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/claude-code-quality-update',
    imageUrl: 'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'tool',
    publishedAt: '2026-04-23',
  },
  {
    id: '24',
    title: 'MiniMax M3 officially releasing in May 2026 with expanded office scenario capabilities',
    summary: 'MiniMax M3 officially releasing in May 2026, expanding from M2.5\'s coding focus to full office scenarios including document understanding and spreadsheets.',
    source: 'Minimax',
    sourceUrl: 'https://minimaxi.com/news/m3-release',
    imageUrl: 'https://file.cdn.minimax.io/public/60e15b62-aece-42ab-898f-ce97c59f3941.png',
    category: 'model',
    publishedAt: '2026-05-11',
  },
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
    xAI: 'background: rgba(255, 255, 255, 0.1); color: rgba(255, 255, 255, 0.7);',
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
  const filteredCards = newsCards
    .filter((card) => top15Companies.includes(card.source))
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
            Latest AI news from the top 15 foundation model companies • Ordered
            by latest
          </p>
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
