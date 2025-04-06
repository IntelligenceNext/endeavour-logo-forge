
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Award, Heart, Users, Target } from 'lucide-react';

const OurStory = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="The Endeavour Sciences Pvt Ltd Story" 
        subtitle="Learn about our values, goals, and vision that drive our success."
      />
      
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Our Mission" />
              <p className="text-gray-600 mb-6">
                At Endeavour Sciences Pvt Ltd, our mission is to make a global impact in the outsourcing/offshoring 
                industry through innovation, excellence, and continuous improvement. We strive to provide 
                exceptional value to our clients while creating opportunities for growth and development for our team.
              </p>
              <div className="flex items-center space-x-3 text-endeavour-orange">
                <Target size={24} />
                <span className="font-medium">Driving excellence in everything we do</span>
              </div>
            </div>
            
            <div>
              <SectionHeading title="Our Vision" />
              <p className="text-gray-600 mb-6">
                We envision Endeavour Sciences Pvt Ltd as a catalyst for advancement in the industry, setting 
                new standards of quality and service. Our goal is to become the partner of choice for businesses 
                looking to optimize their operations and achieve sustainable growth.
              </p>
              <div className="flex items-center space-x-3 text-endeavour-green">
                <Heart size={24} />
                <span className="font-medium">Creating lasting partnerships built on trust</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Journey" 
            subtitle="How we've grown from a small consulting firm to a global player in the industry."
            alignment="center"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-endeavour-orange pl-8 pb-8">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-endeavour-orange"></div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-endeavour-orange mr-2" />
                  <span className="text-sm font-medium text-gray-500">2018</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Foundation</h3>
                <p className="text-gray-600">
                  Endeavour Sciences Pvt Ltd was founded with a vision to transform the offshore recruitment industry 
                  by providing innovative and cost-effective solutions.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-2 border-endeavour-orange pl-8 pb-8">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-endeavour-orange"></div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-endeavour-orange mr-2" />
                  <span className="text-sm font-medium text-gray-500">2020</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expansion</h3>
                <p className="text-gray-600">
                  We expanded our service offerings to include digital marketing, social media management, and business consulting, 
                  meeting the growing needs of our clients.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-2 border-endeavour-orange pl-8 pb-8">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-endeavour-orange"></div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-endeavour-orange mr-2" />
                  <span className="text-sm font-medium text-gray-500">2022</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  We established our presence in international markets, with clients from the US, UK, and Europe, 
                  marking our entry into the global consulting arena.
                </p>
              </div>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-endeavour-orange"></div>
              <div>
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-endeavour-orange mr-2" />
                  <span className="text-sm font-medium text-gray-500">Today</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation & Growth</h3>
                <p className="text-gray-600">
                  Today, we continue to innovate and grow, expanding our service portfolio and client base while 
                  maintaining our commitment to excellence and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do at Endeavour Sciences Pvt Ltd."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-endeavour-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-endeavour-orange" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the solutions we provide to the way we interact with our clients.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-endeavour-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-endeavour-orange" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of integrity in all our interactions, building trust and credibility with our clients.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-endeavour-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-endeavour-orange" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of collaboration, working closely with our clients to achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to partner with us?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about how Endeavour Sciences Pvt Ltd can help your business grow and succeed.
          </p>
          <Button className="bg-endeavour-orange hover:bg-endeavour-orange/90 text-white">
            <a href="/connect">
              GET IN TOUCH
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default OurStory;
