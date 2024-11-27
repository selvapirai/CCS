import Image from "next/image";

const TestimonialCard = ({ name, role, image, rating, isActive }) => {
  return (
    <div
      className={`flex flex-col items-center transition-transform duration-300 ${
        isActive ? "opacity-100 scale-105" : "opacity-50"
      } max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl`}
    >
      <Image
        src={image}
        alt={`${name}'s photo`}
        width={100}
        height={100}
        className="w-24 h-24 rounded-full border-4 border-purple-500 mb-4"
      />
      <h3 className="text-lg font-semibold text-center md:text-xl">{name}</h3>
      <p className="text-sm text-gray-500 text-center md:text-base">{role}</p>
      <div className="flex space-x-1 mt-2 justify-center">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-500">
              ★
            </span>
          ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
