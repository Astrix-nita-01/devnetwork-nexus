
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronDown, Info, Link as LinkIcon } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const LearnMore: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center space-y-6 py-12 mb-16">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
              Learn More About DevConnect
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in animation-delay-100">
              Discover how our platform helps developers connect, collaborate, and grow their careers in the tech industry.
            </p>
            <Button size="lg" className="mt-8 group animate-fade-in animation-delay-200">
              Explore Features
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </ScrollReveal>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="bg-gray-900/80 border border-gray-800 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        {/* FAQ Section */}
        <ScrollReveal>
          <div className="py-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about DevConnect's features and functionality.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <details 
                  key={index} 
                  className="group bg-gray-900/60 rounded-lg border border-gray-800 overflow-hidden transition-all duration-300 hover:border-primary/30"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-medium">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="p-6 pt-0 text-gray-400 border-t border-gray-800">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        {/* CTA Section */}
        <ScrollReveal>
          <div className="rounded-xl bg-gradient-to-r from-gray-900 via-primary/20 to-gray-900 p-8 text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Connect with Fellow Developers?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of developers already using DevConnect to collaborate, learn, and advance their careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="animate-pulse" asChild>
                <Link to="/feed">Browse the Feed</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/feed/create">Create Your First Post</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </MainLayout>
  );
};

// Feature data
const features = [
  {
    title: "Developer Community",
    description: "Connect with like-minded developers and expand your network",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    points: [
      "Join discussions on trending tech topics",
      "Share your projects and get feedback",
      "Follow developers in your specific technologies",
      "Discover upcoming events and meetups"
    ]
  },
  {
    title: "Career Opportunities",
    description: "Find your next job or freelance gig in the tech industry",
    icon: <LinkIcon className="h-6 w-6 text-primary" />,
    points: [
      "Browse job postings from top tech companies",
      "Apply directly through the platform",
      "Showcase your skills to potential employers",
      "Get matched with opportunities that fit your profile"
    ]
  },
  {
    title: "Learning Resources",
    description: "Access educational content and improve your skills",
    icon: <Info className="h-6 w-6 text-primary" />,
    points: [
      "Share and discover code snippets and tutorials",
      "Join coding challenges and hackathons",
      "Access a library of development resources",
      "Get help from experienced developers"
    ]
  }
];

// FAQ data
const faqs = [
  {
    question: "How do I create an account on DevConnect?",
    answer: "Creating an account is simple. Click on the 'Sign Up' button in the top right corner of the homepage, fill out the registration form with your details, and verify your email address to get started."
  },
  {
    question: "Is DevConnect free to use?",
    answer: "Yes, DevConnect offers a free tier that gives you access to most features. We also offer premium plans with additional features for professionals and teams."
  },
  {
    question: "How can I find job opportunities on the platform?",
    answer: "You can browse job listings in the 'Jobs' section or visit the 'Opportunities' dropdown in the navigation menu to explore jobs, freelancing gigs, and hackathons."
  },
  {
    question: "Can I share my coding projects on DevConnect?",
    answer: "Absolutely! You can create posts showcasing your projects in the 'Projects' section of the feed. You can include code snippets, images, and links to your GitHub repositories."
  },
  {
    question: "How do I connect with other developers?",
    answer: "You can follow other developers, comment on their posts, join discussions, and send direct messages. The platform is designed to help you build meaningful professional connections."
  }
];

export default LearnMore;
