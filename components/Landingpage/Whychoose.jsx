"use client";

import { motion } from "framer-motion";
import {
  Layers3,
  PencilRuler,
  Wrench,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Layers3,
    title: "Premium\nMaterials",
    desc: "High quality compact laminates & accessories.",
  },
  {
    icon: PencilRuler,
    title: "Custom\nManufacturing",
    desc: "Tailor-made solutions as per your project requirements.",
  },
  {
    icon: Wrench,
    title: "Fast\nInstallation",
    desc: "Expert team for quick and hassle-free installation.",
  },
  {
    icon: MapPin,
    title: "PAN India\nSupport",
    desc: "Strong support network across India for timely service.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#211A16] py-20">

      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
        }}
     
      />

      {/* Gold Accent */}
      <div className="absolute left-1/2 top-0 h-[2px] w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C89A56] to-transparent" />

      <div className="relative mx-auto grid w-full grid-cols-1 gap-6 px-10 lg:grid-cols-5">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center "
        >
          <h2 className="text-4xl font-light leading-tight text-white lg:text-5xl">
            WHY CHOOSE
            <br />
            <span className="text-[#C89A56]">
              MEGHA SYSTEMS?
            </span>
          </h2>

          <p className="mt-5 text-lg leading-9 text-white">
            We deliver high-quality washroom solutions that combine
            durability, aesthetics and functionality with unmatched
            service.
          </p>
        </motion.div>

        {/* Cards */}

        {features.map((item, index) => {
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
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: .5,
                delay: index * .12,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-[#7b633f]/40 bg-white/[0.02] p-8 backdrop-blur-xl"
            >
              {/* Glow */}
              <div className="absolute -top-24 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-[#C89A56]/0 blur-3xl transition-all duration-500 group-hover:bg-[#C89A56]/15" />

              {/* Shine */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <div className="relative">

                <div className="flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#C89A56]/30 bg-[#C89A56]/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">

                    <Icon
                      size={36}
                      className="text-[#C89A56]"
                      strokeWidth={1.6}
                    />

                  </div>
                </div>

                <h3 className="mt-8 whitespace-pre-line text-center text-2xl font-medium leading-snug text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-center text-[15px] leading-8 text-white/65">
                  {item.desc}
                </p>

              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C89A56] transition-all duration-500 group-hover:w-full" />

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}