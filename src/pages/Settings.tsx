
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Lock, Bell, Eye, Globe, Shield, Code, Github } from 'lucide-react';
import MainLayout from '@/components/MainLayout';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [recruitingEnabled, setRecruitingEnabled] = useState(true);
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
          
          <Tabs defaultValue="profile" className="mb-8">
            <div className="border-b border-gray-200 dark:border-gray-800 mb-6">
              <TabsList className="flex space-x-8">
                <TabsTrigger value="profile" className="flex items-center pb-4">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="privacy" className="flex items-center pb-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center pb-4">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="connections" className="flex items-center pb-4">
                  <Github className="w-4 h-4 mr-2" />
                  Connections
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="profile" className="mt-0">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
                <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" defaultValue="Alex Johnson" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="alexdev" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="alex@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      className="min-h-32"
                      defaultValue="Full-stack developer passionate about open source and clean code. Contributing to React, TypeScript, and Node.js projects."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" defaultValue="TechCorp" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://alexdev.io" />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Profile</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy" className="mt-0">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
                <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Profile Visibility</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Control who can see your profile</p>
                    </div>
                    <Select defaultValue={profileVisibility} onValueChange={setProfileVisibility}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="followers">Followers Only</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Show Email Address</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Allow others to see your email</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Show Contribution Stats</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Display your GitHub contribution statistics</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Recruiter Visibility</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Allow companies to discover your profile</p>
                    </div>
                    <Switch checked={recruitingEnabled} onCheckedChange={setRecruitingEnabled} />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Privacy Settings</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-0">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
                <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Enable Notifications</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Receive in-app notifications</p>
                    </div>
                    <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates via email</p>
                    </div>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">Notification Types</h3>
                    <div className="space-y-3 pl-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notify-follows">New Followers</Label>
                        <Switch id="notify-follows" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notify-messages">Direct Messages</Label>
                        <Switch id="notify-messages" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notify-mentions">Mentions</Label>
                        <Switch id="notify-mentions" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notify-jobs">Job Opportunities</Label>
                        <Switch id="notify-jobs" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notify-rankings">Ranking Changes</Label>
                        <Switch id="notify-rankings" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Notification Settings</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="connections" className="mt-0">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-subtle p-6 border border-gray-100 dark:border-gray-800">
                <h2 className="text-xl font-semibold mb-4">GitHub Connection</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">GitHub Account</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Connected to @alexdev</p>
                    </div>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Data Sync Options</h3>
                    <div className="space-y-3 pl-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="sync-repos">Sync Public Repositories</Label>
                        <Switch id="sync-repos" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="sync-commits">Sync Commit History</Label>
                        <Switch id="sync-commits" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="sync-prs">Sync Pull Requests</Label>
                        <Switch id="sync-prs" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="sync-stars">Sync Starred Repositories</Label>
                        <Switch id="sync-stars" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Connection Settings</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
