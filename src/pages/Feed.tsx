
import React from 'react';
import MainLayout from '@/components/MainLayout';
import FeedSection from '@/components/FeedSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Feed: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <ScrollReveal>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Developer Feed</h1>
              <p className="text-gray-400 mt-2">
                Stay updated with the latest contributions and insights from the developer community
              </p>
            </div>
            <Button className="gap-2">
              <Plus size={18} />
              <span>Create Post</span>
            </Button>
          </div>
        </ScrollReveal>
        
        <FeedSection />
      </div>
    </MainLayout>
  );
};

export default Feed;
