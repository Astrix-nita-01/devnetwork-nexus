
import React from 'react';
import MainLayout from '@/components/MainLayout';
import FeedSection from '@/components/FeedSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Plus, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiscussionFeed: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-7 w-7 text-primary" />
                <h1 className="text-3xl font-bold">Discussions</h1>
              </div>
              <p className="text-gray-400 mt-2">
                Join conversations and debates on developer topics
              </p>
            </div>
            <Button className="gap-2 self-start md:self-auto" asChild>
              <Link to="/feed/create">
                <Plus size={18} />
                <span>Start Discussion</span>
              </Link>
            </Button>
          </div>
        </ScrollReveal>
        
        <FeedSection categoryFilter="discussion" />
      </div>
    </MainLayout>
  );
};

export default DiscussionFeed;
