"use client"; // Mark this as a Client Component

import Image from "next/image";
import innovation from "@/image/innovation.png";
import experience from "@/image/experience.png";
import client from "@/image/client.png";
import quality from "@/image/quality.png";
import expertise from "@/image/expertise.png";
import results from "@/image/results.png";

const services = [
  {
    title: "Innovation",
    description:
      "We stay at the forefront of technology trends and leverage the latest tools and techniques to deliver innovative solutions that give you a competitive edge. Our team is constantly learning and adapting to ensure we deliver the best outcomes for your business.",
    image: innovation,
  },
  {
    title: "Experience",
    description:
      "With years of industry experience, we have a deep understanding of the challenges businesses face and the solutions needed to overcome them. We bring this expertise to every project we undertake, ensuring exceptional results.",
    image: experience,
  },
  {
    title: "Client Focus",
    description:
      "We believe in building strong, long-term relationships with our clients. Your success is our success, and we are committed to providing personalized service, open communication, and prompt support to meet your evolving needs.",
    image: client,
  },
  {
    title: "Quality Assurance",
    description:
      "We have a rigorous quality assurance process in place to ensure that our deliverables meet the highest standards of quality and reliability. We take pride in our work and strive for excellence in everything we deliver to our clients.",
    image: quality,
  },
  {
    title: "Expertise and Insight",
    description:
      "With a wealth of industry experience and deep technical knowledge, our consultants provide valuable insights that help shape your strategy. We bring proven methodologies and best practices to every engagement.",
    image: expertise,
  },
  {
    title: "Results-Driven Solutions",
    description:
      "Our consulting services are designed to deliver measurable results. We focus on actionable solutions that solve real business problems, improving efficiency, driving growth, and ensuring a strong return on investment for your organization.",
    image: results,
  },
];

export default function OuraStrenghts() {
  return (
    <section id="services" className="py-16 bg-[#f9fafb]">
      <div className="w-[90%] mx-auto text-center">
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
        <h2 className="font-normal text-[28px] sm:text-[32px] md:text-[36px] leading-[38px] sm:leading-[45px]">
          Our design and{" "}<br></br>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
            development approach
          </span>
        </h2>

        {/* <p className="font-medium text-[16px] sm:text-[18px] lg:text-[20px] pt-2 leading-[24px] sm:leading-[26px] lg:leading-[30px] text-[#2D3748] text-center max-w-[600px] mx-auto">
          We are a leading provider of professional services, dedicated to
          delivering high-quality solutions to businesses of all sizes.
        </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 pt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 flex flex-col lg:flex-row rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="flex-shrink-0 w-full sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[80px] lg:h-[80px] mx-auto mb-4 lg:mb-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="pl-0 lg:pl-5 text-left">
                <h3 className="font-poppins text-lg text-[#2D3748] pt-2 font-semibold leading-[30px] transition-colors duration-300 hover:text-[#F76680]">
                  {service.title}
                </h3>
                <p className="text-[#718096] font-normal text-[14px] leading-[22px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
