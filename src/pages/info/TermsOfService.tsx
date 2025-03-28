
import React from 'react';
import MainLayout from '@/components/MainLayout';
import ScrollReveal from '@/components/ScrollReveal';

const TermsOfService: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <ScrollReveal>
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl mb-8">
              Last Updated: May 1, 2023
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using DevConnect, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you must not access or use our services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Account Registration</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. User Content</h2>
            <p>
              Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content you post and the consequences of sharing it.
            </p>
            <p>
              By posting content, you grant DevConnect a non-exclusive, royalty-free license to use, display, reproduce, and distribute your content in connection with the service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Acceptable Use</h2>
            <p>
              You agree not to use the service:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>In any way that violates any applicable law or regulation</li>
              <li>To harass, abuse, or harm another person</li>
              <li>To impersonate any person or entity</li>
              <li>To infringe upon or violate our intellectual property rights or those of others</li>
              <li>To upload or transmit viruses or other malicious code</li>
              <li>To attempt to gain unauthorized access to our servers or networks</li>
              <li>To interfere with or disrupt the integrity or performance of the service</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are and will remain the exclusive property of DevConnect and its licensors. The service is protected by copyright, trademark, and other laws.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              In no event shall DevConnect, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or goodwill.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at terms@devconnect.com.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;
