
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const CreatePost: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    toast({
      title: "Post created",
      description: "Your post has been published successfully.",
    });
    navigate("/feed");
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <ScrollReveal>
          <h1 className="text-3xl font-bold mb-8">Create Post</h1>

          <Card className="bg-gray-900 border-gray-800">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>What's on your mind?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">Title</label>
                  <Input 
                    id="title" 
                    placeholder="Enter a descriptive title" 
                    className="bg-gray-800 border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">Category</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="discussion">Discussion</SelectItem>
                      <SelectItem value="code">Code Snippet</SelectItem>
                      <SelectItem value="projects">Project</SelectItem>
                      <SelectItem value="jobs">Job</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="content" className="text-sm font-medium">Content</label>
                  <Textarea 
                    id="content" 
                    placeholder="Share your thoughts, code, or project details..." 
                    className="min-h-[200px] bg-gray-800 border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="tags" className="text-sm font-medium">Tags (separated by commas)</label>
                  <Input 
                    id="tags" 
                    placeholder="e.g., react, javascript, webdev" 
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate("/feed")}
                >
                  Cancel
                </Button>
                <Button type="submit">Publish Post</Button>
              </CardFooter>
            </form>
          </Card>
        </ScrollReveal>
      </div>
    </MainLayout>
  );
};

export default CreatePost;
