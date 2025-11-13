import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

const whyUsPoints = [
  { text: 'Strategic & Data-Driven Approach' },
  { text: 'Creative Excellence & Innovation' },
  { text: 'Dedicated & Experienced Team' },
  { text: 'Proven Track Record of Success' },
];

export function WhyChooseUs() {
  const image = PlaceHolderImages.find(p => p.id === 'why-choose-us');

  return (
    <section id="why-us" className="bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 motion-safe:animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Partner with Rawwave?
            </h2>
            <p className="mt-4 text-foreground/80 md:text-xl">
              We're more than just an agency; we're your growth partners. Our mission is to deliver results that matter and relationships that last.
            </p>
            <ul className="mt-8 space-y-4">
              {whyUsPoints.map((point) => (
                <li key={point.text} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                  <span className="text-lg">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="opacity-0 motion-safe:animate-fade-in-up" style={{ animationDelay: '150ms'}}>
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
