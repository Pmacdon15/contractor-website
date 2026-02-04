'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Field } from '@/components/ui/field'
import { useSendMessage } from '@/mutations/send-message'
import { formSchema } from '@/zod/schemas'
import { ControlledTextArea } from './controlled-text-area'
import { ControlledTextInput } from './controlled-text-input'

export function GetAQuoteForm() {
	const { mutate } = useSendMessage({
		onSuccess: () => {
			toast.success('Email Sent', {
				description: 'Your message has been sent to Contractor Chris!',
			})
			form.reset()
		},
		onError: (error) => {
			toast.error('Error Sending Email', {
				description:
					error instanceof Error
						? error.message
						: 'An error occurred while sending your message.',
			})
		},
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			full_name: '',
			email: '',
			subject: '',
			message: '',
		},
	})

	function onSubmit(data: z.infer<typeof formSchema>) {
		mutate(data)
	}

	return (
		<Card className="w-full border-border/50 bg-card/50 p-8 shadow-lg backdrop-blur-sm sm:max-w-4xl">
			<CardHeader className="rounded-lg bg-primary p-8 text-primary-foreground shadow-sm">
				<CardTitle className="font-bold text-2xl text-foreground">
					Get a Quote
				</CardTitle>
				<CardDescription className="text-base text-muted-foreground">
					Send us a message so we can schedule an on-site inspection.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					className="space-y-4"
					id="form-get-a-quote"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<ControlledTextInput
							control={form.control}
							label="Full Name"
							name="full_name"
							placeholder="John Doe"
						/>
						<ControlledTextInput
							control={form.control}
							label="Email"
							name="email"
							placeholder="j.doe@example.com"
						/>
					</div>
					<ControlledTextInput
						control={form.control}
						label="Subject"
						name="subject"
						placeholder="Remodel questions"
					/>
					<ControlledTextArea
						control={form.control}
						label="Message"
						name="message"
						placeholder="Please describe the work you need done..."
					/>
				</form>
			</CardContent>
			<CardFooter className="bg-muted/30 px-6 py-4">
				<Field
					className="flex w-full items-center justify-end gap-2"
					orientation="horizontal"
				>
					<Button
						className="text-muted-foreground hover:text-foreground"
						onClick={() => form.reset()}
						type="button"
						variant="ghost"
					>
						Reset
					</Button>
					<Button
						className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
						form="form-get-a-quote"
						type="submit"
					>
						Submit Request
					</Button>
				</Field>
			</CardFooter>
		</Card>
	)
}
