export function formatNumber(num: number): string {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

export function getBenchmarkColor(score: number | undefined): string {
  if (score === undefined) return 'bg-gray-200';
  if (score >= 90) return 'bg-emerald-500';
  if (score >= 80) return 'bg-green-500';
  if (score >= 70) return 'bg-lime-500';
  if (score >= 60) return 'bg-yellow-500';
  if (score >= 50) return 'bg-orange-500';
  return 'bg-red-500';
}

export function getPipelineIcon(pipeline?: string): string {
  switch (pipeline) {
    case 'text-generation':
      return '📝';
    case 'chat':
      return '💬';
    case 'text-to-image':
      return '🎨';
    case 'image-to-text':
      return '🖼️';
    case 'object-detection':
      return '🔍';
    case 'automatic-speech-recognition':
      return '🎤';
    case 'text-to-speech':
      return '🔊';
    case 'translation':
      return '🌐';
    case 'summarization':
      return '📋';
    case 'fill-mask':
      return '🎭';
    case 'question-answering':
      return '❓';
    case 'token-classification':
      return '🏷️';
    case 'feature-extraction':
      return '🔬';
    default:
      return '🤖';
  }
}

export function getLicenseColor(license: string): string {
  const l = license.toLowerCase();
  if (l.includes('proprietary')) return 'bg-purple-100 text-purple-700';
  if (l.includes('apache') || l.includes('mit') || l.includes('bsd')) return 'bg-green-100 text-green-700';
  if (l.includes('gpl')) return 'bg-orange-100 text-orange-700';
  if (l.includes('open') || l.includes('llama') || l.includes('qwen')) return 'bg-blue-100 text-blue-700';
  return 'bg-gray-100 text-gray-700';
}
