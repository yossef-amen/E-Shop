import React from "react";
import Heading from "../Shared/Heading";

// import images
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";
const BlogData = [
  {
    title: "How to Choose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, modi.",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
  },
  {
    title: "How to Choose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, modi.",
    published: "Jan 20, 2024 by Dilshad",
    image: Img2,
  },
  {
    title: "How to Choose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, modi.",
    published: "Jan 20, 2024 by Dilshad",
    image: Img3,
  },
];
const Blogs = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blogs Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card */}
          {BlogData.map((data) => (
            <div key={data}>
              {/* image section */}
              <div>
                <img src={data.image} alt="" />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold">{data.title}</p>
                <p>{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
