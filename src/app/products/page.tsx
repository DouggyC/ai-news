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
      Google: { name: 'Gemini', url: 'https://gemini.google.com' },
      OpenAI: { name: 'ChatGPT', url: 'https://chat.openai.com' },
      Anthropic: { name: 'Claude', url: 'https://claude.ai' },
      Meta: { name: 'Meta AI', url: 'https://meta.ai' },
      xAI: { name: 'Grok', url: 'https://grok.com' },
      DeepSeek: { name: 'DeepSeek Chat', url: 'https://chat.deepseek.com' },
      Mistral: { name: 'Le Chat', url: 'https://chat.mistral.ai' },
    },
  },
  {
    category: 'IDE / Code Editor',
    products: {
      Google: { name: 'Antigravity', url: 'https://antigravity.google', description: 'Agent-first IDE' },
      OpenAI: { name: 'Codex', description: 'Cloud coding agent' },
      Anthropic: { name: 'Claude Desktop', description: 'Desktop app with artifacts' },
      Cursor: { name: 'Cursor', url: 'https://cursor.sh', description: 'AI-first code editor' },
      Microsoft: { name: 'Copilot', description: 'VS Code extension' },
      Windsurf: { name: 'Windsurf', url: 'https://codeium.com/windsurf' },
      Codeium: { name: 'Windsurf Pro', description: 'Enterprise AI IDE' },
    },
  },
  {
    category: 'CLI',
    products: {
      Google: { name: 'Gemini CLI' },
      OpenAI: { name: 'OpenAI CLI' },
      Anthropic: { name: 'Claude CLI', description: 'claude-code' },
      Cursor: { name: 'Cursor CLI', description: 'cursorr-cli' },
      xAI: { name: 'Grok CLI' },
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
    },
  },
  {
    category: 'Automation / Orchestration',
    products: {
      OpenAI: { name: 'Operator', description: 'Computer-using agent' },
      Anthropic: { name: 'Computer Use', description: 'Autonomous computer control' },
      Google: { name: 'Vertex AI Agent', description: 'Agent Builder' },
      Microsoft: { name: 'Copilot Studio', url: 'https://copilot.microsoft.com/microsoft-copilot-studio' },
      n8n: { name: 'n8n', url: 'https://n8n.io', description: 'Open-source workflow automation' },
      Zapier: { name: 'Zapier', url: 'https://zapier.com', description: 'No-code automation' },
      Make: { name: 'Make', url: 'https://make.com', description: 'Visual automation' },
      LangChain: { name: 'LangChain', url: 'https://langchain.dev', description: 'Agent framework' },
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
  'Google',
  'OpenAI', 
  'Anthropic',
  'Meta',
  'xAI',
  'DeepSeek',
  'Mistral',
  'Cursor',
  'Microsoft',
  'Midjourney',
  'Adobe',
  'StabilityAI',
  'BlackForest',
  'Runway',
  'Pika',
  'Kuaishou',
  'HeyGen',
  'Luma',
  'ElevenLabs',
  'PlayHT',
  'Coqui',
  'Murf',
  'WellSaid',
  'AssemblyAI',
  'Suno',
  'Udio',
  'Perplexity',
  'n8n',
  'Zapier',
  'Make',
  'LangChain',
  'Temporal',
];

function getCompanyColor(company: string): string {
  const colors: Record<string, string> = {
    Google: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    OpenAI: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    Anthropic: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    Meta: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    xAI: 'bg-black text-white dark:bg-zinc-800 dark:text-zinc-100',
    DeepSeek: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    Mistral: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
    Cursor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
    Microsoft: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
    Midjourney: 'bg-white border border-zinc-300 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100',
    Adobe: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    StabilityAI: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    BlackForest: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300',
    Runway: 'bg-zinc-800 text-white dark:bg-zinc-700',
    Pika: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
    Kuaishou: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    HeyGen: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300',
    Luma: 'bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300',
    ElevenLabs: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300',
    PlayHT: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    Coqui: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    Murf: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
    WellSaid: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    AssemblyAI: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
    Suno: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
    Udio: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
    Perplexity: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
    n8n: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    Zapier: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    Make: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    LangChain: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    Temporal: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  };
  return colors[company] || 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300';
}

export default function ProductsPage() {
  const activeCompanies = companyOrder.filter((company) =>
    productData.some((row) => row.products[company] !== null && row.products[company] !== undefined)
  );

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0f2744]">
      <main className="max-w-[98vw] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            📦 AI Products Landscape
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Comprehensive overview of AI products from frontier companies organized by category
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800">
                <th className="text-left p-3 font-semibold text-zinc-700 dark:text-zinc-300 sticky left-0 bg-zinc-50 dark:bg-zinc-800 z-10 text-sm w-40">
                  Category
                </th>
                {activeCompanies.map((company) => (
                  <th key={company} className="text-center p-3 font-semibold text-zinc-700 dark:text-zinc-300 text-sm min-w-[120px]">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${getCompanyColor(company)}`}>
                      {company}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productData.map((row) => (
                <tr
                  key={row.category}
                  className="border-t border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                >
                  <td className="p-3 sticky left-0 bg-white dark:bg-zinc-900">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                      {row.category}
                    </span>
                  </td>
                  {activeCompanies.map((company) => {
                    const product = row.products[company];
                    if (!product) {
                      return (
                        <td key={company} className="p-3 text-center text-zinc-300 dark:text-zinc-600">
                          —
                        </td>
                      );
                    }
                    return (
                      <td key={company} className="p-3 text-center">
                        {product.url ? (
                          <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                          >
                            {product.name}
                          </a>
                        ) : (
                          <span className="text-sm text-zinc-900 dark:text-zinc-100 font-medium">
                            {product.name}
                          </span>
                        )}
                        {product.description && (
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
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

        <div className="mt-8 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            📊 Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-700 dark:text-zinc-300">Product Categories:</strong> Products organized by primary function - from chat assistants to specialized generation tools.
              </p>
            </div>
            <div>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-700 dark:text-zinc-300">Company Colors:</strong> Each company has a distinct color for easy identification across the table.
              </p>
            </div>
            <div>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-700 dark:text-zinc-300">Links:</strong> Click on product names to visit official websites where available.
              </p>
            </div>
            <div>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-700 dark:text-zinc-300">Last Updated:</strong> March 2026 - AI landscape changes rapidly!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>Data compiled from official company announcements and product documentation.</p>
        </div>
      </main>
    </div>
  );
}
