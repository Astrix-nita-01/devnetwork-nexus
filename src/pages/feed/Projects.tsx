
import React from 'react';
import MainLayout from '@/components/MainLayout';
import FeedSection from '@/components/FeedSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const ProjectsFeed: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <ScrollReveal>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Projects</h1>
              <p className="text-gray-400 mt-2">
                Discover innovative projects from developers around the world
              </p>
            </div>
            <Button className="gap-2">
              <Plus size={18} />
              <span>Share Project</span>
            </Button>
          </div>
        </ScrollReveal>
        
        <FeedSection categoryFilter="projects" />
      </div>
    </MainLayout>
  );
};

export default ProjectsFeed;
