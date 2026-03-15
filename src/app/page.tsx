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
    title: 'Anthropic Launches Claude Opus 4.6 with 1M Token Context',
    summary: 'Anthropic releases Claude Opus 4.6 featuring adaptive reasoning, context compaction, and a 1 million token context window for long-running AI agents.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/claude-opus-4-6',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-13',
  },
  {
    id: '2',
    title: 'NVIDIA Nemotron 3 Super Delivers 5x Higher Throughput for Agentic AI',
    summary: 'NVIDIA launches Nemotron 3 Super, a 120-billion-parameter open model designed to run complex agentic AI systems at scale.',
    source: 'NVIDIA',
    sourceUrl: 'https://blogs.nvidia.com/blog/nemotron-3-super-agentic-ai/',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-11',
  },
  {
    id: '3',
    title: 'OpenAI Releases GPT-5.4 with Native Computer Use Capabilities',
    summary: 'OpenAI launches GPT-5.4 combining advanced reasoning, coding, and agentic capabilities with native computer use for enterprise work.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com',
    imageUrl: 'http://',
    category: 'model',
    publishedAt: '2026-03-05',
  },
  {
    id: '4',
    title: 'Meta Llama 4 Scout: First Enterprise-Ready Open Source LLM',
    summary: 'Meta releases Llama 4 Scout, the first truly enterprise-native open source model with built-in RAG, tool use, and compliance features for production AI deployment.',
    source: 'Meta',
    sourceUrl: 'https://www.ai-agentsplus.com/blog/meta-llama-4-scout-enterprise-open-source',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-05',
  },
  {
    id: '5',
    title: 'Apple Announces AI-Native Hardware Week with M5 Chip Devices',
    summary: 'Apple introduces new MacBook Pro, MacBook Air, and iPad Air with M5/M4 chips featuring next-generation AI capabilities and Neural Engines.',
    source: 'Apple',
    sourceUrl: 'https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-03-01',
  },
  {
    id: '6',
    title: 'Google Rolls Out Gemini Updates Across Workspace Applications',
    summary: 'Google brings Gemini-powered AI capabilities to Docs, Sheets, Slides, and Drive enabling faster content creation and smarter workflows for business users.',
    source: 'Google',
    sourceUrl: 'https://blog.google/products-and-platforms/products/workspace/gemini-workspace-updates-march-2026/',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-03-10',
  },
  {
    id: '7',
    title: 'OpenAI Launches GPT-5.3 Instant for Enhanced ChatGPT Experience',
    summary: 'OpenAI rolls out GPT-5.3 Instant as an efficiency-focused update emphasizing smoother conversational flow and higher answer relevance in ChatGPT.',
    source: 'OpenAI',
    sourceUrl: 'https://www.linkedin.com/pulse/comprehensive-ai-updates-march-410-2026-dhanushkumar-r-dqx2c',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-04',
  },
  {
    id: '8',
    title: 'xAI Releases Grok 4.20 Beta2 with Enhanced Instruction Following',
    summary: 'xAI releases Grok 4.20 Beta2 improving instruction following and suppressing hallucinations for sensitive topics while enhancing reasoning capabilities.',
    source: 'xAI',
    sourceUrl: 'https://www.ainvest.com/news/xai-launches-grok-4-20-beta2-enhanced-instruction-illusion-suppression-2603/',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-03',
  },
  {
    id: '9',
    title: 'Meta Unveils Llama 4 Series with Natively Multimodal Models',
    summary: 'Meta introduces Llama 4 series featuring Scout and Maverick variants with natively multimodal capabilities and Mixture-of-Experts architecture.',
    source: 'Meta',
    sourceUrl: 'https://themunicheye.com/meta-unveils-llama-4-ai-models-16235',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-02',
  },
  {
    id: '10',
    title: 'Google Releases Gemini Embedding 2: First Natively Multimodal Embedding Model',
    summary: 'Google launches Gemini Embedding 2, a multimodal embedding model that maps text, images, video, audio, and documents into a single embedding space.',
    source: 'Google',
    sourceUrl: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-embedding-2',
    imageUrl: 'http://',
    category: 'model',
    publishedAt: '2026-03-10',
  },
  {
    id: '11',
    title: 'Apple Confirms Siri Overhaul with Google\'s 1.2T Parameter Gemini Model',
    summary: 'Apple partners with Google to integrate a 1.2 trillion parameter Gemini AI model into Siri, launching with iOS 26.4 in March 2026.',
    source: 'Apple',
    sourceUrl: 'https://www.ai-agentsplus.com/blog/apple-google-siri-gemini-overhaul-2026',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-02-27',
  },
  {
    id: '12',
    title: 'Meta Llama 4 Maverick Matches GPT-5.3 on Code Generation Tasks',
    summary: 'Meta Llama 4 Maverick consistently trails GPT-5.3 by 1-2 percentage points on reasoning benchmarks but matches or exceeds it on code generation tasks.',
    source: 'Meta',
    sourceUrl: 'https://www.clawpod.co/blog/meta-llama-4-release-features-benchmarks',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-07',
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
               title={card.title}
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
