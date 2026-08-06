"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Neo",
    desc: "Economical & Elegant",
    image: "/1pro.avif",
  },
  {
    title: "Maxi",
    desc: "Strong & Stylish",
    image: "/2pro.jfif",
  },
  {
    title: "Maxi Pro",
    desc: "Premium Performance",
    image: "/3pro.jfif",
  },
  {
    title: "Duro",
    desc: "Heavy Duty Cubicles",
  image: "/1pro.avif",
  },
  {
    title: "Duro Pro",
    desc: "Extra Strength & Durability",
  image: "/mall-toilet-cubicle.png",
  },
  
];

export default function PremiumSeries() {
  return (
    <section className="relative overflow-hidden bg-[#241B16] py-20">

      {/* Background Texture */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Gold Accent */}

      <div className="absolute left-1/2 top-0 h-[2px] w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C89A56] to-transparent" />

      <div className="relative mx-auto w-full px-16">

        {/* Heading */}

        <div className="mb-14 text-center">

          <span className="text-sm uppercase tracking-[4px] text-[#C89A56]">
            Our Collection
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-light text-white">
            OUR PREMIUM CUBICLE SERIES
          </h2>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {products.map((item, index) => (

         <motion.div
  key={index}
  initial={{
    opacity: 0,
    y: 60,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  whileHover={{
    y: -12,
  }}
  transition={{
    duration: 0.6,
    delay: index * 0.08,
  }}
  viewport={{ once: true }}
  className="group relative overflow-hidden rounded-2xl border border-[#6f5737]/60 bg-[#2A211C] shadow-[0_15px_35px_rgba(0,0,0,.25)] hover:border-[#C89A56]/70 hover:shadow-[0_25px_60px_rgba(0,0,0,.45)] transition-all duration-500"
>
 

  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">

    <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#C89A56]/15 blur-[90px]" />

  </div>

  {/* Shine Animation */}

  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1300ms] group-hover:translate-x-full z-30"></span>

  {/* Image */}

  <div className="relative h-[230px] overflow-hidden">

    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Image Overlay */}

    

    {/* Gold Border */}

    <div className="absolute inset-0 border border-transparent group-hover:border-[#C89A56]/30 rounded-t-2xl transition-all duration-500" />

  </div>

  {/* Content */}

  <div className="relative px-5 py-6 text-center">

    <h3 className="text-[30px] font-light text-white transition-colors duration-500 group-hover:text-[#E6D2A8]">
      {item.title}
    </h3>

    <p className="mt-2 min-h-[50px] text-[15px] leading-7 text-white/65">
      {item.desc}
    </p>

    {/* Explore */}

    <button className="mt-6 inline-flex items-center gap-2 font-medium text-[#C89A56] transition-all duration-300">

      <span className="relative">

        Explore

        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#C89A56] transition-all duration-500 group-hover:w-full"></span>

      </span>

      <ArrowRight
        size={18}
        className="transition-all duration-300 group-hover:translate-x-2"
      />

    </button>

  </div>

  {/* Bottom Gold Line */}

  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C89A56] transition-all duration-500 group-hover:w-full"></div>

</motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}