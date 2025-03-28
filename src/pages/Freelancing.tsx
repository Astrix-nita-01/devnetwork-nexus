
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ScrollReveal';
import { DollarSign, Clock, Star, Briefcase } from 'lucide-react';

const Freelancing: React.FC = () => {
  const freelanceProjects = [
    {
      id: 1,
      title: "E-commerce Website Development",
      client: "Fashion Boutique",
      budget: "$3,000 - $5,000",
      duration: "4 weeks",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      description: "Looking for a developer to build a modern e-commerce site with product catalog, cart functionality, and payment processing integration."
    },
    {
      id: 2,
      title: "Mobile App for Fitness Tracking",
      client: "HealthTech Startup",
      budget: "$8,000 - $12,000",
      duration: "2-3 months",
      skills: ["React Native", "Firebase", "UI/UX Design"],
      description: "Need a cross-platform mobile app that tracks workouts, nutrition, and provides progress analytics. Must integrate with wearable devices."
    },
    {
      id: 3,
      title: "Database Migration & Optimization",
      client: "Regional Insurance Company",
      budget: "$4,000 - $6,000",
      duration: "3 weeks",
      skills: ["SQL", "PostgreSQL", "Data Migration", "Performance Tuning"],
      description: "Migrate existing database from MySQL to PostgreSQL and optimize query performance. Includes writing migration scripts and documentation."
    },
    {
      id: 4,
      title: "API Integration for SaaS Platform",
      client: "Marketing Analytics Company",
      budget: "$2,500 - $3,500",
      duration: "2 weeks",
      skills: ["API Development", "Python", "JavaScript", "OAuth"],
      description: "Integrate our platform with popular marketing tools (Google Analytics, Facebook Ads, etc.) via their APIs. Create a unified data pipeline."
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Freelance Projects</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find remote freelance opportunities, work on exciting projects, and connect with clients looking for your skills.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {freelanceProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100} animation="slide-up">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <p className="text-sm text-gray-400 mt-1">Client: {project.client}</p>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/20">
                      New
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{project.budget}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save</Button>
                  <Button>Apply Now</Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Freelancing;
