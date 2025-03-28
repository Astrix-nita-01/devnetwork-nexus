
import React from 'react';
import MainLayout from '@/components/MainLayout';
import ScrollReveal from '@/components/ScrollReveal';

const PrivacyPolicy: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <ScrollReveal>
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl mb-8">
              Last Updated: May 1, 2023
            </p>
            
            <p>
              At DevConnect, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Data</h3>
            <p>
              We may collect personal identification information, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>GitHub username and public activity</li>
              <li>Employment information</li>
              <li>Skills and technologies you work with</li>
              <li>Content and information you share on our platform</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Usage Data</h3>
            <p>
              We may also collect information on how you access and use our services:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address and browser information</li>
              <li>Pages visited and features used</li>
              <li>Time spent on pages</li>
              <li>Referring websites</li>
              <li>Other analytical data</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the collected data for various purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To provide personalized content and job recommendations</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
            <p>
              We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your personal data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access, update, or delete your information</li>
              <li>The right to rectification</li>
              <li>The right to object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@devconnect.com.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
