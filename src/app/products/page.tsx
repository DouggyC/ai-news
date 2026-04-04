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
    category: 'Foundation Models (Proprietary)',
    products: {
      Google: {
        name: 'Gemini',
        url: 'https://gemini.google.com',
        description: 'Multi-modal foundation model',
      },
      Amazon: {
        name: 'Nova',
        url: 'https://aws.amazon.com/bedrock/',
        description: "Amazon's foundation models",
      },
      OpenAI: {
        name: 'GPT',
        url: 'https://openai.com',
        description: 'GPT-5 series',
      },
      Anthropic: {
        name: 'Claude',
        url: 'https://www.anthropic.com',
        description: 'Claude LLM family',
      },
      xAI: {
        name: 'Grok',
        url: 'https://x.ai',
        description: "xAI's LLM",
      },
      ByteDance: {
        name: 'Doubao',
        url: 'https://www.doubao.com',
        description: 'ByteDance LLM',
      },
      Adobe: {
        name: 'Firefly',
        url: 'https://www.adobe.com/sensei/generative-ai/firefly.html',
        description: 'Creative AI models',
      },
      Tencent: {
        name: 'Hunyuan',
        url: 'https://www.tencentcloud.com/product/tclm',
        description: 'Tencent LLM family',
      },
      Minimax: {
        name: 'Minimax',
        url: 'https://www.minimax.io',
        description: 'Multi-modal LLM',
      },
    },
  },
  {
    category: 'Foundation Models (Open Model)',
    products: {
      Meta: {
        name: 'Llama',
        url: 'https://llama.com',
        description: 'Open source LLM',
      },
      DeepSeek: {
        name: 'DeepSeek',
        url: 'https://www.deepseek.com',
        description: 'Open source LLM',
      },
      Mistral: {
        name: 'Mistral',
        url: 'https://mistral.ai',
        description: 'French LLM',
      },
      Alibaba: {
        name: 'Qwen',
        url: 'https://www.alibabacloud.com/en/product/model-studio',
        description: "Alibaba's LLM family",
      },
      NVIDIA: {
        name: 'Nemotron',
        url: 'https://www.nvidia.com/en-us/ai/',
        description: 'NVIDIA LLM family',
      },
      Microsoft: {
        name: 'Phi',
        url: 'https://azure.microsoft.com/en-us/services/cognitive-services/',
        description: 'Small language models',
      },
      Google: {
        name: 'Gemma',
        url: 'https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/',
        description: 'Open model family, Apache 2.0',
      },
    },
  },
  {
    category: 'Chat / Assistant',
    products: {
      Google: {
        name: 'Gemini',
        url: 'https://gemini.google.com',
        description: 'Powered by Gemini 3.2 Pro',
      },
      OpenAI: {
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
        description: 'Powered by GPT-5.5',
      },
      Anthropic: {
        name: 'Claude',
        url: 'https://claude.ai',
        description: 'Powered by Claude 4.7',
      },
      Meta: {
        name: 'Meta AI',
        url: 'https://meta.ai',
        description: 'Powered by Llama 4.1',
      },
      xAI: {
        name: 'Grok',
        url: 'https://grok.com',
        description: 'Powered by Grok 4',
      },
      DeepSeek: {
        name: 'DeepSeek Chat',
        url: 'https://chat.deepseek.com',
        description: 'Powered by DeepSeek V5',
      },
      Mistral: { name: 'Le Chat', url: 'https://chat.mistral.ai', description: 'Powered by Mistral Large 4' },
      Amazon: {
        name: 'Amazon Q',
        url: 'https://aws.amazon.com/q/',
        description: 'Enterprise AI assistant',
      },
      ByteDance: {
        name: 'Doubao',
        url: 'https://www.doubao.com',
        description: 'Powered by Doubao 3.0',
      },
      HuggingFace: {
        name: 'HuggingChat',
        url: 'https://huggingface.co/chat',
        description: 'Open-source AI chat',
      },
      Alibaba: {
        name: 'Qwen Chat',
        url: 'https://chat.qwen.com',
        description: 'Powered by Qwen4',
      },
      Tencent: {
        name: 'WeChat AI',
        url: 'https://weixin.qq.com/',
        description: 'AI assistant in WeChat',
      },
      Oracle: {
        name: 'Oracle AI',
        url: 'https://www.oracle.com/artificial-intelligence/',
        description: 'Enterprise AI assistant',
      },
      NVIDIA: {
        name: 'ChatRTX',
        url: 'https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/',
        description: 'Local AI chatbot for RTX PCs',
      },
    },
  },
  {
    category: 'IDE / Code Editor',
    products: {
      Google: {
        name: 'Antigravity',
        url: 'https://antigravity.google',
        description: 'Agent-first IDE powered by Gemini 3.2 Pro',
      },
      OpenAI: {
        name: 'Codex',
        description: 'Cloud coding agent powered by GPT-5.5',
      },
      Anthropic: {
        name: 'Claude Desktop',
        description: 'Desktop app with artifacts powered by Claude 4.7',
      },
      Microsoft: { name: 'Copilot', description: 'VS Code extension, now with GPT-5.5' },
      Amazon: {
        name: 'Amazon Q Developer',
        url: 'https://aws.amazon.com/q/developer',
        description: 'AI coding assistant',
      },
      Windsurf: {
        name: 'Windsurf',
        url: 'https://codeium.com/windsurf',
        description:
          'AI-powered IDE with Cascade for agentic workflows and multi-file editing',
      },
      Codeium: {
        name: 'Windsurf Pro',
        description:
          'Enterprise AI IDE with advanced team features and security controls',
      },
    },
  },
  {
    category: 'CLI',
    products: {
      Google: { name: 'Gemini CLI', description: 'Powered by Gemini 3.2 Pro' },
      OpenAI: { name: 'OpenAI CLI', description: 'With GPT-5.5' },
      Anthropic: {
        name: 'Claude CLI',
        description: 'Claude Code agentic coding tool',
      },
      Cursor: { name: 'Cursor CLI', description: 'cursorr-cli' },
      xAI: { name: 'Grok CLI', description: 'With Grok 4' },
      JetBrains: {
        name: 'Junie CLI',
        description: 'LLM-agnostic coding agent in beta',
      },
      Courier: {
        name: 'Courier CLI',
        description: 'Notification infrastructure for AI agents',
      },
      Amazon: {
        name: 'Amazon Q CLI',
        url: 'https://aws.amazon.com/q/',
        description: 'AI command-line assistant',
      },
      HuggingFace: {
        name: 'hf CLI',
        url: 'https://huggingface.co/docs/hub/',
        description: 'Model management CLI',
      },
      Zapier: {
        name: 'Zapier Platform CLI',
        description: 'Build and deploy integrations',
      },
      n8n: { name: '@n8n/cli', description: 'Workflow automation CLI' },
      NVIDIA: {
        name: 'AI Workbench CLI',
        url: 'https://docs.nvidia.com/ai-workbench/',
        description: 'Developer toolkit for AI/ML projects',
      },
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
      NVIDIA: {
        name: 'NVIDIA AI Enterprise',
        description: 'End-to-end AI platform for enterprises',
      },
      AWS: {
        name: 'Amazon Bedrock',
        url: 'https://aws.amazon.com/bedrock/',
        description: 'Fully managed service for foundation models',
      },
      Azure: {
        name: 'Azure AI Studio',
        description: 'Microsoft Azure AI platform',
      },
      Alibaba: { name: 'Alibaba Cloud PAI', description: 'Platform for AI' },
      Tencent: {
        name: 'Tencent Cloud AI',
        url: 'https://www.tencentcloud.com/',
        description: 'Cloud AI services',
      },
      Oracle: {
        name: 'OCI AI',
        url: 'https://www.oracle.com/cloud/ai/',
        description: 'Oracle Cloud Infrastructure AI services',
      },
    },
  },
  {
    category: 'Hosting / Deployment',
    products: {
      HuggingFace: {
        name: 'Inference Endpoints',
        url: 'https://huggingface.co/inference-endpoints',
        description: 'Production-ready inference & Spaces',
      },
      Replicate: {
        name: 'Model Hosting',
        url: 'https://replicate.com',
        description: 'Deploy and run models in production',
      },
      NVIDIA: { name: 'NIM', description: 'Inference microservices' },
      AWS: { name: 'SageMaker', description: 'Managed ML platform' },
      Google: { name: 'Vertex AI', description: 'Managed AI infrastructure' },
      Azure: { name: 'Azure AI Studio', description: 'Managed AI platform' },
      Alibaba: { name: 'PAI-EAS', description: 'Elastic Algorithm Service' },
      Tencent: {
        name: 'Tencent Cloud',
        url: 'https://cloud.tencent.com/',
        description: 'Cloud infrastructure',
      },
    },
  },
  {
    category: 'Development Tools',
    products: {
      Google: {
        name: 'AI Studio',
        url: 'https://aistudio.google.com',
        description: 'Web-based prototyping',
      },
      Cursor: {
        name: 'Cursor',
        url: 'https://cursor.sh',
        description: 'AI-native IDE',
      },
      HuggingFace: {
        name: 'Gradio',
        url: 'https://gradio.app',
        description: 'ML demo UI library',
      },
      Alibaba: {
        name: 'PAI-LangStudio',
        url: 'https://www.alibabacloud.com/',
        description: 'Enterprise agent development',
      },
    },
  },
  {
    category: 'Automation / Orchestration',
    products: {
      Oracle: {
        name: 'AI Agent Studio',
        description: 'Enterprise agent orchestration',
      },
      OpenAI: { name: 'Operator', description: 'Computer-using agent' },
      Anthropic: {
        name: 'Computer Use',
        description: 'Autonomous computer control',
      },
      Google: { name: 'Vertex AI Agent', description: 'Agent Builder' },
      Microsoft: {
        name: 'Copilot Studio',
        url: 'https://copilot.microsoft.com/microsoft-copilot-studio',
      },
      AutoGen: {
        name: 'AutoGen',
        url: 'https://microsoft.github.io/autogen/',
        description: 'Multi-agent framework',
      },
      CrewAI: {
        name: 'CrewAI',
        url: 'https://crewai.com',
        description: 'Multi-agent orchestration',
      },
      MultiOn: {
        name: 'MultiOn',
        url: 'https://multion.ai',
        description: 'Web agent',
      },
      n8n: {
        name: 'n8n',
        url: 'https://n8n.io',
        description: 'Open-source automation',
      },
      Zapier: {
        name: 'Zapier',
        url: 'https://zapier.com',
        description: 'No-code automation',
      },
      Amazon: {
        name: 'Bedrock Agents',
        url: 'https://aws.amazon.com/bedrock/',
        description: 'Build autonomous agents',
      },
      Alibaba: {
        name: 'Enterprise AI Agents',
        url: 'https://www.alibabacloud.com/',
        description: 'Autonomous business agents',
      },
      Make: {
        name: 'Make',
        url: 'https://make.com',
        description: 'Visual automation',
      },
      LangChain: {
        name: 'LangChain',
        url: 'https://langchain.dev',
        description: 'Agent framework',
      },
      LangGraph: {
        name: 'LangGraph',
        url: 'https://langchain-ai.github.io/langgraph/',
        description: 'Stateful agents',
      },
      Temporal: {
        name: 'Temporal',
        url: 'https://temporal.io',
        description: 'Durable execution',
      },
      OpenClaw: {
        name: 'OpenClaw',
        url: 'https://openclaw.ai',
        description: 'Autonomous agent framework',
      },
      Tencent: {
        name: 'QClaw / WorkBuddy',
        url: 'https://openclaw.ai',
        description: 'Internal AI agents',
      },
    },
  },
  {
    category: 'Image Generation',
    products: {
      Google: { name: 'Imagen', description: 'Imagen 3/4 via Gemini' },
      OpenAI: { name: 'DALL-E', description: 'DALL-E 3 via ChatGPT/API' },
      Amazon: {
        name: 'Titan Image',
        url: 'https://aws.amazon.com/bedrock/',
        description: 'Text-to-image generation',
      },
      xAI: { name: 'Grok Imagine', url: 'https://x.ai/imagine' },
      Meta: { name: 'Imagine', description: 'Meta AI Imagine' },
      Midjourney: { name: 'Midjourney', url: 'https://midjourney.com' },
      Adobe: { name: 'Firefly', url: 'https://firefly.adobe.com' },
      StabilityAI: { name: 'Stable Diffusion', description: 'SD 3.5' },
      BlackForest: { name: 'Flux', description: 'Flux 2 Pro' },
      Alibaba: {
        name: 'Wan2.1',
        url: 'https://www.alibabacloud.com/',
        description: 'Text-to-image generation',
      },
      Tencent: {
        name: 'HunyuanImage 3.0',
        url: 'https://www.tencentcloud.com/',
        description: '80B MoE image generation',
      },
    },
  },
  {
    category: 'Video Generation',
    products: {
      OpenAI: { name: 'Sora', url: 'https://sora.com' },
      Google: { name: 'Veo', description: 'Veo 3 via Gemini' },
      Runway: {
        name: 'Runway',
        url: 'https://runwayml.com',
        description: 'Gen-4',
      },
      Pika: { name: 'Pika', url: 'https://pika.art' },
      Kuaishou: { name: 'Kling', description: 'Kling 3.0' },
      HeyGen: { name: 'HeyGen', url: 'https://heygen.com' },
      Luma: { name: 'Dream Machine', url: 'https://lumalabs.ai' },
      Alibaba: {
        name: 'Wan2.1',
        url: 'https://www.alibabacloud.com/',
        description: 'Video generation',
      },
      Minimax: {
        name: 'Hailuo',
        url: 'https://minimaxi.com',
        description: 'Video generation',
      },
    },
  },
  {
    category: 'Voice / TTS',
    products: {
      OpenAI: { name: 'GPT-4o Voice', description: 'Realtime TTS API' },
      Google: { name: 'Cloud TTS', description: 'WaveNet/Echo' },
      Amazon: {
        name: 'Amazon Polly',
        url: 'https://aws.amazon.com/polly/',
        description: 'Text-to-speech with 31+ voices',
      },
      Alibaba: {
        name: 'Qwen3-TTS',
        url: 'https://qwen.ai/',
        description: 'Voice cloning & TTS',
      },
      ElevenLabs: { name: 'ElevenLabs', url: 'https://elevenlabs.io' },
      ByteDance: {
        name: 'FineVoice',
        url: 'https://finevoice.fun/',
        description: 'AI voice cloning & TTS',
      },
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
      Minimax: {
        name: 'Minimax Audio',
        url: 'https://www.minimax.io',
        description: 'Audio generation models including MusicGen',
      },
      ByteDance: {
        name: 'FineVoice',
        url: 'https://finevoice.fun/',
        description: 'AI voice & music generation',
      },
    },
  },
  {
    category: 'Research',
    products: {
      Google: {
        name: 'NotebookLM',
        url: 'https://notebooklm.google',
        description: 'AI research & notes',
      },
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
      OpenAI: {
        name: 'ChatGPT Enterprise',
        url: 'https://openai.com/enterprise',
      },
      Anthropic: {
        name: 'Claude Enterprise',
        url: 'https://anthropic.com/claude-enterprise',
      },
      Microsoft: { name: 'Copilot', url: 'https://copilot.microsoft.com' },
      Amazon: {
        name: 'Amazon Q Business',
        url: 'https://aws.amazon.com/q/',
        description: 'Enterprise AI assistant',
      },
      Zapier: {
        name: 'Zapier Enterprise',
        url: 'https://zapier.com',
        description: 'Enterprise automation with AI governance',
      },
      Replicate: {
        name: 'Replicate Enterprise',
        url: 'https://replicate.com',
        description: 'Enterprise model deployment',
      },
      HuggingFace: {
        name: 'Enterprise Hub',
        url: 'https://huggingface.co/enterprise',
        description: 'Enterprise AI platform',
      },
      Tencent: {
        name: 'Tencent Cloud Enterprise',
        url: 'https://cloud.tencent.com/',
        description: 'Enterprise AI solutions',
      },
      Oracle: {
        name: 'Oracle AI Enterprise',
        url: 'https://www.oracle.com/artificial-intelligence/',
        description: 'Enterprise-grade AI platform',
      },
    },
  },
  {
    category: 'Sovereign Engine',
    products: {
      Ollama: { name: 'Ollama', description: 'Local LLM execution framework' },
      LMStudio: { name: 'LM Studio', description: 'Local LLM GUI' },
      Jan: { name: 'Jan', description: 'Privacy-focused desktop app' },
      LocalAI: { name: 'LocalAI', description: 'Developer-centric engine' },
    },
  },
  {
    category: 'Sovereign Agent',
    products: {
      OpenClaw: { name: 'OpenClaw', description: 'Autonomous local agent' },
      OpenInterpreter: {
        name: 'OpenInterpreter',
        description: 'Terminal-based agent',
      },
      HuggingFace: { name: 'smolagents', description: 'Code-first agents' },
      ByteDance: { name: 'UI-TARS', description: 'Vision-based agent' },
      Tencent: {
        name: 'WeChat AI Agent',
        description: 'AI agent for WeChat super-app',
      },
    },
  },
  {
    category: 'Sovereign Orchestrator',
    products: {
      n8n: { name: 'n8n', description: 'Self-hosted automation' },
      deepset: { name: 'Haystack', description: 'Orchestration framework' },
      FlowiseAI: { name: 'Flowise', description: 'Visual orchestration' },
    },
  },
  {
    category: 'Enterprise Engine',
    products: {
      vLLM: { name: 'vLLM', description: 'Production-grade serving' },
      NVIDIA: { name: 'NIM', description: 'Enterprise inference' },
      HuggingFace: { name: 'TGI', description: 'Text Generation Inference' },
    },
  },
  {
    category: 'Enterprise Agent',
    products: {
      NVIDIA: { name: 'NemoClaw', description: 'Enterprise agent platform' },
      CrewAI: {
        name: 'CrewAI Enterprise',
        description: 'Enterprise agent crew',
      },
      LangChain: {
        name: 'LangGraph Studio',
        description: 'Visual agent debugging',
      },
    },
  },
  {
    category: 'Enterprise Orchestrator',
    products: {
      n8n: { name: 'n8n', description: 'Self-hosted automation' },
      deepset: { name: 'Haystack', description: 'Orchestration framework' },
      FlowiseAI: { name: 'Flowise', description: 'Visual orchestration' },
    },
  },
];

const companyOrder = [
  'NVIDIA',
  'Microsoft',
  'Google',
  'Amazon',
  'Meta',
  'Oracle',
  'ByteDance',
  'Adobe',
  'Tencent',
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
  'HuggingFace',
  'Replicate',
  'Ollama',
  'LMStudio',
  'CrewAI',
  'MultiOn',
  'AutoGen',
  'LangGraph',
  'n8n',
  'OpenClaw',
  'deepset',
  'FlowiseAI',
  'Jan',
  'LocalAI',
  'vLLM',
];

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
    Tencent:
      'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    Alibaba: 'bg-red-400 text-white dark:bg-red-500 dark:text-red-200',
    OpenAI: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    Anthropic:
      'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    xAI: 'bg-purple-800 text-white dark:bg-purple-700 text-white',
    DeepSeek: 'bg-red-100 text-white dark:bg-red-900 dark:text-red-300',
    Mistral: 'bg-cyan-100 text-white dark:bg-cyan-900 dark:text-cyan-300',
    Minimax: 'bg-indigo-500 text-white dark:bg-indigo-600 dark:text-indigo-200',
    JetBrains: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white',
    Perplexity:
      'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
    Cursor:
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
    Midjourney:
      'bg-white border border-zinc-300 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100',
    Runway: 'bg-zinc-800 text-white dark:bg-zinc-700',
    StabilityAI:
      'bg-orange-100 text-white dark:bg-orange-900 dark:text-orange-300',
    BlackForest: 'bg-blue-500 text-white dark:bg-blue-600 dark:text-blue-200',
    LangChain:
      'bg-yellow-100 text-white dark:bg-yellow-900 dark:text-yellow-300',
    AssemblyAI:
      'bg-indigo-100 text-white dark:bg-indigo-900 dark:text-indigo-300',
    ElevenLabs:
      'bg-purple-500 text-white dark:bg-purple-600 dark:text-purple-200',
    PlayHT: 'bg-blue-100 text-white dark:bg-blue-900 dark:text-blue-300',
    WellSaid:
      'bg-purple-100 text-white dark:bg-purple-900 dark:text-purple-300',
    Murf: 'bg-pink-100 text-white dark:bg-pink-900 dark:text-pink-200',
    Coqui: 'bg-green-100 text-white dark:bg-green-900 dark:text-green-300',
    Temporal:
      'bg-purple-100 text-white dark:bg-purple-900 dark:text-purple-300',
    Make: 'bg-orange-100 text-white dark:bg-orange-900 dark:text-orange-300',
    Courier: 'bg-gradient-to-r from-green-400 to-yellow-400 text-white',
    Zapier: 'bg-red-100 text-white dark:bg-red-900 dark:text-red-300',
    HuggingFace:
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    Replicate:
      'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 border border-zinc-300',
    Ollama: 'bg-zinc-800 text-white dark:bg-zinc-700',
    LMStudio: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300',
    CrewAI: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    MultiOn: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    AutoGen:
      'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
    LangGraph:
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    n8n: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    OpenClaw:
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
    deepset:
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
    FlowiseAI:
      'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
    Jan: 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300',
    LocalAI:
      'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    vLLM: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  };
  return (
    colors[company] ||
    'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
  );
}

export default function ProductsPage() {
  const activeCompanies = companyOrder.filter((company) =>
    productData.some(
      (row) =>
        row.products[company] !== null && row.products[company] !== undefined,
    ),
  );

  return (
    <div className='min-h-screen bg-zinc-50 dark:bg-[#0f2744]'>
      <main className='mx-auto px-4 sm:px-6 lg:px-10 py-8'>
        <div className='mb-12'>
          <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 tracking-tight'>
            📦 AI Products Landscape
          </h1>
          <p className='text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl'>
            Comprehensive overview of AI products from frontier companies
            organized by category.
          </p>
        </div>

        <div className='bg-white dark:bg-[#153457] rounded-2xl border border-zinc-200 dark:border-zinc-800/50 shadow-xl shadow-blue-900/5 overflow-hidden'>
          <div className='mb-4 text-right text-sm text-zinc-500 dark:text-zinc-400 px-6'>
            Last updated: April 4, 2026
          </div>
          <div className='overflow-x-auto custom-scrollbar'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-zinc-50 dark:bg-zinc-800/50 text-sm border-b border-zinc-200 dark:border-zinc-800/50'>
                  <th className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200'>
                    Category
                  </th>
                  {activeCompanies.map((company) => (
                    <th
                      key={company}
                      className='py-4 px-6 font-semibold text-zinc-900 dark:text-zinc-200 text-center'
                    >
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${getCompanyColor(company)}`}
                      >
                        {company}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='divide-y divide-zinc-200 dark:divide-zinc-800/50'>
                {productData.map((row) => (
                  <tr
                    key={row.category}
                    className='hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group'
                  >
                    <td className='py-2 px-6 font-medium text-zinc-900 dark:text-zinc-100 text-xs'>
                      {row.category}
                    </td>
                    {activeCompanies.map((company) => {
                      const product = row.products[company];
                      if (!product) {
                        return (
                          <td
                            key={company}
                            className='py-2 px-6 text-center text-zinc-300 dark:text-zinc-600 text-xs'
                          >
                            —
                          </td>
                        );
                      }
                      return (
                        <td key={company} className='py-2 px-6 text-center'>
                          {product.url ? (
                            <a
                              href={product.url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold'
                            >
                              {product.name}
                            </a>
                          ) : (
                            <span className='text-xs text-zinc-900 dark:text-zinc-100 font-semibold'>
                              {product.name}
                            </span>
                          )}
                          {product.description && (
                            <p className='text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5'>
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

        <div className='mt-12 bg-white dark:bg-[#153457] rounded-2xl border border-zinc-200 dark:border-zinc-800/50 p-8 shadow-xl shadow-blue-900/5'>
          <h2 className='text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2'>
            <span className='text-blue-500'>📊</span> Product Landscape Notes
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed'>
            <div>
              <p className='text-zinc-600 dark:text-zinc-400'>
                <strong className='text-zinc-700 dark:text-zinc-300'>
                  Product Categories:
                </strong>{' '}
                Products are organized by their primary function, highlighting
                the specialization across the AI landscape.
              </p>
            </div>
            <div>
              <p className='text-zinc-600 dark:text-zinc-400'>
                <strong className='text-zinc-700 dark:text-zinc-300'>
                  Company Colors:
                </strong>{' '}
                Each company is color-coded for quick identification of their
                product footprint across categories.
              </p>
            </div>
            <div>
              <p className='text-zinc-600 dark:text-zinc-400'>
                <strong className='text-zinc-700 dark:text-zinc-300'>
                  Official Links:
                </strong>{' '}
                Click on product names to navigate directly to their official
                product documentation or websites.
              </p>
            </div>
            <div>
              <p className='text-zinc-600 dark:text-zinc-400'>
                <strong className='text-zinc-700 dark:text-zinc-300'>
                  Last Updated:
                  </strong>{' '}
                  April 4, 2026. The AI space is highly dynamic!
              </p>
            </div>
          </div>
        </div>

        <div className='mt-8 text-center text-sm font-medium text-zinc-400 dark:text-zinc-500'>
          <p>
            Data compiled from official company announcements and product
            documentation.
          </p>
        </div>
      </main>
    </div>
  );
}
