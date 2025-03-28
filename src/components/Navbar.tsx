
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Moon, 
  Bell, 
  Search as SearchIcon, 
  Menu, 
  X, 
  Briefcase,
  Code,
  Trophy,
  Info
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Feed', path: '/feed' },
    { name: 'Rankings', path: '/rankings' },
    { name: 'Analytics', path: '/analytics' },
  ];

  // Opportunities dropdown items
  const opportunitiesLinks = [
    { 
      name: 'Jobs', 
      path: '/jobs',
      description: 'Find full-time, part-time, and contract roles',
      icon: <Briefcase className="h-5 w-5 text-primary" />
    },
    { 
      name: 'Freelancing', 
      path: '/freelancing',
      description: 'Discover freelance projects and gigs',
      icon: <Code className="h-5 w-5 text-primary" />
    },
    { 
      name: 'Hackathons', 
      path: '/hackathons',
      description: 'Participate in coding competitions and events',
      icon: <Trophy className="h-5 w-5 text-primary" />
    },
    { 
      name: 'Learn More', 
      path: '/info/learn-more',
      description: 'Discover all the features of our platform',
      icon: <Info className="h-5 w-5 text-primary" />
    },
  ];

  // Mock notifications
  const notifications = [
    { id: 1, type: 'follow', message: 'John Doe started following you', time: '2 hours ago', read: false },
    { id: 2, type: 'like', message: 'Your post received 5 new likes', time: '3 hours ago', read: false },
    { id: 3, type: 'job', message: 'Google viewed your profile', time: '1 day ago', read: true },
    { id: 4, type: 'message', message: 'New message from Microsoft recruiter', time: '2 days ago', read: true },
  ];
  
  const unreadCount = notifications.filter(n => !n.read).length;

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would trigger a search request
    toast({
      title: "Search initiated",
      description: `Searching for: ${searchQuery}`,
    });
  };

  return (
    <header className="fixed w-full z-50 bg-gray-950 border-b border-gray-800 shadow-md backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary animate-pulse">DevConnect</span>
          </Link>

          {/* Search bar - desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center max-w-md flex-1 mx-4">
            <div className="relative w-full">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search developers, companies, or jobs..."
                className="pl-10 bg-gray-900 border-gray-700 focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" variant="default" className="ml-2 transition-all hover:scale-105">Search</Button>
          </form>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''} transition-all hover:text-primary hover:scale-105`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Opportunities dropdown using Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="transition-all hover:text-primary">Opportunities</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-gray-900 border-gray-700">
                    <ul className="grid w-[400px] gap-3 p-4">
                      {opportunitiesLinks.map((item) => (
                        <li key={item.path} className="transition-all hover:-translate-y-1 duration-200">
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2">
                                {item.icon}
                                <div className="text-sm font-medium">{item.name}</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Notifications dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-gray-900 border-gray-700">
                <DropdownMenuLabel className="flex justify-between items-center">
                  <span>Notifications</span>
                  <Link to="/notifications" className="text-xs text-primary hover:underline">
                    View all
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className={`cursor-default p-3 ${!notification.read ? 'bg-gray-800/30' : ''}`}>
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-medium">{notification.message}</p>
                        {!notification.read && (
                          <span className="h-2 w-2 bg-primary rounded-full"></span>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 mt-1">{notification.time}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User avatar dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="w-full">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="px-2 transition-all hover:rotate-180 duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 space-y-4 animate-fade-in">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 bg-gray-900 border-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" variant="default" className="ml-2">
                <SearchIcon className="h-4 w-4" />
              </Button>
            </form>
            
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-gray-800 text-white'
                      : 'hover:bg-gray-800 hover:translate-x-1'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Opportunities Section */}
              <div className="px-3 py-2 font-medium">Opportunities</div>
              {opportunitiesLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2 pl-6 rounded-md hover:bg-gray-800 text-gray-400 transition-all duration-200 hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                </Link>
              ))}
              
              <Link
                to="/notifications"
                className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Notifications</span>
                {unreadCount > 0 && (
                  <span className="bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </Link>
              <Link
                to="/settings"
                className="block px-3 py-2 rounded-md hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Settings
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
