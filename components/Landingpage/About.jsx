"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function AboutSection() {

const images = [
  "/hospitalindus.avif",
  "/corporateindus.jpg",
  "/hotelsindus.webp",

];


return (
  <section className="relative overflow-hidden bg-[#211A16] py-24">
    {/* Background Pattern */}

    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    />

    {/* Ambient Glow */}

    <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#C89A56]/10 blur-[140px]" />

    <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-[#C89A56]/10 blur-[140px]" />

    {/* Gold Line */}

    <div className="absolute left-1/2 top-0 h-[2px] w-36 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C89A56] to-transparent" />

    <div className="relative mx-auto w-full px-6 lg:px-18">

      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="inline-flex items-center rounded-full border border-[#C89A56]/40 bg-[#2A211C] px-5 py-2 text-sm font-medium uppercase tracking-[3px] text-[#C89A56]">
            About Megha System
          </span>

          <h2 className="mt-8 text-4xl font-light leading-tight text-white  ">
            About Us – Megha System | Leading Toilet Cubicle Manufacturer
          </h2>

          <div className="mt-5 h-[2px] w-24 bg-[#C89A56]" />

          <div className="mt-6 rounded-[30px] border border-[#6f5737]/60 bg-[#2A211C]/90 p-6 backdrop-blur-xl md:p-9">

            <p className="text-lg leading-9 text-white">
              Megha System is a trusted <strong>toilet cubicle manufacturer</strong>{" "}
              providing high-quality, durable, and modern restroom partition
              solutions for commercial, industrial, institutional, and public
              spaces. With a strong focus on innovation, quality, and customer
              satisfaction, we design and manufacture premium toilet cubicles
              that combine functionality, aesthetics, and long-lasting
              performance.
            </p>

          

            <p className="text-lg leading-9 text-white">
              Our expertise lies in delivering customized restroom solutions
              that meet the diverse requirements of architects, interior
              designers, builders, contractors, and organizations across
              various industries. From design consultation to manufacturing and
              installation, Megha System ensures a seamless experience with
              every project.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="group inline-flex h-14 items-center rounded-xl bg-[#C89A56] px-8 font-medium text-white hover:bg-[#b88742]"
              >
                Contact Us
                <ArrowUpRight className="ml-3 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/products"
                className="inline-flex h-14 items-center rounded-xl border border-[#C89A56]/40 px-8 font-medium text-white hover:bg-[#C89A56]/10"
              >
                Explore Products
              </Link>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="overflow-hidden rounded-[32px] border border-[#6f5737]/60 bg-[#2A211C] p-3">

            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              loop
              speed={900}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="aboutSwiper rounded-[24px]"
            >

              {images.map((image, index) => (

                <SwiperSlide key={index}>

                  <div className="relative h-[650px] overflow-hidden rounded-[24px]">

                    <Image
                      src={image}
                      alt={`About ${index + 1}`}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </motion.div>

      </div>

    </div>

  </section>
);
}