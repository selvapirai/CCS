import React from "react";
import Image from "next/image";

const CaseStudyCard = ({ image, title, description, bgColor }) => {
  return (
    <div
      className={`p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-4 ${bgColor}`}
    >
      <div className="flex-shrink-0 w-full sm:w-auto">
        <Image
          src={image}
          alt={title}
          className="rounded-lg max-w-full h-auto"
          width={400}
          height={600}
        />
      </div>
      <div className="text-center sm:text-left pl-0 sm:pl-4 flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-[#2D3748] mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed mb-4">{description}</p>
        <div className="text-center sm:text-right">
          <a
            href="#"
            className="text-[#F76680] font-semibold hover:underline"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
