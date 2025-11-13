import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Services } from '@/components/landing/services';
import { WhyChooseUs } from '@/components/landing/why-choose-us';
import { Founder } from '@/components/landing/founder';
import { Collaboration } from '@/components/landing/collaboration';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Founder />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
