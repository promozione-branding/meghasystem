"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import {  Plus, Minus } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Rajeev Sharma",
    designation: "Facility Manager, ICAT",
    image: "/testimonials/client1.webp",
    review:
      "Megha Systems delivered exceptional quality and installation for our corporate office project. Their team was professional, punctual and reliable.",
  },
  {
    name: "Amit Verma",
    designation: "Project Head, Tata Consulting",
    image: "/testimonials/client2.webp",
    review:
      "Outstanding workmanship and timely execution. The entire installation process was smooth and exceeded our expectations.",
  },
  {
    name: "Neha Kapoor",
    designation: "Procurement Manager, HSBC",
    image: "/testimonials/client3.webp",
    review:
      "Excellent product quality with elegant finish. Their after-sales support is equally impressive.",
  },
];




const faqs = [
  {
    question: "What material do you use for toilet cubicles?",
    answer:
      "We use premium Compact Laminate (HPL) panels with anodized aluminium hardware and stainless-steel fittings for maximum durability, moisture resistance and long service life.",
  },
  {
    question: "Can you customize cubicles as per our requirements?",
    answer:
      "Yes. Every project can be customized in terms of size, color, layout, hardware and accessories according to your architectural drawings.",
  },
  {
    question: "Do you provide installation across India?",
    answer:
      "Absolutely. Our experienced installation teams undertake projects across India with complete supervision and quality assurance.",
  },
  {
    question: "What is the delivery time?",
    answer:
      "Most standard projects are delivered within 2–4 weeks depending upon project size and customization.",
  },
  {
    question: "Do you provide after sales support?",
    answer:
      "Yes. We provide complete after-sales service including maintenance support and replacement of hardware whenever required.",
  },
];


export default function TestimonialFaq() {


  const [active, setActive] = useState(0);
  return (
    <section className="relative overflow-hidden bg-[#211A16] py-24">

      {/* Background Texture */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Gold Accent */}

      <div className="absolute left-1/2 top-0 h-[2px] w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C89A56] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Panel */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="rounded-[24px] border border-[#6f5737]/50 bg-[#2A211C] p-8 lg:p-10"
          >

            <span className="text-[#C89A56] uppercase tracking-[3px] text-sm">
              What Our Clients Say
            </span>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop
              className="testimonialSwiper mt-8"
            >

              {testimonials.map((item, index) => (

                <SwiperSlide key={index}>

                  <Quote
                    size={60}
                    fill="#C89A56"
                    className="text-[#C89A56]"
                  />

                  <p className="mt-6 text-lg leading-9 text-white/80">

                    {item.review}

                  </p>

                  <div className="mt-10 flex items-center gap-5">

                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#C89A56]/40">

                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />

                    </div>

                    <div>

                      <h4 className="text-xl font-medium text-white">

                        {item.name}

                      </h4>

                      <p className="mt-1 text-[#C89A56]">

                        {item.designation}

                      </p>

                    </div>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </motion.div>

          {/* FAQ Panel */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="rounded-[24px] border border-[#6f5737]/50 bg-[#2A211C] p-8 lg:p-10"
          >

            <span className="text-[#C89A56] uppercase tracking-[3px] text-sm">
              Frequently Asked Questions
            </span>

       <div className="mt-8 space-y-4">

  {faqs.map((faq, index) => {

    const open = active === index;

    return (

      <div
        key={index}
        className="overflow-hidden rounded-xl border border-[#6f5737]/50 bg-[#241D18]"
      >

        <button
          onClick={() => setActive(open ? -1 : index)}
          className="flex w-full items-center justify-between px-6 py-5 text-left transition-all duration-300 hover:bg-[#2d241d]"
        >

          <span className="text-lg text-white font-medium">

            {faq.question}

          </span>

          <motion.div
            animate={{
              rotate: open ? 180 : 0,
            }}
            transition={{
              duration: .3,
            }}
            className="text-[#C89A56]"
          >

            {open ? (
              <Minus size={22} />
            ) : (
              <Plus size={22} />
            )}

          </motion.div>

        </button>

        <AnimatePresence>

          {open && (

            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: .35,
              }}
              className="overflow-hidden"
            >

              <p className="px-6 pb-6 text-white/70 leading-8">

                {faq.answer}

              </p>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    );

  })}

</div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}