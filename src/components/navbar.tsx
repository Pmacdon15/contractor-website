import { HardHat } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-2xl text-primary tracking-tight flex gap-2"
        >
          <HardHat size={30} />
          Contractor Chris
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#services"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#gallery"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Button asChild className="font-bold">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
