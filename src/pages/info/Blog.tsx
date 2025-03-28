
import React from 'react';
import MainLayout from '@/components/MainLayout';
import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    id: "1",
    title: "The Future of Open Source Contribution Metrics",
    excerpt: "How DevConnect is revolutionizing the way developers showcase their open source contributions and skills.",
    date: "May 10, 2023",
    author: {
      name: "Alex Chen",
      role: "CTO at DevConnect"
    },
    readTime: "8 min read",
    category: "Product",
    coverImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  };

  const blogPosts = [
    {
      id: "2",
      title: "How to Leverage Your GitHub Contributions in Job Interviews",
      excerpt: "Practical tips for showcasing your open source work and standing out to potential employers.",
      date: "April 28, 2023",
      author: {
        name: "Maya Johnson",
        role: "Career Coach"
      },
      readTime: "6 min read",
      category: "Career"
    },
    {
      id: "3",
      title: "Building a Developer Brand: More than Just Code",
      excerpt: "Why your online presence matters and how to cultivate a professional brand that opens doors.",
      date: "April 15, 2023",
      author: {
        name: "James Wilson",
        role: "Developer Advocate"
      },
      readTime: "5 min read",
      category: "Career"
    },
    {
      id: "4",
      title: "The Rise of Remote Development Teams",
      excerpt: "How distributed work is changing the landscape of software development and what it means for your career.",
      date: "March 30, 2023",
      author: {
        name: "Sophia Lee",
        role: "Remote Work Strategist"
      },
      readTime: "7 min read",
      category: "Industry"
    },
    {
      id: "5",
      title: "Understanding DevConnect's Analytics: A Deep Dive",
      excerpt: "A comprehensive guide to interpreting your analytics dashboard and leveraging insights for growth.",
      date: "March 22, 2023",
      author: {
        name: "Daniel Martinez",
        role: "Product Manager at DevConnect"
      },
      readTime: "10 min read",
      category: "Tutorial"
    },
    {
      id: "6",
      title: "2023 Developer Skills Report",
      excerpt: "Our annual analysis of in-demand skills, emerging technologies, and hiring trends in tech.",
      date: "March 10, 2023",
      author: {
        name: "Research Team",
        role: "DevConnect"
      },
      readTime: "12 min read",
      category: "Research"
    },
    {
      id: "7",
      title: "The Impact of AI on Developer Workflows",
      excerpt: "How artificial intelligence is transforming coding practices, code review, and team collaboration.",
      date: "February 28, 2023",
      author: {
        name: "Dr. Rebecca Chang",
        role: "AI Researcher"
      },
      readTime: "9 min read",
      category: "Technology"
    }
  ];

  const categories = ["All", "Product", "Career", "Industry", "Tutorial", "Research", "Technology"];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">DevConnect Blog</h1>
            <p className="text-gray-400 text-lg">
              Insights, tutorials, and industry perspectives for the developer community
            </p>
          </div>
        </ScrollReveal>
        
        <div className="max-w-6xl mx-auto mb-8">
          <ScrollReveal delay={100}>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"} 
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Featured post - larger card */}
              <Card className="lg:col-span-2 overflow-hidden bg-gray-900 border-gray-800">
                <div className="relative h-80">
                  <img 
                    src={featuredPost.coverImage} 
                    alt={featuredPost.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <Badge className="mb-3 bg-primary/20 text-primary hover:bg-primary/30">
                      Featured
                    </Badge>
                    <h2 className="text-2xl font-bold mb-2">{featuredPost.title}</h2>
                    <div className="flex items-center text-sm text-gray-400 gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="py-6">
                  <p className="text-gray-400">{featuredPost.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{featuredPost.author.name}, {featuredPost.author.role}</span>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to={`/blog/post/${featuredPost.id}`}>
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Recent posts - smaller card */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                {blogPosts.slice(0, 3).map((post) => (
                  <Card key={post.id} className="bg-gray-900 border-gray-800">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center text-xs text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="font-bold mt-2">{post.title}</h3>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="pt-2 pb-4">
                      <Link 
                        to={`/blog/post/${post.id}`}
                        className="text-primary text-sm flex items-center hover:underline"
                      >
                        Read article
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <h3 className="text-2xl font-bold mb-8">All Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={post.id} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="text-sm text-gray-400">{post.date}</div>
                    </div>
                    <h3 className="font-bold text-lg mt-3">{post.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-400 gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400} className="flex justify-center mt-12">
            <Button>Load More Articles</Button>
          </ScrollReveal>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
