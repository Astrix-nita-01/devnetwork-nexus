
import React from 'react';
import MainLayout from '@/components/MainLayout';
import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';

const ApiReference: React.FC = () => {
  const apiEndpoints = [
    {
      category: "users",
      endpoints: [
        {
          method: "GET",
          path: "/api/v1/users",
          description: "Get a list of users",
          params: [
            { name: "limit", type: "number", description: "Number of users to return (default: 10)", required: false },
            { name: "offset", type: "number", description: "Number of users to skip (default: 0)", required: false },
            { name: "sort", type: "string", description: "Sort field (e.g., 'createdAt')", required: false }
          ],
          returns: "Array of user objects",
          example: `
{
  "users": [
    {
      "id": "123",
      "username": "johndoe",
      "name": "John Doe",
      "avatarUrl": "https://api.devconnect.com/avatars/johndoe.png",
      "createdAt": "2023-01-15T00:00:00Z"
    },
    // ...more users
  ],
  "total": 140,
  "limit": 10,
  "offset": 0
}
          `
        },
        {
          method: "GET",
          path: "/api/v1/users/:id",
          description: "Get a specific user by ID",
          params: [
            { name: "id", type: "string", description: "User ID", required: true }
          ],
          returns: "User object",
          example: `
{
  "id": "123",
  "username": "johndoe",
  "name": "John Doe",
  "email": "john@example.com",
  "bio": "Full Stack Developer",
  "location": "San Francisco, CA",
  "avatarUrl": "https://api.devconnect.com/avatars/johndoe.png",
  "githubProfile": "johndoe",
  "websiteUrl": "https://johndoe.dev",
  "createdAt": "2023-01-15T00:00:00Z",
  "updatedAt": "2023-03-20T00:00:00Z"
}
          `
        },
        {
          method: "PUT",
          path: "/api/v1/users/:id",
          description: "Update a user",
          params: [
            { name: "id", type: "string", description: "User ID", required: true }
          ],
          body: "User object with fields to update",
          returns: "Updated user object",
          example: "Request body: { \"bio\": \"Senior Full Stack Developer\", \"location\": \"New York, NY\" }"
        }
      ]
    },
    {
      category: "analytics",
      endpoints: [
        {
          method: "GET",
          path: "/api/v1/analytics/activity/:userId",
          description: "Get user activity metrics",
          params: [
            { name: "userId", type: "string", description: "User ID", required: true },
            { name: "startDate", type: "date", description: "Start date (YYYY-MM-DD)", required: false },
            { name: "endDate", type: "date", description: "End date (YYYY-MM-DD)", required: false }
          ],
          returns: "User activity data",
          example: `
{
  "userId": "123",
  "commitCount": 287,
  "issuesOpened": 45,
  "pullRequestsOpened": 92,
  "pullRequestsReviewed": 63,
  "repositories": 15,
  "activityByDay": [
    { "date": "2023-04-01", "commits": 3, "prs": 1, "issues": 0 },
    // ... more daily data
  ]
}
          `
        },
        {
          method: "GET",
          path: "/api/v1/analytics/skills/:userId",
          description: "Get user skill assessment",
          params: [
            { name: "userId", type: "string", description: "User ID", required: true }
          ],
          returns: "User skills data",
          example: `
{
  "userId": "123",
  "skills": [
    { "name": "JavaScript", "level": 92, "commits": 450, "projects": 23 },
    { "name": "React", "level": 88, "commits": 320, "projects": 18 },
    { "name": "Node.js", "level": 79, "commits": 215, "projects": 12 },
    // ... more skills
  ]
}
          `
        }
      ]
    },
    {
      category: "jobs",
      endpoints: [
        {
          method: "GET",
          path: "/api/v1/jobs",
          description: "Get job listings",
          params: [
            { name: "limit", type: "number", description: "Number of jobs to return (default: 20)", required: false },
            { name: "offset", type: "number", description: "Number of jobs to skip (default: 0)", required: false },
            { name: "skills", type: "string", description: "Comma-separated list of skills", required: false },
            { name: "remote", type: "boolean", description: "Filter for remote jobs", required: false },
            { name: "location", type: "string", description: "Filter by location", required: false }
          ],
          returns: "Array of job listings",
          example: `
{
  "jobs": [
    {
      "id": "job123",
      "title": "Senior React Developer",
      "company": "TechCorp",
      "location": "San Francisco, CA",
      "remote": true,
      "description": "...",
      "skills": ["React", "TypeScript", "Node.js"],
      "salary": "$120k - $150k",
      "postedAt": "2023-04-15T00:00:00Z"
    },
    // ... more jobs
  ],
  "total": 148,
  "limit": 20,
  "offset": 0
}
          `
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">API Reference</h1>
            <p className="text-gray-400 text-lg mb-8">
              Comprehensive documentation for the DevConnect API
            </p>
            
            <Alert className="bg-gray-800 border-primary/50">
              <Info className="h-4 w-4" />
              <AlertDescription>
                All API requests require authentication. See the <a href="/docs/api/authentication" className="text-primary hover:underline">Authentication Guide</a> for details on how to obtain and use API keys.
              </AlertDescription>
            </Alert>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Tabs defaultValue="users" className="max-w-4xl mx-auto">
            <TabsList className="mb-8 grid grid-cols-3 bg-gray-800">
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="jobs">Jobs</TabsTrigger>
            </TabsList>
            
            {apiEndpoints.map(category => (
              <TabsContent key={category.category} value={category.category} className="space-y-8">
                {category.endpoints.map((endpoint, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                          <Badge className={
                            endpoint.method === "GET" 
                              ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30" 
                              : endpoint.method === "POST"
                              ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                              : endpoint.method === "PUT"
                              ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                              : "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                          }>
                            {endpoint.method}
                          </Badge>
                          <CardTitle className="font-mono text-lg">{endpoint.path}</CardTitle>
                        </div>
                        <p className="text-gray-400">{endpoint.description}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {endpoint.params && endpoint.params.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold text-gray-400 mb-2">Parameters</h3>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-gray-800">
                                  <th className="text-left py-2 px-4">Name</th>
                                  <th className="text-left py-2 px-4">Type</th>
                                  <th className="text-left py-2 px-4">Description</th>
                                  <th className="text-left py-2 px-4">Required</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.params.map(param => (
                                  <tr key={param.name} className="border-b border-gray-800">
                                    <td className="py-2 px-4 font-mono">{param.name}</td>
                                    <td className="py-2 px-4 font-mono text-blue-400">{param.type}</td>
                                    <td className="py-2 px-4">{param.description}</td>
                                    <td className="py-2 px-4">{param.required ? 'Yes' : 'No'}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                      
                      {endpoint.body && (
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold text-gray-400 mb-2">Request Body</h3>
                          <p>{endpoint.body}</p>
                        </div>
                      )}
                      
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Returns</h3>
                        <p>{endpoint.returns}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Example</h3>
                        <pre className="bg-gray-800 p-4 rounded-md font-mono text-xs overflow-x-auto">
                          {endpoint.example}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </ScrollReveal>
      </div>
    </MainLayout>
  );
};

export default ApiReference;
