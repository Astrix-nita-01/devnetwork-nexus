
import React, { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bell, Heart, MessageSquare, Briefcase, User, Check } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Notifications = () => {
  // Mock notifications data
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      type: 'follow', 
      user: { name: 'John Doe', avatar: 'https://github.com/shadcn.png', username: 'johndoe' },
      message: 'started following you', 
      time: '2 hours ago', 
      read: false 
    },
    { 
      id: 2, 
      type: 'like', 
      user: { name: 'Emma Wilson', avatar: 'https://github.com/shadcn.png', username: 'emmawilson' },
      message: 'liked your post about React performance tips', 
      time: '3 hours ago', 
      read: false 
    },
    { 
      id: 3, 
      type: 'job', 
      user: { name: 'Google', avatar: '', username: 'google' },
      message: 'viewed your profile', 
      time: '1 day ago', 
      read: true 
    },
    { 
      id: 4, 
      type: 'message', 
      user: { name: 'Microsoft Recruiter', avatar: '', username: 'microsoft' },
      message: 'sent you a message about a job opportunity', 
      time: '2 days ago', 
      read: true 
    },
    { 
      id: 5, 
      type: 'follow', 
      user: { name: 'Sarah Parker', avatar: 'https://github.com/shadcn.png', username: 'sarahparker' },
      message: 'started following you', 
      time: '3 days ago', 
      read: true 
    },
    { 
      id: 6, 
      type: 'like', 
      user: { name: 'Alex Johnson', avatar: 'https://github.com/shadcn.png', username: 'alexj' },
      message: 'liked your comment on TypeScript best practices', 
      time: '4 days ago', 
      read: true 
    },
    { 
      id: 7, 
      type: 'job', 
      user: { name: 'Amazon', avatar: '', username: 'amazon' },
      message: 'invited you to apply for a Senior Developer position', 
      time: '5 days ago', 
      read: true 
    },
  ]);

  // Mark all as read
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true
    }));
    setNotifications(updatedNotifications);
  };

  // Mark a single notification as read
  const markAsRead = (id: number) => {
    const updatedNotifications = notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  // Count unread notifications
  const unreadCount = notifications.filter(n => !n.read).length;

  // Get icon based on notification type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'follow':
        return <User className="h-5 w-5 text-blue-500" />;
      case 'like':
        return <Heart className="h-5 w-5 text-red-500" />;
      case 'message':
        return <MessageSquare className="h-5 w-5 text-green-500" />;
      case 'job':
        return <Briefcase className="h-5 w-5 text-purple-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Notifications</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Stay updated with your network activity
            </p>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              <Check className="mr-2 h-4 w-4" /> Mark all as read
            </Button>
          )}
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" className="flex items-center justify-center">
              All
              {unreadCount > 0 && (
                <Badge variant="destructive" className="ml-2">{unreadCount}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="mentions">Mentions</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="follows">Follows</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="space-y-4">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 rounded-lg border flex items-start ${
                      notification.read 
                        ? 'bg-gray-900 border-gray-800' 
                        : 'bg-gray-800 border-gray-700'
                    }`}
                  >
                    <div className="mr-4">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={notification.user.avatar || `https://ui-avatars.com/api/?name=${notification.user.name}&background=random`} />
                            <AvatarFallback>{notification.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm">
                              <span className="font-semibold">{notification.user.name}</span> {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        </div>
                        {!notification.read && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => markAsRead(notification.id)}
                            className="ml-2 h-8 w-8 p-0"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20">
                  <Bell className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium">No notifications yet</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    When you have new notifications, they'll appear here
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="mentions" className="mt-6">
            <div className="text-center py-20">
              <MessageSquare className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium">No mentions yet</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                When someone mentions you, those notifications will appear here
              </p>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="mt-6">
            <div className="space-y-4">
              {notifications
                .filter(n => n.type === 'job')
                .map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 rounded-lg border flex items-start ${
                      notification.read 
                        ? 'bg-gray-900 border-gray-800' 
                        : 'bg-gray-800 border-gray-700'
                    }`}
                  >
                    <div className="mr-4">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={notification.user.avatar || `https://ui-avatars.com/api/?name=${notification.user.name}&background=random`} />
                            <AvatarFallback>{notification.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm">
                              <span className="font-semibold">{notification.user.name}</span> {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        </div>
                        {!notification.read && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => markAsRead(notification.id)}
                            className="ml-2 h-8 w-8 p-0"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="follows" className="mt-6">
            <div className="space-y-4">
              {notifications
                .filter(n => n.type === 'follow')
                .map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 rounded-lg border flex items-start ${
                      notification.read 
                        ? 'bg-gray-900 border-gray-800' 
                        : 'bg-gray-800 border-gray-700'
                    }`}
                  >
                    <div className="mr-4">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={notification.user.avatar || `https://ui-avatars.com/api/?name=${notification.user.name}&background=random`} />
                            <AvatarFallback>{notification.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm">
                              <span className="font-semibold">{notification.user.name}</span> {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        </div>
                        {!notification.read && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => markAsRead(notification.id)}
                            className="ml-2 h-8 w-8 p-0"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Notifications;
