
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import SectionHeading from '@/components/SectionHeading';

const RFP = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 min-h-[70vh]">
        <SectionHeading 
          title="Request for Proposal (RFP)"
          subtitle="Tell us about your project requirements, and we'll create a tailored solution for your business."
          alignment="center"
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-medium">Full Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="font-medium">Company Name</label>
                <Input id="company" placeholder="Your company" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">Email Address</label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="font-medium">Phone Number</label>
                <Input id="phone" placeholder="Your phone number" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="services" className="font-medium">Services Required</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="service-1" className="rounded text-endeavour-orange" />
                  <label htmlFor="service-1">Offshore Recruitment</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="service-2" className="rounded text-endeavour-orange" />
                  <label htmlFor="service-2">Accounts Outsourcing</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="service-3" className="rounded text-endeavour-orange" />
                  <label htmlFor="service-3">Virtual Workforce</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="service-4" className="rounded text-endeavour-orange" />
                  <label htmlFor="service-4">Staff Augmentation</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="service-5" className="rounded text-endeavour-orange" />
                  <label htmlFor="service-5">Business Consulting</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="service-6" className="rounded text-endeavour-orange" />
                  <label htmlFor="service-6">Payroll Services</label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="timeline" className="font-medium">Project Timeline</label>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="immediate" name="timeline" className="text-endeavour-orange" />
                  <label htmlFor="immediate">Immediate</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="1-3months" name="timeline" className="text-endeavour-orange" />
                  <label htmlFor="1-3months">1-3 months</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="3-6months" name="timeline" className="text-endeavour-orange" />
                  <label htmlFor="3-6months">3-6 months</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="6months+" name="timeline" className="text-endeavour-orange" />
                  <label htmlFor="6months+">6+ months</label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="requirements" className="font-medium">Detailed Requirements</label>
              <Textarea 
                id="requirements" 
                placeholder="Please describe your project needs, goals, and any specific requirements." 
                className="min-h-32"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="budget" className="font-medium">Estimated Budget (Optional)</label>
              <Input id="budget" placeholder="Your budget range" />
            </div>
            
            <Button type="submit" className="w-full md:w-auto bg-endeavour-orange hover:bg-endeavour-orange/90">
              Submit Request
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RFP;
