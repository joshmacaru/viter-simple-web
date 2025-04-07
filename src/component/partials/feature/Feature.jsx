import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;