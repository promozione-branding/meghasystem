"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useEffect } from "react";
import {  useState } from "react";
import { AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {


const heroImages = [
   "/hero3.webp",
  "/hero1.jpg",
  "/hero2.jfif",
 
];

const [currentBg, setCurrentBg] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBg((prev) => (prev + 1) % heroImages.length);
  }, 5000); 
  return () => clearInterval(interval);
}, []);






  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 45,
    damping: 18,
  });

  const y = useSpring(mouseY, {
    stiffness: 45,
    damping: 18,
  });

  useEffect(() => {
    const move = (e) => {
      const xPos = (e.clientX - window.innerWidth / 2) / 50;
      const yPos = (e.clientY - window.innerHeight / 2) / 50;

      mouseX.set(xPos);
      mouseY.set(yPos);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative   h-[120vh] overflow-hidden bg-black">

 
<div className="absolute inset-0 overflow-hidden">

  <AnimatePresence initial={false}>

    <motion.div
      key={currentBg}
      initial={{
        opacity: 0,
        scale: 1.12,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 1.4,
      }}
      className="absolute inset-0"
      style={{
        x,
        y,
      }}
    >

      <Image
        src={heroImages[currentBg]}
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

    </motion.div>

  </AnimatePresence>

</div>

{/* Dark Overlay */}
<div className="absolute inset-0 -z-10 bg-black/40" />


 


      {/* Dark Overlay */}

      <motion.div
        animate={{
          opacity: [0.55, 0.45, 0.55],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-black/10"
      />


      <motion.div
        animate={{
          opacity: [0.9, 0.8, 0.9],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20"
      />

  
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-[#C89A56]/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#C89A56]/10 blur-[170px]"
      />

 
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [-40, -250],
            x: [0, (i % 2 === 0 ? 20 : -20)],
          }}
          transition={{
            duration: 8 + i,
            delay: i,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full bg-[#C89A56]/50"
          style={{
            width: 4 + i,
            height: 4 + i,
            left: `${10 + i * 10}%`,
            bottom: "-20px",
            filter: "blur(1px)",
          }}
        />
      ))}

    

      <motion.div
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute left-20 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#C89A56]/40 to-transparent"
      />

      {/* Main Container */}

      <div className="relative z-30 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">

    

<motion.div
  initial="hidden"
  animate="visible"
  className="relative z-10 mb-20 flex w-full flex-col items-center justify-center text-center"
>
  {/* Badge */}
  <motion.div
    custom={0.1}
    variants={fadeUp}
    className="inline-flex items-center gap-3 rounded-full border border-[#C89A56]/30 bg-white/5 px-5 py-2 backdrop-blur-xl"
  >
    <span className="h-2 w-2 animate-pulse rounded-full bg-[#C89A56]" />

    <span className="text-xs font-semibold uppercase tracking-[3px] text-[#C89A56] md:text-sm">
      Premium Washroom Solutions
    </span>
  </motion.div>

  {/* Heading */}
  <motion.h1
    custom={0.3}
    variants={fadeUp}
    className="mx-auto mt-6 max-w-7xl text-center font-serif text-5xl font-light leading-[1.05] text-white md:text-6xl xl:text-7xl"
  >
    Crafted for{" "}
    <span className="relative inline-block text-[#C89A56]">
      Privacy.
      <motion.span
        animate={{ scaleX: [0, 1] }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-1 left-0 h-[2px] w-full origin-left bg-[#C89A56]"
      />
    </span>

    <br />

    Built to Last.
  </motion.h1>

  {/* Description */}
  <motion.p
    custom={0.5}
    variants={fadeUp}
    className="mx-auto mt-8 max-w-5xl text-center text-lg leading-9 text-white/90 md:text-xl"
  >
    Manufacturing premium toilet cubicles, urinal partitions, shower
    cubicles, compact laminate systems, and washroom accessories tailored to
    your project requirements across India.
  </motion.p>

  {/* Buttons */}
  <motion.div
    custom={0.7}
    variants={fadeUp}
    className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"
  >
    {/* Quote Button */}
    <button className="group relative flex h-16 items-center justify-center overflow-hidden rounded-xl bg-[#C89A56] px-9 font-medium text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[#C89A56]/50">
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      <span className="relative flex items-center gap-4">
        Get Free Quote

        <ArrowRight
          size={22}
          className="transition duration-300 group-hover:translate-x-1"
        />
      </span>
    </button>

    {/* Catalogue Button */}
    <button className="group relative flex h-16 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/5 px-9 text-white backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-[#C89A56]/40 hover:bg-white/10">
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      <span className="relative flex items-center gap-4">
        Download Catalogue

        <Download
          size={20}
          className="transition duration-300 group-hover:-translate-y-1"
        />
      </span>
    </button>
  </motion.div>
</motion.div>



      </div>

  {/* ==================== Floating Stats ==================== */}

<motion.div
  initial={{
    opacity: 0,
    y: 80,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
    delay: 1.4,
  }}
  className="absolute bottom-8 left-1/2 z-40 w-[95%] max-w-6xl -translate-x-1/2"
>
  <div className=" mt-16 relative overflow-hidden rounded-[28px] border border-white/10 bg-white/8 backdrop-blur-3xl shadow-[0_35px_80px_rgba(0,0,0,.35)]">



    <motion.div
      animate={{
        x: ["-20%", "120%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "linear",
      }}
      className="absolute top-0 h-full w-44 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
    />


    <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C89A56] to-transparent" />

    <div className="grid grid-cols-2 md:grid-cols-4">

      {[
        {
          value: "3000+",
          title: "Projects Delivered",
        },
        {
          value: "150+",
          title: "Team Members",
        },
        {
          value: "15+",
          title: "Countries Served",
        },
        {
          value: "98%",
          title: "Client Satisfaction",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{
            y: -10,
            backgroundColor: "rgba(255,255,255,.04)",
          }}
          transition={{
            duration: .35,
          }}
          className={`relative flex flex-col items-center justify-center px-8 py-10
          ${
            i !== 3
              ? "md:border-r border-white/10"
              : ""
          }
          ${
            i === 0
              ? ""
              : ""
          }`}
        >
    
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [.3, .55, .3],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: i * .3,
            }}
            className="absolute w-24 h-24 rounded-full bg-[#C89A56]/10 blur-3xl"
          />

          <motion.h3
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.7 + i * .15,
            }}
            className="relative text-4xl md:text-5xl font-light text-[#C89A56]"
          >
            {item.value}
          </motion.h3>

          <p className="relative mt-4 text-center text-sm md:text-base tracking-wide text-white/75">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>



<motion.div
  animate={{
    rotate: [0, 360],
  }}
  transition={{
    repeat: Infinity,
    duration: 30,
    ease: "linear",
  }}
  className="absolute right-10 top-10 hidden lg:flex h-28 w-28 items-center justify-center rounded-full border border-[#C89A56]/20"
>
  <div className="h-16 w-16 rounded-full border border-[#C89A56]/30" />
</motion.div>

</section>
  );
}