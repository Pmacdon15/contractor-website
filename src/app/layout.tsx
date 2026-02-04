import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Providers } from '@/components/providers'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Contractor Chris | Expert Renovation Services',
	description:
		'Professional drywall, framing, painting, and remodeling services. Your trusted local handyman and renovation expert.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Providers>
			<html className="scroll-smooth" lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-background font-sans text-foreground antialiased`}
				>
					<Navbar />
					<main className="grow">{children}</main>
					<Toaster />
					<Footer />
				</body>
			</html>
		</Providers>
	)
}
