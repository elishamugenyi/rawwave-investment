import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Collaboration() {
  return (
    <section id="collaborate" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto opacity-0 motion-safe:animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Join Our Growing Universe
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            We are always on the lookout for passionate talent and innovative partners. If you're ready to make an impact, we want to hear from you.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Let's Collaborate</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
