import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const services = [
  {
    title: "Framing & Structural",
    description:
      "Expert framing services for new builds, basements, and renovations.",
    image: "/before-framing.jpeg",
    afterImage: "/after-framing.jpeg",
  },
  {
    title: "Drywall & Finishing",
    description:
      "Professional drywall installation, taping, mudding, and sanding.",
    image: "/basement2.jpeg",
  },
  {
    title: "Painting",
    description:
      "High-quality interior and exterior painting to transform your space.",
    image: "/before-painting.jpeg",
    afterImage: "/after-painting.jpeg",
  },
  {
    title: "Remodeling & Renovations",
    description:
      "Full-service remodeling for kitchens, basements, and living spaces.",
    image: "/before-trim.jpeg",
    afterImage:'/after-trim.jpeg'
  },
  {
    title: "Decks & Railings",
    description: "Custom deck construction and secure railing installation.",
    image: "/railing.jpeg",
  },
  {
    title: "General Handyman",
    description:
      "Reliable service for all your home repair and maintenance needs.",
    image: "/yard.jpeg",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Expert Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contractor Chris provides top-tier renovation and handyman services
            tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                {/* AFTER image (default view if it exists) */}
                {service.afterImage && (
                  <Image
                    src={service.afterImage}
                    alt={`${service.title} after`}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                )}

                {/* BEFORE image (hover view or default if no afterImage) */}
                <Image
                  src={service.image}
                  alt={`${service.title} before`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    service.afterImage
                      ? "opacity-0 group-hover:opacity-100"
                      : "opacity-100"
                  }`}
                />

                {service.afterImage && (
                  <>
                    <div className="absolute top-2 right-2 bg-background/80 text-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Before
                    </div>
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md transition-opacity duration-500 group-hover:opacity-0">
                      After
                    </div>
                  </>
                )}

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
