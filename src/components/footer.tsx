import Link from 'next/link'

export function Footer() {
	return (
		<footer className="bg-primary py-12 text-primary-foreground">
			<div className="container mx-auto px-4">
				<div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
					<div>
						<h3 className="mb-4 font-bold text-2xl tracking-tight">
							Contractor Chris
						</h3>
						<p className="max-w-xs opacity-90">
							Expert renovation and handyman services. Building
							trust with quality craftsmanship and attention to
							detail.
						</p>
					</div>
					<div>
						<h3 className="mb-4 font-bold text-lg">Contact Info</h3>
						<div className="space-y-2 opacity-90">
							<p>Phone: (555) 123-4567</p>
							<p>Email: chris@contractorchris.com</p>
							<p>Service Area: Greater Calgary Region</p>
						</div>
					</div>
					<div>
						<h3 className="mb-4 font-bold text-lg">Quick Links</h3>
						<div className="flex flex-col gap-2 font-medium">
							<Link className="hover:underline" href="/">
								Home
							</Link>
							<Link className="hover:underline" href="/#services">
								Services
							</Link>
							<Link className="hover:underline" href="/#gallery">
								Gallery
							</Link>
							<Link className="hover:underline" href="/#contact">
								Get a Quote
							</Link>
						</div>
					</div>
				</div>
				<div className="border-primary-foreground/20 border-t pt-8 text-center text-sm opacity-75">
					<p>
						&copy; {new Date().getFullYear()} Contractor Chris. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
