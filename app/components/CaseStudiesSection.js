import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const caseStudies = [
  {
    image: '/images/case1.png',
    title: 'Website Design for SCFC Canada',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel suscipit metus.',
    bgColor: 'bg-caseBlue',
  },
  {
    image: '/images/case2.png',
    title: 'Website Design for SCFC Canada',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel suscipit metus.',
    bgColor: 'bg-caseGreen',
  },
  {
    image: '/images/case3.png',
    title: 'Website Design for SCFC Canada',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel suscipit metus.',
    bgColor: 'bg-casePink',
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Recent Case Studies
        </h2>
        <div className="grid gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Read more case studies →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
