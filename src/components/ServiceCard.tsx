
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
      {icon && (
        <div className="mb-4 text-endeavour-orange">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
