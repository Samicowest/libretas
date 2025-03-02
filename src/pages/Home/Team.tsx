import { useRef, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles.css";

// Import required Swiper modules
import { Pagination, Navigation } from "swiper/modules";

// Import custom icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Zyre from "@/assets/team/zyre.jpeg";
import Samson from "@/assets/team/samson.jpeg";
import Chikezie from "@/assets/team/chikezie.jpeg";
import Nduka from "@/assets/team/nduka.jpg";
import Peter from "@/assets/team/peter.jpeg";
import Nwachukwu from "@/assets/team/nwachukwu.jpg";
import Anozie from "@/assets/team/anozie.jpg";

interface dataType {
  img: string;
  name: string;
  title: string;
}

const data: dataType[] = [
  { img: Zyre, name: "Zyre", title: "Product Manager" },
  { img: Samson, name: "Ewuru Samson Uzoma", title: "Lead Web Developer" },
  { img: Chikezie, name: "Chikezie Stanley Nnaemeka", title: "Asset Analyst" },
  {
    img: Peter,
    name: "Ofoegbu Peter Agunanna",
    title: "Community trading Educator",
  },
  { img: Anozie, name: "Anozie Joel", title: "Chief Technology" },
  {
    img: Nwachukwu,
    name: "Nwachukwu Victor",
    title: "Chief Designer and Public Relations",
  },
  { img: Nduka, name: "Nduka Patience", title: "Language Translator" },
];

export default function App() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance && swiperInstance.params) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleSlideChange = (swiper: any) => {
    if (prevRef.current) {
      prevRef.current.style.display = swiper.isBeginning ? "none" : "block";
    }
    if (nextRef.current) {
      nextRef.current.style.display = swiper.isEnd ? "none" : "block";
    }
  };

  return (
    <>
      <div className="bg-primary py-12 px-4 relative">
        <div className="text-2xl md:text-4xl text-center text-white font-bold py-8">
          TEAM
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // When the window is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // When the window is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // When the window is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((dat, index) => {
            return (
              <SwiperSlide key={index} className="py-8 px-4">
                <div className="group">
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={dat.img}
                      alt={dat.name}
                      className="w-full h-full cursor-pointer object-center object-cover"
                    />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-white">
                    {dat.name}
                  </h2>
                  <p className="text-sm text-white">{dat.title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom navigation buttons */}
        <div
          ref={prevRef}
          className="custom-prev"
          style={{
            position: "absolute",
            top: "50%",
            left: "15px",
            zIndex: 999999,
            cursor: "pointer",
            transform: "translateY(-50%)",
            display: "none", // Initially hidden
          }}
        >
          <FaArrowLeft size={24} color="#255ed8" />
        </div>
        <div
          ref={nextRef}
          className="custom-next"
          style={{
            position: "absolute",
            top: "50%",
            right: "15px",
            zIndex: 99999,
            cursor: "pointer",
            transform: "translateY(-50%)",
          }}
        >
          <FaArrowRight size={24} color="#225ed8" />
        </div>
      </div>
    </>
  );
}
