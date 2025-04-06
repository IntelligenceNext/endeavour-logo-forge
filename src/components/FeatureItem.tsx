
import React from 'react';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {title}
      </h3>
      <div className="w-12 h-1 bg-endeavour-orange mb-4"></div>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureItem;
