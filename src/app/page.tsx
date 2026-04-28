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
    title: 'OpenAI launches GPT-5.5 with advanced agentic coding and research capabilities',
    summary:
      'OpenAI released GPT-5.5, its newest frontier model with improved coding, computer use, and deeper research capabilities now available in ChatGPT and Codex.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/introducing-gpt-5-5/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-04-23',
  },
  {
    id: '2',
    title: 'Anthropic releases Claude Opus 4.7 with enhanced coding and agentic workflows',
    summary:
      'Anthropic launched Claude Opus 4.7 featuring improved chain-of-thought reasoning, better coding performance, 1M token context window, and extended multimodal image processing.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/claude-opus-4-7',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'model',
    publishedAt: '2026-04-16',
  },
  {
    id: '3',
    title: 'Google introduces Gemma 4 as its most capable open model family',
    summary:
      'Google launched Gemma 4, its newest open model family with agentic workflows, multimodal support, and Apache 2.0 licensing across E2B, E4B, 26B MoE, and 31B sizes.',
    source: 'Google',
    sourceUrl: 'https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'model',
    publishedAt: '2026-04-02',
  },
  {
    id: '4',
    title: 'Anthropic launches Claude Design for AI-first visual product development',
    summary:
      'Anthropic unveiled Claude Design, a new platform helping teams build AI-native products with Claude-powered design workflows, prototyping tools, and visual generation.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/claude-design-anthropic-labs',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'product',
    publishedAt: '2026-04-17',
  },
  {
    id: '5',
    title: 'xAI releases Grok 4.3 Beta with multi-agent architecture improvements',
    summary:
      'xAI launched Grok 4.3 Beta featuring enhanced multi-agent coordination, 2M context window, improved PDF/spreadsheet generation, and native multimodal video understanding.',
    source: 'xAI',
    sourceUrl: 'https://techsifted.com/posts/grok-4-3-review-april-2026/',
    imageUrl:
      'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'model',
    publishedAt: '2026-04-17',
  },
  {
    id: '6',
    title: 'Google DeepMind unveils Gemini Robotics ER 1.6 for physical AI applications',
    summary:
      'Google DeepMind announced Gemini Robotics ER 1.6 with significantly improved physical reasoning for robotic manipulation, instrument reading, and real-world task execution.',
    source: 'Google',
    sourceUrl: 'https://deepmind.google/blog/gemini-robotics-er-1-6/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'model',
    publishedAt: '2026-04-14',
  },
  {
    id: '7',
    title: 'Meta releases Llama 5 with 600B+ parameters as open-weight model',
    summary:
      'Meta unveiled Llama 5, a 600B+ parameter open-weights multimodal model with 1M token context window and claimed self-refinement capabilities, now available on Hugging Face.',
    source: 'Meta',
    sourceUrl: 'https://www.financialcontent.com/article/marketminute-2026-4-8-meta-unleashes-llama-5-zuckerbergs-open-source-gambit-challenges-proprietary-ai-dominance',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'model',
    publishedAt: '2026-04-08',
  },
  {
    id: '8',
    title: 'NVIDIA releases Ising open quantum AI models for calibration and error correction',
    summary:
      'NVIDIA announced Ising, the world first open-source quantum AI model family for automating quantum processor calibration and delivering 2.5x faster error correction.',
    source: 'NVIDIA',
    sourceUrl: 'https://developer.nvidia.com/blog/nvidia-ising-introduces-ai-powered-workflows-to-build-fault-tolerant-quantum-systems/',
    imageUrl:
      'https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-04-14',
  },
  {
    id: '9',
    title: 'Google launches Gemini Enterprise Agent Platform for business AI agents',
    summary:
      'Google launched Gemini Enterprise Agent Platform enabling companies to deploy production AI agents with built-in security, compliance, analytics, and third-party integrations.',
    source: 'Google',
    sourceUrl: 'https://www.testingcatalog.com/google-launches-new-agent-platform-for-gemini-enterprise/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-22',
  },
  {
    id: '10',
    title: 'Google launches Deep Research and Deep Research Max powered by Gemini 3.1 Pro',
    summary:
      'Google announced Deep Research agents with MCP support, native visualizations, and enterprise-grade synthesis for long-horizon research workflows across web and custom sources.',
    source: 'Google',
    sourceUrl: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/next-generation-gemini-deep-research/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'capability',
    publishedAt: '2026-04-21',
  },
  {
    id: '11',
    title: 'DeepSeek releases V4-Pro and V4-Flash with 1M context and hybrid attention',
    summary:
      'DeepSeek unveiled V4 preview featuring 1.6T parameters, 1M token context window, hybrid attention architecture, and MIT licensing as it challenges frontier models at aggressive prices.',
    source: 'DeepSeek',
    sourceUrl: 'https://techcrunch.com/2026/04/24/deepseek-previews-new-ai-model-that-closes-the-gap-with-frontier-models/',
    imageUrl:
      'https://preview.redd.it/deepseek-v4-all-leaks-and-infos-for-the-release-day-not-v0-lllfdd3uvimg1.png?width=640&crop=smart&auto=webp&s=2492384251ab16ffeac1c5d0317dd71610c3c077',
    category: 'model',
    publishedAt: '2026-04-24',
  },
  {
    id: '12',
    title: 'xAI launches Grok Voice Think Fast 1.0 voice agent topping Tau Voice Bench',
    summary:
      'xAI released Grok Voice Think Fast 1.0, a production voice model ranking first on Tau Voice Bench with 25+ language support, low latency, and Starlink deployment already active.',
    source: 'xAI',
    sourceUrl: 'https://www.marktechpost.com/2026/04/27/xai-launches-grok-voice-think-fast-1-0-voice-agent-with-support-for-25-languages-and-starlink-deployment/',
    imageUrl:
      'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'tool',
    publishedAt: '2026-04-27',
  },
  {
    id: '13',
    title: 'Alibaba releases Qwen 3.6-Max-Preview with top coding benchmark performance',
    summary:
      'Alibaba launched Qwen 3.6-Max-Preview ranking first on six coding benchmarks including SWE-bench Pro and Terminal-Bench 2.0, with 256K context and enhanced agentic capabilities.',
    source: 'Alibaba',
    sourceUrl: 'https://tech.yahoo.com/ai/gemini/articles/alibaba-drops-qwen-3-6-212453373.html',
    imageUrl:
      'https://cdn.techinasia.com/wp-content/uploads/2025/09/1759051591_WhatsApp-Image-2025-09-28-at-16.21.03.jpeg',
    category: 'model',
    publishedAt: '2026-04-20',
  },
  {
    id: '14',
    title: 'Alibaba open-sources Qwen 3.6-35B-A3B MoE model with 3B active parameters',
    summary:
      'Alibaba released Qwen 3.6-35B-A3B, a sparse MoE model with only 3B active parameters outperforming Gemma 4-31B on coding benchmarks and licensed under Apache 2.0.',
    source: 'Alibaba',
    sourceUrl: 'https://www.marktechpost.com/2026/04/22/alibaba-qwen-team-releases-qwen3-6-27b-a-dense-open-weight-model-outperforming-397b-moe-on-agentic-coding-benchmarks/',
    imageUrl:
      'https://cdn.techinasia.com/wp-content/uploads/2025/09/1759051591_WhatsApp-Image-2025-09-28-at-16.21.03.jpeg',
    category: 'model',
    publishedAt: '2026-04-16',
  },
  {
    id: '15',
    title: 'ByteDance brings Doubao AI to car cabins in automotive expansion',
    summary:
      'ByteDance announced Doubao AI integration into car cabins through a partnership with Seres, enabling voice assistants for driving, route planning, and entertainment interaction.',
    source: 'ByteDance',
    sourceUrl: 'https://cnevpost.com/2026/04/16/bytedance-bringing-doubao-ai-to-car-cabins/',
    imageUrl:
      'https://cdn.technobezz.com/c/Technobezz_2026_02_14_T092431_822_304d822711.png',
    category: 'product',
    publishedAt: '2026-04-16',
  },
  {
    id: '16',
    title: 'Mistral releases Mistral Small 4 unifying reasoning, vision, and coding',
    summary:
      'Mistral AI launched Mistral Small 4, a 119B MoE model unifying Magistral reasoning, Pixtral vision, and Devstral coding with 256K context under Apache 2.0 license.',
    source: 'Mistral',
    sourceUrl: 'https://mistral.ai/news/mistral-small-4',
    imageUrl:
      'https://aihub.qualcomm.com/_next/image?url=%2Fimg%2Fecosystem%2F1920x1080%2Fmistral-ai.webp&w=3840&q=75',
    category: 'model',
    publishedAt: '2026-04-03',
  },
  {
    id: '17',
    title: 'MiniMax M2.7 goes open-weight with self-evolving agent capabilities',
    summary:
      'MiniMax released M2.7 open weights, the first model to participate in its own development with 100+ autonomous optimization rounds achieving 56.22% on SWE-Pro.',
    source: 'MiniMax',
    sourceUrl: 'https://www.marktechpost.com/2026/04/12/minimax-just-open-sourced-minimax-m2-7-a-self-evolving-agent-model-that-scores-56-22-on-swe-pro-and-57-0-on-terminal-bench-2/',
    imageUrl:
      'https://file.cdn.minimax.io/public/60e15b62-aece-42ab-898f-ce97c59f3941.png',
    category: 'model',
    publishedAt: '2026-04-12',
  },
  {
    id: '18',
    title: 'Moonshot AI releases Kimi K2.6 with 300-agent swarm and 12-hour autonomous coding',
    summary:
      'Moonshot AI launched Kimi K2.6 GA featuring 1T MoE architecture, 300-agent swarm coordination, 12-hour autonomous runs, and leading SWE-Bench Pro performance.',
    source: 'Moonshot',
    sourceUrl: 'https://kimi-k2.org/blog/24-kimi-k2-6-release',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'model',
    publishedAt: '2026-04-20',
  },
  {
    id: '19',
    title: 'Google launches Gemini Mac app for native desktop AI assistance',
    summary:
      'Google released Gemini Mac app bringing AI assistance directly to macOS with native integrations, file system access, and Option+Space keyboard shortcut activation.',
    source: 'Google',
    sourceUrl: 'https://blog.google/innovation-and-ai/products/gemini-app/gemini-app-now-on-mac-os/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-15',
  },
  {
    id: '20',
    title: 'OpenAI launches Privacy Filter open-weight model for PII detection',
    summary:
      'OpenAI released Privacy Filter, an open-weight Apache 2.0 model for detecting and redacting personally identifiable information achieving state-of-the-art on PII-Masking-300k.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/introducing-openai-privacy-filter/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'tool',
    publishedAt: '2026-04-22',
  },
  {
    id: '21',
    title: 'OpenAI releases GPT-Rosalind for life sciences research',
    summary:
      'OpenAI introduced GPT-Rosalind, a frontier reasoning model optimized for biology, drug discovery, and genomics with access to 50+ scientific tools and data sources.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/introducing-gpt-rosalind/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-04-16',
  },
  {
    id: '22',
    title: 'ByteDance Seed 2.0 now supports full-duplex speech with 12% fluency improvement',
    summary:
      'ByteDance updated Seed 2.0 with Full-Duplex Speech LLM enabling attentive listening, robust interference suppression, and more natural conversational interaction.',
    source: 'ByteDance',
    sourceUrl: 'https://seed.bytedance.com/en/',
    imageUrl:
      'https://cdn.technobezz.com/c/Technobezz_2026_02_14_T092431_822_304d822711.png',
    category: 'model',
    publishedAt: '2026-04-09',
  },
  {
    id: '23',
    title: 'Anthropic launches Claude Managed Agents with secure sandboxing',
    summary:
      'Anthropic released Claude Managed Agents in public beta, a fully managed agent harness for autonomous operation with secure sandboxing, built-in tools, and SSE streaming.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'tool',
    publishedAt: '2026-04-08',
  },
  {
    id: '24',
    title: 'Alibaba launches Qwen 3.6-Plus with 1M context for agentic workflows',
    summary:
      'Alibaba released Qwen 3.6-Plus featuring 1M token context, enhanced multimodal reasoning, and agentic coding optimizations with compatibility for Claude Code and OpenClaw.',
    source: 'Alibaba',
    sourceUrl: 'https://www.alibabacloud.com/press-room/alibaba-unveils-qwen3-6-plus-to-accelerate-agentic',
    imageUrl:
      'https://cdn.techinasia.com/wp-content/uploads/2025/09/1759051591_WhatsApp-Image-2025-09-28-at-16.21.03.jpeg',
    category: 'model',
    publishedAt: '2026-04-02',
  },
];


function getCategoryColor(category: NewsCard['category']): string {
  const colors = {
    model: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    product:
      'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    tool: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    capability:
      'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    research: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
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
    NVIDIA: 'bg-green-800 text-green-200 dark:bg-green-900 dark:text-green-300',
    Microsoft:
      'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
    Google: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    Amazon: 'bg-orange-400 text-white dark:bg-orange-500 dark:text-orange-200',
    Meta: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    Oracle: 'bg-red-600 text-white dark:bg-red-700 dark:text-red-200',
    ByteDance: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    Adobe: 'bg-red-100 text-white dark:bg-red-900 dark:text-red-300',
    Alibaba: 'bg-red-400 text-white dark:bg-red-500 dark:text-red-200',
    OpenAI: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    Anthropic:
      'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    xAI: 'bg-purple-800 text-white dark:bg-purple-700 text-white',
    DeepSeek: 'bg-red-100 text-white dark:bg-red-900 dark:text-red-300',
    Mistral: 'bg-cyan-100 text-white dark:bg-cyan-900 dark:text-cyan-300',
    Minimax: 'bg-indigo-500 text-white dark:bg-indigo-600 dark:text-indigo-200',
    Moonshot: 'bg-purple-600 text-white dark:bg-purple-700 dark:text-purple-200',
  };
  return (
    colors[company] ||
    'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
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
    <div className='min-h-screen bg-zinc-50 dark:bg-[#0f2744]'>
      <main className='mx-auto px-4 sm:px-6 lg:px-10 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2'>
            📰 AI News
          </h1>
          <p className='text-zinc-500 dark:text-zinc-400'>
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
              className='group bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200'
            >
              <div className='relative h-40 overflow-hidden'>
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute top-3 left-3 flex gap-2'>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(card.category)}`}
                  >
                    {getCategoryLabel(card.category)}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getCompanyColor(card.source)}`}
                  >
                    {card.source}
                  </span>
                </div>
              </div>

              <div className='p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <span className='text-xs text-zinc-400 dark:text-zinc-500'>
                    {new Date(card.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <h3 className='font-semibold text-zinc-900 dark:text-zinc-100 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  {card.title}
                </h3>

                <p className='text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2'>
                  {card.summary}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className='mt-8 text-center'>
          <p className='text-sm text-zinc-500 dark:text-zinc-400'>
            Showing {filteredCards.length} news items from top 15 foundation
            model companies • Click cards to read full articles
          </p>
        </div>
      </main>
    </div>
  );
}
