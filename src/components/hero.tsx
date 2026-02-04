import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
	return (
		<section className="relative flex h-[600px] items-center justify-center overflow-hidden">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0 select-none">
				<Image
					alt="Contractor Chris Renovation Work"
					className="object-cover"
					fill
					priority
					src="/hero.png"
				/>
				<div className="absolute inset-0 bg-black/60" />
			</div>

			{/* Content */}
			<div className="container relative z-10 mx-auto px-4 text-center text-white">
				<h1 className="mb-6 font-extrabold text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl">
					Expert Renovation Services
				</h1>
				<p className="mx-auto mb-10 max-w-3xl font-medium text-gray-200 text-lg md:text-xl lg:text-2xl">
					Drywall, framing, finishing, kitchen & bedroom remodeling,
					and more.
					<br className="hidden md:block" />
					Professional quality for all your general handyman needs.
				</p>
				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Button
						asChild
						className="h-12 w-full px-8 font-bold text-lg sm:w-auto"
						size="lg"
					>
						<Link href="/contact">Get a Quote</Link>
					</Button>
					<Button
						asChild
						className="h-12 w-full border-2 border-white bg-transparent px-8 font-bold text-lg text-white transition-all hover:border-white hover:bg-white hover:text-black sm:w-auto"
						size="lg"
						variant="outline"
					>
						<Link href="/#services">View Services</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
