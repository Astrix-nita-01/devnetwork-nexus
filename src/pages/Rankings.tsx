
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Trophy, GitBranch, Briefcase, Search, ChevronDown, Filter, Code, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MainLayout from '@/components/MainLayout';

const Rankings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for rankings
  const openSourceRankings = Array.from({ length: 20 }, (_, i) => ({
    rank: i + 1,
    name: `Developer ${i + 1}`,
    username: `dev${i + 1}`,
    country: ["US", "IN", "UK", "DE", "CA", "JP", "FR", "BR", "AU", "CN"][i % 10],
    score: 9500 - (i * 215),
    contributions: 850 - (i * 17),
    stars: 1250 - (i * 42),
  }));
  
  const companyRankings = Array.from({ length: 20 }, (_, i) => ({
    rank: i + 1,
    name: `Developer ${i + 1}`,
    username: `dev${i + 1}`,
    country: ["US", "IN", "UK", "DE", "CA", "JP", "FR", "BR", "AU", "CN"][i % 10],
    score: 8900 - (i * 198),
    contributions: 720 - (i * 14),
    companies: ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Airbnb", "Stripe", "Shopify", "Adobe"][i % 10],
  }));
  
  const getCountryFlag = (countryCode: string) => {
    // In a real app, you'd use a proper flag library or emoji flags
    const countryEmojis: {[key: string]: string} = {
      US: "🇺🇸", IN: "🇮🇳", UK: "🇬🇧", DE: "🇩🇪", CA: "🇨🇦", 
      JP: "🇯🇵", FR: "🇫🇷", BR: "🇧🇷", AU: "🇦🇺", CN: "🇨🇳"
    };
    return countryEmojis[countryCode] || "🌐";
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Developer Rankings</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover top developers ranked by their contributions to open-source projects and company repositories.
          </p>
        </div>
        
        <Tabs defaultValue="open-source" className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <TabsList>
              <TabsTrigger value="open-source" className="flex items-center">
                <GitBranch className="w-4 h-4 mr-2" />
                Open Source
              </TabsTrigger>
              <TabsTrigger value="company" className="flex items-center">
                <Briefcase className="w-4 h-4 mr-2" />
                Company
              </TabsTrigger>
            </TabsList>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-1 sm:w-60">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search developers..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-3">
                <Select defaultValue="6months">
                  <SelectTrigger className="w-40">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Time Period" />
                    </span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30days">Last 30 days</SelectItem>
                    <SelectItem value="6months">Last 6 months</SelectItem>
                    <SelectItem value="year">Last year</SelectItem>
                    <SelectItem value="alltime">All time</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <span className="flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Language" />
                    </span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Languages</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="typescript">TypeScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="go">Go</SelectItem>
                    <SelectItem value="rust">Rust</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <TabsContent value="open-source" className="mt-0">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800 text-left">
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 w-16">#</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Developer</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 w-16">Country</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 text-right">Score</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 text-right">Contributions</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 text-right">Stars</th>
                    </tr>
                  </thead>
                  <tbody>
                    {openSourceRankings.map((dev) => (
                      <tr 
                        key={dev.rank} 
                        className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className={`font-bold ${
                            dev.rank === 1 ? 'text-amber-500' : 
                            dev.rank === 2 ? 'text-gray-400' :
                            dev.rank === 3 ? 'text-amber-700' : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {dev.rank}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Link to={`/profile`} className="flex items-center group">
                            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                              <Users className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium group-hover:text-primary transition-colors">{dev.name}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">@{dev.username}</div>
                            </div>
                          </Link>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-xl" title={dev.country}>
                            {getCountryFlag(dev.country)}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-medium">{dev.score.toLocaleString()}</td>
                        <td className="px-6 py-4 text-right">{dev.contributions.toLocaleString()}</td>
                        <td className="px-6 py-4 text-right">{dev.stars.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 text-center">
                <Button variant="outline">
                  Load More Rankings
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="company" className="mt-0">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800 text-left">
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 w-16">#</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Developer</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 w-16">Country</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 text-right">Score</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 text-right">Contributions</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Top Company</th>
                    </tr>
                  </thead>
                  <tbody>
                    {companyRankings.map((dev) => (
                      <tr 
                        key={dev.rank} 
                        className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className={`font-bold ${
                            dev.rank === 1 ? 'text-amber-500' : 
                            dev.rank === 2 ? 'text-gray-400' :
                            dev.rank === 3 ? 'text-amber-700' : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {dev.rank}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Link to={`/profile`} className="flex items-center group">
                            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                              <Users className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium group-hover:text-primary transition-colors">{dev.name}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">@{dev.username}</div>
                            </div>
                          </Link>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-xl" title={dev.country}>
                            {getCountryFlag(dev.country)}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-medium">{dev.score.toLocaleString()}</td>
                        <td className="px-6 py-4 text-right">{dev.contributions.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            {dev.companies}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 text-center">
                <Button variant="outline">
                  Load More Rankings
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Rankings;
