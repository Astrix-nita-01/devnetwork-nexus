
import React from 'react';
import MainLayout from '@/components/MainLayout';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactUs: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We've received your message and will get back to you soon.",
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <ScrollReveal>
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-400 mb-12">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-8">
            <ScrollReveal delay={100} animation="slide-up">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-2">For general inquiries:</p>
                  <a href="mailto:info@devconnect.com" className="text-primary hover:underline">
                    info@devconnect.com
                  </a>
                  
                  <p className="text-gray-400 mt-4 mb-2">For support:</p>
                  <a href="mailto:support@devconnect.com" className="text-primary hover:underline">
                    support@devconnect.com
                  </a>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={200} animation="slide-up">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-2">Main Office:</p>
                  <p>+1 (555) 123-4567</p>
                  
                  <p className="text-gray-400 mt-4 mb-2">Support Hotline:</p>
                  <p>+1 (555) 987-6543</p>
                  
                  <p className="text-gray-400 mt-4 text-sm">
                    Business hours: Monday-Friday, 9am-5pm EST
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={300} animation="slide-up">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-2">Headquarters:</p>
                  <address className="not-italic">
                    123 Tech Avenue<br />
                    Suite 400<br />
                    San Francisco, CA 94103<br />
                    United States
                  </address>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={400} className="md:col-span-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="bg-gray-800 border-gray-700"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="bg-gray-800 border-gray-700"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="What is this regarding?" 
                      className="bg-gray-800 border-gray-700"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      className="min-h-[150px] bg-gray-800 border-gray-700"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
