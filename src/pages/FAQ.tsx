
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 min-h-[70vh]">
        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Find answers to commonly asked questions about our services and processes."
          alignment="center"
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-gray-800 px-4">
                What services does Endeavour Sciences Pvt Ltd offer?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600">
                Endeavour Sciences Pvt Ltd offers a wide range of services including offshore recruitment, accounts outsourcing, virtual workforce solutions, staff augmentation, business consulting, payroll services, and retained/contingency services. Our solutions are tailored to meet the specific needs of staffing agencies, accounting firms, and global enterprises.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-gray-800 px-4">
                How does the offshore recruitment process work?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600">
                Our offshore recruitment process begins with understanding your specific requirements. We then develop tailored strategies to ensure a steady influx of candidates. Our dedicated consultants handle all aspects from sourcing and screening to qualifying and engaging potential candidates, streamlining your recruitment operations while maintaining quality.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-gray-800 px-4">
                What makes Endeavour Sciences different from other consulting firms?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600">
                Endeavour Sciences stands out due to our flexible and scalable approach, deep industry experience, and exceptional leadership. We offer flexible contract terms, scalable delivery models, and a fluid approach to client relationships. Our extensive experience in offshore recruiting operations, combined with our empathy for the staffing industry, drives our innovative solutions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-gray-800 px-4">
                How do I get started with your services?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600">
                Getting started is simple. You can contact us through our website, submit a Request for Proposal (RFP), or call our team directly. We'll schedule an initial consultation to understand your business needs, after which our team will develop a customized proposal outlining our recommended solutions, timelines, and pricing.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-gray-800 px-4">
                What industries do you specialize in?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600">
                While we have expertise across multiple industries, we specialize in providing solutions for staffing agencies, accounting firms, and global enterprises. Our team has deep domain knowledge in recruitment, finance, and operational optimization, allowing us to deliver tailored solutions that address industry-specific challenges.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-gray-800 px-4">
                How do you ensure quality and security in your services?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600">
                Quality and security are paramount to our operations. We implement rigorous quality control processes, regular training programs, and strict adherence to best practices. For data security, we comply with international standards, utilize secure infrastructure, and implement strict access controls to protect our clients' sensitive information.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-medium text-gray-800 px-4">
                Can your services be customized to specific business needs?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600">
                Absolutely. Customization is at the core of our approach. We understand that each business has unique challenges and requirements. Our team works closely with clients to understand their specific needs and develops tailored solutions that align with their business objectives, processes, and culture.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
