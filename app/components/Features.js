"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { MagicCard } from "../components/MagicCard";
import "swiper/css";
import "swiper/css/pagination";

import itservice from "@/public/logo/it-services.svg";
import consulting from "@/public/logo/consulting-services.svg";

const services = [
  {
    title: "IT Services",
    description:
      "Our IT services optimize your technology infrastructure and ensure enhanced cybersecurity. We help your organization stay efficient in a rapidly evolving digital landscape.",
    image: itservice,
  },
  {
    title: "Consulting Services",
    description:
      "Our expert consulting services help guide your strategic decisions effectively. We offer insights into technology trends and best practices for sustainable growth.",
    image: consulting,
  },
  {
    title: "Software Development",
    description:
      "We provide customized software solutions tailored to meet your specific requirements. Our team uses the latest technologies to ensure a competitive edge for your business.",
    image: consulting,
  },
  {
    title: "Customer Service",
    description:
      "Our customer service solutions are designed to enhance client satisfaction and loyalty. We focus on building strong relationships for long-term success.",
    image: consulting,
  },
  {
    title: "Cloud Computing",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    image: consulting,
  },
  {
    title: "LLM Services",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    image: consulting,
  },
];

export default function Features() {
  return (
    <section id="services" className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto text-center">
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
        <h2 className="text-3xl font-bold mb-8">Services we offer</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <MagicCard
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                gradientColor="#F76680"
                gradientSize={300}
                gradientOpacity={0.5}
              >
                <div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-poppins text-lg text-[#2D3748] pt-2 font-semibold leading-[30px] text-left transition-colors duration-300 hover:text-[#F76680]">
                  {service.title}
                </h3>
                <p className="text-[#718096] font-normal text-[14px] leading-[22px] text-left">
                  {service.description}
                </p>
              </MagicCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
