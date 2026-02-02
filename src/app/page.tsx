import { ContactForm } from "@/components/contact-form";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <Gallery />
      <ContactForm />
    </div>
  );
}
