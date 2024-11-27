import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import Casestudy1 from "@/image/Case-study-1.png";
import Casestudy2 from "@/image/Case-study-2.png";
import Casestudy3 from "@/image/Case-study-3.png";

const caseStudies = [
  {
    image: Casestudy1,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    bgColor: "bg-[#F1F2FF]",
  },
  {
    image: Casestudy2,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    bgColor: "bg-[#F0FFF7]",
  },
  {
    image: Casestudy3,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    bgColor: "bg-[#FFF4F4]",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
        <h2 className="font-normal text-[28px] sm:text-[32px] text-center pb-1 md:text-[36px] leading-[38px] sm:leading-[45px]">
          Our Recent
          <br></br>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
            Case Studies
          </span>
        </h2>
        <div className="grid gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
        <div className="text-right mt-8">
          <a href="#" className="text-[#d833a1] font-semibold ">
            Read more case studies →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;