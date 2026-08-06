"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const industries = [
  {
    title: "Corporate Offices",
    image: "/corporateindus.jpg",
  },
  {
    title: "Hospitals",
    image: "/hospitalindus.avif",
  },
  {
    title: "Educational Institutes",
    image: "/indus1.jpg",
  },
  {
    title: "Hotels & Resorts",
    image: "/hotelsindus.webp",
  },
  {
    title: "Shopping Malls",
    image: "/mallsindus.webp",
  },
  {
    title: "Airports & Metro",
    image: "/metroindus.jpg",
  },
];

export default function Industries() {
  return (
    <section className="relative bg-[#221A16] py-9 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,154,86,.08),transparent_70%)]" />

      <div className="w-full mx-auto px-18 relative">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-[#C89A56]">
            Industries
          </span>

          <h2 className="mt-3 text-5xl text-white font-light">
            Industries We Serve
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            Delivering premium compact laminate washroom systems for
            diverse commercial, institutional and public infrastructure
            projects.
          </p>

        </div>

    <Swiper
  modules={[Autoplay, Pagination]}
  loop
  speed={800}
  spaceBetween={30}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
  className="pb-14"
>
  {industries.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="group relative h-[500px] overflow-hidden rounded-[28px] border border-white/10 bg-[#221A16]">

        {/* Image */}

        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Content */}

        <div className="absolute bottom-0 left-0 p-8">

          <span className="rounded-full border border-[#C89A56]/30 bg-black/30 px-4 py-2 text-xs uppercase tracking-[3px] text-[#C89A56] backdrop-blur-md">
            Industry
          </span>

          <h3 className="mt-5 text-3xl font-light text-white">
            {item.title}
          </h3>

          <p className="mt-3 text-white/70 leading-7">
            {item.desc}
          </p>

          <button className="mt-7 flex items-center gap-2 text-[#C89A56] font-medium transition-all group-hover:gap-4">
            Explore
            <ArrowUpRight size={18} />
          </button>

        </div>

        {/* Bottom Gold Line */}

        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C89A56] transition-all duration-500 group-hover:w-full" />

      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>

    </section>
  );
}