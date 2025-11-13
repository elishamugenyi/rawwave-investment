import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Founder() {

  return (
    <section id="founder" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet Our Founder
          </h2>
          <p className="mt-4 text-foreground/80 md:text-xl">
            The visionary leader behind Rawwave.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center opacity-0 motion-safe:animate-fade-in-up">
            <Image
                src="/profile.JPG"
                alt="Eve"
                width={500}
                height={500}
                className="rounded-full shadow-xl w-64 h-64 md:w-80 md:h-80 object-cover"
                data-ai-hint="founder portrait"
            />
          </div>
          <div className="md:col-span-2 space-y-4 opacity-0 motion-safe:animate-fade-in-up" style={{ animationDelay: '150ms'}}>
            <h3 className="text-2xl font-bold text-primary">Evelyn Luganda</h3>
            <p className="text-muted-foreground text-lg">Founder & Creative Director – RAW Wave Investment</p>
            <p className="text-foreground/90">
            Evelyn Luganda is a dynamic creative entrepreneur, media personality, and event strategist with extensive experience across Uganda and Kenya. With a background in marketing, broadcasting, and event production, Evelyn has built a reputation for turning bold ideas into powerful brand movements.

Her career spans radio, television, and large-scale events, including hosting some of the biggest nightlife and entertainment experiences in Kampala and Jinja. She has led creative direction and project management for major initiatives such as Social Gems (an influencer marketing platform) and Kampala Nights, blending entertainment, culture, and corporate partnerships.

Beyond the creative world, Evelyn is also a trained chef, bringing artistry, precision, and innovation to every project she leads. Under her leadership, RAW Wave Investment stands as a hub for authentic creativity, professional marketing, and impactful brand engagement.

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
