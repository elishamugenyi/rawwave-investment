import type { FC } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type LogoProps = {
  className?: string;
};

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={cn("font-headline text-2xl font-bold text-primary", className)}>
      AdVerse
    </Link>
  );
};

export default Logo;
