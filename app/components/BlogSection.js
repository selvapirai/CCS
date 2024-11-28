import BlogCard from "./BlogCard";
import Casestudy1 from "@/image/Case-study-1.png";
import Casestudy2 from "@/image/Case-study-2.png";
import Casestudy3 from "@/image/Case-study-3.png";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else.",
      image: Casestudy1,
      bgColor: "bg-[#F1F2FF]",
    },
    {
      id: 2,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else.",
      image: Casestudy2,
      bgColor: "bg-[#F0FFF7]",
    },
    {
      id: 3,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else.",
      image: Casestudy3,
      bgColor: "bg-[#FFF4F4]",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
        <h2 className="font-normal text-[28px] sm:text-[32px] text-center pb-1 md:text-[36px] leading-[38px] sm:leading-[45px]">
          Our Recent
          <br></br>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
            Blogs
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
              image={blog.image}
            />
          ))}
        </div>
        {/* <div className="text-right gradient mt-8">
          <a href="#" className=" font-semibold ">
            Read more case studies →
          </a>
        </div> */}
      </div>
    </div>
  );
}
