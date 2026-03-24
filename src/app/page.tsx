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
];

const newsCards: NewsCard[] = [
  {
    id: '1',
    title: "Anthropic's Claude Now Can Control Your Computer",
    summary:
      'Anthropic launches computer use capabilities for Claude, allowing the AI to click, scroll, and navigate web pages and applications to complete tasks on Mac computers.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/blog/claude-computer-use',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'capability',
    publishedAt: '2026-03-23',
  },
  {
    id: '2',
    title: 'OpenAI Launches GPT-5.4 mini and nano for Fast Workloads',
    summary:
      'OpenAI releases GPT-5.4 mini and nano, smaller models optimized for coding and subagents with 2x faster performance and lower costs.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/introducing-gpt-5-4-mini-and-nano/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-03-17',
  },
  {
    id: '3',
    title: 'OpenAI Defines Skills as Reusable AI Workflows',
    summary:
      'OpenAI introduces Skills as reusable, shareable workflows that bundle instructions, examples, and code for consistent execution across tasks and teams.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/introducing-skills/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'tool',
    publishedAt: '2026-03-17',
  },
  {
    id: '4',
    title: 'Anthropic Launches Claude Opus 4.6 with Adaptive Reasoning',
    summary:
      'Claude Opus 4.6 introduces adaptive thinking effort controls and context compaction, achieving 4x improvement on long-context retrieval benchmarks.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/claude-opus-4-6-release',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'model',
    publishedAt: '2026-03-15',
  },
  {
    id: '5',
    title: 'Anthropic Launches the Anthropic Institute',
    summary:
      'Anthropic announces the Anthropic Institute to advance AI safety research and develop responsible AI systems with improved reasoning capabilities.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/blog/anthropic-institute',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'product',
    publishedAt: '2026-03-15',
  },
  {
    id: '6',
    title: 'NVIDIA Nemotron 3 Super Delivers 5x Higher Throughput',
    summary:
      'NVIDIA launches Nemotron 3 Super, a 120B parameter open model with hybrid Mamba-Transformer MoE architecture for complex agentic AI systems.',
    source: 'NVIDIA',
    sourceUrl: 'https://blogs.nvidia.com/blog/nemotron-3-super-agentic-ai',
    imageUrl:
      'https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-11',
  },
  {
    id: '7',
    title: 'xAI Lists Grok 4.20 Multi-Agent Beta via Enterprise API',
    summary:
      "xAI's Grok 4.20 Multi-agent Beta is now available through the xAI Enterprise API, featuring unique four-agent architecture for complex tool use.",
    source: 'xAI',
    sourceUrl: 'https://x.ai/blog/grok-4-20-enterprise',
    imageUrl:
      'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'model',
    publishedAt: '2026-03-10',
  },
  {
    id: '8',
    title: 'Anthropic Sues to Overturn Supply Chain Risk Designation',
    summary:
      'Anthropic files court actions to reverse US government supply chain risk designation following Pentagon blacklisting over safety concerns.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/blog/supply-chain-lawsuit',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'product',
    publishedAt: '2026-03-09',
  },
  {
    id: '9',
    title: 'OpenAI Releases GPT-5.4 with Native Computer Use',
    summary:
      'GPT-5.4 combines advanced reasoning, coding, and native computer use capabilities, supporting 1 million token context for enterprise work.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/introducing-gpt-5-4/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-03-05',
  },
  {
    id: '10',
    title: 'GPT-5.4 Pro Outperforms Gemini 3.1 Pro on Benchmarks',
    summary:
      "OpenAI's GPT-5.4 Pro sets new state-of-the-art on GDPval, SWE-Bench Pro, and Terminal-Bench, challenging Google's Gemini for top spot.",
    source: 'OpenAI',
    sourceUrl: 'https://openai.com/index/introducing-gpt-5-4/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-03-04',
  },
  {
    id: '11',
    title: 'Meta Releases Llama 4 Scout Enterprise Open Source LLM',
    summary:
      'Meta releases Llama 4 Scout as the first truly enterprise-native open source model with built-in RAG, tool use, and compliance features.',
    source: 'Meta',
    sourceUrl: 'https://llama.com',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'model',
    publishedAt: '2026-03-03',
  },
  {
    id: '12',
    title: 'Google Deepens Gemini AI Integration Across Workspace',
    summary:
      'Google brings Gemini-powered AI to Docs, Sheets, Slides, and Drive, enabling users to generate fully formatted content from Gmail and Drive.',
    source: 'Google',
    sourceUrl:
      'https://blog.google/products-and-platforms/products/workspace/gemini-workspace-updates-march-2026/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-03-01',
  },
  {
    id: '13',
    title: 'Google Provides Pentagon with Gemini-Powered AI Agents',
    summary:
      'Google expands DoD partnership, making Gemini available to over 3 million government employees for unclassified applications via GenAI.mil.',
    source: 'Google',
    sourceUrl:
      'https://cloud.google.com/blog/topics/public-sector/gemini-for-government',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-02-28',
  },
  {
    id: '14',
    title: "ByteDance's Doubao 2.0 Takes On GPT-5 and Gemini-3 Pro",
    summary:
      "Doubao 2.0 launches as China's most widely used AI chatbot, matching OpenAI GPT-5.2 and Google Gemini 3 Pro at a fraction of the cost.",
    source: 'ByteDance',
    sourceUrl: 'https://www.doubao.com',
    imageUrl:
      'https://cdn.technobezz.com/c/Technobezz_2026_02_14_T092431_822_304d822711.png',
    category: 'model',
    publishedAt: '2026-02-25',
  },
  {
    id: '15',
    title: 'DeepSeek V4 Launches with 1M Token Context',
    summary:
      'DeepSeek V4 launches with 1 million token context, multimodal capabilities, and coding-first design, challenging OpenAI and Google.',
    source: 'DeepSeek',
    sourceUrl: 'https://www.deepseek.com',
    imageUrl:
      'https://preview.redd.it/deepseek-v4-all-leaks-and-infos-for-the-release-day-not-v0-lllfdd3uvimg1.png?width=640&crop=smart&auto=webp&s=2492384251ab16ffeac1c5d0317dd71610c3c077',
    category: 'model',
    publishedAt: '2026-02-19',
  },
  {
    id: '16',
    title: 'MiniMax M2.5 Achieves SOTA in Coding and Agentic Tool Use',
    summary:
      'MiniMax M2.5 achieves 80.2% on SWE-Bench Verified, offering frontier performance at 10x lower cost than competitors.',
    source: 'Minimax',
    sourceUrl: 'https://www.minimax.io',
    imageUrl:
      'https://file.cdn.minimax.io/public/60e15b62-aece-42ab-898f-ce97c59f3941.png',
    category: 'model',
    publishedAt: '2026-02-16',
  },
  {
    id: '17',
    title: 'Alibaba Unveils Qwen3.5 for Agentic AI Era',
    summary:
      'Alibaba releases Qwen3.5 with agentic capabilities, claiming 60% cost reduction and 8x better performance than previous version.',
    source: 'Alibaba',
    sourceUrl: 'https://www.alibabacloud.com/en/product/model-studio',
    imageUrl:
      'https://cdn.techinasia.com/wp-content/uploads/2025/09/1759051591_WhatsApp-Image-2025-09-28-at-16.21.03.jpeg',
    category: 'model',
    publishedAt: '2026-02-21',
  },
  {
    id: '18',
    title: 'Mistral Launches Ministral 3 Family with Cascade Distillation',
    summary:
      'Mistral releases Ministral 3 family (14B, 8B, 3B) using innovative cascade distillation, achieving high performance in compact models.',
    source: 'Mistral',
    sourceUrl: 'https://mistral.ai',
    imageUrl:
      'https://aihub.qualcomm.com/_next/image?url=%2Fimg%2Fecosystem%2F1920x1080%2Fmistral-ai.webp&w=3840&q=75',
    category: 'model',
    publishedAt: '2026-02-17',
  },
  {
    id: '19',
    title: 'Claude AI Can Now Respond with Charts and Diagrams',
    summary:
      "Anthropic's Claude now automatically generates interactive visuals based on conversations, marking a major upgrade in multimodal AI capabilities.",
    source: 'Anthropic',
    sourceUrl:
      'https://www.theverge.com/ai-artificial-intelligence/893625/anthropic-claude-ai-charts-diagrams',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'capability',
    publishedAt: '2026-02-15',
  },
  {
    id: '20',
    title: 'Mistral AI Unveils Mistral OCR: Best Document Understanding',
    summary:
      'Mistral launches Mistral OCR, claimed as the best OCR on the planet, supporting extraction from complex PDFs, images, tables, and multilingual documents.',
    source: 'Mistral',
    sourceUrl: 'https://mistral.ai',
    imageUrl:
      'https://aihub.qualcomm.com/_next/image?url=%2Fimg%2Fecosystem%2F1920x1080%2Fmistral-ai.webp&w=3840&q=75',
    category: 'product',
    publishedAt: '2026-02-14',
  },
  {
    id: '21',
    title: 'MiniMax Launches Hailuo 02 for Video Generation',
    summary:
      'MiniMax releases Hailuo 02, a world-class video generation model with record-breaking cost efficiency for creative content production.',
    source: 'Minimax',
    sourceUrl: 'https://www.minimax.io',
    imageUrl:
      'https://file.cdn.minimax.io/public/60e15b62-aece-42ab-898f-ce97c59f3941.png',
    category: 'product',
    publishedAt: '2026-02-12',
  },
  {
    id: '22',
    title: 'Adobe Debuts AI Assistant for Photoshop',
    summary:
      'Adobe launches AI Assistant in Photoshop beta, allowing users to edit images through natural language prompts for object removal and lighting adjustments.',
    source: 'Adobe',
    sourceUrl: 'https://www.adobe.com/products/photoshop',
    imageUrl:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-02-10',
  },
  {
    id: '23',
    title: 'Oracle Q3 Beats Estimates, Raises Outlook on AI Demand',
    summary:
      'Oracle reports strong Q3 results with cloud infrastructure up 84%, raising revenue forecast to $90 billion by 2027 amid AI data center boom.',
    source: 'Oracle',
    sourceUrl: 'https://www.oracle.com',
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-02-08',
  },
  {
    id: '24',
    title: 'AWS and Cerebras Partner for 5X Faster Cloud AI Inference',
    summary:
      'AWS partners with Cerebras to deliver industry-leading AI inference speed through Amazon Bedrock, using Trainium + CS-3 solution.',
    source: 'Amazon',
    sourceUrl: 'https://aws.amazon.com',
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-02-05',
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
    .slice(0, 32);

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
