
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Briefcase, Users, Coffee, Heart } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Digital Marketing Specialist",
      location: "Ahmedabad, India",
      type: "Full-time",
      description: "We are looking for a Digital Marketing Specialist to design, implement, and monitor digital marketing campaigns that promote our company and products."
    },
    {
      title: "Recruitment Consultant",
      location: "Ahmedabad, India",
      type: "Full-time",
      description: "We're seeking an experienced Recruitment Consultant to join our team to help us identify and source top talent for our clients."
    },
    {
      title: "Business Development Manager",
      location: "Remote",
      type: "Full-time",
      description: "We are looking for a Business Development Manager to grow our client base and identify new business opportunities in the market."
    },
    {
      title: "Content Writer",
      location: "Ahmedabad, India",
      type: "Part-time",
      description: "We're looking for a talented Content Writer to create compelling content for our digital marketing campaigns and website."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Join Our Team" 
        subtitle="Explore exciting career opportunities at Endeavour Sciences Pvt Ltd."
      />
      
      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Why Work With Us" 
                subtitle="Discover what makes Endeavour Sciences Pvt Ltd a great place to work."
              />
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="text-endeavour-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Growth</h3>
                    <p className="text-gray-600">
                      We are committed to the professional development of our employees, offering training programs, 
                      skill development opportunities, and clear career advancement paths.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="text-endeavour-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Collaborative Culture</h3>
                    <p className="text-gray-600">
                      We foster a collaborative work environment where ideas are valued, teamwork is encouraged, 
                      and every team member has a voice in the decision-making process.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="text-endeavour-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Work-Life Balance</h3>
                    <p className="text-gray-600">
                      We believe in the importance of work-life balance, offering flexible work arrangements, 
                      competitive paid time off, and a supportive environment for our employees' well-being.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="text-endeavour-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Competitive Benefits</h3>
                    <p className="text-gray-600">
                      We offer competitive salaries, health insurance, retirement plans, and other benefits to 
                      ensure our employees feel valued and secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-endeavour-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-endeavour-orange" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Career Growth</h3>
                <p className="text-gray-600">
                  Clear paths for advancement and professional development.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-endeavour-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-endeavour-orange" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Great Team</h3>
                <p className="text-gray-600">
                  Collaborate with talented professionals in a supportive environment.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-endeavour-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="text-endeavour-orange" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Work-Life Balance</h3>
                <p className="text-gray-600">
                  Flexible work arrangements and supportive policies.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-endeavour-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-endeavour-orange" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Inclusive Culture</h3>
                <p className="text-gray-600">
                  Diverse and inclusive workplace where everyone belongs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Open Positions" 
            subtitle="Explore current job openings at Endeavour Sciences Pvt Ltd."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{position.title}</h3>
                    <p className="text-gray-500">{position.location} | {position.type}</p>
                  </div>
                  <div className="bg-endeavour-orange/10 py-1 px-3 rounded">
                    <span className="text-endeavour-orange text-sm font-medium">Open</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {position.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full border-endeavour-orange text-endeavour-orange hover:bg-endeavour-orange hover:text-white"
                >
                  View Details & Apply
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Application Process" 
            subtitle="Learn about our hiring process and what to expect when you apply."
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative border-l-2 border-endeavour-orange pl-8 pb-12">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-endeavour-orange"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">1. Application Submission</h3>
                <p className="text-gray-600">
                  Submit your application through our careers portal, including your resume and a cover letter 
                  highlighting your qualifications and interest in the position.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-2 border-endeavour-orange pl-8 pb-12">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-endeavour-orange"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">2. Initial Screening</h3>
                <p className="text-gray-600">
                  Our recruitment team reviews applications and conducts initial phone screenings with 
                  promising candidates to discuss qualifications and expectations.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-2 border-endeavour-orange pl-8 pb-12">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-endeavour-orange"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">3. Skills Assessment</h3>
                <p className="text-gray-600">
                  Depending on the role, candidates may be asked to complete a skills assessment, technical test, 
                  or work sample to demonstrate their abilities.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-2 border-endeavour-orange pl-8 pb-12">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-endeavour-orange"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">4. Interview Process</h3>
                <p className="text-gray-600">
                  Successful candidates are invited for interviews with the hiring manager and team members to 
                  discuss experience, skills, and cultural fit.
                </p>
              </div>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-endeavour-orange"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">5. Offer & Onboarding</h3>
                <p className="text-gray-600">
                  Selected candidates receive a job offer, and once accepted, our HR team guides them through 
                  the onboarding process to ensure a smooth transition into the company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-endeavour-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't see a position that fits your skills?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume, and we'll keep it on file for future opportunities.
          </p>
          <Button className="bg-white text-endeavour-orange hover:bg-gray-100">
            <a href="/connect">
              SUBMIT YOUR RESUME
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Careers;
