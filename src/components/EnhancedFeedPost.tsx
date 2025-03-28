
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Code, Github, Heart, MessageSquare, Share2, Bookmark, Copy, MoreHorizontal, ThumbsUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from './ScrollReveal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const [expanded, setExpanded] = useState(false);

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

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const isLongContent = post.content.length > 280;
  const displayContent = isLongContent && !expanded 
    ? `${post.content.substring(0, 280)}...` 
    : post.content;

  return (
    <ScrollReveal 
      delay={index * 100} 
      distance="20px" 
      duration={600} 
      threshold={0.1}
    >
      <Card className="mb-6 bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/5">
        <CardHeader className="pb-3 pt-5">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <Avatar className="h-12 w-12 ring-2 ring-primary/20 bg-primary/10 text-primary">
                <div className="text-lg font-semibold">{post.author.avatar}</div>
              </Avatar>
              <div>
                <div className="font-semibold text-lg leading-none">{post.author.name}</div>
                <div className="text-xs text-gray-400 mt-1">{post.author.role}</div>
                <div className="text-xs text-gray-500 mt-0.5">{post.timeAgo}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-8 w-8 rounded-full ${bookmarked ? 'text-primary bg-primary/10' : 'text-gray-400'}`}
                onClick={handleBookmark}
              >
                <Bookmark className="h-4 w-4" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-400">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>Report post</DropdownMenuItem>
                  <DropdownMenuItem>Hide from feed</DropdownMenuItem>
                  <DropdownMenuItem>Follow {post.author.name}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pb-4 space-y-4">
          <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-p:my-2">
            <p className="text-base leading-relaxed">{displayContent}</p>
            
            {isLongContent && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-1 text-primary" 
                onClick={toggleExpand}
              >
                {expanded ? "Show less" : "Read more"}
              </Button>
            )}
          </div>
          
          {post.codeSnippet && (
            <div className="bg-gray-950 rounded-lg p-4 my-3 border border-gray-800/80 overflow-x-auto shadow-inner shadow-black/20">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20 text-primary">
                  {post.codeSnippet.language}
                </Badge>
                <Button variant="ghost" size="sm" className="h-7 px-2" onClick={handleCopyCode}>
                  <Copy className="h-3.5 w-3.5 mr-1" />
                  <span className="text-xs">Copy</span>
                </Button>
              </div>
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                <code>{post.codeSnippet.code}</code>
              </pre>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 pt-1">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm">
                #{tag}
              </Badge>
            ))}
          </div>
          
          {post.repoLink && (
            <div className="mt-2">
              <Button variant="outline" size="sm" className="w-full justify-start gap-2 bg-gray-800/30 hover:bg-gray-700/30 backdrop-blur-sm">
                <Github className="h-4 w-4" />
                <span>View Repository</span>
              </Button>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="pt-0 border-t border-gray-800/50 py-3">
          <div className="grid grid-cols-3 w-full text-sm">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex items-center justify-center gap-2 ${liked ? 'text-primary' : 'text-gray-400'} hover:text-primary`} 
              onClick={handleLike}
            >
              <ThumbsUp className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
              <span className="font-medium">{likeCount}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center justify-center gap-2 text-gray-400 hover:text-primary">
              <MessageSquare className="h-4 w-4" />
              <span className="font-medium">{post.comments}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center justify-center gap-2 text-gray-400 hover:text-primary">
              <Share2 className="h-4 w-4" />
              <span className="font-medium">{post.shares}</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </ScrollReveal>
  );
};

export default EnhancedFeedPost;
