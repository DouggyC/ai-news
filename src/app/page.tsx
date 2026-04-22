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
    title: 'OpenAI launches GPT-5.4-Cyber for advanced cybersecurity reasoning',
    summary:
      'OpenAI released GPT-5.4-Cyber, a specialized model for cybersecurity tasks with advanced penetration testing and vulnerability assessment capabilities.',
    source: 'OpenAI',
    sourceUrl: 'https://techcrunch.com/2026/04/14/openai-launches-gpt-5-4-cyber/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-04-14',
  },
  {
    id: '2',
    title: 'Anthropic releases Claude Opus 4.7 with enhanced reasoning capabilities',
    summary:
      'Anthropic launched Claude Opus 4.7 GA featuring improved chain-of-thought reasoning, better coding performance, and extended context handling.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/claude-opus-4-7',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'model',
    publishedAt: '2026-04-16',
  },
  {
    id: '3',
    title: 'Google introduces Gemini Enterprise Agent Platform for businesses',
    summary:
      'Google launched Gemini Enterprise Agent Platform enabling companies to deploy production AI agents with built-in security, compliance, and analytics.',
    source: 'Google',
    sourceUrl: 'https://blog.google/innovation-and-ai/technology/enterprise/gemini-enterprise-agent-platform/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-08',
  },
  {
    id: '4',
    title: 'Anthropic launches Claude Design for AI-first product development',
    summary:
      'Anthropic unveiled Claude Design, a new platform helping teams build AI-native products with Claude-powered design workflows and prototyping tools.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/claude-design',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'product',
    publishedAt: '2026-04-17',
  },
  {
    id: '5',
    title: 'xAI releases Grok 4.3 Beta with multi-agent architecture improvements',
    summary:
      'xAI launched Grok 4.3 Beta featuring enhanced multi-agent coordination, better instruction following, and improved reasoning across complex tasks.',
    source: 'xAI',
    sourceUrl: 'https://x.ai/blog/grok-4-3',
    imageUrl:
      'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'model',
    publishedAt: '2026-04-17',
  },
  {
    id: '6',
    title: 'Google releases Gemma 4 open models with agentic workflow support',
    summary:
      'Google introduced Gemma 4 as its newest open model family, adding agentic workflows, multimodal support, and Apache 2.0 licensing for local and cloud deployment.',
    source: 'Google',
    sourceUrl: 'https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'model',
    publishedAt: '2026-04-02',
  },
  {
    id: '7',
    title: 'Anthropic redesigns Claude Code with new Routines feature',
    summary:
      'Anthropic rolled out a major Claude Code redesign featuring Routines for automating complex development workflows and improved terminal integration.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/claude-code-redesign',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'tool',
    publishedAt: '2026-04-18',
  },
  {
    id: '8',
    title: 'Meta launches Muse Spark AI with Contemplating mode for deep reasoning',
    summary:
      'Meta released Muse Spark featuring a unique Contemplating mode for extended reasoning chains, positioning it as a competitor to OpenAI and Google models.',
    source: 'Meta',
    sourceUrl: 'https://ai.meta.com/blog/muse-spark',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'model',
    publishedAt: '2026-04-10',
  },
  {
    id: '9',
    title: 'Google unveils Gemini Robotics ER 1.6 for physical AI applications',
    summary:
      'Google DeepMind announced Gemini Robotics ER 1.6 with significantly improved physical reasoning for robotic manipulation and real-world task execution.',
    source: 'Google',
    sourceUrl: 'https://deepmind.google/technologies/gemini-robotics/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'model',
    publishedAt: '2026-04-15',
  },
  {
    id: '10',
    title: 'NVIDIA releases Cosmos and GR00T open models for physical AI',
    summary:
      'NVIDIA announced new physical AI models including Cosmos and GR00T open models, along with Isaac Lab updates for robotics development and simulation.',
    source: 'NVIDIA',
    sourceUrl: 'https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg?w=400&h=250&fit=crop',
    imageUrl:
      'https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-04-08',
  },
  {
    id: '11',
    title: 'Google launches Notebooks inside Gemini with NotebookLM sync',
    summary:
      'Google added notebooks to Gemini so users can organize files, instructions, and chats in one place and keep them synced across NotebookLM workflows.',
    source: 'Google',
    sourceUrl:
      'https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Notebooks_header_2026_2096x1182.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-08',
  },
  {
    id: '12',
    title: 'xAI launches XChat app with Grok 4.3 Beta integration',
    summary:
      'xAI released XChat app bringing Grok 4.3 Beta capabilities to mobile users with real-time web search, image generation, and code assistance.',
    source: 'xAI',
    sourceUrl: 'https://x.ai/xchat',
    imageUrl:
      'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'product',
    publishedAt: '2026-04-18',
  },
  {
    id: '13',
    title: 'Anthropic achieves $800B valuation in latest funding round',
    summary:
      'Anthropic secured new funding at an $800B valuation, making it one of the most valuable AI companies globally as demand for Claude models surges.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/funding',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'product',
    publishedAt: '2026-04-20',
  },
  {
    id: '14',
    title: 'Google adds Flex and Priority tiers to the Gemini API',
    summary:
      'Google launched new Gemini API service tiers so teams can trade latency for lower cost with Flex or buy higher reliability with Priority for critical workloads.',
    source: 'Google',
    sourceUrl:
      'https://blog.google/innovation-and-ai/technology/developers-tools/introducing-flex-and-priority-inference/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/cost_reliability_Gemini_API-socia.width-300.format-webp.webp',
    category: 'tool',
    publishedAt: '2026-04-02',
  },
  {
    id: '15',
    title: 'OpenAI evolves Agents SDK with enhanced tool use and memory',
    summary:
      'OpenAI released major updates to the Agents SDK featuring improved tool use, persistent memory across sessions, and better multi-agent collaboration.',
    source: 'OpenAI',
    sourceUrl: 'https://developers.openai.com/agents-sdk-update',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'tool',
    publishedAt: '2026-04-15',
  },
  {
    id: '16',
    title: 'DeepSeek V4 confirmed for April 2026 with multimodal and 1M context',
    summary:
      'DeepSeek V4 is confirmed for April 2026 launch featuring a multimodal architecture with 1 million token context window and Engram memory system.',
    source: 'DeepSeek',
    sourceUrl: 'https://renovateqr.com/blog/chinese-ai-models-april-2026',
    imageUrl:
      'https://preview.redd.it/deepseek-v4-all-leaks-and-infos-for-the-release-day-not-v0-lllfdd3uvimg1.png?width=640&crop=smart&auto=webp&s=2492384251ab16ffeac1c5d0317dd71610c3c077',
    category: 'model',
    publishedAt: '2026-04-01',
  },
  {
    id: '17',
    title: 'Anthropic blocks OpenClaw access citing Claude misuse concerns',
    summary:
      'Anthropic restricted OpenClaw access to Claude APIs after discovering the autonomous agent framework was being used for automated vulnerability research.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/openclaw-statement',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'capability',
    publishedAt: '2026-04-19',
  },
  {
    id: '18',
    title: 'Google expands NotebookLM limits for education users',
    summary:
      'Google raised NotebookLM usage limits for Education Plus and Teaching and Learning customers, letting schools create more notebooks, sources, quizzes, and audio.',
    source: 'Google',
    sourceUrl:
      'https://blog.google/products-and-platforms/products/education/ai-tools-programs-educators/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/006-ASUGSV-Blog-Header-Apr-10_006.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-13',
  },
  {
    id: '19',
    title: 'Alibaba releases Qwen 3.6 Max with #1 coding benchmark performance',
    summary:
      'Alibaba launched Qwen 3.6 Max ranking first on six coding benchmarks including SWE-bench Pro and Terminal-Bench 2.0, with 256K context and improved agentic capabilities.',
    source: 'Alibaba',
    sourceUrl: 'https://tech.yahoo.com/ai/gemini/articles/alibaba-drops-qwen-3-6-212453373.html',
    imageUrl:
      'https://cdn.techinasia.com/wp-content/uploads/2025/09/1759051591_WhatsApp-Image-2025-09-28-at-16.21.03.jpeg',
    category: 'model',
    publishedAt: '2026-04-20',
  },
  {
    id: '25',
    title: 'Moonshot AI releases Kimi 2.6 open-weight model for long-horizon coding',
    summary:
      'Moonshot AI launched Kimi 2.6, a 1T parameter open-weight model scoring 58.6% on SWE-Bench Pro and leading on HLE-Full with tools among frontier models.',
    source: 'Moonshot',
    sourceUrl: 'https://www.marktechpost.com/2026/04/20/moonshot-ai-releases-kimi-k2-6-with-long-horizon-coding-agent-swarm-scaling-to-300-sub-agents-and-4000-coordinated-steps/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'model',
    publishedAt: '2026-04-20',
  },
  {
    id: '20',
    title: 'Google launches Gemini Mac app for desktop AI assistance',
    summary:
      'Google released Gemini Mac app bringing AI assistance directly to macOS with native integrations, file system access, and system-level capabilities.',
    source: 'Google',
    sourceUrl: 'https://blog.google/innovation-and-ai/products/gemini-app/gemini-mac/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-12',
  },
  {
    id: '21',
    title: 'Mistral releases Devstral for open coding agent workflows',
    summary:
      'Mistral launched Devstral, an open coding model optimized for autonomous agent workflows with improved bug fixing and code review capabilities.',
    source: 'Mistral',
    sourceUrl: 'https://mistral.ai/news/devstral',
    imageUrl:
      'https://aihub.qualcomm.com/_next/image?url=%2Fimg%2Fecosystem%2F1920x1080%2Fmistral-ai.webp&w=3840&q=75',
    category: 'model',
    publishedAt: '2026-04-03',
  },
  {
    id: '22',
    title: 'Google announces Deep Research powered by Gemini 3.1 Pro',
    summary:
      'Google announced Deep Research feature in Gemini using advanced reasoning to autonomously explore complex topics and generate comprehensive reports.',
    source: 'Google',
    sourceUrl: 'https://blog.google/innovation-and-ai/products/gemini-app/deep-research/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'capability',
    publishedAt: '2026-04-22',
  },
  {
    id: '23',
    title: 'MiniMax M2.7 launches with 3x faster inference speeds',
    summary:
      'MiniMax released M2.7 achieving 3x faster inference speeds while maintaining competitive benchmark performance across coding and reasoning tasks.',
    source: 'MiniMax',
    sourceUrl: 'https://pricepertoken.com/news/model-releases',
    imageUrl:
      'https://file.cdn.minimax.io/public/60e15b62-aece-42ab-898f-ce97c59f3941.png',
    category: 'model',
    publishedAt: '2026-04-01',
  },
  {
    id: '24',
    title: 'ByteDance launches Dreamina Seedance 2.0 for video generation',
    summary:
      'ByteDance released Dreamina Seedance 2.0, a new AI video generation model integrated into CapCut for enhanced creative workflows.',
    source: 'ByteDance',
    sourceUrl: 'https://pricepertoken.com/news/model-releases',
    imageUrl:
      'https://cdn.technobezz.com/c/Technobezz_2026_02_14_T092431_822_304d822711.png',
    category: 'tool',
    publishedAt: '2026-04-01',
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
