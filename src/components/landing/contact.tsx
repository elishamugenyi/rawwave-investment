'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Inquiry Sent!',
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-foreground/80 md:text-xl">
            Have a project in mind or want to learn more? We'd love to hear from you.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div className="space-y-8 opacity-0 motion-safe:animate-fade-in-up">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-accent"/>
                        <span>+1 (555) 123-4567</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-accent"/>
                        <span>hello@adverse.agency</span>
                    </div>
                </div>
            </div>
            <div className="opacity-0 motion-safe:animate-fade-in-up" style={{ animationDelay: '150ms'}}>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Tell us about your project..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full">Send Message</Button>
                </form>
                </Form>
            </div>
        </div>
      </div>
    </section>
  );
}
