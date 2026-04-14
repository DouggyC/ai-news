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
  'Hugging Face',
  'Zhipu AI',
  'Corti',
  'Pony.ai',
];


const newsCards: NewsCard[] = [
  {
    id: '1',
    title: 'Google releases Gemma 4 open models for advanced reasoning',
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
    id: '2',
    title: 'Google adds Flex and Priority tiers to the Gemini API',
    summary:
      'Google launched new Gemini API service tiers so teams can trade latency for lower cost with Flex or buy higher reliability with Priority for critical agent workloads.',
    source: 'Google',
    sourceUrl:
      'https://blog.google/innovation-and-ai/technology/developers-tools/introducing-flex-and-priority-inference/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/cost_reliability_Gemini_API-socia.width-300.format-webp.webp',
    category: 'tool',
    publishedAt: '2026-04-02',
  },
  {
    id: '3',
    title: 'Anthropic launches Project Glasswing for AI cybersecurity',
    summary:
      'Anthropic announced Project Glasswing, a new cybersecurity initiative bringing together major tech companies to use Claude Mythos Preview for finding vulnerabilities.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/glasswing',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'product',
    publishedAt: '2026-04-14',
  },
  {
    id: '4',
    title: 'Google, Zhipu, and Alibaba drop frontier AI models under MIT license',
    summary:
      'April 2026 delivered an unprecedented wave of frontier-class open source AI models including Gemma 4 31B, GLM-5.1, and Qwen3.6-Plus all under permissive licensing.',
    source: 'Google',
    sourceUrl: 'https://smartchunks.com/google-zhipu-alibaba-frontier-ai-models-mit-license-april-2026/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemma-4_blog_keyword_header-dark.width-200.format-webp.webp',
    category: 'model',
    publishedAt: '2026-04-12',
  },
  {
    id: '5',
    title: 'OpenAI launches GPT-5.4 with Pro and Thinking versions',
    summary:
      'OpenAI released GPT-5.4 featuring native computer use, 1 million token context, and improved coding capabilities across Thinking and Pro variants.',
    source: 'OpenAI',
    sourceUrl: 'https://techcrunch.com/2026/03/05/openai-launches-gpt-5-4-with-pro-and-thinking-versions/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-04-05',
  },
  {
    id: '6',
    title: 'Anthropic expands partnership with Google and Broadcom for AI compute',
    summary:
      'Anthropic signed a new agreement with Google and Broadcom for multiple gigawatts of next-generation TPU capacity expected to come online starting in 2027.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/google-broadcom-partnership-compute',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'product',
    publishedAt: '2026-04-06',
  },
  {
    id: '7',
    title: 'Google Gemini app can now build interactive simulations and 3D models',
    summary:
      'Google rolled out Gemini app responses that generate interactive visual models and simulations, turning complex explanations into manipulable learning experiences.',
    source: 'Google',
    sourceUrl:
      'https://blog.google/innovation-and-ai/products/gemini-app/3d-models-charts/',
    imageUrl:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/1_Visualize_how_fractals_work.width-100.format-webp.webp',
    category: 'product',
    publishedAt: '2026-04-09',
  },
  {
    id: '8',
    title: 'Meta launches Muse Spark to challenge OpenAI and Google',
    summary:
      'Meta released Muse Spark, a new AI model focused on creative applications, positioning itself against OpenAI and Google in the rapidly evolving AI landscape.',
    source: 'Meta',
    sourceUrl: 'https://pricepertoken.com/news/model-releases',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'model',
    publishedAt: '2026-04-10',
  },
  {
    id: '9',
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
    id: '10',
    title: 'Google launches notebooks inside Gemini with NotebookLM sync',
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
    id: '11',
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
    id: '12',
    title: 'MiniMax M2.7 launches with 3x faster inference',
    summary:
      'MiniMax released M2.7, achieving 3x faster inference speeds while maintaining competitive benchmark performance across coding and reasoning tasks.',
    source: 'MiniMax',
    sourceUrl: 'https://pricepertoken.com/news/model-releases',
    imageUrl:
      'https://file.cdn.minimax.io/public/60e15b62-aece-42ab-898f-ce97c59f3941.png',
    category: 'model',
    publishedAt: '2026-04-01',
  },
  {
    id: '13',
    title: 'Mistral releases Mistral Small 4 for efficient AI inference',
    summary:
      'Mistral AI launched Mistral Small 4, a compact model optimized for efficient inference with competitive performance on reasoning and coding benchmarks.',
    source: 'Mistral',
    sourceUrl: 'https://pricepertoken.com/news/model-releases',
    imageUrl:
      'https://aihub.qualcomm.com/_next/image?url=%2Fimg%2Fecosystem%2F1920x1080%2Fmistral-ai.webp&w=3840&q=75',
    category: 'model',
    publishedAt: '2026-04-03',
  },
  {
    id: '14',
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
  {
    id: '15',
    title: 'Alibaba releases Qwen3.6-Plus with 1M token context',
    summary:
      'Alibaba unveiled Qwen3.6-Plus featuring a 1 million token context window and optimized agentic coding capabilities for enterprise deployment.',
    source: 'Alibaba',
    sourceUrl: 'https://www.alibabacloud.com/press-room/alibaba-unveils-qwen3-6-plus-to-accelerate-agentic',
    imageUrl:
      'https://cdn.techinasia.com/wp-content/uploads/2025/09/1759051591_WhatsApp-Image-2025-09-28-at-16.21.03.jpeg',
    category: 'model',
    publishedAt: '2026-04-02',
  },
  {
    id: '16',
    title: 'Microsoft Copilot Cowork now available in Frontier Program',
    summary:
      'Microsoft launched Copilot Cowork in its Frontier Program, enabling multi-model AI agents that collaborate across Microsoft 365 applications.',
    source: 'Microsoft',
    sourceUrl:
      'https://news.microsoft.com/source/emea/2026/03/copilot-cowork-now-available-in-the-frontier-program/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'product',
    publishedAt: '2026-04-02',
  },
  {
    id: '17',
    title: 'Hugging Face releases Holo3 for advanced computer use',
    summary:
      'Hugging Face announced Holo3, a new project focused on breaking the computer use frontier with AI models that can navigate and utilize computer interfaces.',
    source: 'Hugging Face',
    sourceUrl:
      'https://aitoolly.com/en/ai-news/article/2026-04-02-holo3-breaking-the-computer-use-frontier-latest-developments-from-hugging-face-blog',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'tool',
    publishedAt: '2026-04-02',
  },
  {
    id: '18',
    title: 'Google expands NotebookLM limits for education users',
    summary:
      'Google raised NotebookLM usage limits for Education Plus and Teaching and Learning customers, letting schools create more notebooks, sources, quizzes, and audio overviews.',
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
    title: 'Anthropic Claude Mythos preview reveals cybersecurity capabilities',
    summary:
      'Claude Mythos Preview demonstrated powerful cybersecurity capabilities finding thousands of high-severity vulnerabilities including zero-days in major operating systems.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/glasswing',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'model',
    publishedAt: '2026-04-14',
  },
  {
    id: '20',
    title: 'Corti ships Symphony for medical coding with 25% accuracy edge',
    summary:
      'Corti released Symphony for medical coding, an agentic model that outperforms OpenAI and Anthropic in medical coding accuracy by more than 25%.',
    source: 'Corti',
    sourceUrl:
      'http://www.prnewswire.co.uk/news-releases/corti-ships-symphony-for-medical-coding-with-more-than-25-accuracy-edge-over-openai-and-anthropic-302730432.html',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'product',
    publishedAt: '2026-04-01',
  },
  {
    id: '21',
    title: 'Pony.ai launches PonyWorld 2.0 for autonomous driving AI',
    summary:
      'Pony.ai announced PonyWorld 2.0, a self-improving physical AI engine for autonomous driving that can diagnose its own weaknesses and guide targeted data collection.',
    source: 'Pony.ai',
    sourceUrl:
      'https://www.prnewswire.com/apac/news-releases/ponyai-launches-ponyworld-2-0--a-self-improving-physical-ai-engine-for-autonomous-driving-302739016.html',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'product',
    publishedAt: '2026-04-10',
  },
  {
    id: '22',
    title: 'xAI Grok 4.20 achieves competitive benchmarks on independent tests',
    summary:
      'xAI Grok 4.20 performs competitively across multiple benchmark tests with its multi-agent architecture and improved instruction following capabilities.',
    source: 'xAI',
    sourceUrl: 'https://clawbot.ai/wiki/llm-models/grok.html',
    imageUrl:
      'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'model',
    publishedAt: '2026-04-07',
  },
  {
    id: '23',
    title: 'GLM-5.1 beats Claude Opus 4.6 on SWE-Bench with fewer parameters',
    summary:
      'Zhipu AI released GLM-5.1 under MIT license, achieving competitive benchmarks including beating Claude Opus 4.6 on SWE-Bench while using only 40B active parameters.',
    source: 'Zhipu AI',
    sourceUrl: 'https://smartchunks.com/google-zhipu-alibaba-frontier-ai-models-mit-license-april-2026/',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'model',
    publishedAt: '2026-04-07',
  },
  {
    id: '24',
    title: 'OpenAI Codex CLI offers pay-as-you-go pricing for teams',
    summary:
      'OpenAI launched pay-as-you-go pricing for Codex CLI, making their agentic coding tool more accessible for development teams with variable usage patterns.',
    source: 'OpenAI',
    sourceUrl: 'https://pricepertoken.com/news/model-releases',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'tool',
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
