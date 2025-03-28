
import React from 'react';
import MainLayout from '@/components/MainLayout';
import ScrollReveal from '@/components/ScrollReveal';

const OurMission: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <ScrollReveal>
          <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl mb-8">
              At DevConnect, we're building a more connected, transparent, and opportunity-rich ecosystem for developers worldwide.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Connecting the Global Developer Community</h2>
            <p>
              We believe that by connecting developers across geographical, cultural, and technical boundaries, we can foster a more collaborative and innovative tech industry. DevConnect serves as a platform where developers at all stages of their careers can connect, share knowledge, and grow together.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Recognizing Open Source Contributions</h2>
            <p>
              Open source software forms the backbone of modern technology, yet contributors often go unrecognized. We're changing that by highlighting and measuring the impact of open source contributions, giving developers the recognition they deserve for their work that benefits the entire tech community.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Democratizing Access to Opportunities</h2>
            <p>
              Talent is evenly distributed, but opportunity is not. DevConnect aims to level the playing field by connecting skilled developers with job opportunities, freelance work, and hackathons regardless of their location, background, or network. We believe that everyone deserves a fair chance to showcase their abilities and find work that matches their skills.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Building in Public</h2>
            <p>
              We're committed to transparency in our mission and operations. We share our progress, challenges, and learnings with the community, inviting feedback and contributions from users. By building in public, we ensure that DevConnect evolves in a direction that truly serves the needs of developers.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Join Us</h2>
            <p>
              Our mission is ambitious, and we can't achieve it alone. Whether you're a developer looking to connect with peers, a company seeking talent, or an open source contributor wanting recognition, we invite you to join the DevConnect community and help us build a better future for developers everywhere.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </MainLayout>
  );
};

export default OurMission;
