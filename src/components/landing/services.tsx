import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Megaphone, Users, UserCheck, CalendarDays, User2, Clapperboard, Briefcase, PartyPopper } from 'lucide-react';

const services = [
  {
    icon: <Megaphone className="h-10 w-10 text-accent" />,
    title: 'Campaign Strategy & Management',
    description: 'Amplify your reach with data-driven strategies, from SEO and PPC to content and social media marketing. We ensure End-to-end planning and execution of creative marketing campaigns.',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Influencer Marketing & Talent Coordination',
    description: 'Connect with authentic voices. Influencer identification, management, and performance tracking. Influencer identification, management, and performance tracking.',
  },
  {
    icon: <UserCheck className="h-10 w-10 text-accent" />,
    title: 'Ushers, Models & DJ Management',
    description: 'Recruitment, training, and coordination of promotional teams and entertainers.',
  },
  {
    icon: <User2 className="h-10 w-10 text-accent" />,
    title: 'Brand Positioning & Public Relations',
    description: 'Strategic communication, storytelling, and visibility campaigns.'
  },
  {
    icon: <Clapperboard className="h-10 w-10 text-accent" />,
    title: 'Media & Advertising Services',
    description: 'Creative content production, brand partnerships, and media buying.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-accent" />,
    title: 'Corporate Marketing Solutions',
    description: 'Strategic branding, sponsorship proposals, and business-to-business promotions.',
  },
  {
    icon: <PartyPopper className="h-10 w-10 text-accent" />,
    title: 'Event Management & Production',
    description: 'Corporate events, product launches, concerts, and experiential activations.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-foreground/80 md:text-xl">
            We provide a comprehensive suite of services to build, grow, and manage your brand's presence.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={service.title} className="opacity-0 motion-safe:animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
              <Card className="h-full text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-transparent hover:border-accent bg-muted">
                <CardHeader className="items-center">
                  <div className="bg-accent/10 p-4 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4 text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
