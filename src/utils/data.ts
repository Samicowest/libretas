import Venture1 from "@/assets/venture1.png";
import Venture2 from "@/assets/venture2.png";
import Venture3 from "@/assets/venture3.png";

import Blog1 from "@/assets/blog1_orig.png";
import Blog2 from "@/assets/blog2_orig.png";
import Blog3 from "@/assets/blog3_orig.png";

import Img1 from "@/assets/hero3.jpg";
import Img2 from "@/assets/hero1.png";
import Img3 from "@/assets/hero2.png";
import { BlogPost, Company, HeroProps } from "@/types/types";

export const companiesData: Company[] = [
  {
    id: "1",
    name: "Micro Ventures Initiative Systems development",
    industry: "Technology",
    companyId: "283h9hf",
    description:
      "Specialists in Micro Systems for social impact and sustainable revenue through Tokenization.",
    employeeCount: 5,
    location: "Imo State, Nigeria",
    imageUrl: Venture1,
    link: "https://medium.com/@libertasalpha_10290/blockchain-technology-in-agricultural-real-estate-a-framework-for-enhanced-liquidity-and-089b6cd04029",
  },
  {
    id: "2",
    name: "Libertas Estate Agriculture X Blockchain",
    industry: "Real Estate",
    companyId: "143h9hf",
    description:
      "Tokenizing Agricultural Real-estate for borderless investment and capital liberation without Land ownership complexities",
    employeeCount: 8,
    location: "Imo State, Nigeria",
    imageUrl: Venture3,
    link: "https://medium.com/@libertasalpha_10290/introducing-micro-venture-initiative-mvi-tokenizing-sustainable-social-impact-72f9b67069bd",
  },
  {
    id: "3",
    name: "Tradex Decentralized Automation",
    industry: "Trading",
    companyId: "133h9ff",
    description:
      "Decentralized signal execution consensus for analysts and Libertas Alpha partners: bridging Liquidity and expertise.",
    employeeCount: 10,
    location: "Imo State, Nigeria",
    imageUrl: Venture2,
    link: "https://medium.com/@libertasalpha_10290/building-the-future-inside-libertas-alphas-vision-driven-ecosystem-ca0d5dbe3b6c",
  },
];

export const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: "The future inside Libertas Alpha",
    excerpt:
      "Understand the direction of our tech NGO and how you can participate now and in the future",
    author: "Chinedu Jamike",
    date: "Jan 31, 2025",
    readTime: "5 min read",
    imageUrl: Blog1,
    category: ["Agriculture", "Technology", "Blockchain", "Investment"],
    link: "https://medium.com/@libertasalpha_10290/building-the-future-inside-libertas-alphas-vision-driven-ecosystem-ca0d5dbe3b6c",
  },
  {
    id: 2,
    title: "Introducing Micro venture Initiative",
    excerpt:
      "Understand tokenization, a new frontier in community investment from Libertas Alpha.",
    author: "Chinedu Jamike",
    date: "Jan 30, 2025",
    readTime: "8 min read",
    imageUrl: Blog2,
    category: ["Blockchain", "Research", "Innovation", "Tech", "Ngo"],
    link: "https://medium.com/@libertasalpha_10290/introducing-micro-venture-initiative-mvi-tokenizing-sustainable-social-impact-72f9b67069bd",
  },
  {
    id: 3,
    title: "The future inside Libertas alpha",
    excerpt:
      "Understand the direction of our tech NGO and how you can participate now and in the future.",
    author: "Chinedu Jamike",
    date: "Jan 30, 2025",
    readTime: "8 min read",
    imageUrl: Blog3,
    category: ["Invest", "Tokenization", "Venture Capital", "Blockchain"],
    link: "https://medium.com/@libertasalpha_10290/blockchain-technology-in-agricultural-real-estate-a-framework-for-enhanced-liquidity-and-089b6cd04029",
  },
];

export const HeroData: HeroProps[] = [
  {
    title: "Congratulations you have found freedom",
    desc: `Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers" Article 19, universal declaration of human rights`,
    img: Img1,
  },
  {
    title: "We All Deserve Assets",
    desc: `Discover Research, platforms and communities for the development and access to Web Assets.`,
    img: Img2,
  },
  {
    title: "Spread the Word",
    desc: `Get Involved with Libertas Alpha directly: create value, become a partner in research and develop solutions.`,
    img: Img3,
  },
];
