import { AIModel } from '@/types/models';
import { formatNumber, formatDate, getBenchmarkColor, getPipelineIcon, getLicenseColor } from '@/lib/utils';

interface ModelCardProps {
  model: AIModel;
}

export function ModelCard({ model }: ModelCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{getPipelineIcon(model.pipeline_tag)}</span>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 truncate text-lg">
              {model.name}
            </h3>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
            by {model.author}
          </p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLicenseColor(model.license || 'Unknown')}`}>
          {model.license || 'Unknown'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Parameters</p>
          <p className="font-bold text-zinc-900 dark:text-zinc-100">
            {model.modelSize || 'Unknown'}
          </p>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Downloads</p>
          <p className="font-bold text-zinc-900 dark:text-zinc-100">
            {formatNumber(model.downloads)}
          </p>
        </div>
      </div>

      {model.benchmarks && (
        <div className="mb-4">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">Benchmarks</p>
          <div className="space-y-2">
            {model.benchmarks.mmlu !== undefined && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 w-12">MMLU</span>
                <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${getBenchmarkColor(model.benchmarks.mmlu)}`}
                    style={{ width: `${model.benchmarks.mmlu}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 w-10">
                  {model.benchmarks.mmlu}%
                </span>
              </div>
            )}
            {model.benchmarks.humaneval !== undefined && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 w-12">HumanEval</span>
                <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${getBenchmarkColor(model.benchmarks.humaneval)}`}
                    style={{ width: `${model.benchmarks.humaneval}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 w-10">
                  {model.benchmarks.humaneval}%
                </span>
              </div>
            )}
            {model.benchmarks.hellaswag !== undefined && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 w-12">HellaSwag</span>
                <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${getBenchmarkColor(model.benchmarks.hellaswag)}`}
                    style={{ width: `${model.benchmarks.hellaswag}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 w-10">
                  {model.benchmarks.hellaswag}%
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
          <span>❤️</span>
          <span>{formatNumber(model.likes)}</span>
        </div>
        <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
          <span>🕐</span>
          <span>{formatDate(model.lastModified)}</span>
        </div>
        {model.contextLength && (
          <div className="text-zinc-500 dark:text-zinc-400">
            📜 {formatNumber(model.contextLength)} tokens
          </div>
        )}
      </div>

      {model.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
          {model.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
