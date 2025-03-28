
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, BarChart3, Trophy, Users, Briefcase, ChevronRight, Star, Code, GitBranch, GitPullRequest } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MainLayout from '@/components/MainLayout';

const Index = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Developer Analytics",
      description: "Track your GitHub activity, commits, PRs, and language usage with interactive dashboards and visualizations."
    },
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      title: "Global Rankings",
      description: "Compare your open-source contributions with developers worldwide through our Codeforces-inspired leaderboards."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Developer Network",
      description: "Connect with fellow developers, share updates, and collaborate on projects in a LinkedIn-style network focused on code."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Job Opportunities",
      description: "Get discovered by companies based on your actual coding skills and open-source contributions, not just your resume."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 -z-10"></div>
        <div className="absolute -z-10 top-0 left-0 right-0 h-1/2 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(66,153,225,0.1),transparent)]"></div>
        
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                Where Developer Contributions Drive
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700 dark:from-blue-400 dark:to-blue-600"> Recognition & Opportunity</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-balance">
                DevConnect combines developer analytics, contribution rankings, and social networking to create a platform where your code speaks for you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="button-glow">
                  <Github className="mr-2 h-5 w-5" />
                  Login with GitHub
                </Button>
                <Button size="lg" variant="outline">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 w-full max-w-3xl mx-auto">
              <div className="glass-effect rounded-2xl p-6 shadow-subtle animate-scale-in">
                <div className="flex items-center justify-center mb-3 bg-primary/10 w-12 h-12 rounded-xl mx-auto">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">12K+</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Active Developers</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 shadow-subtle animate-scale-in" style={{ animationDelay: "100ms" }}>
                <div className="flex items-center justify-center mb-3 bg-primary/10 w-12 h-12 rounded-xl mx-auto">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">50M+</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Contributions Tracked</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 shadow-subtle animate-scale-in" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center justify-center mb-3 bg-primary/10 w-12 h-12 rounded-xl mx-auto">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">2.5K+</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Hiring Companies</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient blob decorations */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">A Complete Developer Platform</h2>
            <p className="text-gray-600 dark:text-gray-400">
              DevConnect brings together everything developers need to showcase their skills, connect with others, and advance their careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-subtle border border-gray-100 dark:border-gray-800 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 hover:shadow-md"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Analytics Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Powerful Developer Analytics</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Track your GitHub contributions, analyze your coding patterns, and gain insights into your development journey with our comprehensive analytics.
              </p>
              <ul className="space-y-4">
                {[
                  "Visualize contribution patterns over time",
                  "Analyze language usage and expertise",
                  "Track pull requests, issues, and code reviews",
                  "Compare metrics with other developers"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 text-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 button-glow">
                Explore Analytics <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                <div className="h-64 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-40" />
                    <p>Analytics visualization preview</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Commits</p>
                  <p className="text-2xl font-bold">1,240</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400">PRs</p>
                  <p className="text-2xl font-bold">87</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Repos</p>
                  <p className="text-2xl font-bold">32</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ranking Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="order-2 md:order-1 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Global Developer Rankings</h3>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Top Contributors</span>
              </div>
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <span className="font-bold text-gray-500 dark:text-gray-400 w-8">{index + 1}</span>
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Developer {index + 1}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-500 mr-1" />
                      <span className="text-sm font-medium">{5432 - index * 427}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link to="/rankings" className="text-primary text-sm font-medium inline-flex items-center hover:underline">
                  View Full Rankings <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Global Rankings & Recognition</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Gain recognition for your contributions through our Codeforces-inspired ranking system. See how you stack up against developers worldwide.
              </p>
              <ul className="space-y-4">
                {[
                  "Separate rankings for company and open-source contributions",
                  "Detailed breakdown of your ranking factors",
                  "Country and language-specific leaderboards",
                  "Weekly and monthly ranking updates"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 text-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 button-glow">
                View Rankings <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-600/90 -z-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to showcase your true developer potential?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of developers using DevConnect to highlight their skills, track their progress, and connect with opportunities.
            </p>
            <Button size="lg" variant="secondary" className="button-glow">
              <Github className="mr-2 h-5 w-5" />
              Get Started with GitHub
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
