
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

const Terms = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 min-h-[70vh]">
        <SectionHeading 
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before using our services."
          alignment="center"
        />
        
        <div className="max-w-4xl mx-auto mt-8 prose prose-gray">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services of Endeavour Sciences Pvt Ltd ("Company," "we," "us," "our"), you accept and agree to be bound by the terms and conditions outlined in this agreement. If you do not agree to abide by these terms, please do not use our services.
          </p>
          
          <h2>2. Services</h2>
          <p>
            Endeavour Sciences Pvt Ltd provides business consulting, staffing, recruitment, accounting, and digital marketing services as described on our website. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
          </p>
          
          <h2>3. Client Responsibilities</h2>
          <p>
            Clients agree to provide accurate and complete information necessary for service delivery. Clients are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.
          </p>
          
          <h2>4. Payment Terms</h2>
          <p>
            Payment terms will be specified in individual service agreements. Unless otherwise stated, invoices are due within 30 days of issuance. Late payments may be subject to additional fees. All fees are non-refundable unless explicitly stated otherwise.
          </p>
          
          <h2>5. Intellectual Property</h2>
          <p>
            All content, materials, and deliverables provided by Endeavour Sciences Pvt Ltd remain our property until full payment is received, at which point specified deliverables will transfer to the client as outlined in the service agreement. Our company name, logo, and website content are protected by intellectual property laws.
          </p>
          
          <h2>6. Confidentiality</h2>
          <p>
            We maintain strict confidentiality regarding client information. However, clients acknowledge that information transmitted over the internet cannot be guaranteed to be completely secure. Each party agrees to protect the other's confidential information with reasonable care.
          </p>
          
          <h2>7. Limitation of Liability</h2>
          <p>
            Endeavour Sciences Pvt Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of our services. Our total liability shall not exceed the amounts paid by the client for the services in question.
          </p>
          
          <h2>8. Indemnification</h2>
          <p>
            Clients agree to indemnify and hold harmless Endeavour Sciences Pvt Ltd, its employees, and affiliates from any claims, damages, or expenses arising from the client's use of our services or violation of these terms.
          </p>
          
          <h2>9. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
          </p>
          
          <h2>10. Modifications to Terms</h2>
          <p>
            Endeavour Sciences Pvt Ltd reserves the right to update these terms at any time. Continued use of our services after such changes constitutes acceptance of the new terms.
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

export default Terms;
