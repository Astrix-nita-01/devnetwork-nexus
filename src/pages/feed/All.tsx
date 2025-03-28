
import React from 'react';
import MainLayout from '@/components/MainLayout';
import FeedSection from '@/components/FeedSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllFeed: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold">Developer Feed</h1>
              <p className="text-gray-400 mt-2">
                Connect, learn, and grow with the developer community
              </p>
            </div>
            <Button className="gap-2 self-start md:self-auto" asChild>
              <Link to="/feed/create">
                <Plus size={18} />
                <span>Create Post</span>
              </Link>
            </Button>
          </div>
        </ScrollReveal>
        
        <FeedSection categoryFilter="all" />
      </div>
    </MainLayout>
  );
};

export default AllFeed;
