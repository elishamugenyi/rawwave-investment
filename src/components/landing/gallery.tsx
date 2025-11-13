import Image from 'next/image';

const images = [
  { src: '/image1.JPG', alt: 'Gallery image 1', hint: 'event crowd' },
  { src: '/image2.JPG', alt: 'Gallery image 2', hint: 'stage event' },
  { src: '/image3.JPG', alt: 'Gallery image 3', hint: 'product launch' },
  { src: '/image4.JPG', alt: 'Gallery image 4', hint: 'people networking' },
  { src: '/image5.JPG', alt: 'Gallery image 5', hint: 'outdoor festival' },
];

export function Gallery() {
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
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 opacity-0 motion-safe:animate-fade-in-up
                ${index === 0 ? 'lg:col-span-2 lg:row-span-2 lg:aspect-square' : ''}
                ${index === 3 ? 'md:col-start-2' : ''}
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                data-ai-hint={image.hint}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
