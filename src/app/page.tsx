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

const newsCards: NewsCard[] = [
  {
    id: '1',
    title: 'GPT-5.4 Released with Native Computer Use',
    summary: 'OpenAI launches GPT-5.4 with native computer use capabilities and 1M token context window.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-05',
  },
  {
    id: '2',
    title: 'Claude Opus 4.6 Leads SWE-bench',
    summary: 'Anthropic\'s Claude Opus 4.6 achieves 80.8% on SWE-bench Verified, surpassing all other models.',
    source: 'Anthropic',
    sourceUrl: 'https://anthropic.com',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-02-05',
  },
  {
    id: '3',
    title: 'Google Introduces Antigravity IDE',
    summary: 'Google announces Antigravity, an agent-first AI-powered development environment powered by Gemini 3.',
    source: 'Google',
    sourceUrl: 'https://antigravity.google',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2025-11-18',
  },
  {
    id: '4',
    title: 'Google Gemini 3.1 Pro Released',
    summary: 'Google DeepMind releases Gemini 3.1 Pro with improved reasoning and 1M token context.',
    source: 'Google',
    sourceUrl: 'https://deepmind.google',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-02-19',
  },
  {
    id: '5',
    title: 'OpenAI Codex Now Available to Plus Users',
    summary: 'OpenAI makes Codex available to ChatGPT Plus users with internet access during task execution.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
    category: 'tool',
    publishedAt: '2025-06-03',
  },
  {
    id: '6',
    title: 'Sora 2 Launches with Improved Physics',
    summary: 'OpenAI releases Sora 2 with significantly improved physics accuracy and photorealism.',
    source: 'OpenAI',
    sourceUrl: 'https://sora.com',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2025-12-15',
  },
  {
    id: '7',
    title: 'Cursor IDE Reaches $2B ARR',
    summary: 'Anysphere\'s Cursor IDE surpasses $2 billion in annualized recurring revenue.',
    source: 'Anysphere',
    sourceUrl: 'https://cursor.sh',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-02-15',
  },
  {
    id: '8',
    title: 'xAI Grok 4 Claims World\'s Smartest',
    summary: 'xAI releases Grok 4, claiming it is the most intelligent model with native tool use.',
    source: 'xAI',
    sourceUrl: 'https://x.ai',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2025-07-09',
  },
  {
    id: '9',
    title: 'Meta Llama 4 Behemoth Released',
    summary: 'Meta releases Llama 4 Behemoth with 500B parameters, achieving state-of-the-art benchmarks.',
    source: 'Meta',
    sourceUrl: 'https://ai.meta.com',
    imageUrl: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-02-10',
  },
  {
    id: '10',
    title: 'Google Veo 3 Released',
    summary: 'Google DeepMind unveils Veo 3 with cinematic-grade video generation and audio sync.',
    source: 'Google',
    sourceUrl: 'https://deepmind.google',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-02-07',
  },
  {
    id: '11',
    title: 'Claude Enterprise Launches with GitHub Integration',
    summary: 'Anthropic releases Claude Enterprise with deep GitHub integration and enhanced security.',
    source: 'Anthropic',
    sourceUrl: 'https://anthropic.com',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2025-09-24',
  },
  {
    id: '12',
    title: 'OpenAI Operator Enables Autonomous Web Tasks',
    summary: 'OpenAI launches Operator, a computer-using agent that autonomously navigates and completes web tasks.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
    category: 'capability',
    publishedAt: '2025-12-18',
  },
  {
    id: '13',
    title: 'DeepSeek V3.2 Breaks Efficiency Records',
    summary: 'DeepSeek releases V3.2 achieving GPT-4 level performance at 10x lower computational cost.',
    source: 'DeepSeek',
    sourceUrl: 'https://deepseek.com',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2025-12-01',
  },
  {
    id: '14',
    title: 'NotebookLM Adds Video Overviews',
    summary: 'Google NotebookLM introduces Video Overviews that generate narrated slide decks from sources.',
    source: 'Google',
    sourceUrl: 'https://notebooklm.google',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
    category: 'tool',
    publishedAt: '2025-07-29',
  },
  {
    id: '15',
    title: 'Mistral Large 3 Open Source',
    summary: 'Mistral AI releases Large 3 as open source with 140B parameters and strong benchmarks.',
    source: 'Mistral',
    sourceUrl: 'https://mistral.ai',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2025-12-02',
  },
  {
    id: '16',
    title: 'Runway Gen-4 Available',
    summary: 'Runway releases Gen-4 with improved consistency and creative control for video generation.',
    source: 'Runway',
    sourceUrl: 'https://runwayml.com',
    imageUrl: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2025-11-21',
  },
  {
    id: '17',
    title: 'Anthropic Computer Use Now Generally Available',
    summary: 'Anthropic makes Computer Use generally available, enabling Claude to autonomously use computers.',
    source: 'Anthropic',
    sourceUrl: 'https://anthropic.com',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
    category: 'capability',
    publishedAt: '2025-10-22',
  },
  {
    id: '18',
    title: 'Midjourney V7 Released with Improved Consistency',
    summary: 'Midjourney launches V7 with dramatically improved subject consistency and prompt adherence.',
    source: 'Midjourney',
    sourceUrl: 'https://midjourney.com',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2025-03-21',
  },
  {
    id: '19',
    title: 'Google Gemini 2.5 Pro Reasoning Breakthrough',
    summary: 'Google DeepMind releases Gemini 2.5 Pro with breakthrough reasoning capabilities.',
    source: 'Google',
    sourceUrl: 'https://deepmind.google',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2024-12-10',
  },
  {
    id: '20',
    title: 'ElevenLabs Adds Real-time Voice Synthesis',
    summary: 'ElevenLabs launches real-time voice synthesis with sub-300ms latency for interactive apps.',
    source: 'ElevenLabs',
    sourceUrl: 'https://elevenlabs.io',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=250&fit=crop',
    category: 'tool',
    publishedAt: '2025-08-15',
  },
  {
    id: '21',
    title: 'OpenAI ChatGPT Apps SDK Released',
    summary: 'OpenAI launches Apps SDK enabling developers to build interactive tools within ChatGPT.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop',
    category: 'tool',
    publishedAt: '2025-10-06',
  },
  {
    id: '22',
    title: 'Suno V4 Produces Professional Music',
    summary: 'Suno releases V4 with significantly improved audio quality and genre accuracy.',
    source: 'Suno',
    sourceUrl: 'https://suno.ai',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2025-09-12',
  },
  {
    id: '23',
    title: 'Qwen 3.5 Plus Matches GPT-4',
    summary: 'Alibaba\'s Qwen 3.5 Plus achieves GPT-4 level performance on multiple benchmarks.',
    source: 'Alibaba',
    sourceUrl: 'https://qwen.ai',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-02-16',
  },
  {
    id: '24',
    title: 'Google Workspace Gets Gemini Integration',
    summary: 'Google integrates Gemini into Workspace with AI-powered writing, summarization, and analysis.',
    source: 'Google',
    sourceUrl: 'https://workspace.google.com',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop',
    category: 'tool',
    publishedAt: '2025-04-15',
  },
];

function getCategoryColor(category: NewsCard['category']): string {
  const colors = {
    model: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    product: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    tool: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    capability: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
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

export default function AINewsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0f2744]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            📰 AI News
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Latest AI news, model releases, product updates, and industry announcements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newsCards.map((card) => (
            <a
              key={card.id}
              href={card.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(card.category)}`}>
                    {getCategoryLabel(card.category)}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {card.source}
                  </span>
                  <span className="text-xs text-zinc-300 dark:text-zinc-600">•</span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    {new Date(card.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                  {card.summary}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Showing {newsCards.length} news items • Click cards to read full articles
          </p>
        </div>
      </main>
    </div>
  );
}
