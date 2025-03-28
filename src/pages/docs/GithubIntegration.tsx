
import React from 'react';
import MainLayout from '@/components/MainLayout';
import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Code, 
  GitPullRequest, 
  GitMerge, 
  GitBranch, 
  ChevronRight, 
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GithubIntegration: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Github className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold">GitHub Integration</h1>
            </div>
            <p className="text-gray-400 text-lg">
              Connect your GitHub account to unlock powerful analytics, showcase your open source contributions, and discover opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="connect" className="mb-12">
            <TabsList className="mb-8 grid w-full grid-cols-3 bg-gray-800">
              <TabsTrigger value="connect">Connect</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="connect">
              <ScrollReveal delay={100}>
                <Card className="bg-gray-900 border-gray-800 mb-8">
                  <CardHeader>
                    <CardTitle>Connect Your GitHub Account</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p>
                      Connecting your GitHub account is simple and secure. We use GitHub's OAuth flow to 
                      ensure your credentials are never shared with us directly.
                    </p>
                    
                    <Alert className="bg-gray-800 border-blue-500/20">
                      <AlertCircle className="h-4 w-4 text-blue-400" />
                      <AlertDescription className="text-blue-100">
                        We only request read-only access to your public repositories by default. You can 
                        customize permissions during the authorization process.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="flex justify-center my-8">
                      <Button className="gap-2">
                        <Github className="h-5 w-5" />
                        Connect GitHub Account
                      </Button>
                    </div>
                    
                    <h3 className="text-xl font-bold mt-8 mb-4">Connection Steps</h3>
                    <ol className="space-y-4">
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold">Click the "Connect GitHub Account" button above</h4>
                          <p className="text-gray-400 mt-1">
                            You'll be redirected to GitHub's authorization page.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold">Review and approve the permissions</h4>
                          <p className="text-gray-400 mt-1">
                            Choose which repositories you want to include in your profile.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold">Return to DevConnect</h4>
                          <p className="text-gray-400 mt-1">
                            We'll start analyzing your repositories and building your profile.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </TabsContent>
            
            <TabsContent value="features">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScrollReveal delay={100} animation="slide-up">
                  <Card className="bg-gray-900 border-gray-800 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Code className="h-6 w-6 text-primary" />
                        <CardTitle>Repository Analytics</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">
                        Get detailed analytics on your repositories, including language usage, 
                        contribution patterns, and code quality metrics.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Language breakdown and trends</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Commit frequency and patterns</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Code quality metrics</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                
                <ScrollReveal delay={200} animation="slide-up">
                  <Card className="bg-gray-900 border-gray-800 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <GitPullRequest className="h-6 w-6 text-primary" />
                        <CardTitle>Contribution Tracking</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">
                        Track and showcase your open source contributions across the GitHub ecosystem.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Pull request history and status</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Issue participation and resolution</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Contribution timeline visualization</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                
                <ScrollReveal delay={300} animation="slide-up">
                  <Card className="bg-gray-900 border-gray-800 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <GitMerge className="h-6 w-6 text-primary" />
                        <CardTitle>Skill Inference</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">
                        We analyze your code to infer your skills and technologies you're 
                        experienced with.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Automatic technology detection</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Skill proficiency estimation</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Skill growth trajectory visualization</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                
                <ScrollReveal delay={400} animation="slide-up">
                  <Card className="bg-gray-900 border-gray-800 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <GitBranch className="h-6 w-6 text-primary" />
                        <CardTitle>Opportunity Matching</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">
                        Get matched with job opportunities and projects based on your GitHub activity.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Job recommendations based on skills</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Open source project suggestions</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span>Hackathon matches for your expertise</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </TabsContent>
            
            <TabsContent value="faq">
              <ScrollReveal delay={100}>
                <Card className="bg-gray-900 border-gray-800 mb-8">
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">What permissions do you request from GitHub?</h3>
                        <p className="text-gray-400">
                          By default, we only request read access to your public repositories. You can 
                          optionally grant access to private repositories if you want those included in 
                          your analytics.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">How often is my GitHub data updated?</h3>
                        <p className="text-gray-400">
                          We sync with GitHub every 24 hours by default. You can manually trigger a sync 
                          from your profile settings at any time.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Can I revoke access to my GitHub account?</h3>
                        <p className="text-gray-400">
                          Yes, you can disconnect your GitHub account at any time from your account settings. 
                          You can also revoke access directly from GitHub's authorized applications page.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Will other users be able to see my private repositories?</h3>
                        <p className="text-gray-400">
                          No. Even if you grant access to private repositories, we only use that data for 
                          generating your personal analytics. No information from private repositories is 
                          ever shared with other users or organizations.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Can I choose which repositories to include?</h3>
                        <p className="text-gray-400">
                          Yes, after connecting your GitHub account, you can select which repositories to 
                          include in your profile from the GitHub integration settings.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">How secure is my GitHub data?</h3>
                        <p className="text-gray-400">
                          We never store your GitHub credentials. We use OAuth tokens that can be revoked 
                          at any time. All data is encrypted at rest and in transit, and we follow industry 
                          best practices for security.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default GithubIntegration;
