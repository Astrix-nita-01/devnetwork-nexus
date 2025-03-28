
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Search, Filter, Check, X, ChevronDown, Code, Users, ExternalLink, Building, Heart, MessageSquare, Share, Bookmark, GitCommit, GitBranch } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import MainLayout from '@/components/MainLayout';

const Jobs = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for job listings
  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      logo: "",
      location: "San Francisco, CA (Remote)",
      salary: "$120K - $160K",
      posted: "2 days ago",
      type: "Full-time",
      experience: "5+ years",
      skills: ["React", "TypeScript", "GraphQL"],
      description: "We're looking for a Senior Frontend Developer to join our growing team. You'll be working on our main product, a developer analytics platform used by thousands of engineers worldwide.",
      requiredContributions: {
        commits: "500+",
        repos: "5+",
        openSource: "Required"
      }
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DataFlow Systems",
      logo: "",
      location: "New York, NY (On-site)",
      salary: "$130K - $170K",
      posted: "1 week ago",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Node.js", "PostgreSQL", "AWS"],
      description: "Join our backend team to build scalable systems that process millions of data points daily. You'll work on our core API services and data processing pipelines.",
      requiredContributions: {
        commits: "300+",
        repos: "3+",
        openSource: "Preferred"
      }
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudScale",
      logo: "",
      location: "Remote",
      salary: "$110K - $150K",
      posted: "3 days ago",
      type: "Full-time",
      experience: "4+ years",
      skills: ["Kubernetes", "Docker", "Terraform", "CI/CD"],
      description: "We're seeking a DevOps Engineer to help us scale our infrastructure. You'll be responsible for maintaining our Kubernetes clusters, setting up CI/CD pipelines, and ensuring system reliability.",
      requiredContributions: {
        commits: "200+",
        repos: "2+",
        openSource: "Preferred"
      }
    },
    {
      id: 4,
      title: "Full-Stack Developer",
      company: "Innovate Labs",
      logo: "",
      location: "Austin, TX (Hybrid)",
      salary: "$100K - $140K",
      posted: "5 days ago",
      type: "Full-time",
      experience: "2+ years",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      description: "Join our fast-growing startup as a Full-Stack Developer. You'll work on various projects, from our customer-facing web application to our internal tools and APIs.",
      requiredContributions: {
        commits: "100+",
        repos: "1+",
        openSource: "Not required"
      }
    },
    {
      id: 5,
      title: "Mobile Developer (React Native)",
      company: "AppWorks",
      logo: "",
      location: "Remote",
      salary: "$90K - $130K",
      posted: "1 day ago",
      type: "Contract",
      experience: "3+ years",
      skills: ["React Native", "TypeScript", "Mobile Development"],
      description: "We're looking for a React Native developer to help us build the next version of our mobile app. You'll work closely with our design and backend teams to deliver a seamless user experience.",
      requiredContributions: {
        commits: "150+",
        repos: "2+",
        openSource: "Not required"
      }
    },
  ];
  
  const companyProfiles = [
    {
      id: 1,
      name: "TechCorp",
      logo: "",
      location: "San Francisco, CA",
      industry: "Developer Tools",
      size: "51-200 employees",
      founded: 2015,
      description: "TechCorp builds developer analytics tools used by engineering teams at companies like Google, Microsoft, and Amazon.",
      hiring: 4
    },
    {
      id: 2,
      name: "DataFlow Systems",
      logo: "",
      location: "New York, NY",
      industry: "Data Infrastructure",
      size: "201-500 employees",
      founded: 2012,
      description: "DataFlow Systems provides data processing infrastructure for Fortune 500 companies, handling petabytes of data daily.",
      hiring: 7
    },
    {
      id: 3,
      name: "CloudScale",
      logo: "",
      location: "Seattle, WA",
      industry: "Cloud Infrastructure",
      size: "11-50 employees",
      founded: 2018,
      description: "CloudScale is revolutionizing how companies deploy and manage their cloud infrastructure with our automation platform.",
      hiring: 3
    },
  ];
  
  // Filter options
  const locations = ["Remote", "San Francisco, CA", "New York, NY", "Austin, TX", "Seattle, WA"];
  const jobTypes = ["Full-time", "Contract", "Part-time", "Internship"];
  const experienceLevels = ["Entry Level", "Mid Level", "Senior", "Lead"];
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Developer Job Board</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Find opportunities at companies that value your GitHub contributions and open-source work.
          </p>
        </div>
        
        <Tabs defaultValue="jobs" className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <TabsList>
              <TabsTrigger value="jobs" className="flex items-center">
                <Briefcase className="w-4 h-4 mr-2" />
                Browse Jobs
              </TabsTrigger>
              <TabsTrigger value="companies" className="flex items-center">
                <Building className="w-4 h-4 mr-2" />
                Companies
              </TabsTrigger>
            </TabsList>
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search jobs or companies..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <TabsContent value="jobs" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className={`lg:block ${filterOpen ? 'block' : 'hidden'}`}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800 sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold flex items-center">
                      <Filter className="w-4 h-4 mr-2" /> Filters
                    </h3>
                    <button 
                      className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      onClick={() => setFilterOpen(false)}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Location Filter */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Location</h4>
                      <div className="space-y-2">
                        {locations.map((location, idx) => (
                          <div key={idx} className="flex items-center">
                            <Checkbox id={`location-${idx}`} />
                            <label htmlFor={`location-${idx}`} className="ml-2 text-sm">
                              {location}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Job Type Filter */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Job Type</h4>
                      <div className="space-y-2">
                        {jobTypes.map((type, idx) => (
                          <div key={idx} className="flex items-center">
                            <Checkbox id={`type-${idx}`} />
                            <label htmlFor={`type-${idx}`} className="ml-2 text-sm">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Experience Level Filter */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Experience Level</h4>
                      <div className="space-y-2">
                        {experienceLevels.map((level, idx) => (
                          <div key={idx} className="flex items-center">
                            <Checkbox id={`level-${idx}`} />
                            <label htmlFor={`level-${idx}`} className="ml-2 text-sm">
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contribution Requirements Filter */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">GitHub Contributions</h4>
                      <Select defaultValue="any">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Minimum Required" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any amount</SelectItem>
                          <SelectItem value="100">100+ commits</SelectItem>
                          <SelectItem value="300">300+ commits</SelectItem>
                          <SelectItem value="500">500+ commits</SelectItem>
                          <SelectItem value="1000">1000+ commits</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Open Source Requirements Filter */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Open Source Experience</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Checkbox id="open-source-required" />
                          <label htmlFor="open-source-required" className="ml-2 text-sm">
                            Required
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox id="open-source-preferred" />
                          <label htmlFor="open-source-preferred" className="ml-2 text-sm">
                            Preferred
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox id="open-source-any" defaultChecked />
                          <label htmlFor="open-source-any" className="ml-2 text-sm">
                            Not specified
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                      <Button variant="outline" className="w-full">
                        Clear Filters
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Job Listings */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <button 
                      className="lg:hidden mr-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg"
                      onClick={() => setFilterOpen(!filterOpen)}
                    >
                      <Filter className="w-5 h-5" />
                    </button>
                    <span className="text-gray-600 dark:text-gray-400">Showing {jobListings.length} jobs</span>
                  </div>
                  
                  <Select defaultValue="recent">
                    <SelectTrigger className="w-40">
                      <span className="flex items-center text-sm">
                        <SelectValue placeholder="Sort By" />
                      </span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="salary-high">Highest Salary</SelectItem>
                      <SelectItem value="salary-low">Lowest Salary</SelectItem>
                      <SelectItem value="match">Best Match</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-6">
                  {jobListings.map((job) => (
                    <div 
                      key={job.id} 
                      className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="sm:flex justify-between">
                        <div className="flex-1">
                          <div className="flex items-start">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                              <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-1 hover:text-primary transition-colors">
                                <Link to="#">{job.title}</Link>
                              </h3>
                              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                                <Link to="#" className="hover:text-primary transition-colors">{job.company}</Link>
                                <span className="mx-2">•</span>
                                <span className="flex items-center text-sm">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {job.location}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800">
                                  {job.type}
                                </Badge>
                                <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800">
                                  {job.experience}
                                </Badge>
                                {job.skills.slice(0, 2).map((skill, idx) => (
                                  <Badge key={idx} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                    {skill}
                                  </Badge>
                                ))}
                                {job.skills.length > 2 && (
                                  <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800">
                                    +{job.skills.length - 2} more
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 sm:mt-0 sm:text-right">
                          <div className="text-lg font-semibold text-primary">{job.salary}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">{job.posted}</div>
                          <div className="flex sm:justify-end space-x-2">
                            <Button size="sm" variant="ghost" className="p-2">
                              <Bookmark className="w-5 h-5" />
                            </Button>
                            <Button size="sm" variant="ghost" className="p-2">
                              <Share className="w-5 h-5" />
                            </Button>
                            <Button size="sm">
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                        <p>{job.description}</p>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="text-sm font-medium mb-2">GitHub Contribution Requirements:</div>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center">
                            <GitCommit className="w-4 h-4 mr-2 text-green-600 dark:text-green-500" />
                            <span>{job.requiredContributions.commits} commits</span>
                          </div>
                          <div className="flex items-center">
                            <GitBranch className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500" />
                            <span>{job.requiredContributions.repos} repositories</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-500" />
                            <span>Open Source: {job.requiredContributions.openSource}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="outline">
                    Load More Jobs
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="companies" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyProfiles.map((company) => (
                <div 
                  key={company.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <Briefcase className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 hover:text-primary transition-colors">
                        <Link to="#">{company.name}</Link>
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {company.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Industry:</span>
                      <span className="font-medium">{company.industry}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Company size:</span>
                      <span className="font-medium">{company.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Founded:</span>
                      <span className="font-medium">{company.founded}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {company.description}
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="text-primary font-medium">
                      {company.hiring} open positions
                    </div>
                    <Button size="sm" variant="outline" className="flex items-center">
                      <span className="mr-1">View</span>
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline">
                View More Companies
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Jobs;
