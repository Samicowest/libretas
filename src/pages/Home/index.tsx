import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Review from "./Review";
import NewsLetter from "../../utils/NewsLetter";
import Contact from "./Contact";
import { FrequentlyQuestion } from "../../utils/FrequentlyQuestion";
import Team from "./Team";
import VentureSection from "./VentureSection";
import BlogSection from "./BlogSection";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <BlogSection />
      <VentureSection />

      <Review />
      <Team />
      <FrequentlyQuestion />
      <Contact />
      <NewsLetter />
    </>
  );
};

export default Home;
