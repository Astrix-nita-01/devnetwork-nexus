import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, MapPin, Calendar, GitBranch, GitCommit, GitPullRequest, Star, Users, Briefcase, Mail, Link as LinkIcon, ChevronRight, Code, Heart, MessageSquare, Share, Trophy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from '@/components/MainLayout';

const Profile = () => {
  // Mock data - this would come from GitHub API in the real app
  const user = {
    name: "Alex Johnson",
    username: "alexdev",
    bio: "Full-stack developer passionate about open source and clean code. Contributing to React, TypeScript, and Node.js projects.",
    avatar: "", // Would be GitHub avatar URL
    location: "San Francisco, CA",
    joined: "Joined January 2019",
    company: "TechCorp",
    email: "alex@example.com",
    website: "https://alexdev.io",
    followers: 248,
    following: 182,
    stats: {
      repositories: 32,
      stars: 567,
      commits: 1432,
      pullRequests: 87,
      issues: 64,
    },
    languages: [
      { name: "JavaScript", percentage: 45 },
      { name: "TypeScript", percentage: 30 },
      { name: "Python", percentage: 15 },
      { name: "Go", percentage: 10 },
    ],
    contributions: [
      { date: "2023-06-01", count: 5 },
      { date: "2023-06-02", count: 3 },
      // More contribution data would go here
    ],
    rankings: {
      global: 1254,
      language: {
        name: "JavaScript",
        rank: 342,
      },
      openSource: 867,
      company: 189,
    },
  };
  
  // Mock recent activity
  const recentActivity = [
    { type: "commit", repo: "react/react", time: "2 hours ago", title: "Fix memory leak in useEffect cleanup" },
    { type: "pullRequest", repo: "typescript/typescript", time: "1 day ago", title: "Add support for private class fields" },
    { type: "issue", repo: "nodejs/node", time: "3 days ago", title: "Performance regression in stream processing" },
    { type: "star", repo: "vercel/next.js", time: "1 week ago" },
    { type: "fork", repo: "facebook/react", time: "2 weeks ago" },
  ];
  
  // Mock repositories
  const repositories = [
    { name: "project-alpha", description: "A modern React starter with TypeScript and testing setup", stars: 156, forks: 34, language: "TypeScript" },
    { name: "data-viz-library", description: "Lightweight data visualization components for React", stars: 287, forks: 57, language: "JavaScript" },
    { name: "api-toolkit", description: "Tools for building and testing RESTful APIs", stars: 94, forks: 21, language: "JavaScript" },
  ];
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Profile Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
                  <h2 className="text-gray-600 dark:text-gray-400 mb-3">@{user.username}</h2>
                  <p className="text-center text-gray-700 dark:text-gray-300 mb-4">{user.bio}</p>
                  
                  <div className="flex space-x-3 mb-6">
                    <Button size="sm" className="button-glow">
                      <Users className="mr-1 h-4 w-4" /> Follow
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="mr-1 h-4 w-4" /> Contact
                    </Button>
                  </div>
                  
                  <div className="flex justify-around w-full py-3 border-t border-gray-100 dark:border-gray-800">
                    <div className="text-center">
                      <p className="font-bold">{user.followers.toLocaleString()}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">{user.following.toLocaleString()}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Following</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">{user.stats.stars.toLocaleString()}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Stars</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">{user.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Briefcase className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">{user.company}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">{user.email}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <LinkIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <a href={user.website} className="text-primary hover:underline">{user.website.replace('https://', '')}</a>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">{user.joined}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <h3 className="font-semibold mb-3">Connect</h3>
                  <div className="flex space-x-3">
                    <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Rankings Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold mb-4">Developer Rankings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-primary/10 p-2 rounded-md mr-3">
                        <Trophy className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">Global Rank</span>
                    </div>
                    <span className="font-bold">#{user.rankings.global.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-blue-500/10 p-2 rounded-md mr-3">
                        <Code className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-sm">{user.rankings.language.name}</span>
                    </div>
                    <span className="font-bold">#{user.rankings.language.rank.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-green-500/10 p-2 rounded-md mr-3">
                        <GitBranch className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-sm">Open Source</span>
                    </div>
                    <span className="font-bold">#{user.rankings.openSource.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-purple-500/10 p-2 rounded-md mr-3">
                        <Briefcase className="w-4 h-4 text-purple-500" />
                      </div>
                      <span className="text-sm">Company Contribs</span>
                    </div>
                    <span className="font-bold">#{user.rankings.company.toLocaleString()}</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Link to="/rankings" className="text-primary text-sm font-medium inline-flex items-center hover:underline">
                    View Full Rankings <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              {/* Languages Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold mb-4">Top Languages</h3>
                <div className="space-y-3">
                  {user.languages.map((language, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">{language.name}</span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{language.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${language.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link to="/analytics" className="text-primary text-sm font-medium inline-flex items-center hover:underline">
                    View All Analytics <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="profile-stat">
                <GitBranch className="h-6 w-6 text-primary mb-2" />
                <p className="text-2xl font-bold">{user.stats.repositories}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Repositories</p>
              </div>
              <div className="profile-stat">
                <GitCommit className="h-6 w-6 text-blue-500 mb-2" />
                <p className="text-2xl font-bold">{user.stats.commits.toLocaleString()}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Commits</p>
              </div>
              <div className="profile-stat">
                <GitPullRequest className="h-6 w-6 text-green-500 mb-2" />
                <p className="text-2xl font-bold">{user.stats.pullRequests}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pull Requests</p>
              </div>
              <div className="profile-stat">
                <Star className="h-6 w-6 text-amber-500 mb-2" />
                <p className="text-2xl font-bold">{user.stats.stars}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Stars Received</p>
              </div>
            </div>
            
            {/* Tabs Content */}
            <Tabs defaultValue="readme" className="mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="readme">README</TabsTrigger>
                <TabsTrigger value="repositories">Repositories</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="posts">Posts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="readme" className="mt-0">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">README.md</h3>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full">From pinned repository</span>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>This would render the README content from the user's pinned repository using a Markdown renderer. Since this is a static mockup, we're showing placeholder content.</p>
                    <h2>Project Overview</h2>
                    <p>This is a sample README that would be fetched from the user's most popular or pinned repository on GitHub. In the actual application, this would be rendered using a Markdown component.</p>
                    <h3>Features</h3>
                    <ul>
                      <li>Feature one description</li>
                      <li>Feature two description</li>
                      <li>Feature three description</li>
                    </ul>
                    <h3>Getting Started</h3>
                    <p>Installation instructions would go here.</p>
                    <pre><code>npm install project-name</code></pre>
                    <h3>Usage</h3>
                    <p>Usage examples would go here.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="repositories" className="mt-0">
                <div className="space-y-4">
                  {repositories.map((repo, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
                      <h3 className="font-semibold text-lg mb-2">
                        <Link to="#" className="hover:text-primary transition-colors">{repo.name}</Link>
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{repo.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          repo.language === "TypeScript" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : 
                          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}>
                          {repo.language}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-amber-500" />
                          <span>{repo.stars}</span>
                        </div>
                        <div className="flex items-center">
                          <GitBranch className="w-4 h-4 mr-1 text-gray-500" />
                          <span>{repo.forks}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="activity" className="mt-0">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
                  <h3 className="font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
                        <div className={`mt-0.5 p-2 rounded-md mr-4 ${
                          activity.type === 'commit' ? 'bg-green-100 dark:bg-green-900' :
                          activity.type === 'pullRequest' ? 'bg-purple-100 dark:bg-purple-900' :
                          activity.type === 'issue' ? 'bg-red-100 dark:bg-red-900' :
                          activity.type === 'star' ? 'bg-amber-100 dark:bg-amber-900' :
                          'bg-blue-100 dark:bg-blue-900'
                        }`}>
                          {activity.type === 'commit' && <GitCommit className="w-5 h-5 text-green-700 dark:text-green-400" />}
                          {activity.type === 'pullRequest' && <GitPullRequest className="w-5 h-5 text-purple-700 dark:text-purple-400" />}
                          {activity.type === 'issue' && <div className="w-5 h-5 text-red-700 dark:text-red-400">!</div>}
                          {activity.type === 'star' && <Star className="w-5 h-5 text-amber-700 dark:text-amber-400" />}
                          {activity.type === 'fork' && <GitBranch className="w-5 h-5 text-blue-700 dark:text-blue-400" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                            <Link to="#" className="font-medium text-gray-900 dark:text-gray-100 hover:text-primary mr-1">
                              {user.username}
                            </Link>
                            {activity.type === 'commit' && <span>committed to</span>}
                            {activity.type === 'pullRequest' && <span>opened a pull request in</span>}
                            {activity.type === 'issue' && <span>opened an issue in</span>}
                            {activity.type === 'star' && <span>starred</span>}
                            {activity.type === 'fork' && <span>forked</span>}
                            <Link to="#" className="font-medium text-primary hover:underline ml-1">
                              {activity.repo}
                            </Link>
                            <span className="ml-2">• {activity.time}</span>
                          </div>
                          {activity.title && (
                            <p className="text-gray-900 dark:text-gray-100">{activity.title}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="posts" className="mt-0">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary"
                        placeholder="Share an update or ask a question..."
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Sample posts would go here - just showing a placeholder */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
                    <div className="flex space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <h4 className="font-medium">{user.name}</h4>
                          <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">2 days ago</span>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200 mb-4">
                          Just published a new library for React data visualization! Check it out and let me know what you think.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                          <Link to="#" className="text-primary font-medium hover:underline">github.com/alexdev/data-viz-library</Link>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            Lightweight data visualization components for React with zero dependencies.
                          </p>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                          <button className="flex items-center hover:text-primary">
                            <Heart className="w-4 h-4 mr-1" />
                            <span>42</span>
                          </button>
                          <button className="flex items-center hover:text-primary">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            <span>12</span>
                          </button>
                          <button className="flex items-center hover:text-primary">
                            <Share className="w-4 h-4 mr-1" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
