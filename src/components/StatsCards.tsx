import { formatNumber } from '@/lib/utils';

interface StatsCardsProps {
  totalDownloads: number;
  totalLikes: number;
  modelCount: number;
  avgBenchmarks: number;
}

export function StatsCards({ totalDownloads, totalLikes, modelCount, avgBenchmarks }: StatsCardsProps) {
  const stats = [
    {
      label: 'Total Models',
      value: modelCount,
      icon: '🤖',
      color: 'bg-blue-50 dark:bg-blue-950',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      label: 'Total Downloads',
      value: formatNumber(totalDownloads),
      icon: '📥',
      color: 'bg-green-50 dark:bg-green-950',
      textColor: 'text-green-600 dark:text-green-400',
    },
    {
      label: 'Total Likes',
      value: formatNumber(totalLikes),
      icon: '❤️',
      color: 'bg-pink-50 dark:bg-pink-950',
      textColor: 'text-pink-600 dark:text-pink-400',
    },
    {
      label: 'Avg MMLU Score',
      value: avgBenchmarks.toFixed(1) + '%',
      icon: '📊',
      color: 'bg-purple-50 dark:bg-purple-950',
      textColor: 'text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`${stat.color} rounded-xl p-4 border border-zinc-200 dark:border-zinc-800`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{stat.icon}</span>
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
