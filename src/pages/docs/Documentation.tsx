
import React from 'react';
import MainLayout from '@/components/MainLayout';
import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Book, Code, FileText, Map, ChevronRight } from 'lucide-react';

const Documentation: React.FC = () => {
  const docSections = [
    {
      title: "Getting Started",
      description: "Learn the basics of DevConnect and set up your profile",
      icon: <Book className="h-6 w-6 text-primary" />,
      links: [
        { title: "Account Setup", url: "/docs/getting-started/account-setup" },
        { title: "Profile Customization", url: "/docs/getting-started/profile" },
        { title: "GitHub Integration", url: "/docs/getting-started/github-integration" },
        { title: "Privacy Settings", url: "/docs/getting-started/privacy" }
      ]
    },
    {
      title: "Developer Analytics",
      description: "Understand your development metrics and analytics",
      icon: <FileText className="h-6 w-6 text-primary" />,
      links: [
        { title: "Activity Dashboard", url: "/docs/analytics/dashboard" },
        { title: "Contribution Metrics", url: "/docs/analytics/contributions" },
        { title: "Skill Assessment", url: "/docs/analytics/skills" },
        { title: "Benchmarking", url: "/docs/analytics/benchmarking" }
      ]
    },
    {
      title: "API Reference",
      description: "Comprehensive guide to the DevConnect API",
      icon: <Code className="h-6 w-6 text-primary" />,
      links: [
        { title: "Authentication", url: "/docs/api/authentication" },
        { title: "User Endpoints", url: "/docs/api/users" },
        { title: "Analytics Endpoints", url: "/docs/api/analytics" },
        { title: "Webhooks", url: "/docs/api/webhooks" }
      ]
    },
    {
      title: "Guides & Tutorials",
      description: "Step-by-step guides for common tasks and features",
      icon: <Map className="h-6 w-6 text-primary" />,
      links: [
        { title: "Finding Job Opportunities", url: "/docs/guides/job-search" },
        { title: "Participating in Hackathons", url: "/docs/guides/hackathons" },
        { title: "Building Your Portfolio", url: "/docs/guides/portfolio" },
        { title: "Networking Tips", url: "/docs/guides/networking" }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-gray-400 text-lg">
              Everything you need to know about using DevConnect effectively
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {docSections.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 100} animation="slide-up">
              <Card className="bg-gray-900 border-gray-800 h-full flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    {section.icon}
                    <div>
                      <h2 className="text-xl font-bold">{section.title}</h2>
                      <p className="text-gray-400 mt-1">{section.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4 flex-1">
                    {section.links.map(link => (
                      <li key={link.url}>
                        <Link 
                          to={link.url} 
                          className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors p-2 rounded-md hover:bg-gray-800/50"
                        >
                          <ChevronRight className="h-4 w-4" />
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="mt-6 w-full" variant="outline" asChild>
                    <Link to={`/docs/${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Browse {section.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={400} className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Can't find what you're looking for? Reach out to our support team.
          </p>
          <Button asChild>
            <Link to="/info/contact-us">Contact Support</Link>
          </Button>
        </ScrollReveal>
      </div>
    </MainLayout>
  );
};

export default Documentation;
