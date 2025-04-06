
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, we would send this data to a server
    toast.success('Your message has been sent! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: ''
    });
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Connect With Us" 
        subtitle="Reach out to discuss how we can help your business grow."
      />
      
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Get In Touch" 
                subtitle="Fill out the form, and our team will get back to you within 24 hours."
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name*</Label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      placeholder="+1 (123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input 
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <select 
                    id="service"
                    name="service"
                    className="w-full rounded-md border border-gray-300 p-2"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="seo">SEO Solutions</option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="business-consulting">Business Consulting</option>
                    <option value="staff-augmentation">Staff Augmentation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message*</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-endeavour-orange hover:bg-endeavour-orange/90 text-white w-full md:w-auto">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 rounded-lg h-full">
                <SectionHeading 
                  title="Contact Information" 
                  subtitle="Connect with us through any of these channels."
                />
                
                <div className="space-y-8 mt-8">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <MapPin className="text-endeavour-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        Altimus Building,<br />
                        Ahmedabad, Gujarat 380015,<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Mail className="text-endeavour-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@endeavoursciences.in" className="hover:text-endeavour-orange">
                          info@endeavoursciences.in
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Phone className="text-endeavour-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        US: +1 (888) 123-4567<br />
                        UK: +44 20 1234 5678
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday to Friday: 9:00 AM - 6:00 PM (IST)<br />
                    Saturday: 9:00 AM - 1:00 PM (IST)<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 bg-gray-200">
              {/* In a real application, you would embed a Google Map here */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-600">Google Map would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services."
            alignment="center"
          />
          
          <div className="max-w-3xl mx-auto space-y-6 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What industries do you serve?</h3>
              <p className="text-gray-600">
                We serve a wide range of industries, including staffing agencies, accounting firms, technology companies, 
                healthcare organizations, and more. Our versatile solutions can be adapted to meet the needs of businesses 
                across various sectors.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How quickly can you start working on my project?</h3>
              <p className="text-gray-600">
                We typically start working on new projects within 1-2 weeks after finalizing the agreement. The exact 
                timeline depends on the complexity of your requirements and our current workload, but we always strive 
                to accommodate urgent needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Do you offer customized solutions?</h3>
              <p className="text-gray-600">
                Yes, we specialize in creating customized solutions tailored to your specific business needs. We work 
                closely with you to understand your requirements and develop strategies that align with your goals 
                and objectives.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What is your pricing structure?</h3>
              <p className="text-gray-600">
                Our pricing varies based on the scope of work, complexity, and duration of the project. We offer flexible 
                pricing models, including hourly rates, fixed project fees, and retainer agreements. Contact us for a 
                personalized quote based on your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Connect;
