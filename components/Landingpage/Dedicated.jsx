"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin } from "lucide-react";

export default function OurProjects() {



const projects = [
  {
    id: 1,
    title: "Corporate Office Washroom",
    location: "Gurugram",
    category: "Toilet Cubicles",
    image: "/metroindus.jpg",
    description:
      "Premium compact laminate toilet cubicles installed for a modern corporate office with elegant finishes and superior privacy."
  },
  {
    id: 2,
    title: "Luxury Shopping Mall",
    location: "Delhi",
    category: "Urinal Partitions",
    image: "/indus1.jpg",
    description:
      "Custom-designed urinal partitions manufactured with high-pressure compact laminate for long-lasting performance."
  },
  {
    id: 3,
    title: "Five Star Hotel",
    location: "Mumbai",
    category: "Shower Cubicles",
    image: "/2pro.jfif",
    description:
      "Premium shower cubicle installation with modern aesthetics and moisture-resistant compact laminate panels."
  },
  {
    id: 4,
    title: "International Airport",
    location: "Bengaluru",
    category: "Washroom Accessories",
   image: "/indus1.jpg",
    description:
      "Complete washroom solution including cubicles, partitions and accessories for high traffic public spaces."
  },
  {
    id: 5,
    title: "University Campus",
    location: "Pune",
    category: "Toilet Cubicles",
     image: "/mallsindus.webp",
    description:
      "Large-scale washroom cubicle installation designed for durability, hygiene and minimal maintenance."
  },
  {
    id: 6,
    title: "Hospital Project",
    location: "Ahmedabad",
    category: "Compact Laminate",
    image: "/1pro.avif",
    description:
      "Hygienic compact laminate washroom systems designed specifically for healthcare environments."
  },
];





  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-[#241B16] py-12">
      <div className="mx-auto w-full px-20">

        <div className="text-center">

          <span className="rounded-full border border-[#C89A56]/30 px-5 py-2 text-sm uppercase tracking-[3px] text-[#C89A56]">
            Portfolio
          </span>

          <h2 className="mt-4 text-5xl font-light text-white">
            Our Recent Projects
          </h2>

          <p className="mx-auto mt-4 max-w-5xl text-lg text-white">
            Delivering premium toilet cubicles, urinal partitions, shower cubicles,
            and compact laminate washroom solutions across commercial,
            industrial and institutional projects.
          </p>

        </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {projects.map((project) => (
    <motion.div
      key={project.id}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      onClick={() => setSelected(project)}
      className="group cursor-pointer overflow-hidden rounded-3xl"
    >
      <div className="relative h-[360px] overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Category */}
        <span className="absolute left-5 top-5 rounded-full bg-[#C89A56] px-4 py-2 text-xs font-semibold tracking-wider text-white">
          {project.category}
        </span>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6">

          <h3 className="text-2xl font-semibold text-white transition duration-300 group-hover:text-[#C89A56]">
            {project.title}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-white/80">
            <MapPin size={17} className="text-[#C89A56]" />
            <span>{project.location}</span>
          </div>

        </div>

      </div>
    </motion.div>
  ))}
</div>
      </div>

     

      <AnimatePresence>

        {selected && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          >

            <motion.div
              initial={{ scale: .8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: .8, opacity: 0 }}
              transition={{ duration: .35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-w-6xl overflow-hidden rounded-[35px] bg-white lg:grid-cols-2"
            >

              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 z-20 rounded-full bg-white p-2 shadow-xl"
              >
                <X />
              </button>

              <div className="relative h-[350px] lg:h-[650px]">

                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="flex flex-col justify-center p-12">

                <span className="mb-5 inline-block rounded-full bg-[#C89A56]/10 px-5 py-2 font-medium text-[#C89A56]">
                  {selected.category}
                </span>

                <h3 className="text-5xl font-light">
                  {selected.title}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-[#C89A56]">

                  <MapPin />

                  {selected.location}

                </div>

                <p className="mt-8 text-lg leading-9 text-gray-600">
                  {selected.description}
                </p>

                <button className="mt-10 w-fit rounded-xl bg-[#C89A56] px-8 py-4 text-white transition hover:bg-[#b68643]">
                  Contact Us for Similar Projects
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </section>
  );
}