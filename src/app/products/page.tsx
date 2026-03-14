'use client';

interface Product {
  name: string;
  description?: string;
  url?: string;
}

interface ProductRow {
  category: string;
  products: Record<string, Product | null>;
}

const productData: ProductRow[] = [
  {
    category: 'Chat / Assistant',
    products: {
       Google: { name: 'Gemini', url: 'https://gemini.google.com', description: 'Powered by Gemini 3.1 Pro' },
       OpenAI: { name: 'ChatGPT', url: 'https://chat.openai.com', description: 'Powered by GPT-5.4' },
       Anthropic: { name: 'Claude', url: 'https://claude.ai', description: 'Powered by Claude Opus 4.6' },
       Meta: { name: 'Meta AI', url: 'https://meta.ai', description: 'Powered by Llama 4' },
       xAI: { name: 'Grok', url: 'https://grok.com', description: 'Powered by Grok 4' },
       DeepSeek: { name: 'DeepSeek Chat', url: 'https://chat.deepseek.com', description: 'Powered by DeepSeek V3.2' },
      Mistral: { name: 'Le Chat', url: 'https://chat.mistral.ai' },
    },
  },
  {
    category: 'IDE / Code Editor',
    products: {
       Google: { name: 'Antigravity', url: 'https://antigravity.google', description: 'Agent-first IDE powered by Gemini 3.1 Pro' },
       OpenAI: { name: 'Codex', description: 'Cloud coding agent powered by GPT-5.4' },
        Anthropic: { name: 'Claude Desktop', description: 'Desktop app with artifacts powered by Claude Sonnet 4.6' },
        Microsoft: { name: 'Copilot', description: 'VS Code extension' },
        Windsurf: { name: 'Windsurf', url: 'https://codeium.com/windsurf', description: 'AI-powered IDE with Cascade for agentic workflows and multi-file editing' },
        Codeium: { name: 'Windsurf Pro', description: 'Enterprise AI IDE with advanced team features and security controls' },
    },
  },
  {
    category: 'CLI',
    products: {
      Google: { name: 'Gemini CLI' },
      OpenAI: { name: 'OpenAI CLI' },
      Anthropic: { name: 'Claude CLI', description: 'Claude Code agentic coding tool' },
      Cursor: { name: 'Cursor CLI', description: 'cursorr-cli' },
      xAI: { name: 'Grok CLI' },
      JetBrains: { name: 'Junie CLI', description: 'LLM-agnostic coding agent in beta' },
      Courier: { name: 'Courier CLI', description: 'Notification infrastructure for AI agents' },
    },
  },
    {
      category: 'API / Developer',
      products: {
        Google: { name: 'Vertex AI', description: 'Google Cloud AI platform' },
        OpenAI: { name: 'OpenAI API', url: 'https://platform.openai.com' },
        Anthropic: { name: 'Anthropic API', url: 'https://docs.anthropic.com' },
        Meta: { name: 'Llama API', description: 'Via Cerebras & Groq' },
        xAI: { name: 'xAI API', url: 'https://x.ai/api' },
        DeepSeek: { name: 'DeepSeek API' },
        Mistral: { name: 'Mistral AI API' },
        NVIDIA: { name: 'NVIDIA AI Enterprise', description: 'End-to-end AI platform for enterprises' },
        AWS: { name: 'Amazon Bedrock', description: 'Fully managed service for foundation models' },
        Azure: { name: 'Azure AI Studio', description: 'Microsoft Azure AI platform' },
        Alibaba: { name: 'Alibaba Cloud', description: 'Alibaba Cloud AI services' },
      },
    },
    {
      category: 'Development Tools',
      products: {
        Google: { name: 'AI Studio', url: 'https://aistudio.google.com', description: 'Web-based prototyping' },
        Cursor: { name: 'Cursor', url: 'https://cursor.sh', description: 'AI-native IDE' },
      },
    },
  {
    category: 'Automation / Orchestration',
    products: {
      OpenAI: { name: 'Operator', description: 'Computer-using agent' },
      Anthropic: { name: 'Computer Use', description: 'Autonomous computer control' },
      Google: { name: 'Vertex AI Agent', description: 'Agent Builder' },
      Microsoft: { name: 'Copilot Studio', url: 'https://copilot.microsoft.com/microsoft-copilot-studio' },
      AutoGen: { name: 'AutoGen', url: 'https://microsoft.github.io/autogen/', description: 'Multi-agent framework' },
      CrewAI: { name: 'CrewAI', url: 'https://crewai.com', description: 'Multi-agent orchestration' },
      MultiOn: { name: 'MultiOn', url: 'https://multion.ai', description: 'Web agent' },
      n8n: { name: 'n8n', url: 'https://n8n.io', description: 'Open-source automation' },
      Zapier: { name: 'Zapier', url: 'https://zapier.com', description: 'No-code automation' },
      Make: { name: 'Make', url: 'https://make.com', description: 'Visual automation' },
      LangChain: { name: 'LangChain', url: 'https://langchain.dev', description: 'Agent framework' },
      LangGraph: { name: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/', description: 'Stateful agents' },
      Temporal: { name: 'Temporal', url: 'https://temporal.io', description: 'Durable execution' },
    },
  },
  {
    category: 'Image Generation',
    products: {
      Google: { name: 'Imagen', description: 'Imagen 3/4 via Gemini' },
      OpenAI: { name: 'DALL-E', description: 'DALL-E 3 via ChatGPT/API' },
      xAI: { name: 'Grok Imagine', url: 'https://x.ai/imagine' },
      Meta: { name: 'Imagine', description: 'Meta AI Imagine' },
      Midjourney: { name: 'Midjourney', url: 'https://midjourney.com' },
      Adobe: { name: 'Firefly', url: 'https://firefly.adobe.com' },
      StabilityAI: { name: 'Stable Diffusion', description: 'SD 3.5' },
      BlackForest: { name: 'Flux', description: 'Flux 2 Pro' },
    },
  },
  {
    category: 'Video Generation',
    products: {
      OpenAI: { name: 'Sora', url: 'https://sora.com' },
      Google: { name: 'Veo', description: 'Veo 3 via Gemini' },
      Runway: { name: 'Runway', url: 'https://runwayml.com', description: 'Gen-4' },
      Pika: { name: 'Pika', url: 'https://pika.art' },
      Kuaishou: { name: 'Kling', description: 'Kling 3.0' },
      HeyGen: { name: 'HeyGen', url: 'https://heygen.com' },
      Luma: { name: 'Dream Machine', url: 'https://lumalabs.ai' },
    },
  },
  {
    category: 'Voice / TTS',
    products: {
      OpenAI: { name: 'GPT-4o Voice', description: 'Realtime TTS API' },
      Google: { name: 'Cloud TTS', description: 'WaveNet/Echo' },
      ElevenLabs: { name: 'ElevenLabs', url: 'https://elevenlabs.io' },
      PlayHT: { name: 'PlayHT', url: 'https://play.ht', description: 'PlayAI' },
      Coqui: { name: 'Coqui TTS', url: 'https://coqui.ai' },
      Murf: { name: 'Murf AI', url: 'https://murf.ai' },
      WellSaid: { name: 'WellSaid Labs', url: 'https://wellsaidlabs.com' },
    },
  },
  {
     category: 'Audio / Music',
     products: {
       OpenAI: { name: 'Audio API', description: 'Speech to text' },
       Google: { name: 'Cloud Speech', description: 'Speech-to-Text' },
       AssemblyAI: { name: 'AssemblyAI', url: 'https://assemblyai.com' },
       Suno: { name: 'Suno', url: 'https://suno.ai' },
       Udio: { name: 'Udio', url: 'https://udio.ai' },
       Minimax: { name: 'Minimax Audio', url: 'https://www.minimax.io', description: 'Audio generation models including MusicGen' },
     },
  },
  {
    category: 'Research',
    products: {
      Google: { name: 'NotebookLM', url: 'https://notebooklm.google', description: 'AI research & notes' },
      OpenAI: { name: 'Deep Research', url: 'https://chat.openai.com' },
      DeepSeek: { name: 'DeepSeek Research' },
      Perplexity: { name: 'Perplexity', url: 'https://perplexity.ai' },
      xAI: { name: 'Grok Research' },
    },
  },
  {
    category: 'Enterprise',
    products: {
      Google: { name: 'Gemini Enterprise', description: 'Workspace AI' },
      OpenAI: { name: 'ChatGPT Enterprise', url: 'https://openai.com/enterprise' },
      Anthropic: { name: 'Claude Enterprise', url: 'https://anthropic.com/claude-enterprise' },
      Microsoft: { name: 'Copilot', url: 'https://copilot.microsoft.com' },
    },
  },
];

const companyOrder = [
  'NVIDIA',
  'Google',
  'Microsoft',
  'Meta',
  'AWS',
  'Azure',
  'Adobe',
  'Alibaba',
  'OpenAI',
  'Anthropic',
  'xAI',
  'DeepSeek',
  'Mistral',
  'Minimax',
  'JetBrains',
  'Perplexity',
  'Cursor',
  'Midjourney',
  'Runway',
  'StabilityAI',
  'BlackForest',
  'LangChain',
  'AssemblyAI',
  'ElevenLabs',
  'PlayHT',
  'WellSaid',
  'Murf',
  'Coqui',
  'Temporal',
  'Make',
  'Courier',
  'Zapier',
  'CrewAI',
  'MultiOn',
  'AutoGen',
  'LangGraph',
];

function getCompanyColor(company: string): string {
    const colors: Record<string, string> = {
     Google: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
     OpenAI: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
     Anthropic: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
     Meta: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
     NVIDIA: 'bg-green-800 text-green-200 dark:bg-green-900 dark:text-green-300',
     AWS: 'bg-orange-400 text-white dark:bg-orange-500 dark:text-orange-200',
     Azure: 'bg-blue-600 text-white dark:bg-blue-700 dark:text-blue-200',
     Alibaba: 'bg-red-400 text-white dark:bg-red-500 dark:text-red-200',
      xAI: 'bg-purple-800 text-white dark:bg-purple-700 text-white',
     DeepSeek: 'bg-red-100 text-white dark:bg-red-900 dark:text-red-300',
     Mistral: 'bg-cyan-100 text-white dark:bg-cyan-900 dark:text-cyan-300',
     Cursor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
     Microsoft: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
     Midjourney: 'bg-white border border-zinc-300 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100',
     Adobe: 'bg-red-100 text-white dark:bg-red-900 dark:text-red-300',
     StabilityAI: 'bg-orange-100 text-white dark:bg-orange-900 dark:text-orange-300',
     BlackForest: 'bg-blue-500 text-white dark:bg-blue-600 dark:text-blue-200',
     Runway: 'bg-zinc-800 text-white dark:bg-zinc-700',
     Pika: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:bg-pink-300',
     Kuaishou: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:bg-yellow-300',
     HeyGen: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:bg-teal-300',
     Luma: 'bg-violet-100 text-violet-700 dark:bg-violet-900 dark:bg-violet-300',
     Minimax: 'bg-indigo-500 text-white dark:bg-indigo-600 dark:text-indigo-200',
     ElevenLabs: 'bg-purple-500 text-white dark:bg-purple-600 dark:text-purple-200',
     PlayHT: 'bg-blue-100 text-white dark:bg-blue-900 dark:text-blue-300',
     Coqui: 'bg-green-100 text-white dark:bg-green-900 dark:text-green-300',
     Murf: 'bg-pink-100 text-white dark:bg-pink-900 dark:text-pink-200',
     WellSaid: 'bg-purple-100 text-white dark:bg-purple-900 dark:text-purple-300',
     AssemblyAI: 'bg-indigo-100 text-white dark:bg-indigo-900 dark:text-indigo-300',
     Suno: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
     Udio: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
     Perplexity: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
     JetBrains: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white',
     Courier: 'bg-gradient-to-r from-green-400 to-yellow-400 text-white',
     n8n: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      Zapier: 'bg-red-100 text-white dark:bg-red-900 dark:text-red-300',
      Make: 'bg-orange-100 text-white dark:bg-orange-900 dark:text-orange-300',
      LangChain: 'bg-yellow-100 text-white dark:bg-yellow-900 dark:text-yellow-300',
      Temporal: 'bg-purple-100 text-white dark:bg-purple-900 dark:text-purple-300',
      CrewAI: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      MultiOn: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      AutoGen: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
      LangGraph: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    };
  return colors[company] || 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300';
}

export default function ProductsPage() {
  const activeCompanies = companyOrder.filter((company) =>
    productData.some((row) => row.products[company] !== null && row.products[company] !== undefined)
  );

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0f2744]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 tracking-tight">
            📦 AI Products Landscape
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl">
            Comprehensive overview of AI products from frontier companies organized by category.
          </p>
        </div>

        <div className="bg-white dark:bg-[#153457] rounded-2xl border border-zinc-200 dark:border-zinc-800/50 shadow-xl shadow-blue-900/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-800/50 text-sm border-b border-zinc-200 dark:border-zinc-800/50">
                  <th className="py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200">
                    Category
                  </th>
                  {activeCompanies.map((company) => (
                    <th key={company} className="py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getCompanyColor(company)}`}>
                        {company}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/50">
                {productData.map((row) => (
                  <tr
                    key={row.category}
                    className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group"
                  >
                    <td className="py-4 px-6 font-medium text-zinc-900 dark:text-zinc-100">
                      {row.category}
                    </td>
                    {activeCompanies.map((company) => {
                      const product = row.products[company];
                      if (!product) {
                        return (
                          <td key={company} className="py-4 px-6 text-center text-zinc-300 dark:text-zinc-600">
                            —
                          </td>
                        );
                      }
                      return (
                        <td key={company} className="py-4 px-6 text-center">
                          {product.url ? (
                            <a
                              href={product.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                            >
                              {product.name}
                            </a>
                          ) : (
                            <span className="text-sm text-zinc-900 dark:text-zinc-100 font-semibold">
                              {product.name}
                            </span>
                          )}
                          {product.description && (
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                              {product.description}
                            </p>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-[#153457] rounded-2xl border border-zinc-200 dark:border-zinc-800/50 p-8 shadow-xl shadow-blue-900/5">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
            <span className="text-blue-500">📊</span> Product Landscape Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
            <div>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-700 dark:text-zinc-300">Product Categories:</strong> Products are organized by their primary function, highlighting the specialization across the AI landscape.
              </p>
            </div>
            <div>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-700 dark:text-zinc-300">Company Colors:</strong> Each company is color-coded for quick identification of their product footprint across categories.
              </p>
            </div>
            <div>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-700 dark:text-zinc-300">Official Links:</strong> Click on product names to navigate directly to their official product documentation or websites.
              </p>
            </div>
            <div>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-700 dark:text-zinc-300">Last Updated:</strong> March 2026. The AI space is highly dynamic!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm font-medium text-zinc-400 dark:text-zinc-500">
          <p>Data compiled from official company announcements and product documentation.</p>
        </div>
      </main>
    </div>
  );
}
