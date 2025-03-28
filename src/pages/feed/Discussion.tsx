
import React from 'react';
import MainLayout from '@/components/MainLayout';
import FeedSection from '@/components/FeedSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const DiscussionFeed: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <ScrollReveal>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Discussions</h1>
              <p className="text-gray-400 mt-2">
                Join conversations and debates on developer topics
              </p>
            </div>
            <Button className="gap-2">
              <Plus size={18} />
              <span>Start Discussion</span>
            </Button>
          </div>
        </ScrollReveal>
        
        <FeedSection categoryFilter="discussion" />
      </div>
    </MainLayout>
  );
};

export default DiscussionFeed;
