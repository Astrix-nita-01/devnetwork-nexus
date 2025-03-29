
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Briefcase, Code, GraduationCap, Lightbulb, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Discover Opportunities</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore the various opportunities available to accelerate your career and connect with the global developer community.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full animate-fade-in">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="overview" className="text-sm md:text-base">Overview</TabsTrigger>
            <TabsTrigger value="jobs" className="text-sm md:text-base">Jobs</TabsTrigger>
            <TabsTrigger value="freelance" className="text-sm md:text-base">Freelancing</TabsTrigger>
            <TabsTrigger value="hackathons" className="text-sm md:text-base">Hackathons</TabsTrigger>
            <TabsTrigger value="learning" className="text-sm md:text-base">Learning</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Jobs",
                  description: "Find full-time, part-time, and contract roles with top companies",
                  icon: <Briefcase className="h-10 w-10 text-primary" />,
                  link: "/jobs"
                },
                {
                  title: "Freelancing",
                  description: "Discover freelance projects and gigs from clients worldwide",
                  icon: <Code className="h-10 w-10 text-primary" />,
                  link: "/freelancing"
                },
                {
                  title: "Hackathons",
                  description: "Participate in coding competitions and events to showcase your skills",
                  icon: <Trophy className="h-10 w-10 text-primary" />,
                  link: "/hackathons"
                },
                {
                  title: "Learning Resources",
                  description: "Access educational content to expand your knowledge and skills",
                  icon: <BookOpen className="h-10 w-10 text-primary" />,
                  link: "/feed"
                }
              ].map((item, index) => (
                <Card key={item.title} className="border border-gray-800 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                  <CardHeader>
                    <div className="mb-4">{item.icon}</div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={item.link}>
                      <Button variant="outline" className="w-full">Explore {item.title}</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="animate-fade-in">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Career Opportunities
                </CardTitle>
                <CardDescription>
                  Discover job opportunities tailored to your skills and experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Remote Jobs", description: "Find fully remote positions from companies worldwide" },
                    { title: "Local Opportunities", description: "Discover jobs near your location for in-person work" },
                    { title: "Internships", description: "Start your career with entry-level positions and internships" }
                  ].map((item, index) => (
                    <div key={item.title} className="p-6 border border-gray-800 rounded-lg animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                      <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Link to="/jobs">
                    <Button size="lg" className="animate-pulse-subtle">Browse All Jobs</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="freelance" className="animate-fade-in">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-primary" />
                  Freelance Projects
                </CardTitle>
                <CardDescription>
                  Find contract work and freelance opportunities across various technologies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Short-term Projects", description: "Quick tasks and projects that can be completed within days or weeks" },
                    { title: "Long-term Contracts", description: "Ongoing client relationships with stable workloads" },
                    { title: "Fixed-price Gigs", description: "Clearly defined projects with fixed payment terms" },
                    { title: "Hourly Contracts", description: "Flexible work arrangements paid on an hourly basis" }
                  ].map((item, index) => (
                    <div key={item.title} className="p-6 border border-gray-800 rounded-lg animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                      <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Link to="/freelancing">
                    <Button size="lg" className="animate-pulse-subtle">Find Freelance Work</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hackathons" className="animate-fade-in">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  Coding Competitions
                </CardTitle>
                <CardDescription>
                  Showcase your skills, win prizes, and network with other developers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Virtual Hackathons", description: "Participate remotely in coding competitions worldwide" },
                    { title: "In-person Events", description: "Attend physical hackathons and build with teams on-site" },
                    { title: "Sponsored Challenges", description: "Solve specific problems posed by industry leaders" }
                  ].map((item, index) => (
                    <div key={item.title} className="p-6 border border-gray-800 rounded-lg animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                      <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Link to="/hackathons">
                    <Button size="lg" className="animate-pulse-subtle">Explore Hackathons</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learning" className="animate-fade-in">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Educational Resources
                </CardTitle>
                <CardDescription>
                  Access tutorials, guides, and learning materials to enhance your skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Tutorials", description: "Step-by-step guides on various technologies and concepts" },
                    { title: "Webinars", description: "Live and recorded sessions from industry experts" },
                    { title: "Documentation", description: "Comprehensive reference materials and API guides" },
                    { title: "Community Forums", description: "Engage with other developers to solve problems" }
                  ].map((item, index) => (
                    <div key={item.title} className="p-6 border border-gray-800 rounded-lg animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                      <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Link to="/docs/documentation">
                    <Button size="lg" className="animate-pulse-subtle">Browse Learning Resources</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-block p-6 border border-gray-800 rounded-lg bg-gray-900/50 max-w-3xl mx-auto">
            <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Ready to take the next step?</h2>
            <p className="text-gray-400 mb-6">
              Join our vibrant community of developers and start exploring all the opportunities DevConnect has to offer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="animate-pulse-subtle">
                <Link to="/feed">Explore Feed</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/jobs">Browse Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LearnMore;
