"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Something Great
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to start your project? Fill out the form and we'll get back
              to you with a free consultation and estimate.
            </p>
            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  P
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  E
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-muted-foreground">
                    chris@contractorchris.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-2xl border-none p-2">
            <CardHeader className="bg-primary text-primary-foreground p-8 rounded-lg shadow-sm">
              <CardTitle className="text-2xl font-bold">Get a Quote</CardTitle>
              <CardDescription className="text-primary-foreground/80 text-base">
                Tell us about your renovation needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6 bg-white rounded-b-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Phone" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <Input
                  id="service"
                  placeholder="e.g. Drywall, Deck, Painting"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your project..."
                  className="min-h-[120px]"
                />
              </div>
              <Button size="lg" className="w-full text-lg font-bold">
                Send Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
