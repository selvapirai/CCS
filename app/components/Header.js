"use client";

import Link from "next/link";
import logo from "@/public/logo/Logo.png";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-10 shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Be Digital Logo"
            width={150}
            className="object-contain"
          />
        </div>

        <button
          className="lg:hidden flex items-center text-[#4b5563] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <ul
          className={`lg:flex items-center lg:space-x-10 space-y-6 gap-12 lg:space-y-0 absolute lg:static  left-0 right-0 p-6 lg:p-0 shadow-lg lg:shadow-none transform ${
            isMenuOpen ? "top-16 opacity-100" : "top-[-400px] opacity-1"
          } transition-all duration-300 ease-in-out`}
        >
          <li>
            <Link href="#home" className="text-[#4b5563] hover:text-[#9333ea]">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-[#4b5563] hover:text-[#9333ea]">
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-[#4b5563] hover:text-[#9333ea]"
            >
              Services
            </Link>
          </li>
          <li>
            <Link href="#blog" className="text-[#4b5563] hover:text-[#9333ea]">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#hire" className="text-[#4b5563] hover:text-[#9333ea]">
              Hire
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href="#contact"
              className="text-[#9333ea] py-2 px-4 rounded-md border border-[#9333ea] hover:bg-[#9333ea] hover:text-white"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
