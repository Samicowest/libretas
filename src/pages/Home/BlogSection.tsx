import React from "react";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import { defaultPosts } from "@/utils/data";
import { BlogPost, BlogProps } from "@/types/types";

// TypeScript interfaces

const postsBlog: BlogPost[] = defaultPosts;

const BlogSection: React.FC<BlogProps> = ({ posts = postsBlog }) => {
  return (
    <section id="research" className="py-16 bg-primary2 ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Research Posts
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Stay updated with our latest research and development programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 w-full relative">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              <div className="flex-1 p-6">
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
                      href="#"
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
