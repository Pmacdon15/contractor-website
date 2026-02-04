import Image from 'next/image'

const images = [
	'/basement1.jpeg',
	'/deck2.jpeg',
	'/yard.jpeg',
	'/deck.jpeg',
	'/basement2.jpeg',
	'/railing.jpeg',
	'/3235697741184465987.jpeg',
	'/after-painting.jpeg',
	'/before-painting.jpeg',
	'/after-framing.jpeg',
	'/before-framing.jpeg',
]

export function Gallery() {
	return (
		<section className="bg-background py-24" id="gallery">
			<div className="container mx-auto px-4">
				<div className="mb-16 text-center">
					<span className="mb-2 block font-bold text-primary text-sm uppercase tracking-wider">
						Our Portfolio
					</span>
					<h2 className="mb-6 font-bold text-3xl md:text-5xl">
						Recent Projects
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						See the quality and detail in our recent renovation
						work.
					</p>
				</div>

				<div className="grid auto-rows-[300px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{images.map((img, i) => (
						<div
							className={`group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl ${
								// Make the first and 8th image span 2x2 for visual interest
								i === 0 || i === 7
									? 'md:col-span-2 md:row-span-2'
									: ''
							}`}
							key={img}
						>
							<Image
								alt={`Contractor project ${i + 1}`}
								className="object-cover transition-transform duration-700 group-hover:scale-105"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								src={img}
							/>
							<div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
