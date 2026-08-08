"use client";

import { motion } from "framer-motion";
import {
  MessageSquareText,
  Ruler,
  PencilRuler,
  Factory,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const process = [
  {
    step: "01",
    icon: MessageSquareText,
    title: "Corporate\nDiscussion",
  },
  {
    step: "02",
    icon: Ruler,
    title: "Site Visit &\nMeasurement",
  },
  {
    step: "03",
    icon: PencilRuler,
    title: "Design &\nApproval",
  },
  {
    step: "04",
    icon: Factory,
    title: "Manufacturing\nIn House",
  },
  {
    step: "05",
    icon: Wrench,
    title: "Installation by\nExperts",
  },
  {
    step: "06",
    icon: ShieldCheck,
    title: "After Sales\nSupport",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative bg-[#211A16] py-20 overflow-hidden">

      {/* Background Texture */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "(url('/check3.jpg')",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Gold Accent */}

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-28 h-[2px] bg-gradient-to-r from-transparent via-[#C89A56] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white">
            OUR SIMPLE PROCESS
          </h2>
        </motion.div>

      

        <div className="relative rounded-[28px] border border-[#6f5737]/60 bg-[#2A211C] overflow-hidden">

   

          <div className="absolute top-16 left-[8%] right-[8%] border-t border-dashed border-[#8d7248]/50" />

          <motion.div
            animate={{
              x: ["-100%", "120%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "linear",
            }}
            className="absolute top-[62px] h-[7px] w-402 bg-gradient-to-r from-transparent via-[#C89A56] to-transparent blur-sm"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: .6,
                    delay: index * .1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative flex flex-col items-center px-5 py-10 text-center"
                >

                

                  <div className="absolute top-5 h-28 w-28 rounded-full bg-[#C89A56]/0 blur-3xl transition-all duration-500 group-hover:bg-[#C89A56]/15" />

                  

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#C89A56]/50 bg-[#2A211C] transition-all duration-500 group-hover:scale-110 group-hover:border-[#C89A56]">

                    <Icon
                      size={26}
                      strokeWidth={1.7}
                      className="text-[#C89A56]"
                    />

                  </div>

                  {/* Step */}

                  <span className="mt-4 text-sm tracking-[2px] text-[#C89A56] font-semibold">
                    {item.step}
                  </span>

                  {/* Title */}

                  <h3 className="mt-3 whitespace-pre-line text-lg font-medium leading-7 text-white">
                    {item.title}
                  </h3>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}