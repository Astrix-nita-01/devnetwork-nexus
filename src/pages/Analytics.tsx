
import React, { useState } from 'react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Code, GitBranch, GitCommit, GitPullRequest, Star, ChevronDown, Calendar, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MainLayout from '@/components/MainLayout';

const Analytics = () => {
  // Mock data - this would come from GitHub API in the real app
  const commitActivity = [
    { name: 'Jan', value: 42 },
    { name: 'Feb', value: 57 },
    { name: 'Mar', value: 85 },
    { name: 'Apr', value: 73 },
    { name: 'May', value: 68 },
    { name: 'Jun', value: 92 },
    { name: 'Jul', value: 78 },
    { name: 'Aug', value: 110 },
    { name: 'Sep', value: 85 },
    { name: 'Oct', value: 95 },
    { name: 'Nov', value: 102 },
    { name: 'Dec', value: 114 },
  ];
  
  const languageData = [
    { name: 'JavaScript', value: 45, color: '#F7DF1E' },
    { name: 'TypeScript', value: 30, color: '#3178C6' },
    { name: 'Python', value: 15, color: '#3776AB' },
    { name: 'Go', value: 10, color: '#00ADD8' },
  ];
  
  const repositoryContributions = [
    { name: 'project-alpha', commits: 75, prs: 12, issues: 8 },
    { name: 'data-viz-library', commits: 92, prs: 18, issues: 14 },
    { name: 'api-toolkit', commits: 58, prs: 9, issues: 6 },
    { name: 'framework-core', commits: 127, prs: 24, issues: 19 },
    { name: 'style-system', commits: 64, prs: 11, issues: 7 },
  ];
  
  const weeklyActivity = Array.from({ length: 52 }, (_, i) => ({
    week: i + 1,
    commits: Math.floor(Math.random() * 30) + 5,
  }));
  
  const contributionTypeData = [
    { name: 'Commits', value: 850 },
    { name: 'Pull Requests', value: 87 },
    { name: 'Issues Opened', value: 64 },
    { name: 'Code Reviews', value: 124 },
  ];
  
  // For comparison feature
  const [compareUser, setCompareUser] = useState('');
  
  // For different comparison metrics
  const comparisonData = [
    { name: 'Commits', user: 850, compare: 720 },
    { name: 'PRs', user: 87, compare: 62 },
    { name: 'Issues', user: 64, compare: 88 },
    { name: 'Stars', user: 567, compare: 482 },
  ];
  
  // For activity heatmap (simplifying with weekly data instead of a full GitHub-style heatmap)
  const heatmapData = Array.from({ length: 52 }, (_, i) => ({
    week: `Week ${i + 1}`,
    activity: Math.floor(Math.random() * 10),
  }));
  
  // COLORS
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Developer Analytics</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your GitHub contributions and analyze your development activity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Compare with username..."
                className="w-full sm:w-64 pl-4 pr-10 py-2 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900"
                value={compareUser}
                onChange={(e) => setCompareUser(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
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
          </div>
        </div>
        
        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-subtle">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Commits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <GitCommit className="w-8 h-8 text-primary mr-3" />
                <div>
                  <div className="text-3xl font-bold">1,432</div>
                  <div className="text-xs text-green-600 dark:text-green-400 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>12% from last month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-subtle">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Pull Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <GitPullRequest className="w-8 h-8 text-blue-500 mr-3" />
                <div>
                  <div className="text-3xl font-bold">87</div>
                  <div className="text-xs text-green-600 dark:text-green-400 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>8% from last month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-subtle">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Issues Opened</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mr-3">!</div>
                <div>
                  <div className="text-3xl font-bold">64</div>
                  <div className="text-xs text-red-600 dark:text-red-400 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span>3% from last month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-subtle">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Stars Received</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Star className="w-8 h-8 text-amber-500 mr-3" />
                <div>
                  <div className="text-3xl font-bold">567</div>
                  <div className="text-xs text-green-600 dark:text-green-400 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>21% from last month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Contribution Activity Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-1">Contribution Activity</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Commits and pull requests over time</p>
            </div>
            <Select defaultValue="monthly">
              <SelectTrigger className="w-40 mt-4 sm:mt-0">
                <SelectValue placeholder="View" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={commitActivity}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eaeaea" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                    border: 'none' 
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0066FF" 
                  strokeWidth={3}
                  fill="url(#colorValue)" 
                  activeDot={{ r: 8, stroke: "#0066FF", strokeWidth: 2, fill: "#fff" }} 
                />
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0066FF" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#0066FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Language Distribution */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4">Language Distribution</h2>
            <div className="h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    labelLine={false}
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                      const radius = innerRadius + (outerRadius - innerRadius) * 1.35;
                      const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                      const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                      return (
                        <text 
                          x={x} 
                          y={y} 
                          textAnchor={x > cx ? 'start' : 'end'} 
                          dominantBaseline="central"
                          className="text-sm font-medium"
                        >
                          {`${(percent * 100).toFixed(0)}%`}
                        </text>
                      );
                    }}
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="p-3 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-100 dark:border-gray-700">
                            <p className="font-medium">{data.name}</p>
                            <p className="text-gray-600 dark:text-gray-400">{`${data.value}% of code`}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {languageData.map((lang, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: lang.color }}></div>
                  <span className="text-sm">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Repository Contributions */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4">Repository Contributions</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={repositoryContributions}
                  margin={{ top: 10, right: 0, left: 0, bottom: 20 }}
                  barSize={20}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" tickLine={false} axisLine={false} />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    tickLine={false} 
                    axisLine={false} 
                    width={100}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '8px', 
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                      border: 'none' 
                    }}
                  />
                  <Legend align="right" verticalAlign="top" />
                  <Bar dataKey="commits" fill="#0066FF" radius={[0, 4, 4, 0]} name="Commits" />
                  <Bar dataKey="prs" fill="#00C49F" radius={[0, 4, 4, 0]} name="PRs" />
                  <Bar dataKey="issues" fill="#FFBB28" radius={[0, 4, 4, 0]} name="Issues" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Contribution Heatmap (simplified) */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800 mb-8">
          <h2 className="text-xl font-semibold mb-6">Contribution Heatmap</h2>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={weeklyActivity}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis 
                  dataKey="week" 
                  tickLine={false} 
                  axisLine={false} 
                  tick={false}
                  label={{ value: 'Jan - Dec 2023', position: 'insideBottom', offset: -5 }}
                />
                <YAxis 
                  tickLine={false} 
                  axisLine={false} 
                  tick={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                    border: 'none' 
                  }}
                  formatter={(value) => [`${value} commits`, 'Activity']}
                  labelFormatter={(label) => `Week ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="commits" 
                  stroke="#0066FF" 
                  strokeWidth={2}
                  dot={{ stroke: '#0066FF', strokeWidth: 2, r: 1, fill: '#fff' }}
                  activeDot={{ r: 4, stroke: "#0066FF", strokeWidth: 2, fill: "#fff" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
            <span>Less</span>
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-3 h-3 rounded-sm" 
                  style={{ 
                    backgroundColor: `rgba(0, 102, 255, ${0.1 + i * 0.2})`,
                  }}
                ></div>
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
        
        {/* Developer Comparison */}
        {compareUser && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Developer Comparison</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Comparing with <span className="font-medium text-primary">{compareUser}</span>
                </p>
              </div>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <X className="w-5 h-5" onClick={() => setCompareUser('')} />
              </button>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={comparisonData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  barSize={30}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '8px', 
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                      border: 'none' 
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="user" fill="#0066FF" name="You" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="compare" fill="#82ca9d" name={compareUser} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
        
        {/* Contribution Types */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Contribution Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={contributionTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {contributionTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-4 flex flex-col justify-center">
              {contributionTypeData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-sm mr-3" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {((item.value / contributionTypeData.reduce((acc, curr) => acc + curr.value, 0)) * 100).toFixed(1)}% of total
                    </div>
                  </div>
                  <div className="text-lg font-bold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Analytics;
