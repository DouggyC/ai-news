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
    title:
      'NVIDIA Nemotron 3 Super Delivers 5x Higher Throughput for Agentic AI',
    summary:
      'NVIDIA launches Nemotron 3 Super, a 120-billion-parameter open model designed to run complex agentic AI systems at scale with hybrid Mamba-Transformer MoE architecture.',
    source: 'NVIDIA',
    sourceUrl: 'https://blogs.nvidia.com/blog/nemotron-3-super-agentic-ai',
    imageUrl:
      'https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg?w=400&h=250&fit=crop',
    category: 'model',
    publishedAt: '2026-03-16',
  },

  {
    id: '2',
    title: 'Anthropic Launches Claude Opus 4.6 with 1M Token Context',
    summary:
      'Claude Opus 4.6 features adaptive reasoning, context compaction, and a 1 million token context window for long-running AI agents.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/news/claude-opus-4-6',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'model',
    publishedAt: '2026-03-15',
  },
  {
    id: '3',
    title: 'Anthropic Commits $100M to Claude Partner Network',
    summary:
      'Anthropic launches Claude Partner Network, formalizing partnerships with Accenture and Deloitte to make Claude the default AI platform for enterprises.',
    source: 'Anthropic',
    sourceUrl: 'https://www.anthropic.com/partners/network',
    imageUrl:
      'https://i.gzn.jp/img/2024/11/15/anthropic-claude-nuclear-info/00.png',
    category: 'product',
    publishedAt: '2026-03-14',
  },
  {
    id: '4',
    title: 'Claude AI Can Now Respond with Charts and Diagrams',
    summary:
      "Anthropic's Claude now automatically generates interactive visuals based on conversations, marking a major upgrade in multimodal AI capabilities.",
    source: 'Anthropic',
    sourceUrl:
      'https://www.theverge.com/ai-artificial-intelligence/893625/anthropic-claude-ai-charts-diagrams',
    imageUrl:
      'https://platform.theverge.com/wp-content/uploads/sites/2/2025/08/STKB364_CLAUDE_D.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=1440',
    category: 'capability',
    publishedAt: '2026-03-13',
  },

  {
    id: '5',
    title: 'xAI Releases Grok 4.20 Beta with 2M Token Context',
    summary:
      'Grok 4.20 Beta launches with three API variations: Multi-Agent, Reasoning, and Non-Reasoning, supporting 2 million token context windows.',
    source: 'xAI',
    sourceUrl: 'https://x.ai',
    imageUrl:
      'https://www.nyventurehub.com/wp-content/uploads/sites/934/2024/12/xAI-600x400.jpg',
    category: 'model',
    publishedAt: '2026-03-13',
  },
  {
    id: '6',
    title: 'Grok 4.20 Sets Industry Record with 78% Non-Fantasy Rate',
    summary:
      "xAI's Grok 4.20 achieves record-low hallucination rates while improving reasoning performance by 6 points on Intelligence Index.",
    source: 'xAI',
    sourceUrl: 'https://x.ai',
    imageUrl:
      'https://fedscoop.com/wp-content/uploads/sites/5/2025/09/GettyImages-2231913678.jpg',
    category: 'model',
    publishedAt: '2026-03-12',
  },

  {
    id: '7',
    title: 'Oracle Q3 Beats Estimates, Raises Outlook on AI Demand',
    summary:
      'Oracle reports strong Q3 results with cloud infrastructure up 84%, raising revenue forecast to $90 billion by 2027 amid AI data center boom.',
    source: 'Oracle',
    sourceUrl: 'https://www.oracle.com',
    imageUrl:
      'https://i.nextmedia.com.au/News/2026-03-05T181823Z_2_LYNXMPEM241CI_RTROPTP_4_ORACLE-LAYOFFS.JPG',
    category: 'product',
    publishedAt: '2026-03-11',
  },

  {
    id: '8',
    title: 'Oracle Sees AI Boom Through At Least 2027',
    summary:
      "Oracle's remaining performance obligations grow 325% YoY to $553 billion, sending shares up 8% as AI data center demand surges.",
    source: 'Oracle',
    sourceUrl: 'https://www.oracle.com/cloud/',
    imageUrl:
      'https://i.nextmedia.com.au/News/2026-03-05T181823Z_2_LYNXMPEM241CI_RTROPTP_4_ORACLE-LAYOFFS.JPG',
    category: 'product',
    publishedAt: '2026-03-10',
  },

  {
    id: '9',
    title: 'AI Agent Now Available in Oracle Analytics Cloud',
    summary:
      'Oracle Analytics Cloud introduces AI Agent capabilities in March 2026 release, enabling automated business intelligence workflows.',
    source: 'Oracle',
    sourceUrl: 'https://www.oracle.com/cloud/analytics/',
    imageUrl:
      'https://i.nextmedia.com.au/News/2026-03-05T181823Z_2_LYNXMPEM241CI_RTROPTP_4_ORACLE-LAYOFFS.JPG',
    category: 'product',
    publishedAt: '2026-03-09',
  },
  {
    id: '10',
    title: 'AWS and Cerebras Partner for 5X Faster Cloud AI Inference',
    summary:
      'AWS partners with Cerebras to deliver industry-leading AI inference speed through Amazon Bedrock, using Trainium + CS-3 solution.',
    source: 'Amazon',
    sourceUrl: 'https://aws.amazon.com',
    imageUrl:
      'https://mms.businesswire.com/media/20260313406341/en/2746335/5/aws_cerebras_black_4.jpg',
    category: 'product',
    publishedAt: '2026-03-08',
  },
  {
    id: '11',
    title: 'NVIDIA Nemotron 3 Nano Now Available on Amazon Bedrock',
    summary:
      'NVIDIA Nemotron 3 Nano launches as fully managed serverless model on Amazon Bedrock, enabling accelerated AI inference at scale.',
    source: 'Amazon',
    sourceUrl: 'https://aws.amazon.com/bedrock/',
    imageUrl:
      'https://blogs.nvidia.com/wp-content/uploads/2025/12/nvidia-aws-lockup-corp-blog-1280x680-1.png',
    category: 'product',
    publishedAt: '2026-03-07',
  },

  {
    id: '12',
    title: 'Meta Unveils Llama 4 Scout: First Enterprise-Ready Open Source LLM',
    summary:
      'Meta releases Llama 4 Scout, the first truly enterprise-native open source model with built-in RAG, tool use, and compliance features.',
    source: 'Meta',
    sourceUrl: 'https://llama.com',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'model',
    publishedAt: '2026-03-06',
  },
  {
    id: '13',
    title: 'Meta Unveils Roadmap for In-House AI Chips',
    summary:
      'Meta announces roadmap of four new custom chips for AI infrastructure, reducing dependence on NVIDIA for data center operations.',
    source: 'Meta',
    sourceUrl: 'https://about.fb.com/news',
    imageUrl:
      'https://cdn.wccftech.com/wp-content/uploads/2025/03/Meta-custom-AI-chip.jpg',
    category: 'product',
    publishedAt: '2026-03-05',
  },
  {
    id: '14',
    title: 'Meta Llama 4 Maverick Matches GPT-5.3 on Code Generation',
    summary:
      'Meta Llama 4 Maverick consistently trails GPT-5.3 by 1-2 percentage points on reasoning benchmarks but matches on code generation.',
    source: 'Meta',
    sourceUrl: 'https://llama.com',
    imageUrl:
      'https://overtdigitalmarketing.com.au/wp-content/uploads/2025/08/llama-4.webp',
    category: 'model',
    publishedAt: '2026-03-04',
  },

  {
    id: '15',
    title:
      'Microsoft Launches Phi-4-Reasoning-Vision: Model That Knows When Not to Think',
    summary:
      'Microsoft releases Phi-4-reasoning-vision-15B, a compact multimodal model that activates or suppresses chain-of-thought reasoning depending on the task.',
    source: 'Microsoft',
    sourceUrl: 'https://azure.microsoft.com/en-us/services/cognitive-services/',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-03-03',
  },
  {
    id: '16',
    title: 'Microsoft Open-Sources Phi-4 Vision Model',
    summary:
      'Microsoft open-sources Phi-4-reasoning-vision-15B, trained on one-fifth the data of competitors while matching performance on vision-language tasks.',
    source: 'Microsoft',
    sourceUrl: 'https://azure.microsoft.com/en-us/services/cognitive-services/',
    imageUrl: 'https://i.ytimg.com/vi/qAgAQQ41P3A/maxresdefault.jpg',
    category: 'model',
    publishedAt: '2026-03-02',
  },
  {
    id: '17',
    title: 'Google Deepens Gemini AI Integration Across Workspace',
    summary:
      'Google brings Gemini-powered AI to Docs, Sheets, Slides, and Drive, enabling users to generate fully formatted content from Gmail and Drive.',
    source: 'Google',
    sourceUrl:
      'https://blog.google/products-and-platforms/products/workspace/gemini-workspace-updates-march-2026/',
    imageUrl:
      'https://qxbrcmigdnyeffsvdkkb.supabase.co/storage/v1/object/public/blog-images/1771575440911-gemini-31-pro-promnest.webp',
    category: 'product',
    publishedAt: '2026-03-01',
  },

  {
    id: '18',
    title: 'Google Provides Pentagon with Gemini-Powered AI Agents',
    summary:
      'Google expands DoD partnership, making Gemini available to over 3 million government employees for unclassified applications via GenAI.mil.',
    source: 'Google',
    sourceUrl:
      'https://cloud.google.com/blog/topics/public-sector/gemini-for-government',
    imageUrl:
      'https://qxbrcmigdnyeffsvdkkb.supabase.co/storage/v1/object/public/blog-images/1771575440911-gemini-31-pro-promnest.webp',
    category: 'product',
    publishedAt: '2026-02-28',
  },

  {
    id: '19',
    title: 'OpenAI Releases GPT-5.4 with Native Computer Use',
    summary:
      'GPT-5.4 combines advanced reasoning, coding, and native computer use capabilities, supporting 1 million token context for enterprise work.',
    source: 'OpenAI',
    sourceUrl: 'https://openai.com',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-02-27',
  },

  {
    id: '20',
    title: 'GPT-5.4 Outperforms Gemini 3.1 Pro and Claude Opus 4.6',
    summary:
      "OpenAI's GPT-5.4 sets new benchmarks in reasoning and coding, available in ChatGPT and API with Pro variant for maximum performance.",
    source: 'OpenAI',
    sourceUrl: 'https://openai.com',
    imageUrl:
      'https://9to5mac.com/wp-content/uploads/sites/6/2026/02/chatgpt-app-icon-light.jpg?quality=82&strip=all&w=1600',
    category: 'model',
    publishedAt: '2026-02-26',
  },

  {
    id: '21',
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
    id: '22',
    title: 'Doubao Hits 100 Million Daily Active Users',
    summary:
      "ByteDance's Doubao surpasses 100M DAUs, becoming China's most popular AI chatbot and expanding AI capabilities across TikTok ecosystem.",
    source: 'ByteDance',
    sourceUrl: 'https://www.doubao.com',
    imageUrl:
      'https://cdn.technobezz.com/c/Technobezz_2026_02_14_T092431_822_304d822711.png',
    category: 'product',
    publishedAt: '2026-02-24',
  },

  {
    id: '23',
    title: 'Adobe Debuts AI Assistant for Photoshop',
    summary:
      'Adobe launches AI Assistant in Photoshop beta, allowing users to edit images through natural language prompts for object removal, color changes, and lighting adjustments.',
    source: 'Adobe',
    sourceUrl: 'https://www.adobe.com/products/photoshop',
    imageUrl:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-02-23',
  },

  {
    id: '24',
    title: 'Adobe Firefly Offers Unlimited Generations',
    summary:
      'Adobe announces Firefly subscribers can create unlimited AI generations through March 16, as 86% of users now incorporate generative AI in workflows.',
    source: 'Adobe',
    sourceUrl: 'https://www.adobe.com/products/firefly',
    imageUrl:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    category: 'product',
    publishedAt: '2026-02-22',
  },

  {
    id: '25',
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
    id: '26',
    title: 'Qwen3.5 Outperforms GPT-5.2 and Claude 4.5 Opus',
    summary:
      "Alibaba's Qwen3.5 multimodal MoE model outperforms GPT-5.2 and Claude 4.5 Opus on several benchmarks, available on Hugging Face.",
    source: 'Alibaba',
    sourceUrl: 'https://www.alibabacloud.com/en/product/model-studio',
    imageUrl:
      'https://cdn.techinasia.com/wp-content/uploads/2025/09/1759051591_WhatsApp-Image-2025-09-28-at-16.21.03.jpeg',
    category: 'model',
    publishedAt: '2026-02-20',
  },

  {
    id: '27',
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
    id: '28',
    title: 'DeepSeek V4: Trillion-Parameter Open-Source AI',
    summary:
      'DeepSeek V4 features ~1 trillion total parameters with 32B active per pass, targeting 1M context and native multimodal processing.',
    source: 'DeepSeek',
    sourceUrl: 'https://www.deepseek.com',
    imageUrl:
      'https://preview.redd.it/deepseek-v4-all-leaks-and-infos-for-the-release-day-not-v0-lllfdd3uvimg1.png?width=640&crop=smart&auto=webp&s=2492384251ab16ffeac1c5d0317dd71610c3c077',
    category: 'model',
    publishedAt: '2026-02-18',
  },

  {
    id: '29',
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
    id: '30',
    title: 'MiniMax M2.5: Built for Real-World Productivity',
    summary:
      'MiniMax M2.5 achieves SOTA in coding and agentic tool use with 80.2% on SWE-Bench Verified, offering frontier performance at 10x lower cost.',
    source: 'Minimax',
    sourceUrl: 'https://www.minimax.io',
    imageUrl:
      'https://file.cdn.minimax.io/public/60e15b62-aece-42ab-898f-ce97c59f3941.png',
    category: 'model',
    publishedAt: '2026-02-16',
  },

  {
    id: '32',
    title: 'Mistral AI Unveils Mistral OCR: Best Document Understanding',
    summary:
      'Mistral launches Mistral OCR, claimed as the best OCR on the planet, supporting extraction from complex PDFs, images, tables, and multilingual documents.',
    source: 'Mistral',
    sourceUrl: 'https://mistral.ai',
    imageUrl:
      'https://aihub.qualcomm.com/_next/image?url=%2Fimg%2Fecosystem%2F1920x1080%2Fmistral-ai.webp&w=3840&q=75',
    category: 'product',
    publishedAt: '2026-02-15',
  },

  {
    id: '33',
    title: 'MiniMax Launches Hailuo 02 for Video Generation',
    summary:
      'MiniMax releases Hailuo 02, a world-class video generation model with record-breaking cost efficiency for creative content production.',
    source: 'Minimax',
    sourceUrl: 'https://www.minimax.io',
    imageUrl:
      'https://file.cdn.minimax.io/public/60e15b62-aece-42ab-898f-ce97c59f3941.png',
    category: 'product',
    publishedAt: '2026-02-14',
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
