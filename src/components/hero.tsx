import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/hero.png"
          alt="Contractor Chris Renovation Work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Expert Renovation Services
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 font-medium">
          Drywall, framing, finishing, kitchen & bedroom remodeling, and more.
          <br className="hidden md:block" />
          Professional quality for all your general handyman needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg font-bold px-8 h-12 w-full sm:w-auto"
            asChild
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg font-bold px-8 h-12 w-full sm:w-auto bg-transparent text-white border-2 border-white hover:bg-white hover:text-black hover:border-white transition-all"
            asChild
          >
            <Link href="/#services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
