import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Megaphone, Users, UserCheck, CalendarDays } from 'lucide-react';

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
    title: 'Ushers & Staffing',
    description: 'Ensure your events run smoothly with our professional, well-trained ushers and event staff.',
  },
  {
    icon: <CalendarDays className="h-10 w-10 text-accent" />,
    title: 'Event & Artist Management',
    description: 'From concept to execution, we manage unforgettable events and nurture artistic careers to stardom.',
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
                  <CardTitle className="mt-4">{service.title}</CardTitle>
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
