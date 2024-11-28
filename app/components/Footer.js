import Link from "next/link";
import Image from "next/image";
import google from "@/image/google.png";
import logo from "@/public/logo/Logo.png";
import facebook from "@/public/facebook.svg";
import linkedin from "@/public/linkedin.svg";
import twitter from "@/public/twitter.svg";
import instagram from "@/public/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-[#718096] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Be Digital Logo"
            width={150}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/3 pt-6 lg:pt-16 mb-6 lg:mb-0">
            <p className="text-lg sm:text-base mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex space-x-4 mb-4">
              <Image
                src={google}
                alt="google wallpaper"
                className="object-contain w-full max-w-[150px] mx-auto"
              />
            </div>
          </div>

          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="font-semibold text-[#718096] mb-4">Links</h3>
            <ul className="space-y-1">
              {[
                "About Us",
                "Services",
                "Case Studies",
                "How it works",
                "Blog",
                "Careers",
                "Areas We Serve",
              ].map((item) => (
                <li key={item}>
                  <Link href={`#${item.replace(" ", "-").toLowerCase()}`}>
                    <span className="hover:text-[#d1d5db]">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/3 pt-6 lg:pt-0">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#718096] mb-2">
                  Contact Us
                </h3>
                <p className="text-sm mb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="text-sm">+923183356192</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#718096] mb-4">Follow Us</h3>
                <div className="flex">
                  <Link href="#">
                    <span className="text-[#718096] hover:text-gray-300">
                      <Image
                        src={facebook}
                        alt="social media"
                        className="object-contain"
                        layout="intrinsic"
                      />
                    </span>
                  </Link>
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
                        src={twitter}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm  text-[#718096] mt-6">
        <div className="w-full h-[1px] bg-[#b9b4c0] mb-2"></div>
        <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
