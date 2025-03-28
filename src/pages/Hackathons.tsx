
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ScrollReveal';
import { Calendar, Users, Trophy, Globe } from 'lucide-react';

const Hackathons: React.FC = () => {
  const hackathons = [
    {
      id: 1,
      title: "Global AI Challenge",
      organizer: "TechCorp",
      date: "June 15-17, 2023",
      location: "Virtual",
      participants: 5000,
      prize: "$50,000",
      tags: ["AI", "Machine Learning", "Data Science"],
      description: "Build innovative AI solutions that address real-world problems. Open to developers worldwide."
    },
    {
      id: 2,
      title: "Web3 Innovation Hackathon",
      organizer: "Blockchain Foundation",
      date: "July 8-10, 2023",
      location: "San Francisco, CA",
      participants: 1200,
      prize: "$75,000",
      tags: ["Blockchain", "Web3", "Smart Contracts"],
      description: "Create decentralized applications that leverage blockchain technology. In-person event with virtual participation options."
    },
    {
      id: 3,
      title: "Healthcare Tech Jam",
      organizer: "MedTech Alliance",
      date: "August 22-24, 2023",
      location: "Virtual",
      participants: 2500,
      prize: "$30,000",
      tags: ["Healthcare", "IoT", "Mobile"],
      description: "Develop innovative solutions for healthcare challenges using technology. Focus on accessibility and improving patient outcomes."
    },
    {
      id: 4,
      title: "Climate Hack 2023",
      organizer: "Green Future Initiative",
      date: "September 10-12, 2023",
      location: "Berlin, Germany",
      participants: 1800,
      prize: "€40,000",
      tags: ["Sustainability", "Clean Energy", "IoT"],
      description: "Build technology solutions to combat climate change and promote sustainability. Hybrid event with partners around the globe."
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Hackathons</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Participate in coding competitions, collaborate with developers worldwide, and win prizes by building innovative solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <ScrollReveal key={hackathon.id} delay={index * 100} animation="slide-up">
              <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{hackathon.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {hackathon.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-gray-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400">{hackathon.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">{hackathon.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="text-sm">{hackathon.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">{hackathon.participants.toLocaleString()} participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="text-sm">{hackathon.prize} prize pool</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register Now</Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Hackathons;
