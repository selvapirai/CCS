"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import Image from "next/image";
import adclipse from "@/public/logo/adclipse.png";
import clickorder from "@/public/logo/clickorder.png";
import pjc from "@/public/logo/pjc.png";
import sampath from "@/public/logo/sampath.png";
import techmate from "@/public/logo/techmate.png";
import "swiper/css";

const AutoCarousel = () => {
  const logos = [adclipse, clickorder, pjc, sampath, techmate];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-left mb-8">
        <h2 className=" font-medium text-[35px] text-[#44484e] ">
          Meet the People <br></br>
          <span className="block sm:inline text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1f2937] mb-2 leading-6 text-left">
            We are Working With
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500  mb-4"></div>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 1000,
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="">
            <Image
              src={logo}
              alt={`Logo ${index}`}
              width={150}
              height={150}
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AutoCarousel;
