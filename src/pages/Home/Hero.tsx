import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "@/styles.css";

import { Pagination, Autoplay } from "swiper/modules";
import { HeroData } from "@/utils/data";

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="relative w-full h-auto  lg:h-[95vh] bg-cover pt-14 bg-center py-4"
    >
      <div className="absolute inset-0 bg-primary  bg-opacity-95"></div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay]}
      >
        {HeroData.map((data) => (
          <SwiperSlide className="bg-transparent py-8">
            <div className="flex justify-between px-4  flex-col md:flex-row sm:px-8 lg:px-10 items-center gap-2 bg-transparent">
              <div className="text-left w-full md:w-[40%]">
                <h1 className="text-white text-3xl capitalize md:text-5xl font-bold">
                  {data.title}
                </h1>
                <p className="text-white text-md md:text-lg py-8 mt-4 leading-snug">
                  {data.desc}
                </p>
              </div>
              <div className="w-full md:w-[50%] p-8 ">
                <img src={data.img} className="w-[80%]" alt="Slide 1" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
