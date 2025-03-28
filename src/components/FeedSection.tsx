
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Filter, Plus, Star, ArrowUpDown, Users, Briefcase, Code as CodeIcon, MessageCircle, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import EnhancedFeedPost from './EnhancedFeedPost';
import { Link, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

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
  category: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  repoLink?: string;
}

interface FeedSectionProps {
  categoryFilter?: string;
}

const FeedSection: React.FC<FeedSectionProps> = ({ categoryFilter = "all" }) => {
  const [sortOrder, setSortOrder] = useState<'latest' | 'popular'>('latest');
  const navigate = useNavigate();
  const [allPosts, setAllPosts] = useState<FeedPost[]>([
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        avatar: "SC",
        role: "Full Stack Developer"
      },
      timeAgo: "2h ago",
      content: "Just published my new React hooks library for handling API requests with built-in caching and retry logic. It's designed to make data fetching more resilient and user-friendly. The library includes automatic retry with exponential backoff, request deduplication, and response caching. Check it out and let me know what you think!",
      likes: 42,
      comments: 12,
      shares: 8,
      tags: ["react", "hooks", "opensource"],
      category: "code",
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
      content: "Finally solved that nasty CSS grid bug that's been bothering me all week. It was an issue with Safari's implementation of grid layout and container height calculations. Sharing the solution for anyone who might find it useful:",
      likes: 26,
      comments: 5,
      shares: 3,
      tags: ["css", "debugging", "frontend"],
      category: "code",
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
      content: "Just released a new GitHub Action that automatically labels PRs based on the files changed. Makes triage so much easier for large projects! It uses a combination of path matching and content analysis to apply accurate labels. We've been testing it internally for a few weeks and it's already saving our team hours of manual work.",
      likes: 78,
      comments: 24,
      shares: 16,
      tags: ["github", "actions", "automation"],
      category: "projects",
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
      content: "Implemented a new optimization technique for our recommendation algorithm. Seeing a 30% improvement in inference speed! We're using quantized weights and caching previous results, which significantly reduces computation time without sacrificing accuracy. Here's the key part of the implementation:",
      likes: 93,
      comments: 31,
      shares: 22,
      tags: ["machinelearning", "optimization", "algorithms"],
      category: "discussion",
      codeSnippet: {
        language: "python",
        code: "def optimize_inference(model, input_data):\n    # Cache previous results\n    if hasattr(model, '_cache') and input_data.id in model._cache:\n        return model._cache[input_data.id]\n    \n    # Quantize weights for faster computation\n    quantized = quantize_weights(model.weights)\n    \n    # Run inference with optimized weights\n    result = model.forward(input_data, weights=quantized)\n    \n    # Cache results\n    if not hasattr(model, '_cache'):\n        model._cache = {}\n    model._cache[input_data.id] = result\n    \n    return result"
      }
    },
    {
      id: 5,
      author: {
        name: "Emma Wilson",
        avatar: "EW",
        role: "Technical Recruiter"
      },
      timeAgo: "3d ago",
      content: "We're looking for senior React developers to join our team at TechCorp. Remote positions available with competitive salary and benefits package. We're working on cutting-edge products in the fintech space, and we need experienced frontend engineers who can build performant, accessible interfaces. Interested? DM me for details!",
      likes: 34,
      comments: 15,
      shares: 28,
      tags: ["jobs", "react", "remote"],
      category: "jobs",
      repoLink: null
    }
  ]);
  
  const [feedPosts, setFeedPosts] = useState<FeedPost[]>([]);

  // Filter posts based on category
  useEffect(() => {
    let filteredPosts = [...allPosts];
    
    if (categoryFilter !== "all") {
      filteredPosts = allPosts.filter(post => post.category === categoryFilter);
    }
    
    // Apply sorting
    if (sortOrder === 'latest') {
      filteredPosts.sort((a, b) => b.id - a.id);
    } else {
      filteredPosts.sort((a, b) => b.likes - a.likes);
    }
    
    setFeedPosts(filteredPosts);
  }, [categoryFilter, sortOrder, allPosts]);

  const handleSortChange = (order: 'latest' | 'popular') => {
    setSortOrder(order);
  };

  const categories = [
    { name: "All", path: "/feed/all", icon: <Users className="h-4 w-4" /> },
    { name: "Code", path: "/feed/code", icon: <CodeIcon className="h-4 w-4" /> },
    { name: "Discussion", path: "/feed/discussion", icon: <MessageCircle className="h-4 w-4" /> },
    { name: "Projects", path: "/feed/projects", icon: <Sparkles className="h-4 w-4" /> },
    { name: "Jobs", path: "/feed/jobs", icon: <Briefcase className="h-4 w-4" /> }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="lg:flex gap-8">
          {/* Left sidebar - categories */}
          <div className="hidden lg:block w-56 shrink-0">
            <ScrollReveal>
              <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800/50 sticky top-24">
                <div className="p-4">
                  <h3 className="font-medium text-gray-200 mb-3">Categories</h3>
                  <nav className="space-y-1">
                    {categories.map((category) => (
                      <Button 
                        key={category.path} 
                        variant={categoryFilter === category.name.toLowerCase() ? "default" : "ghost"} 
                        size="sm"
                        className={`w-full justify-start ${
                          categoryFilter === category.name.toLowerCase() ? 
                          "bg-primary/20 text-primary hover:bg-primary/30" : 
                          "text-gray-400 hover:text-gray-200"
                        }`}
                        asChild
                      >
                        <Link to={category.path} className="flex items-center gap-2">
                          {category.icon}
                          {category.name}
                        </Link>
                      </Button>
                    ))}
                  </nav>
                  
                  <Separator className="my-4 bg-gray-800/50" />
                  
                  <h3 className="font-medium text-gray-200 mb-3">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50">
                      #react
                    </Badge>
                    <Badge variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50">
                      #javascript
                    </Badge>
                    <Badge variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50">
                      #opensource
                    </Badge>
                    <Badge variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50">
                      #webdev
                    </Badge>
                    <Badge variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50">
                      #ai
                    </Badge>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
          
          {/* Main feed area */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <ScrollReveal>
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2 bg-gray-900/80 backdrop-blur-sm border-gray-800/50">
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
                  
                  <div className="md:hidden flex overflow-x-auto gap-2 pb-2 scrollbar-none">
                    {categories.map((category) => (
                      <Button 
                        key={category.path} 
                        variant={categoryFilter === category.name.toLowerCase() ? "default" : "ghost"} 
                        size="sm"
                        className={
                          categoryFilter === category.name.toLowerCase() ? 
                          "bg-primary/20 text-primary hover:bg-primary/30" : 
                          "text-gray-400 hover:text-gray-200"
                        }
                        asChild
                      >
                        <Link to={category.path} className="whitespace-nowrap flex items-center gap-1.5">
                          {category.icon}
                          <span>{category.name}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <Button className="gap-2 bg-primary/90 hover:bg-primary" size="sm" asChild>
                  <Link to="/feed/create">
                    <Plus className="h-4 w-4" />
                    New Post
                  </Link>
                </Button>
              </ScrollReveal>
            </div>

            <div className="max-w-3xl mx-auto">
              {feedPosts.length > 0 ? (
                feedPosts.map((post, index) => (
                  <EnhancedFeedPost key={post.id} post={post} index={index} />
                ))
              ) : (
                <ScrollReveal>
                  <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800/50 p-8 text-center">
                    <div className="flex flex-col items-center justify-center py-12 space-y-4">
                      <div className="p-3 bg-gray-800/50 rounded-full">
                        <MessageCircle className="h-10 w-10 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-medium">No posts found in this category</h3>
                      <p className="text-gray-400 max-w-md mx-auto">Be the first to start a conversation or share something with the community</p>
                      <Button asChild className="mt-2">
                        <Link to="/feed/create">Create the first post</Link>
                      </Button>
                    </div>
                  </Card>
                </ScrollReveal>
              )}
              
              {feedPosts.length > 0 && (
                <div className="text-center mt-8 pb-8">
                  <ScrollReveal delay={400}>
                    <Button className="mx-auto bg-gray-800 hover:bg-gray-700 text-white">
                      Load More
                    </Button>
                  </ScrollReveal>
                </div>
              )}
            </div>
          </div>
          
          {/* Right sidebar - suggested content */}
          <div className="hidden xl:block w-64 shrink-0">
            <ScrollReveal>
              <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800/50 sticky top-24">
                <div className="p-4">
                  <h3 className="font-medium text-gray-200 mb-3">Trending Posts</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-2 pb-3 border-b border-gray-800/30 last:border-0">
                        <Badge className="mt-0.5 shrink-0 w-6 h-6 flex items-center justify-center rounded-full p-0">
                          {i}
                        </Badge>
                        <div>
                          <p className="text-sm text-gray-300 line-clamp-2 leading-tight">
                            Optimizing React render performance with useMemo and useCallback hooks
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            230 interactions
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4 bg-gray-800/50" />
                  
                  <h3 className="font-medium text-gray-200 mb-3">Suggested Developers</h3>
                  <div className="space-y-3">
                    {[
                      {name: "Alex Johnson", role: "Backend Developer"}, 
                      {name: "Jamie Smith", role: "UX Designer"},
                      {name: "Taylor Chen", role: "DevOps Engineer"}
                    ].map((dev, i) => (
                      <div key={i} className="flex items-center gap-3 pb-3 border-b border-gray-800/30 last:border-0">
                        <Avatar className="h-8 w-8 ring-2 ring-primary/10 bg-primary/5">
                          <div>{dev.name.split(' ').map(n => n[0]).join('')}</div>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{dev.name}</p>
                          <p className="text-xs text-gray-500 truncate">{dev.role}</p>
                        </div>
                        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                          Follow
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedSection;
