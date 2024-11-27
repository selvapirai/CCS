import React from 'react';

const CaseStudyCard = ({ image, title, description, bgColor }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-4 ${bgColor}`}
    >
      <div className="flex-shrink-0">
        <img src={image} alt={title} className="rounded-lg w-40 sm:w-48" />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-indigo-600 font-semibold hover:underline">
          Read more →
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard;
