'use client';

import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Image
          src="https://i0.wp.com/urwaiter.io/wp-content/uploads/2023/09/h_logo_white.png?fit=1024%2C246&ssl=1"
          alt="UrWaiter Logo"
          width={150}
          height={150}
          style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        />
      </div>
    </Link>
  );
}