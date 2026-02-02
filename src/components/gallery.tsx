import Image from "next/image";

const images = [
  "/basement1.jpeg",
  "/deck2.jpeg",
  "/yard.jpeg",
  "/deck.jpeg",
  "/basement2.jpeg",
  "/railing.jpeg",
  "/3235697741184465987.jpg.jpeg",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Recent Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the quality and detail in our recent renovation work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {images.map((img, i) => (
            <div
              key={img}
              className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group ${
                // Make the first and 8th image span 2x2 for visual interest
                i === 0 || i === 7 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Image
                src={img}
                alt={`Contractor project ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
