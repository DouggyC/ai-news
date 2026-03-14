import { AIModel } from '@/types/models';

const HF_API_BASE = 'https://huggingface.co/api';

/**
 * Fetches an array of trending AI models from the Hugging Face API sorted by downloads.
 * 
 * Usage: Currently not used on any page. (Intended for a future Models listing page)
 */
export async function fetchTrendingModels(limit = 20): Promise<AIModel[]> {
  try {
    const response = await fetch(
      `${HF_API_BASE}/models?sort=downloads&direction=-1&limit=${limit}`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch models');
    }
    
    const data = await response.json();
    return data.map((model: any) => transformHFModel(model));
  } catch (error) {
    console.error('Error fetching trending models:', error);
    return getFallbackModels();
  }
}

/**
 * Retrieves detailed information for a specific AI model given its Hugging Face ID.
 * 
 * Usage: Currently not used on any page. (Intended for a future Model detail page)
 */
export async function fetchModelById(modelId: string): Promise<AIModel | null> {
  try {
    const response = await fetch(`${HF_API_BASE}/models/${modelId}`);
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    return transformHFModel(data);
  } catch (error) {
    console.error('Error fetching model:', error);
    return null;
  }
}

/**
 * Searches for AI models on the Hugging Face API that match the provided text query.
 * 
 * Usage: Currently not used on any page. (Intended for a future Search Models page)
 */
export async function searchModels(query: string, limit = 20): Promise<AIModel[]> {
  try {
    const response = await fetch(
      `${HF_API_BASE}/models?search=${encodeURIComponent(query)}&limit=${limit}`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to search models');
    }
    
    const data = await response.json();
    return data.map((model: any) => transformHFModel(model));
  } catch (error) {
    console.error('Error searching models:', error);
    return [];
  }
}

/**
 * Transforms raw Hugging Face API model data into the unified AIModel type.
 * 
 * Usage: Used internally by fetchTrendingModels, fetchModelById, and searchModels in api.ts.
 */
function transformHFModel(hfModel: any): AIModel {
  const params = estimateParameters(hfModel);
  
  return {
    id: hfModel.id,
    name: hfModel.modelId || hfModel.id,
    author: hfModel.author || hfModel.id.split('/')[0],
    lastModified: hfModel.lastModified,
    createdAt: hfModel.createdAt,
    downloads: hfModel.downloads || 0,
    likes: hfModel.likes || 0,
    tags: hfModel.tags || [],
    pipeline_tag: hfModel.pipeline_tag,
    library_name: hfModel.library_name,
    private: hfModel.private || false,
    gated: hfModel.gated || false,
    parameters: params,
    modelSize: formatModelSize(params),
    benchmarks: getBenchmarkScores(hfModel.id),
    contextLength: getContextLength(hfModel),
    license: hfModel.license || 'Unknown',
  };
}

/**
 * Estimates the number of parameters for a model based on heuristic matching of its ID.
 * 
 * Usage: Used internally by transformHFModel in api.ts.
 */
function estimateParameters(model: any): number {
  const id = model.id.toLowerCase();
  
  if (id.includes('405b') || id.includes('405')) return 405_000_000_000;
  if (id.includes('400b') || id.includes('400')) return 400_000_000_000;
  if (id.includes('200b') || id.includes('200')) return 200_000_000_000;
  if (id.includes('180b') || id.includes('180')) return 180_000_000_000;
  if (id.includes('176b') || id.includes('70b') || id.includes('70')) {
    if (id.includes('70b')) return 70_000_000_000;
    if (id.includes('176b')) return 176_000_000_000;
  }
  if (id.includes('72b') || id.includes('72')) return 72_000_000_000;
  if (id.includes('65b') || id.includes('65')) return 65_000_000_000;
  if (id.includes('34b') || id.includes('34')) return 34_000_000_000;
  if (id.includes('32b') || id.includes('32')) return 32_000_000_000;
  if (id.includes('30b') || id.includes('30')) return 30_000_000_000;
  if (id.includes('27b') || id.includes('27')) return 27_000_000_000;
  if (id.includes('22b') || id.includes('22')) return 22_000_000_000;
  if (id.includes('14b') || id.includes('14')) return 14_000_000_000;
  if (id.includes('13b') || id.includes('13')) return 13_000_000_000;
  if (id.includes('12b') || id.includes('12')) return 12_000_000_000;
  if (id.includes('11b') || id.includes('11')) return 11_000_000_000;
  if (id.includes('8b') || id.includes('8') || id.includes('-8')) return 8_000_000_000;
  if (id.includes('7b') || id.includes('7')) return 7_000_000_000;
  if (id.includes('6b') || id.includes('6')) return 6_000_000_000;
  if (id.includes('3b') || id.includes('3')) return 3_000_000_000;
  if (id.includes('2b') || id.includes('2')) return 2_000_000_000;
  if (id.includes('1b') || id.includes('1')) return 1_000_000_000;
  if (id.includes('800m') || id.includes('800M')) return 800_000_000;
  if (id.includes('700m') || id.includes('700M')) return 700_000_000;
  if (id.includes('560m') || id.includes('560M')) return 560_000_000;
  if (id.includes('500m') || id.includes('500M')) return 500_000_000;
  if (id.includes('450m') || id.includes('450M')) return 450_000_000;
  if (id.includes('400m') || id.includes('400M')) return 400_000_000;
  if (id.includes('300m') || id.includes('300M')) return 300_000_000;
  if (id.includes('250m') || id.includes('250M')) return 250_000_000;
  if (id.includes('220m') || id.includes('220M')) return 220_000_000;
  if (id.includes('200m') || id.includes('200M')) return 200_000_000;
  if (id.includes('160m') || id.includes('160M')) return 160_000_000;
  if (id.includes('140m') || id.includes('140M')) return 140_000_000;
  if (id.includes('125m') || id.includes('125M')) return 125_000_000;
  if (id.includes('110m') || id.includes('110M')) return 110_000_000;
  if (id.includes('100m') || id.includes('100M')) return 100_000_000;
  if (id.includes('80m') || id.includes('80M')) return 80_000_000;
  if (id.includes('70m') || id.includes('70M')) return 70_000_000;
  if (id.includes('60m') || id.includes('60M')) return 60_000_000;
  if (id.includes('50m') || id.includes('50M')) return 50_000_000;
  
  return 0;
}

/**
 * Formats a raw parameter count into a human-readable string representation (e.g., '70B', '8M').
 * 
 * Usage: Used internally by transformHFModel in api.ts.
 */
function formatModelSize(params: number): string {
  if (params >= 1_000_000_000_000) return `${Math.round(params / 1_000_000_000_000)}T`;
  if (params >= 1_000_000_000) return `${Math.round(params / 1_000_000_000)}B`;
  if (params >= 1_000_000) return `${Math.round(params / 1_000_000)}M`;
  if (params >= 1_000) return `${Math.round(params / 1_000)}K`;
  return params.toString();
}

/**
 * Returns hardcoded benchmark test scores (like MMLU, HumanEval) for known models based on their ID.
 * 
 * Usage: Used internally by transformHFModel in api.ts.
 */
function getBenchmarkScores(modelId: string): AIModel['benchmarks'] {
  const scores: Record<string, AIModel['benchmarks']> = {
    'gpt-4': { mmlu: 86.4, humaneval: 67.0, hellaswag: 95.3 },
    'gpt-4-turbo': { mmlu: 85.5, humaneval: 73.2, hellaswag: 95.8 },
    'gpt-3.5-turbo': { mmlu: 70.0, humaneval: 48.1, hellaswag: 85.5 },
    'claude-3-opus': { mmlu: 86.8, humaneval: 84.0, hellaswag: 96.2 },
    'claude-3-sonnet': { mmlu: 79.7, humaneval: 73.7, hellaswag: 92.7 },
    'claude-3-5-sonnet': { mmlu: 88.7, humaneval: 92.0, hellaswag: 95.7 },
    'gemini-1.5-pro': { mmlu: 85.9, humaneval: 84.1, hellaswag: 96.1 },
    'gemini-1.5-flash': { mmlu: 78.9, humaneval: 71.5, hellaswag: 89.2 },
    'llama-3-70b': { mmlu: 82.5, humaneval: 65.4, hellaswag: 93.5 },
    'llama-3-8b': { mmlu: 68.5, humaneval: 48.1, hellaswag: 81.2 },
    'llama-2-70b': { mmlu: 69.8, humaneval: 55.3, hellaswag: 85.7 },
    'llama-2-13b': { mmlu: 54.8, humaneval: 39.6, hellaswag: 80.1 },
    'llama-2-7b': { mmlu: 45.3, humaneval: 29.9, hellaswag: 73.1 },
    'mistral-7b': { mmlu: 59.5, humaneval: 40.2, hellaswag: 78.5 },
    'mixtral-8x7b': { mmlu: 71.4, humaneval: 54.6, hellaswag: 83.7 },
    'mixtral-8x22b': { mmlu: 77.8, humaneval: 60.1, hellaswag: 87.2 },
    'qwen-72b': { mmlu: 77.8, humaneval: 61.0, hellaswag: 86.4 },
    'qwen-14b': { mmlu: 66.3, humaneval: 48.2, hellaswag: 78.9 },
    'qwen-7b': { mmlu: 58.2, humaneval: 36.7, hellaswag: 74.3 },
    'command-r-plus': { mmlu: 72.3, humaneval: 55.4, hellaswag: 82.1 },
    'command-r': { mmlu: 65.8, humaneval: 45.2, hellaswag: 78.4 },
  };
  
  const lowerId = modelId.toLowerCase();
  for (const [key, value] of Object.entries(scores)) {
    if (lowerId.includes(key)) {
      return value;
    }
  }
  
  return undefined;
}

/**
 * Infers a model's maximum context length from its tags or ID.
 * 
 * Usage: Used internally by transformHFModel in api.ts.
 */
function getContextLength(model: any): number | undefined {
  const id = model.id.toLowerCase();
  const tags = (model.tags || []).map((t: string) => t.toLowerCase());
  
  if (id.includes('128k') || tags.includes('128k')) return 131072;
  if (id.includes('100k') || tags.includes('100k')) return 100000;
  if (id.includes('32k') || tags.includes('32k')) return 32768;
  if (id.includes('16k') || tags.includes('16k')) return 16384;
  if (id.includes('8k') || tags.includes('8k')) return 8192;
  if (id.includes('4k') || tags.includes('4k')) return 4096;
  
  return undefined;
}

/**
 * Returns a static list of popular fallback models for when the API query fails or is unavailable.
 * 
 * Usage: Used internally by fetchTrendingModels in api.ts.
 */
function getFallbackModels(): AIModel[] {
  return [
  {
    "id": "sentence-transformers/all-MiniLM-L6-v2",
    "name": "sentence-transformers/all-MiniLM-L6-v2",
    "author": "sentence-transformers",
    "createdAt": "2022-03-02T23:29:05.000Z",
    "downloads": 205677817,
    "likes": 4574,
    "tags": [
      "sentence-transformers",
      "pytorch",
      "tf",
      "rust",
      "onnx",
      "safetensors",
      "openvino",
      "bert",
      "feature-extraction",
      "sentence-similarity",
      "transformers",
      "en",
      "dataset:s2orc",
      "dataset:flax-sentence-embeddings/stackexchange_xml",
      "dataset:ms_marco",
      "dataset:gooaq",
      "dataset:yahoo_answers_topics",
      "dataset:code_search_net",
      "dataset:search_qa",
      "dataset:eli5",
      "dataset:snli",
      "dataset:multi_nli",
      "dataset:wikihow",
      "dataset:natural_questions",
      "dataset:trivia_qa",
      "dataset:embedding-data/sentence-compression",
      "dataset:embedding-data/flickr30k-captions",
      "dataset:embedding-data/altlex",
      "dataset:embedding-data/simple-wiki",
      "dataset:embedding-data/QQP",
      "dataset:embedding-data/SPECTER",
      "dataset:embedding-data/PAQ_pairs",
      "dataset:embedding-data/WikiAnswers",
      "arxiv:1904.06472",
      "arxiv:2102.07033",
      "arxiv:2104.08727",
      "arxiv:1704.05179",
      "arxiv:1810.09305",
      "license:apache-2.0",
      "eval-results",
      "text-embeddings-inference",
      "endpoints_compatible",
      "deploy:azure",
      "region:us"
    ],
    "pipeline_tag": "sentence-similarity",
    "library_name": "sentence-transformers",
    "private": false,
    "gated": false,
    "parameters": 6000000000,
    "modelSize": "6B",
    "license": "Unknown",
    "lastModified": "2022-03-02"
  },
  {
    "id": "google-bert/bert-base-uncased",
    "name": "google-bert/bert-base-uncased",
    "author": "google-bert",
    "createdAt": "2022-03-02T23:29:04.000Z",
    "downloads": 70212030,
    "likes": 2585,
    "tags": [
      "transformers",
      "pytorch",
      "tf",
      "jax",
      "rust",
      "coreml",
      "onnx",
      "safetensors",
      "bert",
      "fill-mask",
      "exbert",
      "en",
      "dataset:bookcorpus",
      "dataset:wikipedia",
      "arxiv:1810.04805",
      "license:apache-2.0",
      "endpoints_compatible",
      "deploy:azure",
      "region:us"
    ],
    "pipeline_tag": "fill-mask",
    "library_name": "transformers",
    "private": false,
    "gated": false,
    "parameters": 0,
    "modelSize": "0",
    "license": "Unknown",
    "lastModified": "2022-03-02"
  },
  {
    "id": "google/electra-base-discriminator",
    "name": "google/electra-base-discriminator",
    "author": "google",
    "createdAt": "2022-03-02T23:29:05.000Z",
    "downloads": 51275969,
    "likes": 84,
    "tags": [
      "transformers",
      "pytorch",
      "tf",
      "jax",
      "rust",
      "electra",
      "pretraining",
      "en",
      "arxiv:1406.2661",
      "license:apache-2.0",
      "endpoints_compatible",
      "region:us"
    ],
    "library_name": "transformers",
    "private": false,
    "gated": false,
    "parameters": 0,
    "modelSize": "0",
    "license": "Unknown",
    "lastModified": "2022-03-02"
  },
  {
    "id": "Falconsai/nsfw_image_detection",
    "name": "Falconsai/nsfw_image_detection",
    "author": "Falconsai",
    "createdAt": "2023-10-13T23:50:01.000Z",
    "downloads": 42226668,
    "likes": 1011,
    "tags": [
      "transformers",
      "pytorch",
      "safetensors",
      "vit",
      "image-classification",
      "arxiv:2010.11929",
      "license:apache-2.0",
      "endpoints_compatible",
      "deploy:azure",
      "region:us"
    ],
    "pipeline_tag": "image-classification",
    "library_name": "transformers",
    "private": false,
    "gated": false,
    "parameters": 0,
    "modelSize": "0",
    "license": "Unknown",
    "lastModified": "2023-10-13"
  },
  {
    "id": "sentence-transformers/all-mpnet-base-v2",
    "name": "sentence-transformers/all-mpnet-base-v2",
    "author": "sentence-transformers",
    "createdAt": "2022-03-02T23:29:05.000Z",
    "downloads": 28588402,
    "likes": 1255,
    "tags": [
      "sentence-transformers",
      "pytorch",
      "onnx",
      "safetensors",
      "openvino",
      "mpnet",
      "fill-mask",
      "feature-extraction",
      "sentence-similarity",
      "transformers",
      "text-embeddings-inference",
      "en",
      "dataset:s2orc",
      "dataset:flax-sentence-embeddings/stackexchange_xml",
      "dataset:ms_marco",
      "dataset:gooaq",
      "dataset:yahoo_answers_topics",
      "dataset:code_search_net",
      "dataset:search_qa",
      "dataset:eli5",
      "dataset:snli",
      "dataset:multi_nli",
      "dataset:wikihow",
      "dataset:natural_questions",
      "dataset:trivia_qa",
      "dataset:embedding-data/sentence-compression",
      "dataset:embedding-data/flickr30k-captions",
      "dataset:embedding-data/altlex",
      "dataset:embedding-data/simple-wiki",
      "dataset:embedding-data/QQP",
      "dataset:embedding-data/SPECTER",
      "dataset:embedding-data/PAQ_pairs",
      "dataset:embedding-data/WikiAnswers",
      "arxiv:1904.06472",
      "arxiv:2102.07033",
      "arxiv:2104.08727",
      "arxiv:1704.05179",
      "arxiv:1810.09305",
      "license:apache-2.0",
      "endpoints_compatible",
      "deploy:azure",
      "region:us"
    ],
    "pipeline_tag": "sentence-similarity",
    "library_name": "sentence-transformers",
    "private": false,
    "gated": false,
    "parameters": 2000000000,
    "modelSize": "2B",
    "license": "Unknown",
    "lastModified": "2022-03-02"
  },
  {
    "id": "timm/mobilenetv3_small_100.lamb_in1k",
    "name": "timm/mobilenetv3_small_100.lamb_in1k",
    "author": "timm",
    "createdAt": "2022-12-16T05:38:36.000Z",
    "downloads": 25271053,
    "likes": 54,
    "tags": [
      "timm",
      "pytorch",
      "safetensors",
      "image-classification",
      "transformers",
      "dataset:imagenet-1k",
      "arxiv:2110.00476",
      "arxiv:1905.02244",
      "license:apache-2.0",
      "region:us"
    ],
    "pipeline_tag": "image-classification",
    "library_name": "timm",
    "private": false,
    "gated": false,
    "parameters": 3000000000,
    "modelSize": "3B",
    "license": "Unknown",
    "lastModified": "2022-12-16"
  },
  {
    "id": "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2",
    "name": "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2",
    "author": "sentence-transformers",
    "createdAt": "2022-03-02T23:29:05.000Z",
    "downloads": 23833971,
    "likes": 1161,
    "tags": [
      "sentence-transformers",
      "pytorch",
      "tf",
      "onnx",
      "safetensors",
      "openvino",
      "bert",
      "feature-extraction",
      "sentence-similarity",
      "transformers",
      "multilingual",
      "ar",
      "bg",
      "ca",
      "cs",
      "da",
      "de",
      "el",
      "en",
      "es",
      "et",
      "fa",
      "fi",
      "fr",
      "gl",
      "gu",
      "he",
      "hi",
      "hr",
      "hu",
      "hy",
      "id",
      "it",
      "ja",
      "ka",
      "ko",
      "ku",
      "lt",
      "lv",
      "mk",
      "mn",
      "mr",
      "ms",
      "my",
      "nb",
      "nl",
      "pl",
      "pt",
      "ro",
      "ru",
      "sk",
      "sl",
      "sq",
      "sr",
      "sv",
      "th",
      "tr",
      "uk",
      "ur",
      "vi",
      "arxiv:1908.10084",
      "license:apache-2.0",
      "text-embeddings-inference",
      "endpoints_compatible",
      "deploy:azure",
      "region:us"
    ],
    "pipeline_tag": "sentence-similarity",
    "library_name": "sentence-transformers",
    "private": false,
    "gated": false,
    "parameters": 12000000000,
    "modelSize": "12B",
    "license": "Unknown",
    "lastModified": "2022-03-02"
  },
  {
    "id": "Qwen/Qwen2.5-7B-Instruct",
    "name": "Qwen/Qwen2.5-7B-Instruct",
    "author": "Qwen",
    "createdAt": "2024-09-16T11:55:40.000Z",
    "downloads": 23384870,
    "likes": 1134,
    "tags": [
      "transformers",
      "safetensors",
      "qwen2",
      "text-generation",
      "chat",
      "conversational",
      "en",
      "arxiv:2309.00071",
      "arxiv:2407.10671",
      "base_model:Qwen/Qwen2.5-7B",
      "base_model:finetune:Qwen/Qwen2.5-7B",
      "license:apache-2.0",
      "text-generation-inference",
      "endpoints_compatible",
      "deploy:azure",
      "region:us"
    ],
    "pipeline_tag": "text-generation",
    "library_name": "transformers",
    "private": false,
    "gated": false,
    "parameters": 7000000000,
    "modelSize": "7B",
    "license": "Unknown",
    "lastModified": "2024-09-16"
  }
];
}
