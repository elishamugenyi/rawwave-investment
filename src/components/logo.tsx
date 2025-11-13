import type { FC } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  className?: string;
};

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image src="/logo.png" alt="AdVerse Logo" width={32} height={32} />
      <span className="font-headline text-2xl font-bold text-primary">
        AdVerse
      </span>
    </Link>
  );
};

export default Logo;
