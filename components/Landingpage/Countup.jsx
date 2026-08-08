"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const logos = [
 

 
   "/client2.png",
    "/image.jpg",
     "/client4.webp",
      "/client5.webp",
       "/client6.png",
 "/client7.png",
 "/radisson.jfif"

];

export default function ClienteleSlider() {
  return (
    <section className="relative overflow-hidden bg-[#2b1d13]">

      {/* Wood Texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
        }}
      />

      {/* Gold Top Line */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#C89A56] to-transparent" />

      <div className="relative max-w-7xl mx-auto py-8 px-10">

        <h3 className="text-center uppercase tracking-[3px] text-white/90 text-sm font-semibold mb-8">
          Trusted By Leading Brands
        </h3>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".client-next",
            prevEl: ".client-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-20 group cursor-pointer">

                <Image
                  src={logo}
                  alt=""
                  width={100}
                  height={70}
                  className="object-contain  group-hover:scale-110"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left Arrow */}

        <button className="client-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#C89A56] transition">
          ❮
        </button>

        {/* Right Arrow */}

        <button className="client-next absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#C89A56] transition">
          ❯
        </button>

        {/* Left Fade */}

        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#2b1d13] to-transparent z-10" />

        {/* Right Fade */}

        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#2b1d13] to-transparent z-10" />

      </div>
    </section>
  );
}