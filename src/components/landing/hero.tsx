import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-20 bg-gradient-to-b from-background via-background to-muted"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto opacity-0 motion-safe:animate-fade-in-up">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
            Making Brands,
            <br />
            Move.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
            Rawwave is your strategic partner in navigating the dynamic world of digital marketing. We craft bespoke solutions that amplify your voice and connect you with your audience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
         <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
