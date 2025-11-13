import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Founder() {
  const image = PlaceHolderImages.find(p => p.id === 'founder');

  return (
    <section id="founder" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet Our Founder
          </h2>
          <p className="mt-4 text-foreground/80 md:text-xl">
            The visionary leader behind AdVerse Agency.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center opacity-0 motion-safe:animate-fade-in-up">
            {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={500}
                    height={500}
                    className="rounded-full shadow-xl w-64 h-64 md:w-80 md:h-80 object-cover"
                    data-ai-hint={image.imageHint}
                />
            )}
          </div>
          <div className="md:col-span-2 space-y-4 opacity-0 motion-safe:animate-fade-in-up" style={{ animationDelay: '150ms'}}>
            <h3 className="text-2xl font-bold text-primary">Founder's Name</h3>
            <p className="text-muted-foreground text-lg">CEO & Lead Strategist</p>
            <p className="text-foreground/90">
                This is where the founder's bio will go. It will highlight their journey, expertise in digital marketing, and their vision for AdVerse. This text will articulate the passion and drive that fuels the agency's commitment to elevating brands and delivering exceptional results for clients worldwide.
            </p>
            <div className="flex items-center space-x-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                    </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
