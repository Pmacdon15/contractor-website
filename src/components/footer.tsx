import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              Contractor Chris
            </h3>
            <p className="opacity-90 max-w-xs">
              Expert renovation and handyman services. Building trust with
              quality craftsmanship and attention to detail.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 opacity-90">
              <p>Phone: (555) 123-4567</p>
              <p>Email: chris@contractorchris.com</p>
              <p>Service Area: Greater Calgary Region</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 font-medium">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/#services" className="hover:underline">
                Services
              </Link>
              <Link href="/#gallery" className="hover:underline">
                Gallery
              </Link>
              <Link href="/#contact" className="hover:underline">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-75 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Contractor Chris. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
