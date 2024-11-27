import Image from "next/image";
import heroban from "@/image/Hero-Wrapper-image.png";
import BoxReveal from "../components/BoxReveal";

export default function Hero() {
  return (
    <section className="bg-white text-[#4A5568] pt-24 px-4 sm:px-8 lg:px-20 text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 pt-12 lg:pt-0">
            <BoxReveal width="100%" boxColor="#5046e6" duration={0.6}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Great <span className="text-[rgb(187,44,168)]">Product</span> Is{" "}
                <span className="text-[#39373b]">Built By Great</span>{" "}
                <span className="text-[#cf31ba]">Teams</span>
              </h1>
            </BoxReveal>

            <BoxReveal width="100%" boxColor="#5046e6" duration={0.6}>
              <p className="text-base text-[#4A5568] sm:text-lg mb-6">
                A modern way to transform your organization with Elite IT
                Talent. We are not just in the business of IT staffing; we are
                in the business of transforming your organization with top-tier
                IT professionals who drive innovation and success.
              </p>
            </BoxReveal>

            <BoxReveal width="fit-content" boxColor="#9333ea" duration={0.6}>
              <button className="bg-white text-[#9333ea] py-2 px-6 rounded-lg hover:bg-[#e5e7eb] transition">
                Let’s get started!
              </button>
            </BoxReveal>
          </div>
          {/* bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 */}
          {/* Image Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <Image
              src={heroban}
              alt="hero wallpaper"
              className="object-contain w-full max-w-[500px] mx-auto"
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
