import Image from 'next/image'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const services = [
	{
		title: 'Framing & Structural',
		description:
			'Expert framing services for new builds, basements, and renovations.',
		image: '/before-framing.jpeg',
		afterImage: '/after-framing.jpeg',
	},
	{
		title: 'Drywall & Finishing',
		description:
			'Professional drywall installation, taping, mudding, and sanding.',
		image: '/basement2.jpeg',
	},
	{
		title: 'Painting',
		description:
			'High-quality interior and exterior painting to transform your space.',
		image: '/before-painting.jpeg',
		afterImage: '/after-painting.jpeg',
	},
	{
		title: 'Remodeling & Renovations',
		description:
			'Full-service remodeling for kitchens, basements, and living spaces.',
		image: '/before-trim.jpeg',
		afterImage: '/after-trim.jpeg',
	},
	{
		title: 'Decks & Railings',
		description:
			'Custom deck construction and secure railing installation.',
		image: '/railing.jpeg',
	},
	{
		title: 'General Handyman',
		description:
			'Reliable service for all your home repair and maintenance needs.',
		image: '/yard.jpeg',
	},
]

export function Services() {
	return (
		<section className="bg-secondary/30 py-24" id="services">
			<div className="container mx-auto px-4">
				<div className="mb-16 text-center">
					<span className="mb-2 block font-bold text-primary text-sm uppercase tracking-wider">
						What We Do
					</span>
					<h2 className="mb-6 font-bold text-3xl text-foreground md:text-4xl lg:text-5xl">
						Our Expert Services
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						Contractor Chris provides top-tier renovation and
						handyman services tailored to your specific needs.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<Card
							className="group overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-xl"
							key={service.title}
						>
							<div className="relative h-64 w-full overflow-hidden">
								{/* AFTER image (default view if it exists) */}
								{service.afterImage && (
									<Image
										alt={`${service.title} after`}
										className="object-cover transition-opacity duration-500 group-hover:opacity-0"
										fill
										src={service.afterImage}
									/>
								)}

								{/* BEFORE image (hover view or default if no afterImage) */}
								<Image
									alt={`${service.title} before`}
									className={`object-cover transition-opacity duration-500 ${
										service.afterImage
											? 'opacity-0 group-hover:opacity-100'
											: 'opacity-100'
									}`}
									fill
									src={service.image}
								/>

								{service.afterImage && (
									<>
										<div className="absolute top-2 right-2 rounded-full bg-background/80 px-3 py-1 font-semibold text-foreground text-xs opacity-0 shadow-md transition-opacity duration-500 group-hover:opacity-100">
											Before
										</div>
										<div className="absolute top-2 right-2 rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground text-xs shadow-md transition-opacity duration-500 group-hover:opacity-0">
											After
										</div>
									</>
								)}

								<div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
							</div>

							<CardHeader className="pb-2">
								<CardTitle className="font-bold text-xl">
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
	)
}
