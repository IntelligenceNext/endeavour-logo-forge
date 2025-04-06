
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Users, BarChart3, Share2, LineChart, Briefcase, Laptop, FileText, UserPlus, DollarSign, Building } from 'lucide-react';

const Solutions = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="The Solutions, Services, and Strategies" 
        subtitle="Explore our mindful strategies and results-driven solutions."
      />
      
      {/* Digital Marketing Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Digital Marketing & Social Media Solutions" 
            subtitle="Comprehensive strategies to boost your online presence and drive growth."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Share2 className="text-endeavour-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Marketing</h3>
                    <p className="text-gray-600">
                      Our digital marketing strategies are designed to increase your online visibility, drive traffic to your website, 
                      and convert visitors into customers. We use data-driven approaches to ensure maximum ROI.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Users className="text-endeavour-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Social Media Marketing (SMM)</h3>
                    <p className="text-gray-600">
                      We help you build a strong presence on social media platforms, engaging with your audience and 
                      creating compelling content that resonates with your target market.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Search className="text-endeavour-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Search Engine Optimization (SEO)</h3>
                    <p className="text-gray-600">
                      Our SEO strategies improve your search engine rankings, driving organic traffic to your website 
                      and enhancing your online visibility.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <BarChart3 className="text-endeavour-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Campaign Management</h3>
                    <p className="text-gray-600">
                      We manage your marketing campaigns across multiple channels, ensuring consistent messaging and 
                      tracking performance to optimize results.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <LineChart className="text-endeavour-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Lead Generation</h3>
                    <p className="text-gray-600">
                      Our lead generation strategies help you attract and convert potential customers, providing 
                      a steady stream of qualified leads for your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Digital Marketing" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Consulting Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Business Consulting & Staffing Solutions" 
            subtitle="Comprehensive services to optimize your operations and workforce."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-endeavour-orange mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Business Consulting</h3>
              <p className="text-gray-600 mb-4">
                Our expert consultants provide strategic guidance to help your business grow, optimize operations, 
                and overcome challenges. We work closely with you to develop tailored solutions that drive results.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-endeavour-orange text-endeavour-orange hover:bg-endeavour-orange hover:text-white"
                asChild
              >
                <a href="/connect">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-endeavour-orange mb-4">
                <UserPlus size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Staff Augmentation</h3>
              <p className="text-gray-600 mb-4">
                Quickly scale your team with skilled professionals who seamlessly integrate with your existing workforce. 
                Our staff augmentation services provide flexibility and expertise when you need it most.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-endeavour-orange text-endeavour-orange hover:bg-endeavour-orange hover:text-white"
                asChild
              >
                <a href="/connect">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-endeavour-orange mb-4">
                <Building size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Offshore Recruitment</h3>
              <p className="text-gray-600 mb-4">
                Our offshore recruitment services help you find and hire top talent from around the world, expanding your 
                candidate pool and reducing recruitment costs while maintaining quality.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-endeavour-orange text-endeavour-orange hover:bg-endeavour-orange hover:text-white"
                asChild
              >
                <a href="/connect">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Additional Services" 
            subtitle="More ways we can help your business thrive."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 text-center">
              <div className="w-16 h-16 bg-endeavour-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="text-endeavour-orange" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Virtual Workforce</h3>
              <p className="text-gray-600">
                Access a dedicated team of professionals working remotely to support your business needs.
              </p>
            </div>
            
            <div className="p-4 text-center">
              <div className="w-16 h-16 bg-endeavour-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-endeavour-orange" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Accounts Outsourcing</h3>
              <p className="text-gray-600">
                Streamline your accounting operations with our professional outsourcing services.
              </p>
            </div>
            
            <div className="p-4 text-center">
              <div className="w-16 h-16 bg-endeavour-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-endeavour-orange" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Payroll Services</h3>
              <p className="text-gray-600">
                Manage your payroll efficiently with our comprehensive payroll processing solutions.
              </p>
            </div>
            
            <div className="p-4 text-center">
              <div className="w-16 h-16 bg-endeavour-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-endeavour-orange" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Retained/Contingency Services</h3>
              <p className="text-gray-600">
                Flexible staffing solutions to meet your specific hiring needs and budget constraints.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-endeavour-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find the right solution for your business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized consultation. We'll analyze your needs and recommend the best solutions for your business.
          </p>
          <Button className="bg-white text-endeavour-orange hover:bg-gray-100">
            <a href="/connect">
              CONTACT US NOW
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Solutions;
