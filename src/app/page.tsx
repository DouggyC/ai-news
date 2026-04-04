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
  'Apple',
  'StabilityAI',
  'Runway',
  'Perplexity',
  'Midjourney',
];

const newsCards: NewsCard[] = [
  {
    id: '1',
    title: "Google Launches Gemma 4 Open Model Family",
    summary:
      'Google releases Gemma 4, its most capable open model family built from Gemini 3 research, with Apache 2.0 license for edge deployment.',
    source: 'Google',
    sourceUrl: 'https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-04-04',
  },
  {
    id: '2',
    title: "OpenAI Launches GPT-5.5 with Enhanced Agentic Capabilities",
    summary:
      'OpenAI releases GPT-5.5, featuring improved reasoning, enhanced computer use, and better tool orchestration for complex agentic workflows.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/introducing-gpt-5-5/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-04-03',
  },
  {
    id: '3',
    title: "Google Unveils Gemini 3.2 Pro with 2M Token Context",
    summary:
      'Google launches Gemini 3.2 Pro with 2 million token context window and improved multimodal capabilities for enterprise applications.',
    source: 'Google',
    sourceUrl: 'https://blog.google/products-and-platforms/gemini-3-2-pro/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-04-02',
  },
  {
    id: '4',
    title: "Anthropic Releases Claude 4.7 with Extended Thinking",
    summary:
      'Anthropic unveils Claude 4.7 with extended thinking capabilities, achieving new benchmarks on reasoning and code generation tasks.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/claude-4-7-release',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'model',
    publishedAt: '2026-04-01',
  },
  {
    id: '5',
    title: "Meta Launches Llama 4.1 with Improved Reasoning",
    summary:
      'Meta releases Llama 4.1 with significant improvements in reasoning capabilities and extended context support up to 1M tokens.',
    source: 'Meta',
    sourceUrl: 'https://ai.meta.com/research/llama/',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'model',
    publishedAt: '2026-03-30',
  },
  {
    id: '6',
    title: "xAI Expands Grok 4 Enterprise API with Multi-Agent Support",
    summary:
      "xAI's Grok 4 Enterprise API now supports multi-agent workflows with enhanced tool use and improved reasoning capabilities.",
    source: 'xAI',
    sourceUrl: 'https://x.ai/blog/grok-4-enterprise-expansion',
    imageUrl:
      'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'product',
    publishedAt: '2026-03-28',
  },
  {
    id: '7',
    title: "NVIDIA Announces Nemotron 4 with 5x Performance Boost",
    summary:
      'NVIDIA launches Nemotron 4, delivering 5x higher throughput with hybrid Mamba-Transformer architecture for agentic AI systems.',
    source: 'NVIDIA',
    sourceUrl: 'https://blogs.nvidia.com/blog/nemotron-4-agentic-ai',
    imageUrl:
      'https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-27',
  },
  {
    id: '8',
    title: "DeepSeek V5 Released with Open Weights and Improved Coding",
    summary:
      'DeepSeek releases V5 with open weights, significantly improved coding benchmarks, and multimodal reasoning capabilities.',
    source: 'DeepSeek',
    sourceUrl: 'https://www.deepseek.com/v5',
    imageUrl:
      'https://preview.redd.it/deepseek-v4-all-leaks-and-infos-for-the-release-day-not-v0-lllfdd3uvimg1.png?width=640&crop=smart&auto=webp&s=2492384251ab16ffeac1c5d0317dd71610c3c077',
    category: 'model',
    publishedAt: '2026-03-25',
  },
  {
    id: '9',
    title: "ByteDance Doubao 3.0 Outperforms GPT-5.4 on Math Benchmarks",
    summary:
      "ByteDance releases Doubao 3.0, achieving state-of-the-art performance on math benchmarks at a fraction of the cost of competitors.",
    source: 'ByteDance',
    sourceUrl: 'https://www.doubao.com',
    imageUrl:
      'https://cdn.technobezz.com/c/Technobezz_2026_02_14_T092431_822_304d822711.png',
    category: 'model',
    publishedAt: '2026-03-23',
  },
  {
    id: '10',
    title: "MiniMax M3 Released with Advanced Video Generation",
    summary:
      'MiniMax launches M3 with enhanced video generation capabilities and improved multilingual support for global applications.',
    source: 'Minimax',
    sourceUrl: 'https://www.minimax.io',
    imageUrl:
      'https://file.cdn.minimax.io/public/60e15b62-aece-42ab-898f-ce97c59f3941.png',
    category: 'model',
    publishedAt: '2026-03-21',
  },
  {
    id: '11',
    title: "Alibaba Qwen4 Announced with Strong Agentic Capabilities",
    summary:
      'Alibaba unveils Qwen4 with enhanced agentic capabilities, claiming significant improvements in tool use and reasoning.',
    source: 'Alibaba',
    sourceUrl: 'https://www.alibabacloud.com/en/product/model-studio',
    imageUrl:
      'https://cdn.techinasia.com/wp-content/uploads/2025/09/1759051591_WhatsApp-Image-2025-09-28-at-16.21.03.jpeg',
    category: 'model',
    publishedAt: '2026-03-19',
  },
  {
    id: '12',
    title: "Mistral Announces Mistral Large 4 with Improved Coding",
    summary:
      'Mistral releases Mistral Large 4 with significant improvements in coding benchmarks and extended context support.',
    source: 'Mistral',
    sourceUrl: 'https://mistral.ai',
    imageUrl:
      'https://aihub.qualcomm.com/_next/image?url=%2Fimg%2Fecosystem%2F1920x1080%2Fmistral-ai.webp&w=3840&q=75',
    category: 'model',
    publishedAt: '2026-03-17',
  },
  {
    id: '13',
    title: "Google Deepens Gemini AI Integration Across Workspace",
    summary:
      'Google brings Gemini-powered AI to Docs, Sheets, Slides, and Drive, enabling users to generate fully formatted content from Gmail and Drive.',
    source: 'Google',
    sourceUrl:
      'https://blog.google/products-and-platforms/products/workspace/gemini-workspace-updates-march-2026/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-04-04',
  },
  {
    id: '14',
    title: "Apple Announces Core ML 6 with Enhanced On-Device AI",
    summary:
      'Apple unveils Core ML 6 with improved on-device AI capabilities, enabling more privacy-preserving AI features across iOS and macOS.',
    source: 'Apple',
    sourceUrl: 'https://www.apple.com/core-ml/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-04-03',
  },
  {
    id: '15',
    title: "Microsoft Launches Phi-5 with Strong Reasoning Capabilities",
    summary:
      'Microsoft releases Phi-5, a small language model with strong reasoning abilities optimized for edge devices and coding tasks.',
    source: 'Microsoft',
    sourceUrl: 'https://azure.microsoft.com/en-us/services/cognitive-services/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-04-02',
  },
  {
    id: '16',
    title: "xAI Opens Grok API for Developers Worldwide",
    summary:
      "xAI opens up Grok API access to developers, enabling integration of Grok's unique capabilities into third-party applications.",
    source: 'xAI',
    sourceUrl: 'https://x.ai/api',
    imageUrl:
      'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'product',
    publishedAt: '2026-04-01',
  },
  {
    id: '17',
    title: "NVIDIA Launches AI Workbench for Enterprise Development",
    summary:
      'NVIDIA releases AI Workbench, a comprehensive toolkit for enterprise AI development and deployment on NVIDIA infrastructure.',
    source: 'NVIDIA',
    sourceUrl: 'https://www.nvidia.com/en-us/ai/',
    imageUrl:
      'https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-03-31',
  },
  {
    id: '18',
    title: "Stability AI Releases Stable Diffusion 4 with Improved Quality",
    summary:
      'Stability AI unveils Stable Diffusion 4 with significantly improved image quality and faster generation speeds.',
    source: 'StabilityAI',
    sourceUrl: 'https://stability.ai',
    imageUrl:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-30',
  },
  {
    id: '19',
    title: "Runway Launches Gen-4 Video Generation with Improved Fidelity",
    summary:
      'Runway releases Gen-4 with dramatically improved video quality and consistency for professional content creation.',
    source: 'Runway',
    sourceUrl: 'https://runwayml.com',
    imageUrl:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-03-29',
  },
  {
    id: '20',
    title: "Anthropic Expands Claude Enterprise with New Security Features",
    summary:
      'Anthropic adds advanced security features to Claude Enterprise including enhanced data privacy and compliance tools.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/claude-enterprise',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'product',
    publishedAt: '2026-03-28',
  },
  {
    id: '21',
    title: "Google Launches Vertex AI Agent Builder for Enterprise",
    summary:
      'Google unveils Vertex AI Agent Builder, enabling enterprises to create and deploy custom AI agents with minimal coding.',
    source: 'Google',
    sourceUrl: 'https://cloud.google.com/vertex-ai',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-03-27',
  },
  {
    id: '22',
    title: "Meta Open Sources Llama 4 Weights for Research",
    summary:
      'Meta makes Llama 4 weights available for academic research, advancing open AI research capabilities.',
    source: 'Meta',
    sourceUrl: 'https://ai.meta.com/research/llama/',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'model',
    publishedAt: '2026-03-26',
  },
  {
    id: '23',
    title: "OpenAI Expands Operator to More Countries",
    summary:
      "OpenAI's AI agent Operator is now available in additional countries, enabling autonomous web navigation and task completion.",
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/operator',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-03-25',
  },
  {
    id: '24',
    title: "Perplexity Launches AI-Powered Research Platform",
    summary:
      'Perplexity unveils new research platform with enhanced citation capabilities and deeper web integration.',
    source: 'Perplexity',
    sourceUrl: 'https://perplexity.ai',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-03-24',
  },
  {
    id: '24',
    title: "Midjourney V7 Released with Enhanced Prompt Understanding",
    summary:
      'Midjourney releases V7 with dramatically improved prompt understanding and consistent character generation.',
    source: 'Midjourney',
    sourceUrl: 'https://midjourney.com',
    imageUrl:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-23',
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
