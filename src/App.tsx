
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Rankings from "./pages/Rankings";
import Analytics from "./pages/Analytics";
import Jobs from "./pages/Jobs";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Notifications from "./pages/Notifications";
import Feed from "./pages/Feed";
import AllFeed from "./pages/feed/All";
import CodeFeed from "./pages/feed/Code";
import DiscussionFeed from "./pages/feed/Discussion";
import ProjectsFeed from "./pages/feed/Projects";
import JobsFeed from "./pages/feed/JobsFeed";
import CreatePost from "./pages/feed/CreatePost";
import Hackathons from "./pages/Hackathons";
import Freelancing from "./pages/Freelancing";
import OurMission from "./pages/info/OurMission";
import PrivacyPolicy from "./pages/info/PrivacyPolicy";
import TermsOfService from "./pages/info/TermsOfService";
import ContactUs from "./pages/info/ContactUs";
import Documentation from "./pages/docs/Documentation";
import ApiReference from "./pages/docs/ApiReference";
import GithubIntegration from "./pages/docs/GithubIntegration";
import Blog from "./pages/info/Blog";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Enable dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/feed/all" element={<AllFeed />} />
            <Route path="/feed/code" element={<CodeFeed />} />
            <Route path="/feed/discussion" element={<DiscussionFeed />} />
            <Route path="/feed/projects" element={<ProjectsFeed />} />
            <Route path="/feed/jobs" element={<JobsFeed />} />
            <Route path="/feed/create" element={<CreatePost />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/freelancing" element={<Freelancing />} />
            
            {/* Info pages */}
            <Route path="/info/our-mission" element={<OurMission />} />
            <Route path="/info/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/info/terms-of-service" element={<TermsOfService />} />
            <Route path="/info/contact-us" element={<ContactUs />} />
            <Route path="/info/blog" element={<Blog />} />
            
            {/* Documentation pages */}
            <Route path="/docs/documentation" element={<Documentation />} />
            <Route path="/docs/api-reference" element={<ApiReference />} />
            <Route path="/docs/github-integration" element={<GithubIntegration />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
