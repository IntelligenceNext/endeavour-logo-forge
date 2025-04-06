
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Award, Briefcase, BarChart3, Clock, Puzzle } from 'lucide-react';

const WhyUs = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Why Choose Endeavour Sciences Pvt Ltd" 
        subtitle="Discover what sets us apart and why we're the preferred choice for businesses worldwide."
      />
      
      {/* Top 3 Reasons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Top 3 reasons to choose Endeavour Sciences Pvt Ltd" 
            subtitle="We are your best choice when it comes to flexibility, experience, and leadership."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-endeavour-orange">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-endeavour-orange text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Flexible & Scalable
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="text-endeavour-orange mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Flexible contract terms that adapt to your business needs</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-endeavour-orange mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Scalable delivery model that grows with your requirements</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-endeavour-orange mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Fluid & versatile approach to client relationships</p>
                </li>
              </ul>
              <div className="mt-8">
                <Puzzle className="text-endeavour-orange" size={32} />
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-endeavour-orange">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-endeavour-orange text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Experience & Innovation
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="text-endeavour-orange mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Deep experience in offshore recruiting operations</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-endeavour-orange mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Empathy for the staffing industry drives our innovation</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-endeavour-orange mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Continuous research and development of new methodologies</p>
                </li>
              </ul>
              <div className="mt-8">
                <BarChart3 className="text-endeavour-orange" size={32} />
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-endeavour-orange">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-endeavour-orange text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                People & Leadership
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="text-endeavour-orange mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Pride in our talented teams and experienced leadership</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-endeavour-orange mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Design of best-in-class processes and methodologies</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-endeavour-orange mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Continuous training and skill development programs</p>
                </li>
              </ul>
              <div className="mt-8">
                <Users className="text-endeavour-orange" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Additional Benefits of Working With Us" 
            subtitle="More reasons why clients choose Endeavour Sciences Pvt Ltd as their trusted partner."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="mr-4">
                  <Clock className="text-endeavour-orange" size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Time & Cost Efficiency</h3>
                  <p className="text-gray-600">
                    Our solutions are designed to save you time and money without compromising on quality. 
                    We help you optimize your operations, reduce overhead, and improve efficiency, allowing you 
                    to focus on your core business objectives.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Reduce operational costs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Fast turnaround times</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Efficient resource allocation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="mr-4">
                  <Award className="text-endeavour-orange" size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Quality & Reliability</h3>
                  <p className="text-gray-600">
                    We are committed to delivering the highest quality services with consistency and reliability. 
                    Our rigorous quality control processes ensure that you receive exceptional results every time, 
                    building trust and confidence in our partnership.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Stringent quality control measures</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Consistent performance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Reliable service delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="mr-4">
                  <Briefcase className="text-endeavour-orange" size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Industry Expertise</h3>
                  <p className="text-gray-600">
                    Our team brings deep industry knowledge and specialized expertise to every project. 
                    We understand the unique challenges and opportunities in your industry, allowing us to 
                    provide targeted solutions that address your specific needs.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Specialized industry knowledge</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Tailored solutions for specific sectors</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Industry best practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="mr-4">
                  <Users className="text-endeavour-orange" size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Customer-Centric Approach</h3>
                  <p className="text-gray-600">
                    We put our clients at the center of everything we do. Our customer-centric approach ensures that 
                    we understand your needs, preferences, and goals, allowing us to deliver personalized solutions 
                    that exceed your expectations.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Personalized service</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Responsive communication</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-endeavour-orange mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-600">Long-term relationship focus</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Here's what some of our satisfied clients have to say about working with us."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg relative">
              <div className="text-5xl text-endeavour-orange/20 absolute top-4 left-4">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                Endeavour Sciences has been an invaluable partner in our digital marketing efforts. Their expertise and 
                strategic approach have significantly improved our online presence and lead generation.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Jane Smith</h4>
                  <p className="text-gray-500 text-sm">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg relative">
              <div className="text-5xl text-endeavour-orange/20 absolute top-4 left-4">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                The staff augmentation services provided by Endeavour Sciences have allowed us to quickly scale our team 
                with highly skilled professionals. Their rigorous selection process ensures we get top talent.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">John Davis</h4>
                  <p className="text-gray-500 text-sm">HR Manager, Global Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg relative">
              <div className="text-5xl text-endeavour-orange/20 absolute top-4 left-4">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                Working with Endeavour Sciences on our business consulting needs has been a game-changer. Their 
                strategic insights and practical solutions have helped us overcome challenges and drive growth.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">CEO, Innovative Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-endeavour-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience the Endeavour difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our tailored solutions can help your business achieve its goals.
          </p>
          <Button className="bg-white text-endeavour-orange hover:bg-gray-100">
            <a href="/connect">
              GET STARTED TODAY
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default WhyUs;
