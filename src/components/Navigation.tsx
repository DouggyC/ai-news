'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'AI News' },
  { href: '/products', label: 'Products' },
  { href: '/benchmarks', label: 'Benchmarks' },
  { href: '/compare', label: 'Compare Models' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className='sticky top-0 z-50 border-b' style={{ 
      backgroundColor: 'rgba(15, 15, 15, 0.95)', 
      borderColor: 'rgba(255, 255, 255, 0.06)' 
    }}>
      <div className='mx-auto px-4 sm:px-6 lg:px-10'>
        <div className='flex justify-between h-14'>
          <div className='flex items-center gap-3'>
            <Link href='/' className='flex items-center gap-2'>
              <span className='font-medium text-lg' style={{ color: '#ffffff' }}>
                AI News
              </span>
            </Link>
          </div>

          <div className='flex items-center gap-1'>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'hover:bg-white/5 text-white/60 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'rgba(0, 255, 255, 0.1)' : 'transparent',
                    color: isActive ? '#00ffff' : 'rgba(255, 255, 255, 0.6)',
                    border: isActive ? '1px solid rgba(0, 255, 255, 0.3)' : '1px solid transparent',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}