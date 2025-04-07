
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import FeatureItem from '@/components/FeatureItem';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, BarChart3, Search, Share2, LineChart } from 'lucide-react';

const Home = () => {
  const services = [
    { 
      title: "Digital Marketing", 
      description: "Boost your online presence with tailored digital marketing strategies that drive traffic and conversions.",
      icon: <Share2 size={32} />
    },
    { 
      title: "Social Media Marketing", 
      description: "Engage with your audience across platforms and build a strong brand presence with our SMM expertise.",
      icon: <Users size={32} />
    },
    { 
      title: "SEO Solutions", 
      description: "Improve your search rankings and drive organic traffic with our data-driven SEO approaches.",
      icon: <Search size={32} />
    },
    { 
      title: "Campaign Management", 
      description: "Execute powerful multi-channel campaigns that deliver measurable results and ROI.",
      icon: <BarChart3 size={32} />
    },
    { 
      title: "Lead Generation", 
      description: "Generate high-quality leads that convert with our targeted lead generation strategies.",
      icon: <LineChart size={32} />
    },
    { 
      title: "Business Consulting", 
      description: "Optimize your operations and strategy with our expert business consulting services.",
      icon: <Briefcase size={32} />
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Digital Marketing & Social Media Solutions" 
        subtitle="Human Resource Solutions That Drive Business Success"
        buttonText="LEARN MORE"
        buttonLink="/solutions"
      />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="The Endeavour Sciences Pvt Ltd Story" 
                subtitle="Learn about our values, goals, and vision that drive us."
              />
              <p className="text-gray-600 mb-6">
                Endeavour Sciences Pvt Ltd is a consulting firm serving staffing agencies, accounting firms, and global enterprises. 
                We provide comprehensive solutions including offshore recruitment, accounts outsourcing, virtual workforce, 
                staff augmentation, business consulting, payroll services, and retained/contingency services.
              </p>
              <p className="text-gray-600 mb-6">
                Our competitive pricing, innovative approach, and industry expertise set us apart from the competition,
                making us the partner of choice for businesses looking to optimize their operations.
              </p>
              <Button 
                variant="outline" 
                className="border-endeavour-orange text-endeavour-orange hover:bg-endeavour-orange hover:text-white"
              >
                <a href="/our-story">
                  READ OUR STORY
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Team collaboration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="The Solutions, Services, and Strategies" 
            subtitle="Explore our mindful strategies and results-driven solutions."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-endeavour-orange hover:bg-endeavour-orange/90 text-white">
              <a href="/solutions">
                VIEW ALL SERVICES
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Game-changing Ideas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Game-changing ideas to accelerate your business performance" 
              />
              <p className="text-gray-600 mb-8">
                Unlock the growth potential of your business with our innovative solutions designed to transform 
                operations and drive success. Endeavour Sciences provides varied solutions for businesses, 
                helping them march towards growth and sustainability.
              </p>
              
              <div className="space-y-8">
                <FeatureItem 
                  title="Offshore Recruitment" 
                  description="We streamline recruiting operations with tailored strategies for candidate influx. Our dedicated consultants handle sourcing, screening, qualifying, and engaging candidates."
                />
                <FeatureItem 
                  title="Staff Augmentation" 
                  description="Quickly deliver talent with our custom approach including technical/behavioral screenings, skill assessments, and psychometric tests. We use innovative sourcing to find skilled, passionate candidates."
                />
                <FeatureItem 
                  title="Business Consulting" 
                  description="Transform your business by reimagining workflows for better outcomes. We support clients in accelerating bold, lasting results that drive growth and efficiency."
                />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Business growth" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Top 3 reasons to choose Endeavour Sciences Pvt Ltd" 
            subtitle="We are your best choice when it comes to flexibility, experience, and leadership."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible & Scalable</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Flexible contract terms</li>
                <li>• Scalable delivery model</li>
                <li>• Fluid & versatile client approach</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Experience & Innovation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Deep experience in offshore recruiting operations</li>
                <li>• Empathy for the staffing industry drives our innovation</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">People & Leadership</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Pride in our talented teams and leadership</li>
                <li>• Design of best-in-class processes and methodologies</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-endeavour-orange hover:bg-endeavour-orange/90 text-white">
              <a href="/why-us">
                LEARN WHY WE'RE DIFFERENT
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-endeavour-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with Endeavour Sciences and experience the difference our tailored solutions can make for your company.
          </p>
          <Button className="bg-white text-endeavour-orange hover:bg-gray-100">
            <a href="/connect">
              CONTACT US TODAY
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Home;
