import React from "react";
import Image from "next/image";

const BlogCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4  hover:shadow-xl transition  items-center sm:flex-row sm:items-start">
      {image ? (
        <div className=" w-full sm:w-auto">
          <Image
            src={image}
            alt={title}
            className="rounded-lg max-w-full h-auto"
            width={400}
            height={300}
          />
        </div>
      ) : (
        <div className="bg-gray-200 rounded-lg w-full sm:w-auto h-[300px] flex items-center justify-center">
          <span className="text-[#6b7280]">No Image Available</span>
        </div>
      )}
      <div className="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight pt-3 text-[#1f2937] break-words">
          {title}
        </h3>
        <p className="text-[#4b5563] mt-2">{description}</p>
        <div className="text-right gradient">
          <a href="#" className="font-bold text-[14px] mt-4 inline-block">
            Read more &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
