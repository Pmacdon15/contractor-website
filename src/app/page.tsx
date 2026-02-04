import { ContactForm } from '@/components/contact-form'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'

export default function Home() {
	return (
		<div className="flex w-full flex-col">
			<Hero />
			<Services />
			<Gallery />
			<ContactForm />
		</div>
	)
}
