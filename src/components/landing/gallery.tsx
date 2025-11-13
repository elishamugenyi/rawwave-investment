import Image from 'next/image';

const images = [
  { src: '/image1.JPG', alt: 'Gallery image 1', hint: 'event crowd' },
  { src: '/image2.JPG', alt: 'Gallery image 2', hint: 'stage event' },
  { src: '/image4.JPG', alt: 'Gallery image 4', hint: 'people networking' },
  { src: '/image5.JPG', alt: 'Gallery image 5', hint: 'outdoor festival' },
];

export function Gallery() {
  const mainImage = images[0];
  const otherImages = images.slice(1);

  return (
    <section id="gallery" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Work in Pictures
          </h2>
          <p className="mt-4 text-foreground/80 md:text-xl">
            A glimpse into the moments we've created and the brands we've elevated.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div
            className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 opacity-0 motion-safe:animate-fade-in-up"
            >
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              className="object-cover"
              data-ai-hint={mainImage.hint}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
             {otherImages.map((image, index) => (
                <div
                    key={image.src}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 opacity-0 motion-safe:animate-fade-in-up"
                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        data-ai-hint={image.hint}
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
