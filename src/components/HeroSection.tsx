
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText = "LEARN MORE",
  buttonLink = "#",
  backgroundImage
}) => {
  return (
    <section className={`py-20 ${backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-r from-gray-50 to-gray-100'}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          
          {subtitle && (
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
              {subtitle}
            </h2>
          )}
          
          {buttonText && (
            <Button 
              asChild
              className="bg-endeavour-orange hover:bg-endeavour-orange/90 text-white px-8 py-6 h-auto text-lg font-semibold"
            >
              <a href={buttonLink}>
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
