import Link from "next/link";
import Image from "next/image";
import facebook from "@/public/facebook.svg";
import linkedin from "@/public/linkedin.svg";
import twitter from "@/public/twitter.svg";
import instagram from "@/public/instagram.svg";
import call from "@/public/call.svg";
import email from "@/public/email.svg";
import location from "@/public/location.svg";

export default function ContactSection() {
  return (
    <div className="flex flex-col lg:flex-row space-y-6 pb-5 lg:space-y-0">
      {/* Contact Information Section */}
      <div className="  bg-[#d5d8e0] p-6 rounded-l-lg flex-1">
        <h2 className=" gradient text-[28px] leading-[42px]  font-semibold">
          Contact Information
        </h2>
        <p className="text-[#6b7280] pt-2 mb-6">
          Say something to start a live chat!
        </p>
        <ul className="space-y-4 pt-10 text-sm">
          <li className="flex items-center pt-4 space-x-2">
            <Image
              src={call}
              alt="phone number"
              className="object-contain"
              layout="intrinsic"
            />
            <span>+1012 3456 789</span>
          </li>
          <li className="flex items-center pt-4 space-x-2">
            <Image
              src={email}
              alt="email"
              className="object-contain"
              layout="intrinsic"
            />
            <span>demo@gmail.com</span>
          </li>
          <li className="flex items-center pt-4 space-x-2">
            <Image
              src={location}
              alt="loaction"
              className="object-contain"
              layout="intrinsic"
            />
            <span>132 Dartmouth Street Boston, MA 02156</span>
          </li>
        </ul>

        <div className="flex  pt-10">
          <Link href="#">
            <span className="text-[#718096] hover:text-gray-300">
              <Image
                src={instagram}
                alt="social media"
                className="object-contain"
                layout="intrinsic"
              />
            </span>
          </Link>
          <Link href="#">
            <span className="text-[#718096] hover:text-gray-300">
              <Image
                src={linkedin}
                alt="social media"
                className="object-contain"
                layout="intrinsic"
              />
            </span>
          </Link>
          <Link href="#">
            <span className="text-[#718096] hover:text-gray-300">
              <Image
                src={twitter}
                alt="social media"
                className="object-contain"
                layout="intrinsic"
              />
            </span>
          </Link>
        </div>
      </div>

      {/* Contact Form Section */}
      <form className="bg-white p-6 rounded-r-lg shadow-md flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#374151]">
              Phone Number
            </label>
            <input
              type="tel"
              className="mt-1 block w-full p-2 border border-[#d1d5db] rounded-md focus:ring-[#3b82f6] focus:border-[#3b82f6]"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Select Subject
          </label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                className="h-4 w-4 text-[#2563eb]"
              />
              <span className="ml-2">General Inquiry</span>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium  text-[#374151]">
            Message
          </label>
          <textarea
            className="mt-1 block w-full p-2 border border-[#d1d5db] rounded-md focus:ring-[#3b82f6] focus:border-[#3b82f6]"
            rows="4"
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="mt-6  bg-[#2563eb] text-white py-2 px-2 rounded-md hover:bg-[#1d4ed8]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
