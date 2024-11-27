import Image from "next/image";
import meeting from "@/image/develop-meet.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 gap-8">
      <div className="max-w-lg">
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500  mb-4"></div>
        <p className="text-[#a855f7] font-medium text-[34px]">
          Leading Companies Trust Us
        </p>
        <h1 className="text-2xl lg:text-4xl font-bold leading-tight mt-2">
          To <span className="text-black ">Develop Software</span>
        </h1>
        <p className="text-[#4b5563] mt-4 font-medium text-[18px] leading-[36px]">
          We <span className="text-[#be2b2bdc] ">add development capacity</span>{" "}
          to tech teams. Our value isn’t limited to building teams but is
          equally distributed across the project lifecycle. We are a custom
          software development company that guarantees the successful delivery
          of your project.
        </p>
        <button>
          <a
            href="#"
            className="mt-6 inline-flex items-center text-[#9333ea]  font-medium text-[16px] leading-[25px]"
          >
            See more Informations
            <span className="ml-2">→</span>
          </a>
        </button>
      </div>

      <div className="relative w-full lg:w-1/2 max-w-md rounded-xl overflow-hidden shadow-md">
        <Image
          src={meeting}
          alt="Team collaboration"
          width={500}
          height={300}
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
