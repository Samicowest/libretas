import Venture1 from "@/assets/venture1.png";
import Venture2 from "@/assets/venture2.png";
import Venture3 from "@/assets/venture3.png";
import Blog1 from "@/assets/Blog1.png";
import Blog2 from "@/assets/Blog2.png";
import Blog3 from "@/assets/Blog3.png";
import { BlogPost, Company } from "@/types/types";

export const companiesData: Company[] = [
  {
    id: "1",
    name: "Tech Innovators",
    industry: "Technology",
    companyId: "283h9hf",
    description:
      "Leading provider of innovative software solutions for enterprise businesses.",
    employeeCount: 5,
    location: "San Francisco, CA",
    imageUrl: Venture1,
  },
  {
    id: "2",
    name: "Green Energy Co",
    industry: "Renewable Energy",
    companyId: "143h9hf",
    description:
      "Pioneering sustainable energy solutions for a greener future.",
    employeeCount: 8,
    location: "Austin, TX",
    imageUrl: Venture3,
  },
  {
    id: "3",
    name: "Health Plus",
    industry: "Healthcare",
    companyId: "133h9ff",
    description:
      "Revolutionary healthcare technology improving patient care worldwide.",
    employeeCount: 10,
    location: "Boston, MA",
    imageUrl: Venture2,
  },
];

export const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt:
      "Learn how to set up and use TypeScript with React for better development experience.",
    author: "Jane Cooper",
    date: "Jan 31, 2025",
    readTime: "5 min read",
    imageUrl: Blog1,
    category: "Development",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt:
      "Discover advanced techniques and best practices for using Tailwind CSS in your projects.",
    author: "John Smith",
    date: "Jan 30, 2025",
    readTime: "8 min read",
    imageUrl: Blog2,
    category: "Design",
  },
  {
    id: 3,
    title: "Modern Web Development Trends",
    excerpt:
      "Explore the latest trends and technologies shaping the future of web development.",
    author: "Alice Johnson",
    date: "Jan 29, 2025",
    readTime: "6 min read",
    imageUrl: Blog3,
    category: "Trends",
  },
];
