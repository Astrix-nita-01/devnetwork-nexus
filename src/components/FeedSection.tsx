
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUp, Code, Github, Heart, MessageSquare, Share2, Star } from 'lucide-react';

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
  const feedPosts: FeedPost[] = [
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
    }
  ];

  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Developer Feed</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest contributions, insights, and achievements from the developer community
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <ScrollArea className="h-[600px] rounded-md border">
            {feedPosts.map((post) => (
              <div 
                key={post.id} 
                className="animate-slide-up opacity-0"
                style={{ 
                  animationDelay: `${post.id * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <Card className="mb-4 bg-gray-900 border-gray-800 hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <Avatar className="mr-3 h-9 w-9 bg-primary text-primary-foreground">
                          <div>{post.author.avatar}</div>
                        </Avatar>
                        <div>
                          <div className="font-medium">{post.author.name}</div>
                          <div className="text-xs text-gray-500">{post.author.role} · {post.timeAgo}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="mb-3">{post.content}</p>
                    
                    {post.codeSnippet && (
                      <div className="bg-gray-950 rounded-md p-3 my-3 border border-gray-800 overflow-x-auto">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-xs text-gray-500">{post.codeSnippet.language}</div>
                          <Button variant="ghost" size="sm" className="h-6 p-1">
                            <Code className="h-3 w-3 mr-1" />
                            <span className="text-xs">Copy</span>
                          </Button>
                        </div>
                        <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                          <code>{post.codeSnippet.code}</code>
                        </pre>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-gray-800 hover:bg-gray-700">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {post.repoLink && (
                      <div className="mt-3">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Github className="h-4 w-4 mr-2" />
                          <span>View Repository</span>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="pt-0 border-t border-gray-800">
                    <div className="flex justify-between w-full text-gray-500 text-sm">
                      <Button variant="ghost" size="sm" className="gap-1 text-gray-400 hover:text-primary">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 text-gray-400 hover:text-primary">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 text-gray-400 hover:text-primary">
                        <Share2 className="h-4 w-4" />
                        <span>{post.shares}</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </ScrollArea>
          
          <div className="text-center mt-6 animate-fade-in">
            <Button className="mx-auto">
              Load More <Star className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedSection;
