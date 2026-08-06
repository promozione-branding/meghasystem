"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1D1714] text-white">

      {/* Background Texture */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Ambient Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#C89A56]/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C89A56]/10 blur-[170px]" />

      {/* Gold Line */}

      <div className="absolute top-0 left-1/2 h-[2px] w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C89A56] to-transparent" />

      <div className="relative">

        {/* ================= CTA ================= */}

        <div className="mx-auto max-w-7xl px-6 pt-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative overflow-hidden rounded-[30px] border border-[#6b5336] bg-[#2A211C] px-10 py-16"
          >

            <div className="absolute inset-0 bg-gradient-to-r from-[#C89A56]/10 via-transparent to-[#C89A56]/10" />

            <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">

              <div>

                <span className="uppercase tracking-[4px] text-[#C89A56] text-sm">

                  Let's Build Together

                </span>

                <h2 className="mt-4 text-4xl lg:text-5xl font-light">

                  Ready to Transform
                  <br />
                  Your Washroom Space?

                </h2>

                <p className="mt-6 max-w-xl text-white/70 leading-8">

                  Partner with India's trusted manufacturer of compact
                  laminate toilet cubicles, urinal partitions and
                  premium washroom accessories.

                </p>

              </div>

              <div className="flex flex-wrap gap-5">

                <button className="group flex h-16 items-center gap-3 rounded-xl bg-[#C89A56] px-8 font-medium transition hover:bg-[#b78747]">

                  Get Free Quote

                  <ArrowRight
                    className="transition group-hover:translate-x-1"
                  />

                </button>

                <button className="group flex h-16 items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-8 backdrop-blur-md transition hover:border-[#C89A56]">

                  Download Catalogue

                  <Download
                    className="transition group-hover:-translate-y-1"
                  />

                </button>

              </div>

            </div>

          </motion.div>

        </div>

        {/* ================= Main Footer ================= */}

        <div className="mx-auto mt-24 max-w-7xl px-6 pb-20">

          <div className="grid gap-14 lg:grid-cols-5">

            {/* Company */}

            <div className="lg:col-span-2">

              <Image
                src="/logo.png"
                alt="Logo"
                width={190}
                height={60}
              />

              <p className="mt-8 max-w-md leading-8 text-white/65">

                We manufacture premium compact laminate toilet cubicles,
                urinal partitions and washroom accessories for corporate,
                commercial and institutional projects across India.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <div className="rounded-xl border border-[#6b5336] bg-[#2A211C] px-5 py-4">

                  <h3 className="text-3xl font-light text-[#C89A56]">

                    3000+

                  </h3>

                  <p className="mt-1 text-sm text-white/60">

                    Projects

                  </p>

                </div>

                <div className="rounded-xl border border-[#6b5336] bg-[#2A211C] px-5 py-4">

                  <h3 className="text-3xl font-light text-[#C89A56]">

                    15+

                  </h3>

                  <p className="mt-1 text-sm text-white/60">

                    Years

                  </p>

                </div>

                <div className="rounded-xl border border-[#6b5336] bg-[#2A211C] px-5 py-4">

                  <h3 className="text-3xl font-light text-[#C89A56]">

                    PAN

                  </h3>

                  <p className="mt-1 text-sm text-white/60">

                    India

                  </p>

                </div>

              </div>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="mb-8 text-xl font-medium text-white">

                Company

              </h3>

              <div className="space-y-5">

                {[
                  "About Us",
                  "Infrastructure",
                  "Process",
                  "Testimonials",
                  "Contact",
                ].map((item) => (

                  <Link
                    key={item}
                    href="/"
                    className="block text-white/65 transition hover:text-[#C89A56]"
                  >
                    {item}
                  </Link>

                ))}

              </div>

            </div>

            {/* Products */}

            <div>

              <h3 className="mb-8 text-xl font-medium">

                Products

              </h3>

              <div className="space-y-5">

                {[
                  "Toilet Cubicles",
                  "Urinal Partitions",
                  "Lockers",
                  "Vanity Units",
                  "Accessories",
                ].map((item) => (

                  <Link
                    key={item}
                    href="/"
                    className="block text-white/65 transition hover:text-[#C89A56]"
                  >
                    {item}
                  </Link>

                ))}

              </div>

            </div>

            {/* Contact */}

            <div>

              <h3 className="mb-8 text-xl font-medium">

                Contact

              </h3>

              <div className="space-y-6">

                <div className="flex items-start gap-4">

                  <Phone
                    className="mt-1 text-[#C89A56]"
                    size={20}
                  />

                  <div>

                    <p className="text-white/60">

                      +91 98765 43210

                    </p>

                    <p className="text-white/60">

                      +91 98765 43210

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <Mail
                    className="mt-1 text-[#C89A56]"
                    size={20}
                  />

                  <p className="text-white/60">

                    info@yourcompany.com

                  </p>

                </div>

                <div className="flex items-start gap-4">

                  <MapPin
                    className="mt-1 text-[#C89A56]"
                    size={20}
                  />

                  <p className="leading-7 text-white/60">

                    Plot No. XX, Industrial Area,
                    New Delhi, India

                  </p>

                </div>

              </div>

            </div>

          </div>





          {/* ================= Certifications ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: .7 }}
  viewport={{ once: true }}
  className="mt-20"
>

  <div className="grid gap-6 md:grid-cols-3">

    <div className="group rounded-2xl border border-[#6b5336] bg-[#2A211C] p-7 transition-all duration-500 hover:border-[#C89A56]">

      <h3 className="text-3xl font-light text-[#C89A56]">

        ISO

      </h3>

      <p className="mt-2 text-white/70">

        ISO 9001 : 2015 Certified Manufacturing

      </p>

    </div>

    <div className="group rounded-2xl border border-[#6b5336] bg-[#2A211C] p-7 transition-all duration-500 hover:border-[#C89A56]">

      <h3 className="text-3xl font-light text-[#C89A56]">

        PAN INDIA

      </h3>

      <p className="mt-2 text-white/70">

        Installation & Support Across India

      </p>

    </div>

    <div className="group rounded-2xl border border-[#6b5336] bg-[#2A211C] p-7 transition-all duration-500 hover:border-[#C89A56]">

      <h3 className="text-3xl font-light text-[#C89A56]">

        15+ YEARS

      </h3>

      <p className="mt-2 text-white/70">

        Trusted by Architects & Builders

      </p>

    </div>

  </div>

</motion.div>

        </div>

      </div>

    </footer>
  );
}