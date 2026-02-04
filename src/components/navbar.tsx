import { HardHat } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
	return (
		<nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<Link
					className="flex gap-2 font-bold text-2xl text-primary tracking-tight"
					href="/"
				>
					<HardHat size={30} />
					Contractor Chris
				</Link>
				<div className="hidden items-center gap-8 md:flex">
					<Link
						className="font-medium text-sm transition-colors hover:text-primary"
						href="/#services"
					>
						Services
					</Link>
					<Link
						className="font-medium text-sm transition-colors hover:text-primary"
						href="/#gallery"
					>
						Gallery
					</Link>
					<Link
						className="font-medium text-sm transition-colors hover:text-primary"
						href="/contact"
					>
						Contact
					</Link>
					<Button asChild className="font-bold">
						<Link href="/contact">Get a Quote</Link>
					</Button>
				</div>
			</div>
		</nav>
	)
}
