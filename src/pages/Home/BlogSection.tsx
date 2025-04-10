import React from "react";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import { defaultPosts } from "@/utils/data";
import { BlogPost, BlogProps } from "@/types/types";

const postsBlog: BlogPost[] = defaultPosts;

const BlogSection: React.FC<BlogProps> = ({ posts = postsBlog }) => {
  // Use Intersection Observer to detect when the container is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the container is visible
  });

  // Array of box data
  const boxes = [
    {
      id: 1,
      color: "bg-blue-500",
      text: "Box 1",
      animation: "translate-x-full",
    }, // Slide from right
    {
      id: 2,
      color: "bg-green-500",
      text: "Box 2",
      animation: "translate-y-full",
    }, // Slide from bottom
    {
      id: 3,
      color: "bg-purple-500",
      text: "Box 3",
      animation: "-translate-x-full",
    }, // Slide from left
  ];

  return (
    <section
      id="research"
      className="py-16 bg-primary2 overflow-hidden w-full "
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Latest Research Posts
          </h2>
          <p className="mt-4 text-lg leading-8 text-primary font-bold">
            Stay updated with our latest research and development programs
          </p>
        </div>

        <div
          ref={ref}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <article
              key={post.id}
              className={`flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl  transform transition-all duration-1000 ease-in-out ${
                inView
                  ? "translate-x-0 translate-y-0 opacity-100"
                  : `${boxes[index].animation} opacity-0`
              }`}
            >
              <div className="h-48 w-full relative">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-4 ">
                <div className="flex w-full flex-wrap gap-1  ">
                  {post.category.map((data) => {
                    return (
                      <span className=" bg-slate-400 text-white px-2 py-1 m-1 rounded-full text-[8px] font-medium">
                        {data}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span class="text-[8px]">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-md font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>

                  <div className="border-t pt-4">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <span className="font-medium">Read more</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="md:hidden grid grid-cols-1 m gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className={`flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl  `}
            >
              <div className="h-48 w-full relative">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-4 ">
                <div className="flex w-full gap-1  ">
                  {post.category.map((data) => {
                    return (
                      <span className=" bg-slate-400 text-white px-2 py-1 m-1 rounded-full text-xs font-medium">
                        {data}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>

                  <div className="border-t pt-4">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <span className="font-medium">Read more</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
