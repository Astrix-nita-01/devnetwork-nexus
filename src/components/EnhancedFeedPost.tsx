
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Code, Github, Heart, MessageSquare, Share2, Bookmark, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from './ScrollReveal';

interface FeedPostProps {
  post: {
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
  };
  index: number;
}

const EnhancedFeedPost: React.FC<FeedPostProps> = ({ post, index }) => {
  const { toast } = useToast();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
      toast({
        title: "Post liked",
        description: `You've liked ${post.author.name}'s post`,
      });
    }
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    toast({
      title: bookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: bookmarked ? "Post has been removed from your bookmarks" : "Post has been saved to your bookmarks",
    });
  };

  const handleCopyCode = () => {
    if (post.codeSnippet) {
      navigator.clipboard.writeText(post.codeSnippet.code);
      toast({
        title: "Code copied",
        description: "Code snippet copied to clipboard",
      });
    }
  };

  return (
    <ScrollReveal 
      delay={index * 150} 
      distance="30px" 
      duration={800} 
      threshold={0.1}
    >
      <Card className="mb-4 bg-gray-900 border-gray-800 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
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
            <Button 
              variant="ghost" 
              size="icon" 
              className={`h-8 w-8 ${bookmarked ? 'text-primary' : 'text-gray-400'}`}
              onClick={handleBookmark}
            >
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="mb-3">{post.content}</p>
          
          {post.codeSnippet && (
            <div className="bg-gray-950 rounded-md p-3 my-3 border border-gray-800 overflow-x-auto">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-500">{post.codeSnippet.language}</div>
                <Button variant="ghost" size="sm" className="h-6 p-1" onClick={handleCopyCode}>
                  <Copy className="h-3 w-3 mr-1" />
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
            <Button 
              variant="ghost" 
              size="sm" 
              className={`gap-1 ${liked ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`} 
              onClick={handleLike}
            >
              <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
              <span>{likeCount}</span>
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
    </ScrollReveal>
  );
};

export default EnhancedFeedPost;
