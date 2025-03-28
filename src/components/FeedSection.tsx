
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Filter, Plus, Star, ArrowUpDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import EnhancedFeedPost from './EnhancedFeedPost';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FeedPost {
  id: number;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  repoLink?: string;
}

const FeedSection: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<'latest' | 'popular'>('latest');
  const [feedPosts, setFeedPosts] = useState<FeedPost[]>([
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        avatar: "SC",
        role: "Full Stack Developer"
      },
      timeAgo: "2h ago",
      content: "Just published my new React hooks library for handling API requests with built-in caching and retry logic. Check it out!",
      likes: 42,
      comments: 12,
      shares: 8,
      tags: ["react", "hooks", "opensource"],
      repoLink: "#"
    },
    {
      id: 2,
      author: {
        name: "Mark Johnson",
        avatar: "MJ",
        role: "Frontend Engineer"
      },
      timeAgo: "6h ago",
      content: "Finally solved that nasty CSS grid bug that's been bothering me all week. Sharing the solution for anyone who might find it useful:",
      likes: 26,
      comments: 5,
      shares: 3,
      tags: ["css", "debugging", "frontend"],
      codeSnippet: {
        language: "css",
        code: `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  /* Fix for Safari bug */\n  @supports (-webkit-touch-callout: none) {\n    height: -webkit-fill-available;\n  }\n}`
      }
    },
    {
      id: 3,
      author: {
        name: "Liam Parker",
        avatar: "LP",
        role: "DevOps Engineer"
      },
      timeAgo: "1d ago",
      content: "Just released a new GitHub Action that automatically labels PRs based on the files changed. Makes triage so much easier for large projects!",
      likes: 78,
      comments: 24,
      shares: 16,
      tags: ["github", "actions", "automation"],
      repoLink: "#"
    },
    {
      id: 4,
      author: {
        name: "Ava Rodriguez",
        avatar: "AR",
        role: "ML Engineer"
      },
      timeAgo: "2d ago",
      content: "Implemented a new optimization technique for our recommendation algorithm. Seeing a 30% improvement in inference speed!",
      likes: 93,
      comments: 31,
      shares: 22,
      tags: ["machinelearning", "optimization", "algorithms"],
      codeSnippet: {
        language: "python",
        code: "def optimize_inference(model, input_data):\n    # Cache previous results\n    if hasattr(model, '_cache') and input_data.id in model._cache:\n        return model._cache[input_data.id]\n    \n    # Quantize weights for faster computation\n    quantized = quantize_weights(model.weights)\n    \n    # Run inference with optimized weights\n    result = model.forward(input_data, weights=quantized)\n    \n    # Cache results\n    if not hasattr(model, '_cache'):\n        model._cache = {}\n    model._cache[input_data.id] = result\n    \n    return result"
      }
    }
  ]);

  const handleSortChange = (order: 'latest' | 'popular') => {
    setSortOrder(order);
    
    // Sort the posts based on the selected order
    const sortedPosts = [...feedPosts];
    if (order === 'latest') {
      // Sort by id (higher id means newer post in our mock data)
      sortedPosts.sort((a, b) => b.id - a.id);
    } else {
      // Sort by likes
      sortedPosts.sort((a, b) => b.likes - a.likes);
    }
    
    setFeedPosts(sortedPosts);
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex justify-between items-center">
          <ScrollReveal>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="h-4 w-4" />
                    <span>{sortOrder === 'latest' ? 'Latest' : 'Popular'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => handleSortChange('latest')}>
                    <ArrowUpDown className="h-4 w-4 mr-2" />
                    Latest
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSortChange('popular')}>
                    <Star className="h-4 w-4 mr-2" />
                    Popular
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <div className="hidden md:flex gap-2">
                {["All", "Code", "Discussion", "Projects", "Jobs"].map((tag) => (
                  <Button key={tag} variant="ghost" size="sm">
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <Button className="gap-2" size="sm">
              <Plus className="h-4 w-4" />
              New Post
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <ScrollArea className="h-[600px] rounded-md border border-gray-800 p-4">
            {feedPosts.map((post, index) => (
              <EnhancedFeedPost key={post.id} post={post} index={index} />
            ))}
          </ScrollArea>
          
          <div className="text-center mt-6">
            <ScrollReveal delay={400}>
              <Button className="mx-auto">
                Load More
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedSection;
