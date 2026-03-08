'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'AI News', icon: '📰' },
  { href: '/products', label: 'Products', icon: '📦' },
  { href: '/benchmarks', label: 'Benchmarks', icon: '📊' },
  { href: '/compare', label: 'Compare Models', icon: '⚖️' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                AI News
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
