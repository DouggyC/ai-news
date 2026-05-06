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
        name: 'Gemini 3.1 Pro',
        url: 'https://deepmind.google/technologies/gemini/',
        description:
          'Flagship multimodal model used across Gemini, Code Assist, and Vertex AI',
      },
      Amazon: {
        name: 'Nova Premier',
        url: 'https://aws.amazon.com/ai/generative-ai/nova/',
        description:
          "Amazon's top Bedrock model for multimodal enterprise workloads",
      },
      OpenAI: {
        name: 'GPT-5.5',
        url: 'https://openai.com/index/introducing-gpt-5-5/',
        description:
          'Frontier reasoning and coding model powering ChatGPT, Codex, and the API',
      },
      Anthropic: {
        name: 'Claude Opus 4.7',
        url: 'https://www.anthropic.com/news/claude-opus-4-7',
        description:
          "Anthropic's flagship hybrid reasoning model for coding and agent workflows",
      },
      xAI: {
        name: 'Grok 4.20 Beta',
        url: 'https://docs.x.ai/overview',
        description:
          'xAI frontier model family for Grok, API, and developer tooling',
      },
      ByteDance: {
        name: 'Doubao 2.0',
        url: 'https://www.doubao.com',
        description:
          'ByteDance multimodal model family behind Doubao experiences',
      },
    },
  },
  {
    category: 'Foundation Models (Open Model)',
    products: {
      Meta: {
        name: 'Llama 4',
        url: 'https://www.llama.com/models/llama-4/',
      },
      'Muse Spark': {
        name: 'Muse Spark',
        url: 'https://ai.meta.com/blog/muse-spark',
        description:
          "Meta's latest flagship model ranking 4th on AI Index with strong health and science reasoning. Closed model with API in private preview",
      },
      DeepSeek: {
        name: 'DeepSeek V3.2',
        url: 'https://www.deepseek.com',
        description:
          'Open-model reasoning and coding family used in DeepSeek Chat and API',
      },
      Mistral: {
        name: 'Devstral',
        url: 'https://mistral.ai/news/devstral',
        description:
          'Open coding model family from Mistral for agentic developer workflows',
      },
      Alibaba: {
        name: 'Qwen3',
        url: 'https://qwenlm.ai/',
        description:
          'Open family spanning reasoning, coding, and multimodal variants',
      },
      Microsoft: {
        name: 'Phi-4',
        url: 'https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure?pivots=azure-openai',
        description:
          'Small open-weight model line optimized for efficient reasoning workloads',
      },
      Google: {
        name: 'Gemma 3',
        url: 'https://ai.google.dev/gemma',
        description:
          "Google's open model family for lightweight multimodal deployment",
      },
    },
  },
  {
    category: 'Chat / Assistant',
    products: {
      Google: {
        name: 'Gemini',
        url: 'https://gemini.google.com',
        description:
          'Powered by Gemini 3.1 Pro and Gemini 3 Flash across chat and workspace tasks',
      },
      OpenAI: {
        name: 'ChatGPT',
        url: 'https://developers.openai.com/chatgpt',
        description:
          'Powered by GPT-5.5, with Deep Research, voice, image, and agent tools',
      },
      Anthropic: {
        name: 'Claude',
        url: 'https://claude.com/product/overview',
        description:
          'Default experience on Claude Sonnet 4.6 with Opus 4.6 for max capability',
      },
      Microsoft: {
        name: 'Copilot',
        url: 'https://copilot.microsoft.com',
        description:
          'OpenAI-powered assistant across web, work, and Microsoft 365 surfaces',
      },
      Meta: {
        name: 'Meta AI',
        url: 'https://ai.meta.com',
        description:
          "Powered by Muse Spark, Meta's latest flagship. Ranks 4th on AI Index, leads on HealthBench, free at meta.ai and across Meta apps",
      },
      Amazon: {
        name: 'Amazon Q',
        url: 'https://aws.amazon.com/q/',
        description:
          'Enterprise-first assistant grounded in AWS services and company data',
      },
      xAI: {
        name: 'Grok',
        url: 'https://grok.com',
        description:
          'Powered by Grok 4.1 for web answers, coding, and multimodal chat',
      },
      DeepSeek: {
        name: 'DeepSeek Chat',
        url: 'https://www.deepseek.com',
        description:
          'Powered by DeepSeek V3.2 with strong reasoning and coding performance',
      },
      Mistral: {
        name: 'Le Chat',
        url: 'https://mistral.ai/products/le-chat',
        description:
          "Powered by Mistral's latest flagship chat and reasoning models",
      },
      ByteDance: {
        name: 'Doubao',
        url: 'https://www.doubao.com',
        description:
          'Powered by Doubao 1.5 with chat, search, and creative generation modes',
      },
      Tencent: {
        name: 'Yuanbao',
        url: 'https://yuanbao.tencent.com',
        description:
          'Tencent assistant powered by Hunyuan models and Tencent ecosystem search',
      },
      Alibaba: {
        name: 'Qwen Chat',
        url: 'https://chat.qwen.ai/',
        description:
          'Powered by Qwen3 with multilingual chat, coding, and reasoning tools',
      },
      HuggingFace: {
        name: 'HuggingChat',
        url: 'https://huggingface.co/chat',
        description:
          'Multi-model open chat surface for Llama, Qwen, Mistral, and more',
      },
      Perplexity: {
        name: 'Perplexity',
        url: 'https://docs.perplexity.ai/docs/getting-started/overview',
        description:
          'Answer engine combining frontier models with citation-heavy web research',
      },
    },
  },
  {
    category: 'IDE / Code Editor',
    products: {
      Google: {
        name: 'Gemini Code Assist',
        url: 'https://developers.google.com/gemini-code-assist',
        description:
          'IDE coding agent powered by Gemini 2.5 today with Gemini 3 rollout underway',
      },
      OpenAI: {
        name: 'Codex',
        url: 'https://developers.openai.com/codex/ide',
        description:
          'IDE extension and cloud coding agent powered by GPT-5.5 and Codex',
      },
      Anthropic: {
        name: 'Claude Code',
        url: 'https://www.anthropic.com/claude-code',
        description:
          'Terminal-first coding agent with IDE workflows powered by Claude 4.6 models',
      },
      Microsoft: {
        name: 'GitHub Copilot',
        url: 'https://github.com/features/copilot',
        description:
          'Editor-native agent mode with GPT-5.5, Claude, and Gemini model options',
      },
      Amazon: {
        name: 'Amazon Q Developer',
        url: 'https://aws.amazon.com/q/developer/',
        description:
          'AWS coding assistant across IDEs, PR review, and modernization tasks',
      },
      JetBrains: {
        name: 'JetBrains Junie',
        url: 'https://junie.jetbrains.com',
        description:
          'LLM-agnostic coding agent with BYOK support, MCP integration, works in terminal + IDE + CI/CD',
      },
      Cursor: {
        name: 'Cursor',
        url: 'https://www.cursor.com',
        description:
          'AI-native editor with multi-file agent mode and frontier model routing',
      },
      Windsurf: {
        name: 'Windsurf Editor',
        url: 'https://windsurf.com',
        description:
          'Cascade-powered IDE for long-running coding tasks and agentic editing',
      },
    },
  },
  {
    category: 'CLI',
    products: {
      Google: {
        name: 'Gemini CLI',
        url: 'https://github.com/google-gemini/gemini-cli',
        description:
          'Open terminal agent linked to Gemini Code Assist and Gemini model workflows',
      },
      OpenAI: {
        name: 'Codex CLI',
        url: 'https://developers.openai.com/codex/cli',
        description: 'Terminal coding agent powered by GPT-5.5 and Codex',
      },
      Anthropic: {
        name: 'Claude Code',
        url: 'https://www.anthropic.com/claude-code',
        description:
          'CLI coding agent powered by Claude Opus 4.6 and Sonnet 4.6',
      },
      JetBrains: {
        name: 'Junie CLI',
        url: 'https://junie.jetbrains.com/docs/junie-cli.html',
        description:
          'Q2 2026 beta LLM-agnostic coding agent with BYOK, CI, and IDE bridge',
      },
      Courier: {
        name: 'Courier CLI',
        url: 'https://www.courier.com/docs/welcome',
        description:
          'Q2 2026 CLI for giving AI agents notification infrastructure and JSON-safe commands',
      },
      Amazon: {
        name: 'Amazon Q CLI',
        url: 'https://aws.amazon.com/q/developer/',
        description:
          'Command-line assistant for AWS operations, code changes, and shell workflows',
      },
      HuggingFace: {
        name: 'Hugging Face CLI',
        url: 'https://huggingface.co/docs/huggingface_hub/guides/cli',
        description:
          'CLI for model, dataset, repo, and inference workflow management',
      },
      Zapier: {
        name: 'Zapier Platform CLI',
        url: 'https://docs.zapier.com/platform/build-cli/overview',
        description:
          'CLI for building AI-enabled integrations, actions, and MCP-style tooling',
      },
      n8n: {
        name: 'n8n CLI',
        url: 'https://docs.n8n.io/hosting/cli-commands/',
        description:
          'CLI for workflow lifecycle, self-hosting, and automation operations',
      },
      NVIDIA: {
        name: 'AI Workbench CLI',
        url: 'https://docs.nvidia.com/ai-workbench/',
        description:
          'CLI-backed local and remote AI dev environments for model teams',
      },
    },
  },
  {
    category: 'API / Developer',
    products: {
      Google: {
        name: 'Gemini API',
        url: 'https://ai.google.dev/gemini-api/docs',
        description:
          'Developer platform for Gemini models, tools, embeddings, and multimodal apps',
      },
      OpenAI: {
        name: 'OpenAI Platform',
        url: 'https://developers.openai.com/api/docs',
        description:
          'Responses API with GPT-5.5, GPT Image 1.5, Realtime 1.5, and agent tooling',
      },
      Anthropic: {
        name: 'Claude API',
        url: 'https://docs.anthropic.com',
        description:
          'Claude 4.6 models, tools, computer use, and long-context developer platform',
      },
      Microsoft: {
        name: 'Azure AI Foundry',
        url: 'https://ai.azure.com',
        description:
          'Unified model, agent, eval, and deployment platform on Azure',
      },
      Amazon: {
        name: 'Amazon Bedrock',
        url: 'https://aws.amazon.com/bedrock/',
        description:
          'Managed foundation model platform with Bedrock Agents and guardrails',
      },
      Meta: {
        name: 'Llama API',
        url: 'https://www.llama.com/',
        description:
          "Official API access path for Meta's Llama model ecosystem",
      },
      xAI: {
        name: 'xAI API',
        url: 'https://docs.x.ai',
        description:
          'Developer access to Grok 4.1, multimodal reasoning, and tool use',
      },
      DeepSeek: {
        name: 'DeepSeek API',
        url: 'https://api-docs.deepseek.com/',
        description:
          'Low-cost API access to DeepSeek reasoning and coding model families',
      },
      Mistral: {
        name: 'La Plateforme',
        url: 'https://docs.mistral.ai',
        description:
          'Mistral developer platform for chat, OCR, embeddings, agents, and code',
      },
      NVIDIA: {
        name: 'NVIDIA Build',
        url: 'https://build.nvidia.com',
        description:
          'NIM-backed API catalog and deployment platform for enterprise AI services',
      },
      Alibaba: {
        name: 'Model Studio',
        url: 'https://www.alibabacloud.com/en/product/model-studio',
        description:
          'Alibaba Cloud developer platform for Qwen models and agent apps',
      },
      HuggingFace: {
        name: 'Inference API',
        url: 'https://huggingface.co/inference-api',
        description:
          'Hosted API layer for open models, endpoints, and serverless inference',
      },
    },
  },
  {
    category: 'Hosting / Deployment',
    products: {
      Google: {
        name: 'Vertex AI',
        url: 'https://cloud.google.com/vertex-ai',
        description:
          'Managed training, serving, and agent deployment on Google Cloud',
      },
      Microsoft: {
        name: 'Azure AI Foundry',
        url: 'https://ai.azure.com',
        description:
          'Managed deployment, monitoring, and model routing on Azure',
      },
      Amazon: {
        name: 'SageMaker AI',
        url: 'https://aws.amazon.com/sagemaker/',
        description:
          'Managed model training, deployment, and MLOps workflows on AWS',
      },
      NVIDIA: {
        name: 'NIM',
        url: 'https://build.nvidia.com',
        description:
          'Containerized inference microservices for enterprise deployment',
      },
      HuggingFace: {
        name: 'Inference Endpoints',
        url: 'https://huggingface.co/inference-endpoints',
        description:
          'Dedicated hosting for open models with autoscaling and observability',
      },
      Replicate: {
        name: 'Replicate',
        url: 'https://replicate.com',
        description:
          'API-first model hosting and deployment for multimodal workloads',
      },
      Alibaba: {
        name: 'PAI-EAS',
        url: 'https://www.alibabacloud.com/en/product/machine-learning',
        description:
          'Elastic algorithm service for model serving on Alibaba Cloud',
      },
      vLLM: {
        name: 'vLLM',
        url: 'https://vllm.ai',
        description:
          'Open-source high-throughput serving engine used in self-hosted stacks',
      },
    },
  },
  {
    category: 'Development Tools',
    products: {
      Google: {
        name: 'AI Studio',
        url: 'https://aistudio.google.com',
        description:
          'Fast browser workspace for prompt prototyping and Gemini app iteration',
      },
      OpenAI: {
        name: 'Playground',
        url: 'https://developers.openai.com/',
        description:
          'Prompt, eval, and tool testing workspace for GPT-5.5 and platform APIs',
      },
      JetBrains: {
        name: 'AI Assistant',
        url: 'https://www.jetbrains.com/ai/',
        description:
          'In-IDE assistant for completion, chat, refactors, and team model routing',
      },
      Cursor: {
        name: 'Background Agent',
        url: 'https://www.cursor.com',
        description:
          'Async dev workflows for longer tasks inside the Cursor coding environment',
      },
      HuggingFace: {
        name: 'Gradio',
        url: 'https://www.gradio.app',
        description:
          'UI toolkit for demos, eval apps, and internal AI developer tools',
      },
      LangChain: {
        name: 'LangSmith',
        url: 'https://www.langchain.com/langsmith',
        description:
          'Tracing, evaluation, prompt management, and observability for agent stacks',
      },
    },
  },
  {
    category: 'Automation / Orchestration',
    products: {
      Google: {
        name: 'Vertex AI Agent Builder',
        url: 'https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview',
        description:
          'Google orchestration layer for search, tools, and production agents',
      },
      OpenAI: {
        name: 'Agent Platform',
        url: 'https://developers.openai.com/api/docs/guides/agents',
        description:
          'Agent Builder, Agents SDK, ChatKit, and eval tooling on GPT-5.5',
      },
      Anthropic: {
        name: 'Computer Use',
        url: 'https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/computer-use',
        description:
          'Claude 4.6 computer control and tool use for autonomous task execution',
      },
      Microsoft: {
        name: 'Copilot Studio',
        url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/',
        description:
          'Enterprise copilot orchestration for workflows, connectors, and approvals',
      },
      Amazon: {
        name: 'Bedrock Agents',
        url: 'https://aws.amazon.com/bedrock/agents/',
        description:
          'Managed agent runtime, memory, knowledge bases, and action groups',
      },
      AutoGen: {
        name: 'AutoGen',
        url: 'https://microsoft.github.io/autogen/',
        description:
          'Open orchestration framework for multi-agent collaboration and tool use',
      },
      CrewAI: {
        name: 'CrewAI',
        url: 'https://www.crewai.com',
        description:
          'Multi-agent orchestration with role-based crews and production controls',
      },
      n8n: {
        name: 'n8n',
        url: 'https://n8n.io',
        description:
          'Workflow automation platform increasingly used for AI agent backplanes',
      },
      Zapier: {
        name: 'Zapier Agents',
        url: 'https://zapier.com/agents',
        description:
          'Hosted agent automation wired into Zapier actions, MCP, and app connectors',
      },
      Make: {
        name: 'Make',
        url: 'https://developers.make.com/custom-apps-documentation',
        description:
          'Visual automation platform for tool calling, triggers, and AI workflows',
      },
      LangGraph: {
        name: 'LangGraph',
        url: 'https://langchain-ai.github.io/langgraph/',
        description:
          'Stateful orchestration runtime for durable agent workflows and handoffs',
      },
      Temporal: {
        name: 'Temporal',
        url: 'https://temporal.io',
        description:
          'Durable execution layer frequently used beneath production AI automations',
      },
    },
  },
  {
    category: 'Image Generation',
    products: {
      Google: {
        name: 'Imagen 4',
        url: 'https://deepmind.google/models/imagen/',
        description:
          'Google image generation stack surfaced through Gemini and Vertex AI',
      },
      OpenAI: {
        name: 'GPT Image',
        url: 'https://developers.openai.com/api/docs/guides/image-generation',
        description:
          'Powered by GPT Image 1.5 for high-fidelity generation and editing',
      },
      Amazon: {
        name: 'Titan Image',
        url: 'https://aws.amazon.com/bedrock/titan/',
        description:
          'Bedrock image model family for enterprise-safe generation and editing',
      },
      Meta: {
        name: 'Imagine',
        url: 'https://ai.meta.com',
        description:
          "Meta's consumer image generation experience powered by Llama ecosystem tooling",
      },
      Adobe: {
        name: 'Firefly',
        url: 'https://firefly.adobe.com',
        description:
          'Commercially safe image generation for creative and marketing workflows',
      },
      Midjourney: {
        name: 'Midjourney',
        description:
          'High-end creative image model platform used for concept and visual design',
      },
      StabilityAI: {
        name: 'Stable Diffusion 3.5',
        url: 'https://stability.ai/stable-image',
        description:
          'Open image model family for self-hosted and API-driven generation',
      },
      BlackForest: {
        name: 'FLUX.1',
        url: 'https://bfl.ai',
        description:
          'Black Forest Labs image models widely adopted in open and hosted stacks',
      },
    },
  },
  {
    category: 'Video Generation',
    products: {
      Google: {
        name: 'Veo 3',
        url: 'https://deepmind.google/models/veo/',
        description:
          "Google's flagship video generation model for cinematic and prompt-driven clips",
      },
      OpenAI: {
        name: 'Sora',
        url: 'https://developers.openai.com/api/docs/guides/video-generation',
        description:
          'OpenAI video generation stack, including Sora-style workflows and API tooling',
      },
      Runway: {
        name: 'Runway',
        url: 'https://runwayml.com',
        description:
          'Gen-4 video generation and editing suite for creators and teams',
      },
      Minimax: {
        name: 'Hailuo',
        url: 'https://www.minimax.io',
        description:
          'MiniMax video generation platform for short-form cinematic clips',
      },
      HeyGen: {
        name: 'HeyGen',
        url: 'https://www.heygen.com',
        description:
          'Avatar-first video generation with enterprise localization and dubbing flows',
      },
      Pika: {
        name: 'Pika',
        url: 'https://pika.art',
        description:
          'Consumer-friendly video generation and edit effects for short-form content',
      },
      Luma: {
        name: 'Dream Machine',
        url: 'https://lumalabs.ai/dream-machine',
        description:
          'Text and image to video generation focused on fast creative iteration',
      },
    },
  },
  {
    category: 'Voice / TTS',
    products: {
      Google: {
        name: 'Cloud Text-to-Speech',
        url: 'https://cloud.google.com/text-to-speech',
        description:
          'Google voice stack spanning WaveNet, neural, and studio-quality synthesis',
      },
      OpenAI: {
        name: 'Realtime Voice',
        url: 'https://developers.openai.com/api/docs/guides/text-to-speech',
        description:
          'Speech generation powered by gpt-realtime-1.5 and GPT-4o mini TTS',
      },
      Amazon: {
        name: 'Amazon Polly',
        url: 'https://aws.amazon.com/polly/',
        description:
          'Managed neural TTS with brand voice and enterprise deployment options',
      },
      ElevenLabs: {
        name: 'ElevenLabs',
        url: 'https://elevenlabs.io',
        description:
          'High-quality speech synthesis, dubbing, and voice cloning platform',
      },
      PlayHT: {
        name: 'PlayAI',
        url: 'https://docs.play.ht/reference',
        description:
          'Realtime voice agent and TTS stack built on the PlayHT platform',
      },
      Murf: {
        name: 'Murf AI',
        url: 'https://murf.ai',
        description:
          'Studio-style voice generation for narration, explainers, and enterprise media',
      },
      WellSaid: {
        name: 'WellSaid Labs',
        url: 'https://wellsaidlabs.com',
        description:
          'Enterprise voice generation for training, marketing, and product narration',
      },
    },
  },
  {
    category: 'Audio / Music',
    products: {
      Google: {
        name: 'Cloud Speech-to-Text',
        url: 'https://cloud.google.com/speech-to-text',
        description:
          'Managed transcription and speech understanding APIs on Google Cloud',
      },
      OpenAI: {
        name: 'Audio API',
        url: 'https://developers.openai.com/api/docs/guides/audio',
        description:
          'Audio stack for transcription, translation, speech generation, and realtime apps',
      },
      AssemblyAI: {
        name: 'AssemblyAI',
        url: 'https://www.assemblyai.com',
        description:
          'Developer platform for transcription, speech understanding, and voice apps',
      },
      StabilityAI: {
        name: 'Stable Audio',
        url: 'https://stability.ai/stable-audio',
        description:
          'Music and sound generation model family from Stability AI',
      },
      Suno: {
        name: 'Suno',
        url: 'https://suno.com',
        description:
          'Consumer music generation platform for lyrics-to-song creation',
      },
      Udio: {
        name: 'Udio',
        url: 'https://udio.com',
        description:
          'AI music generation focused on high-quality songs and remix workflows',
      },
    },
  },
  {
    category: 'Research',
    products: {
      Google: {
        name: 'NotebookLM',
        url: 'https://notebooklm.google',
        description:
          'Source-grounded research notebook with summaries, audio, and citation workflows',
      },
      OpenAI: {
        name: 'Deep Research',
        url: 'https://developers.openai.com/api/docs/guides/deep-research',
        description:
          'ChatGPT research mode powered by GPT-5.5 with web and file investigation tools',
      },
      xAI: {
        name: 'DeepSearch',
        url: 'https://grok.com',
        description:
          'Grok research workflow combining live web search and reasoning chains',
      },
      DeepSeek: {
        name: 'DeepSeek Search',
        url: 'https://www.deepseek.com',
        description:
          'Research-oriented search and synthesis mode built into DeepSeek Chat',
      },
      Perplexity: {
        name: 'Perplexity',
        url: 'https://docs.perplexity.ai/docs/getting-started/overview',
        description:
          'Research-first answer engine with strong citation and follow-up workflows',
      },
    },
  },
  {
    category: 'Enterprise',
    products: {
      Google: {
        name: 'Gemini for Workspace',
        url: 'https://workspace.google.com/solutions/ai/',
        description:
          'Workspace assistant powered by Gemini models for docs, mail, meetings, and sheets',
      },
      OpenAI: {
        name: 'ChatGPT Enterprise',
        url: 'https://developers.openai.com/chatgpt',
        description:
          'Enterprise ChatGPT with GPT-5.5, admin controls, connectors, and security',
      },
      Anthropic: {
        name: 'Claude Enterprise',
        url: 'https://claude.com/pricing/enterprise',
        description:
          'Claude workspace with enterprise controls, knowledge, and 4.6 model access',
      },
      Microsoft: {
        name: 'Microsoft 365 Copilot',
        url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/',
        description:
          'Enterprise productivity layer spanning Word, Excel, Teams, and business data',
      },
      Amazon: {
        name: 'Amazon Q Business',
        url: 'https://aws.amazon.com/q/business/',
        description:
          'Enterprise assistant for internal knowledge, apps, and business automation',
      },
      NVIDIA: {
        name: 'NVIDIA AI Enterprise',
        url: 'https://www.nvidia.com/en-us/data-center/products/ai-enterprise/',
        description:
          'Enterprise software stack for building and running AI in production',
      },
      Oracle: {
        name: 'OCI AI',
        url: 'https://www.oracle.com/artificial-intelligence/',
        description:
          'Oracle enterprise AI services across apps, infrastructure, and databases',
      },
      HuggingFace: {
        name: 'Enterprise Hub',
        url: 'https://huggingface.co/enterprise',
        description:
          'Private model hub, governance, and deployment controls for enterprise teams',
      },
    },
  },
  {
    category: 'Sovereign Engine',
    products: {
      Ollama: {
        name: 'Ollama',
        url: 'https://ollama.com',
        description:
          'Local LLM runtime for private developer and team workflows',
      },
      LMStudio: {
        name: 'LM Studio',
        url: 'https://lmstudio.ai',
        description:
          'Desktop local-model runtime and chat environment for offline use',
      },
      Jan: {
        name: 'Jan',
        url: 'https://jan.ai',
        description:
          'Open local AI desktop app focused on privacy and self-hosting',
      },
      LocalAI: {
        name: 'LocalAI',
        url: 'https://localai.io',
        description:
          'Drop-in local inference engine for self-hosted OpenAI-compatible stacks',
      },
    },
  },
  {
    category: 'Sovereign Agent',
    products: {
      OpenClaw: {
        name: 'OpenClaw',
        url: 'https://openclaw.ai',
        description:
          'Open autonomous agent stack for local or private task execution',
      },
      HuggingFace: {
        name: 'smolagents',
        url: 'https://huggingface.co/docs/smolagents',
        description:
          'Code-first lightweight agent framework for self-hosted model stacks',
      },
      ByteDance: {
        name: 'UI-TARS',
        url: 'https://github.com/bytedance/UI-TARS',
        description:
          'Vision-first agent framework for GUI understanding and action planning',
      },
      Tencent: {
        name: 'Hunyuan Agent',
        url: 'https://hunyuan.tencent.com',
        description:
          "Tencent's agent stack for private enterprise and ecosystem scenarios",
      },
    },
  },
  {
    category: 'Sovereign Orchestrator',
    products: {
      n8n: {
        name: 'n8n',
        url: 'https://n8n.io',
        description:
          'Self-hosted automation backbone for private AI workflow orchestration',
      },
      deepset: {
        name: 'Haystack',
        url: 'https://haystack.deepset.ai',
        description:
          'Open framework for RAG, pipelines, and orchestrated agent workflows',
      },
      FlowiseAI: {
        name: 'Flowise',
        url: 'https://flowiseai.com',
        description:
          'Visual self-hostable orchestration for RAG and agent applications',
      },
    },
  },
  {
    category: 'Enterprise Engine',
    products: {
      vLLM: {
        name: 'vLLM',
        url: 'https://vllm.ai',
        description:
          'Production-grade high-throughput inference engine for enterprise serving',
      },
      NVIDIA: {
        name: 'NIM',
        url: 'https://build.nvidia.com',
        description:
          'Enterprise inference microservices for governed, repeatable deployment',
      },
      HuggingFace: {
        name: 'TGI',
        url: 'https://huggingface.co/docs/text-generation-inference',
        description:
          'Text Generation Inference server for enterprise open-model deployments',
      },
    },
  },
  {
    category: 'Enterprise Agent',
    products: {
      NVIDIA: {
        name: 'AI Blueprints',
        url: 'https://build.nvidia.com',
        description:
          'Reference agent systems and services packaged for enterprise AI teams',
      },
      CrewAI: {
        name: 'CrewAI Enterprise',
        url: 'https://www.crewai.com',
        description:
          'Governed multi-agent execution for teams running internal AI operations',
      },
      LangChain: {
        name: 'LangGraph Platform',
        url: 'https://www.langchain.com/langgraph',
        description:
          'Hosted runtime and controls for enterprise-grade stateful agents',
      },
    },
  },
  {
    category: 'Enterprise Orchestrator',
    products: {
      n8n: {
        name: 'n8n Enterprise',
        url: 'https://n8n.io',
        description:
          'Enterprise automation platform for secure internal AI workflow execution',
      },
      deepset: {
        name: 'Haystack',
        url: 'https://haystack.deepset.ai',
        description:
          'Composable orchestration layer for enterprise search and agent pipelines',
      },
      FlowiseAI: {
        name: 'Flowise',
        url: 'https://flowiseai.com',
        description:
          'Visual orchestration layer for enterprise AI apps and internal copilots',
      },
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
  'Pika',
  'HeyGen',
  'Luma',
  'StabilityAI',
  'BlackForest',
  'LangChain',
  'AssemblyAI',
  'Suno',
  'Udio',
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
    NVIDIA: 'background: rgba(118, 185, 0, 0.2); color: #76b900;',
    Microsoft: 'background: rgba(99, 102, 241, 0.2); color: #818cf8;',
    Google: 'background: rgba(59, 130, 246, 0.2); color: #60a5fa;',
    Amazon: 'background: rgba(249, 115, 22, 0.2); color: #fb923c;',
    Meta: 'background: rgba(168, 85, 247, 0.2); color: #c084fc;',
    Oracle: 'background: rgba(239, 68, 68, 0.2); color: #ef4444;',
    ByteDance: 'background: rgba(239, 68, 68, 0.2); color: #f87171;',
    Adobe: 'background: rgba(239, 68, 68, 0.2); color: #f87171;',
    Tencent: 'background: rgba(34, 197, 94, 0.2); color: #4ade80;',
    Alibaba: 'background: rgba(234, 179, 8, 0.2); color: #fbbf24;',
    OpenAI: 'background: rgba(34, 197, 94, 0.2); color: #4ade80;',
    Anthropic: 'background: rgba(249, 115, 22, 0.2); color: #fb923c;',
    xAI: 'background: rgba(255, 255, 255, 0.1); color: rgba(255, 255, 255, 0.7);',
    DeepSeek: 'background: rgba(239, 68, 68, 0.2); color: #f87171;',
    Mistral: 'background: rgba(6, 182, 212, 0.2); color: #22d3ee;',
    Minimax: 'background: rgba(99, 102, 241, 0.2); color: #818cf8;',
    JetBrains: 'background: rgba(99, 102, 241, 0.2); color: #818cf8;',
    Perplexity: 'background: rgba(234, 179, 8, 0.2); color: #fbbf24;',
    Cursor: 'background: rgba(34, 197, 94, 0.2); color: #4ade80;',
    Midjourney:
      'background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.1);',
    Runway:
      'background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.7);',
    Pika: 'background: rgba(236, 72, 153, 0.2); color: #f472b6;',
    HeyGen: 'background: rgba(139, 92, 246, 0.2); color: #a78bfa;',
    Luma: 'background: rgba(56, 189, 248, 0.2); color: #38bdf8;',
    StabilityAI: 'background: rgba(249, 115, 22, 0.2); color: #fb923c;',
    BlackForest: 'background: rgba(59, 130, 246, 0.2); color: #60a5fa;',
    LangChain: 'background: rgba(234, 179, 8, 0.2); color: #fbbf24;',
    AssemblyAI: 'background: rgba(99, 102, 241, 0.2); color: #818cf8;',
    Suno: 'background: rgba(236, 72, 153, 0.2); color: #f472b6;',
    Udio: 'background: rgba(244, 63, 94, 0.2); color: #fb7185;',
    ElevenLabs: 'background: rgba(168, 85, 247, 0.2); color: #c084fc;',
    PlayHT: 'background: rgba(59, 130, 246, 0.2); color: #60a5fa;',
    WellSaid: 'background: rgba(139, 92, 246, 0.2); color: #a78bfa;',
    Murf: 'background: rgba(236, 72, 153, 0.2); color: #f472b6;',
    Coqui: 'background: rgba(34, 197, 94, 0.2); color: #4ade80;',
    Temporal: 'background: rgba(139, 92, 246, 0.2); color: #a78bfa;',
    Make: 'background: rgba(249, 115, 22, 0.2); color: #fb923c;',
    Courier: 'background: rgba(34, 197, 94, 0.2); color: #4ade80;',
    Zapier: 'background: rgba(239, 68, 68, 0.2); color: #ef4444;',
    HuggingFace: 'background: rgba(234, 179, 8, 0.2); color: #fbbf24;',
    Replicate:
      'background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.1);',
    Ollama:
      'background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.7);',
    LMStudio:
      'background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.7);',
    CrewAI: 'background: rgba(34, 197, 94, 0.2); color: #4ade80;',
    MultiOn: 'background: rgba(59, 130, 246, 0.2); color: #60a5fa;',
    AutoGen: 'background: rgba(99, 102, 241, 0.2); color: #818cf8;',
    LangGraph: 'background: rgba(234, 179, 8, 0.2); color: #fbbf24;',
    n8n: 'background: rgba(34, 197, 94, 0.2); color: #4ade80;',
    OpenClaw: 'background: rgba(34, 197, 94, 0.2); color: #4ade80;',
    deepset: 'background: rgba(34, 197, 94, 0.2); color: #4ade80;',
    FlowiseAI: 'background: rgba(99, 102, 241, 0.2); color: #818cf8;',
    Jan: 'background: rgba(100, 116, 139, 0.2); color: #94a3b8;',
    LocalAI: 'background: rgba(249, 115, 22, 0.2); color: #fb923c;',
    vLLM: 'background: rgba(234, 179, 8, 0.2); color: #fbbf24;',
  };
  return (
    colors[company] ||
    'background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.5);'
  );
}

function getCompanyBadgeStyle(company: string): React.CSSProperties {
  const colors: Record<string, string> = {
    NVIDIA:
      'backgroundColor:rgba(118, 185, 0, 0.2);color:#76b900;borderColor:rgba(118, 185, 0, 0.3)',
    Microsoft:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    Google:
      'backgroundColor:rgba(59, 130, 246, 0.2);color:#60a5fa;borderColor:rgba(59, 130, 246, 0.3)',
    Amazon:
      'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    Meta: 'backgroundColor:rgba(168, 85, 247, 0.2);color:#c084fc;borderColor:rgba(168, 85, 247, 0.3)',
    Oracle:
      'backgroundColor:rgba(239, 68, 68, 0.2);color:#ef4444;borderColor:rgba(239, 68, 68, 0.3)',
    ByteDance:
      'backgroundColor:rgba(239, 68, 68, 0.2);color:#f87171;borderColor:rgba(239, 68, 68, 0.3)',
    Adobe:
      'backgroundColor:rgba(239, 68, 68, 0.2);color:#f87171;borderColor:rgba(239, 68, 68, 0.3)',
    Tencent:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    Alibaba:
      'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    OpenAI:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    Anthropic:
      'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    xAI: 'backgroundColor:rgba(255, 255, 255, 0.1);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.15)',
    DeepSeek:
      'backgroundColor:rgba(239, 68, 68, 0.2);color:#f87171;borderColor:rgba(239, 68, 68, 0.3)',
    Mistral:
      'backgroundColor:rgba(6, 182, 212, 0.2);color:#22d3ee;borderColor:rgba(6, 182, 212, 0.3)',
    Minimax:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    JetBrains:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    Perplexity:
      'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    Cursor:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    Midjourney:
      'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.1)',
    Runway:
      'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.1)',
    Pika: 'backgroundColor:rgba(236, 72, 153, 0.2);color:#f472b6;borderColor:rgba(236, 72, 153, 0.3)',
    HeyGen:
      'backgroundColor:rgba(139, 92, 246, 0.2);color:#a78bfa;borderColor:rgba(139, 92, 246, 0.3)',
    Luma: 'backgroundColor:rgba(56, 189, 248, 0.2);color:#38bdf8;borderColor:rgba(56, 189, 248, 0.3)',
    StabilityAI:
      'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    BlackForest:
      'backgroundColor:rgba(59, 130, 246, 0.2);color:#60a5fa;borderColor:rgba(59, 130, 246, 0.3)',
    LangChain:
      'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    AssemblyAI:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    Suno: 'backgroundColor:rgba(236, 72, 153, 0.2);color:#f472b6;borderColor:rgba(236, 72, 153, 0.3)',
    Udio: 'backgroundColor:rgba(244, 63, 94, 0.2);color:#fb7185;borderColor:rgba(244, 63, 94, 0.3)',
    ElevenLabs:
      'backgroundColor:rgba(168, 85, 247, 0.2);color:#c084fc;borderColor:rgba(168, 85, 247, 0.3)',
    PlayHT:
      'backgroundColor:rgba(59, 130, 246, 0.2);color:#60a5fa;borderColor:rgba(59, 130, 246, 0.3)',
    WellSaid:
      'backgroundColor:rgba(139, 92, 246, 0.2);color:#a78bfa;borderColor:rgba(139, 92, 246, 0.3)',
    Murf: 'backgroundColor:rgba(236, 72, 153, 0.2);color:#f472b6;borderColor:rgba(236, 72, 153, 0.3)',
    Coqui:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    Temporal:
      'backgroundColor:rgba(139, 92, 246, 0.2);color:#a78bfa;borderColor:rgba(139, 92, 246, 0.3)',
    Make: 'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    Courier:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    Zapier:
      'backgroundColor:rgba(239, 68, 68, 0.2);color:#ef4444;borderColor:rgba(239, 68, 68, 0.3)',
    HuggingFace:
      'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    Replicate:
      'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.1)',
    Ollama:
      'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.1)',
    LMStudio:
      'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.7);borderColor:rgba(255, 255, 255, 0.1)',
    CrewAI:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    MultiOn:
      'backgroundColor:rgba(59, 130, 246, 0.2);color:#60a5fa;borderColor:rgba(59, 130, 246, 0.3)',
    AutoGen:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    LangGraph:
      'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
    n8n: 'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    OpenClaw:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    deepset:
      'backgroundColor:rgba(34, 197, 94, 0.2);color:#4ade80;borderColor:rgba(34, 197, 94, 0.3)',
    FlowiseAI:
      'backgroundColor:rgba(99, 102, 241, 0.2);color:#818cf8;borderColor:rgba(99, 102, 241, 0.3)',
    Jan: 'backgroundColor:rgba(100, 116, 139, 0.2);color:#94a3b8;borderColor:rgba(100, 116, 139, 0.3)',
    LocalAI:
      'backgroundColor:rgba(249, 115, 22, 0.2);color:#fb923c;borderColor:rgba(249, 115, 22, 0.3)',
    vLLM: 'backgroundColor:rgba(234, 179, 8, 0.2);color:#fbbf24;borderColor:rgba(234, 179, 8, 0.3)',
  };

  const style =
    colors[company] ||
    'backgroundColor:rgba(255, 255, 255, 0.06);color:rgba(255, 255, 255, 0.5);borderColor:rgba(255, 255, 255, 0.08)';

  const result: Record<string, string> = {};
  const parts = style.split(';').filter(Boolean);
  for (const part of parts) {
    const [key, value] = part.split(':').map((s) => s.trim());
    if (key && value) {
      // Convert CSS property names to camelCase
      const camelKey = key.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase(),
      );
      result[camelKey] = value;
    }
  }
  return result as React.CSSProperties;
}

export default function ProductsPage() {
  const activeCompanies = companyOrder.filter((company) =>
    productData.some(
      (row) =>
        row.products[company] !== null && row.products[company] !== undefined,
    ),
  );

  return (
    <div className='min-h-screen'>
      <main className='mx-auto px-4 sm:px-6 lg:px-10 py-8'>
        <div className='mb-12'>
          <h1
            style={{
              fontSize: '3rem',
              lineHeight: '0.87',
              fontWeight: 400,
              color: '#ffffff',
              marginBottom: '8px',
            }}
          >
            AI Products Landscape
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '48rem',
              lineHeight: '1.5',
            }}
          >
            Comprehensive overview of AI products from frontier companies
            organized by category.
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#333138',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div
            className='mb-4 text-right'
            style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.4)',
              padding: '16px 24px 0',
            }}
          >
            Last updated: April 28, 2026
          </div>
          <div className='overflow-x-auto custom-scrollbar'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <th
                    className='py-4 px-6 font-medium'
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '13px',
                    }}
                  >
                    Category
                  </th>
                  {activeCompanies.map((company) => (
                    <th
                      key={company}
                      className='py-4 px-6 font-medium text-center'
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '13px',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: '2px',
                          fontSize: '11px',
                          fontWeight: 500,
                          ...getCompanyBadgeStyle(company),
                          borderWidth: '1px',
                          borderStyle: 'solid',
                        }}
                      >
                        {company}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody
                className='divide-y'
                style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}
              >
                {productData.map((row) => (
                  <tr
                    key={row.category}
                    className='hover:bg-white/5 transition-colors group'
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <td
                      className='py-2 px-6 font-medium'
                      style={{ color: '#ffffff', fontSize: '12px' }}
                    >
                      {row.category}
                    </td>
                    {activeCompanies.map((company) => {
                      const product = row.products[company];
                      if (!product) {
                        return (
                          <td
                            key={company}
                            className='py-2 px-6 text-center'
                            style={{
                              color: 'rgba(255, 255, 255, 0.2)',
                              fontSize: '12px',
                            }}
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
                              style={{
                                fontSize: '12px',
                                color: '#00ffff',
                                fontWeight: 500,
                                textDecoration: 'none',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.textDecoration =
                                  'underline';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.textDecoration = 'none';
                              }}
                            >
                              {product.name}
                            </a>
                          ) : (
                            <span
                              style={{
                                fontSize: '12px',
                                color: '#ffffff',
                                fontWeight: 500,
                              }}
                            >
                              {product.name}
                            </span>
                          )}
                          {product.description && (
                            <p
                              style={{
                                fontSize: '10px',
                                color: 'rgba(255, 255, 255, 0.4)',
                                marginTop: '2px',
                                lineHeight: '1.4',
                              }}
                            >
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

        <div
          style={{
            backgroundColor: '#333138',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '32px',
            marginTop: '48px',
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: '1.2',
            }}
          >
            Product Landscape Notes
          </h2>
          <div
            className='grid grid-cols-1 md:grid-cols-2 gap-8'
            style={{ fontSize: '14px', lineHeight: '1.7' }}
          >
            <div>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                <strong style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Product Categories:
                </strong>{' '}
                Products are organized by their primary function, highlighting
                the specialization across the AI landscape.
              </p>
            </div>
            <div>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                <strong style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Company Colors:
                </strong>{' '}
                Each company is color-coded for quick identification of their
                product footprint across categories.
              </p>
            </div>
            <div>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                <strong style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Official Links:
                </strong>{' '}
                Click on product names to navigate directly to their official
                product documentation or websites.
              </p>
            </div>
            <div>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                <strong style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Last Updated:
                </strong>{' '}
                April 28, 2026. The AI space is highly dynamic!
              </p>
            </div>
          </div>
        </div>

        <div
          className='mt-8 text-center'
          style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)' }}
        >
          <p>
            Data compiled from official company announcements and product
            documentation.
          </p>
        </div>
      </main>
    </div>
  );
}
