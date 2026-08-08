"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Award } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
const certificates = [
  {
    id: 1,
    title: "ISO 9001:2015",
    image: "/certificates/1.png",
  },
  {
    id: 2,
    title: "ISO 14001:2015",
    image: "/certificates/2.png",
  },
  {
    id: 3,
    title: "Quality Assurance",
    image: "/certificates/3.png",
  },
 
  {
    id: 5,
    title: "Industry Certification",
    image: "/certificates/5.png",
  },

  {
    id: 6,
    title: "Industry Certification",
    image: "/certificates/6.png",
  },


    {
    id: 7,
    title: "Industry Certification",
    image: "/certificates/7.png",
  },


    {
    id: 8,
    title: "Industry Certification",
    image: "/certificates/8.png",
  },


    {
    id: 9,
    title: "Industry Certification",
    image: "/certificates/9.png",
  },


   {
    id: 10,
    title: "Industry Certification",
    image: "/certificates/10.png",
  },

     {
    id: 11,
    title: "Industry Certification",
    image: "/certificates/11.png",
  },

     {
    id: 12,
    title: "Industry Certification",
    image: "/certificates/12.png",
  },

     {
    id: 13,
    title: "Industry Certification",
    image: "/certificates/13.png",
  },


];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (

<section
  style={{ backgroundImage: "url(/check5.jpg)" }}
  className="relative overflow-hidden bg-cover bg-center py-14"
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#241B16]/70" />

  {/* Optional Golden Gradient */}
 

  {/* Content */}
  <div className="relative z-10 mx-auto w-full px-18">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#C89A56]/30 bg-[#C89A56]/10 px-5 py-2 text-sm font-medium uppercase tracking-[3px] text-[#C89A56]">

            <Award size={18} />

            Certifications

          </span>

       <h2 className="mt-6 text-4xl font-light text-white md:text-5xl">
  Our Certificates & Accreditations
</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
  We follow internationally recognized quality standards and
  manufacturing practices to deliver premium toilet cubicles,
  compact laminate systems, and washroom solutions.
</p>

        </div>

        {/* Certificates */}

    <Swiper
  modules={[Autoplay, Navigation]}
  spaceBetween={25}
  slidesPerView={1}
  loop={true}
  navigation={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  }}
  className="mt-10"
>
  {certificates.map((item) => (
    <SwiperSlide key={item.id}>
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        onClick={() => setSelected(item)}
        className="group cursor-pointer overflow-hidden rounded-3xl border border-[#C89A56]/20 bg-white p-4 shadow-lg"
      >
        <div className="relative aspect-[6/4] overflow-hidden rounded-2xl">

          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain transition duration-500 group-hover:scale-105"
          />

        </div>

        <h3 className="mt-5 text-center text-lg font-semibold text-[#222] transition group-hover:text-[#C89A56]">
          {item.title}
        </h3>

      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>

      {/* Popup */}

      <AnimatePresence>

        {selected && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
          >

            <motion.div
              initial={{
                scale: .8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: .8,
                opacity: 0,
              }}
              transition={{
                duration: .35,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl overflow-hidden rounded-3xl bg-white"
            >

              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 z-10 rounded-full bg-white p-2 shadow-xl"
              >
                <X size={20} />
              </button>

              <div className="relative h-[80vh] w-[90vw] max-w-4xl">

                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-contain bg-white"
                />

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </section>
  );
}