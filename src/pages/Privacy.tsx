
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

const Privacy = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 min-h-[70vh]">
        <SectionHeading 
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your information."
          alignment="center"
        />
        
        <div className="max-w-4xl mx-auto mt-8 prose prose-gray">
          <h2>1. Information We Collect</h2>
          <p>
            Endeavour Sciences Pvt Ltd ("we," "us," "our") collects information that you provide directly to us, such as when you create an account, submit a form, or communicate with us. This may include:
          </p>
          <ul>
            <li>Contact information (name, email address, phone number, company name)</li>
            <li>Account credentials for our client portal</li>
            <li>Business requirements and project details</li>
            <li>Payment information for service fees</li>
          </ul>
          <p>
            We also automatically collect certain information when you visit our website, including:
          </p>
          <ul>
            <li>Log information (IP address, browser type, pages visited)</li>
            <li>Device information (hardware model, operating system)</li>
            <li>Cookies and similar technologies</li>
          </ul>
          
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative messages, updates, and marketing communications</li>
            <li>Respond to comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Protect against, identify, and prevent fraud and other illegal activity</li>
          </ul>
          
          <h2>3. Information Sharing</h2>
          <p>
            We may share your information with:
          </p>
          <ul>
            <li>Service providers who perform services on our behalf</li>
            <li>Professional advisors, such as lawyers and accountants</li>
            <li>Regulatory authorities, law enforcement agencies, or other third parties when required by law</li>
          </ul>
          <p>
            We will not sell or rent your personal information to third parties for marketing purposes.
          </p>
          
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2>5. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction or objection to certain processing activities</li>
            <li>Data portability</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided below.
          </p>
          
          <h2>6. Cookies</h2>
          <p>
            We use cookies and similar technologies to collect information about your browsing activities. You can manage cookie preferences through your browser settings, but disabling cookies may limit your ability to use certain features of our website.
          </p>
          
          <h2>7. International Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. We will ensure appropriate safeguards are in place to protect your information when transferred internationally.
          </p>
          
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on our website.
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>
            Endeavour Sciences Pvt Ltd<br />
            804, 8th Floor, Manjeera Trinity Corporate,<br />
            Kukatpally Housing Board Colony, Kukatpally,<br />
            Hyderabad, Telangana 500072<br />
            Email: info@endeavoursciences.in
          </p>
          
          <p className="font-medium mt-8">
            Last Updated: April 6, 2025
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
