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
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89A56] to-transparent" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C89A56]/10 blur-[170px]" />

      {/* Gold Line */}

      <div className="absolute top-0 left-1/2 h-[2px] w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C89A56] to-transparent" />

      <div className="relative">

        {/* ================= CTA ================= */}

      

        {/* ================= Main Footer ================= */}




        <div className="mx-auto mt-24 max-w-7xl px-6 pb-10">

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







{/* ================= Bottom Bar ================= */}

<div className="relative border-t border-[#6b5336]/40 bg-[#171210]">

  {/* Top Glow */}

  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89A56] to-transparent" />

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">

    {/* Copyright */}

    <p className="text-center text-sm text-white/60 md:text-left">
      © {new Date().getFullYear()} <span className="text-[#C89A56] font-medium">Megha Systems</span>. All Rights Reserved.
    </p>

    {/* Links */}

    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">

      <Link
        href="/privacy-policy"
        className="transition hover:text-[#C89A56] text-white/60"
      >
        Privacy Policy
      </Link>

      <span className="h-4 w-px bg-[#6b5336]" />

      <Link
        href="/terms-conditions"
        className="transition hover:text-[#C89A56] text-white/60"
      >
        Terms & Conditions
      </Link>

      <span className="h-4 w-px bg-[#6b5336]" />

      <Link
        href="/sitemap.xml"
        className="transition hover:text-[#C89A56] text-white/60"
      >
        Sitemap
      </Link>

    </div>

    {/* Social Icons */}

    <div className="flex items-center gap-3">

      {[
        { icon: Facebook, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: Youtube, href: "#" },
      ].map((item, index) => {

        const Icon = item.icon;

        return (

          <Link
            key={index}
            href={item.href}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#6b5336] bg-[#221A16] transition-all duration-300 hover:border-[#C89A56] hover:bg-[#C89A56]"
          >
            <Icon
              size={18}
              className="text-[#C89A56] transition-all duration-300 group-hover:scale-110 group-hover:text-white"
            />
          </Link>

        );

      })}

    </div>

  </div>

  {/* Developer Credit */}

  <div className="border-t border-[#6b5336]/20 bg-[#130F0D] py-3">

    <p className="text-center text-xs tracking-wide text-white/50">

      Designed & Developed with ❤️ by    Inquiry Bazaar pvt ltd {" "}

      <a href="https://www.inquirybazaar.com" target="_blank" rel="noopener noreferrer" className="font-medium underline text-[#C89A56]">
    B2B Marketplace
      </a>

    </p>

  </div>

</div>



    </footer>
  );
}