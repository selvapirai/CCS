"use client";

import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";


const testimonials = [
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    image: "/testimonial-1.svg",
    rating: 4,
    quote:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    image: "/testimonial-2.svg",
    rating: 4,
    quote:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "Imran Khan",
    role: "Software Engineer",
    image: "/testimonial.svg",
    rating: 5,
    quote:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    image: "/testimonial-3.svg",
    rating: 4,
    quote:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    image: "/testimonial-4.svg",
    rating: 4,
    quote:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(testimonials.length / 2)
  );

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="w-full px-6 py-8 bg-gray-50 text-center">
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4 leading-tight md:leading-snug">
        Why Customers Love{" "}
        <span className="block text-purple-500">Working With Us</span>
      </h2>
      <blockquote className="text-lg md:text-xl text-gray-600 mb-6 mx-auto max-w-3xl">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4 md:mb-0">
            {/* <img
              src={testimonials[activeIndex].image}
              alt={`${testimonials[activeIndex].name} photo`}
              className="object-cover w-full h-full"
            /> */}
          </div>
          <p className="italic font-normal text-[18px] leading-[36px] text-center max-w-2xl">
            "{testimonials[activeIndex].quote}"
          </p>
        </div>
        <footer className="mt-4 text-sm font-semibold">
          {testimonials[activeIndex].name},{" "}
          <span className="text-gray-500">
            {testimonials[activeIndex].role}
          </span>
        </footer>
      </blockquote>

      <div className="flex justify-center space-x-4 mt-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            isActive={index === activeIndex}
          />
        ))}
      </div>

      <div className="flex justify-center space-x-4 md:space-x-6 mt-6">
        <button
          onClick={handlePrev}
          className="py-2 px-4 md:py-2 md:px-3 bg-[#a855f7] text-white rounded-full text-sm md:text-base"
          aria-label="Previous testimonial"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="py-2 px-4 md:py-2 md:px-3 bg-[#a855f7] text-white rounded-full text-sm md:text-base"
          aria-label="Next testimonial"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
