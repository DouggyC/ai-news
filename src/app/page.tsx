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
    title: 'OpenAI launches GPT-5.5 Instant with ultra-low latency responses',
    summary: 'OpenAI released GPT-5.5 Instant, a fast-response variant optimized for real-time applications with improved streaming and reduced latency across ChatGPT and API.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/gpt-5-5-instant/',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-05-05',
  },
  {
    id: '2',
    title: 'iOS 27 will let you choose between Gemini, Claude, and more for AI features',
    summary: 'Apple announced iOS 27 will support third-party AI integrations allowing users to choose their preferred AI assistant for device-wide AI features and functionalities.',
    source: 'Apple',
    sourceUrl: 'https://9to5mac.com/2026/05/05/ios-27-will-let-you-choose-between-gemini-claude-and-more-for-ai-features-report/',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-05-05',
  },
  {
    id: '3',
    title: 'OpenAI launches GPT-5.5 with advanced agentic coding and research capabilities',
    summary: 'OpenAI released GPT-5.5, its newest frontier model with improved coding, computer use, and deeper research capabilities now available in ChatGPT and Codex.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/introducing-gpt-5-5/',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-04-23',
  },
  {
    id: '4',
    title: 'Google launches Gemini Enterprise Agent Platform for business AI agents',
    summary: 'Google launched Gemini Enterprise Agent Platform enabling companies to deploy production AI agents with built-in security, compliance, analytics, and third-party integrations.',
    source: 'Google',
    sourceUrl: 'https://cloud.google.com/blog/products/ai-machine-learning/the-new-gemini-enterprise-one-platform-for-agent-development',
    imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-22',
  },
  {
    id: '5',
    title: 'Google launches Deep Research and Deep Research Max powered by Gemini 3.1 Pro',
    summary: 'Google announced Deep Research agents with MCP support, native visualizations, and enterprise-grade synthesis for long-horizon research workflows across web and custom sources.',
    source: 'Google',
    sourceUrl: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/next-generation-gemini-deep-research/',
    imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-21',
  },
  {
    id: '6',
    title: 'Google introduces new Gemini capabilities in Google Docs to go from blank page to brilliance',
    summary: 'Google launched Gemini-powered writing assistance in Google Docs helping users generate content, rewrite existing text, and overcome writer block with AI suggestions.',
    source: 'Google',
    sourceUrl: 'https://workspaceupdates.googleblog.com/2026/04/new-gemini-capabilities-in-google-docs-help-you-go-from-blank-page-to-brilliance.html',
    imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-22',
  },
  {
    id: '7',
    title: 'Google confirms Context-Aware Siri built from Gemini will debut in 2026',
    summary: 'Google confirmed a context-aware Siri built using Gemini technology will launch in 2026, bringing advanced AI capabilities to Apple devices through the partnership.',
    source: 'Apple',
    sourceUrl: 'https://appleinsider.com/articles/26/04/22/google-confirms-context-aware-siri-built-from-gemini-will-debut-in-2026',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-04-22',
  },
  {
    id: '8',
    title: 'Google launches Gemini Enterprise 2 with enhanced agentic capabilities',
    summary: 'Google announced Gemini Enterprise 2 with improved agent orchestration, better API access, enhanced security controls, and expanded enterprise integration options.',
    source: 'Google',
    sourceUrl: 'https://cloud.google.com/blog/products/ai-machine-learning/whats-new-in-gemini-enterprise',
    imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-22',
  },
  {
    id: '9',
    title: 'xAI releases Grok 4.3 with multi-agent architecture improvements',
    summary: 'xAI launched Grok 4.3 featuring enhanced multi-agent coordination, 2M context window, improved PDF/spreadsheet generation, and native multimodal video understanding.',
    source: 'xAI',
    sourceUrl: 'https://docs.x.ai/developers/models',
    imageUrl: 'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'model',
    publishedAt: '2026-04-17',
  },
  {
    id: '10',
    title: 'Anthropic releases Claude Opus 4.7 with enhanced coding and agentic workflows',
    summary: 'Anthropic launched Claude Opus 4.7 featuring improved chain-of-thought reasoning, better coding performance, 1M token context window, and extended multimodal image processing.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/claude-opus-4-7',
    imageUrl: 'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'model',
    publishedAt: '2026-04-16',
  },
  {
    id: '11',
    title: 'Grok 4.20 Beta now available in Microsoft Foundry for enterprise deployment',
    summary: 'Microsoft made Grok 4.20 Beta available in Azure AI Foundry, enabling enterprise developers to build and deploy AI applications using xAI models at scale.',
    source: 'Microsoft',
    sourceUrl: 'https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/grok-4-20-is-now-available-in-microsoft-foundry/4509377',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'tool',
    publishedAt: '2026-04-08',
  },
  {
    id: '12',
    title: 'Meta releases Llama 4 Scout and Maverick with multimodal intelligence',
    summary: 'Meta unveiled Llama 4 Scout and Maverick, its newest open-weight multimodal models with improved reasoning, vision capabilities, and Apache 2.0 licensing.',
    source: 'Meta',
    sourceUrl: 'https://ai.meta.com/blog/llama-4-multimodal-intelligence/',
    imageUrl: 'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'model',
    publishedAt: '2026-04-05',
  },
  {
    id: '13',
    title: 'Meta Llama 4 now available on Databricks Data Intelligence Platform',
    summary: 'Databricks integrated Llama 4 models into its Data Intelligence Platform enabling enterprise customers to build AI applications with Meta open models at scale.',
    source: 'Meta',
    sourceUrl: 'https://databricks.com/blog/introducing-metas-llama-4-databricks-data-intelligence-platform',
    imageUrl: 'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'product',
    publishedAt: '2026-04-05',
  },
  {
    id: '14',
    title: 'Google introduces Gemma 4 as its most capable open model family',
    summary: 'Google launched Gemma 4, its newest open model family with agentic workflows, multimodal support, and Apache 2.0 licensing across E2B, E4B, 26B MoE, and 31B sizes.',
    source: 'Google',
    sourceUrl: 'https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/',
    imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'model',
    publishedAt: '2026-04-02',
  },
  {
    id: '15',
    title: 'NVIDIA releases Nemotron 3 Super for agentic AI reasoning',
    summary: 'NVIDIA announced Nemotron 3 Super, an open hybrid Mamba-Transformer MoE model optimized for agentic reasoning tasks with state-of-the-art performance on reasoning benchmarks.',
    source: 'NVIDIA',
    sourceUrl: 'https://blogs.nvidia.com/blog/nemotron-3-super-agentic-ai/',
    imageUrl: 'https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-11',
  },
  {
    id: '16',
    title: 'NVIDIA introduces Nemotron 3 Super technical deep dive into hybrid Mamba-Transformer MoE',
    summary: 'NVIDIA published technical details on Nemotron 3 Super architecture featuring hybrid Mamba-Transformer Mixture of Experts design for efficient agentic reasoning.',
    source: 'NVIDIA',
    sourceUrl: 'https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/',
    imageUrl: 'https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-11',
  },
  {
    id: '17',
    title: 'Apple introduces MacBook Pro with all-new M5 Pro and M5 Max chips',
    summary: 'Apple launched MacBook Pro with M5 Pro and M5 Max chips featuring enhanced Neural Engine for AI workloads, improved performance per watt, and all-day battery life.',
    source: 'Apple',
    sourceUrl: 'https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-03-01',
  },
  {
    id: '18',
    title: 'Apple introduces the new MacBook Air with M5 chip',
    summary: 'Apple released MacBook Air with M5 chip offering improved AI performance, fanless design, and extended battery life in the ultra-thin form factor.',
    source: 'Apple',
    sourceUrl: 'https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5/',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-03-01',
  },
  {
    id: '19',
    title: 'Apple debuts M5 Pro and M5 Max to supercharge demanding professional workflows',
    summary: 'Apple detailed M5 Pro and M5 Max architecture with focus on professional AI workloads, featuring enhanced unified memory bandwidth and expanded Neural Engine capabilities.',
    source: 'Apple',
    sourceUrl: 'https://www.apple.com/newsroom/2026/03/apple-debuts-m5-pro-and-m5-max-to-supercharge-the-most-demanding-pro-workflows/',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-03-01',
  },
  {
    id: '20',
    title: 'Google DeepMind unveils Gemini 3.1 Pro a smarter model for complex tasks',
    summary: 'Google DeepMind released Gemini 3.1 Pro with improved reasoning, longer context handling, and enhanced multimodal capabilities for complex enterprise and research applications.',
    source: 'Google',
    sourceUrl: 'https://deepmind.google/blog/gemini-3-1-pro-a-smarter-model-for-your-most-complex-tasks/',
    imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'model',
    publishedAt: '2026-02-19',
  },
  {
    id: '21',
    title: 'xAI releases Grok 4.20 Beta with enhanced reasoning capabilities',
    summary: 'xAI launched Grok 4.20 Beta featuring improved reasoning capabilities, expanded context window, and better performance on complex reasoning benchmarks.',
    source: 'xAI',
    sourceUrl: 'https://docs.x.ai/docs/release-notes',
    imageUrl: 'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'model',
    publishedAt: '2026-02-17',
  },
  {
    id: '22',
    title: 'Anthropic releases Claude Sonnet 4.6 with improved reasoning and efficiency',
    summary: 'Anthropic launched Claude Sonnet 4.6 with improved chain-of-thought reasoning, better cost efficiency, and enhanced performance on coding and analysis tasks.',
    source: 'Anthropic',
    sourceUrl: 'https://anthropic.com/news/claude-sonnet-4-6',
    imageUrl: 'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'model',
    publishedAt: '2026-02-17',
  },
  {
    id: '23',
    title: 'Anthropic releases Claude Opus 4.6 with enhanced capabilities and longer context',
    summary: 'Anthropic unveiled Claude Opus 4.6 featuring improved reasoning capabilities, extended context window support, and enhanced multimodal understanding for complex tasks.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/claude-opus-4-6',
    imageUrl: 'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'model',
    publishedAt: '2026-02-05',
  },
  {
    id: '24',
    title: 'OpenAI releases GPT-5.4 with improved efficiency and reasoning',
    summary: 'OpenAI launched GPT-5.4 featuring improved reasoning capabilities, better efficiency, and enhanced performance across coding, analysis, and multimodal tasks.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/introducing-gpt-5-4/',
    imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-03-05',
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
