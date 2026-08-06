"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Phone,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [productOpen, setProductOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Products",
      href: "#",
      dropdown: true,
      type: "products",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Resources",
      href: "#",
      dropdown: true,
      type: "resources",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[999] w-full transition-all duration-500
        ${
          isScrolled
            ? "bg-[#1b140f]/55 backdrop-blur-xl shadow-2xl border-b border-[#6d5330]"
            : "bg-[#1b140f]/40 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-[1450px] px-6">
          <div className="flex h-[95px] items-center justify-between">

            {/* ================= Logo ================= */}

            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
            >
              <div className="relative h-12 w-12">

                {/* Replace with your logo */}

                <Image
                  src="/logo.jpeg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>

            
            </Link>


            <nav className="hidden xl:flex items-center list-none">

              <ul className="flex items-center list-none">

                {navLinks.map((item, index) => (

                  <li
                    key={index}
                    className="relative list-none "
                    onMouseEnter={() => {
                      if (item.type === "products")
                        setProductOpen(true);

                      if (item.type === "resources")
                        setResourceOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.type === "products")
                        setProductOpen(false);

                      if (item.type === "resources")
                        setResourceOpen(false);
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex h-[82px] items-center gap-1 px-6 text-[15px] font-medium text-white transition hover:text-[#d7ad67]"
                    >
                      {item.title}

                      {item.dropdown && (
                        <ChevronDown
                          size={16}
                          className={`transition ${
                            (item.type === "products" &&
                              productOpen) ||
                            (item.type === "resources" &&
                              resourceOpen)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* Gold Line */}

                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d7ad67] transition-all duration-300 group-hover:w-full"></span>

                    {/* Products Dropdown */}

                    {item.type === "products" &&
                      productOpen && (
                        <div className="absolute left-0 top-full w-[280px] rounded-xl border border-[#6d5330] bg-[#241b15] p-3 shadow-2xl">

                          <Link
                            href="/products/toilet-cubicles"
                            className="block rounded-lg px-4 py-3 text-white transition hover:bg-[#32251d]"
                          >
                            Toilet Cubicles
                          </Link>

                          <Link
                            href="/products/urinal-partitions"
                            className="block rounded-lg px-4 py-3 text-white transition hover:bg-[#32251d]"
                          >
                            Urinal Partitions
                          </Link>

                          <Link
                            href="/products/shower-cubicles"
                            className="block rounded-lg px-4 py-3 text-white transition hover:bg-[#32251d]"
                          >
                            Shower Cubicles
                          </Link>

                          <Link
                            href="/products/accessories"
                            className="block rounded-lg px-4 py-3 text-white transition hover:bg-[#32251d]"
                          >
                            Accessories
                          </Link>

                        </div>
                      )}

                    {/* Resources Dropdown */}

                    {item.type === "resources" &&
                      resourceOpen && (
                        <div className="absolute left-0 top-full w-[250px] rounded-xl border border-[#6d5330] bg-[#241b15] p-3 shadow-2xl">

                          <Link
                            href="/blogs"
                            className="block rounded-lg px-4 py-3 text-white hover:bg-[#32251d]"
                          >
                            Blogs
                          </Link>

                          <Link
                            href="/catalogue"
                            className="block rounded-lg px-4 py-3 text-white hover:bg-[#32251d]"
                          >
                            Catalogue
                          </Link>

                          <Link
                            href="/downloads"
                            className="block rounded-lg px-4 py-3 text-white hover:bg-[#32251d]"
                          >
                            Downloads
                          </Link>

                        </div>
                      )}

                  </li>

                ))}

              </ul>

            </nav>

   

            <div className="hidden xl:flex items-center gap-6">

              <a
                href="tel:+919171814444"
                className="flex items-center gap-2 text-white hover:text-[#d7ad67] transition"
              >
                <Phone size={18} />

                <span className="text-[15px]">
                  +91 91718 14444
                </span>
              </a>

              <Link
                href="/contact"
                className="rounded-lg bg-[#c99d5b] px-7 py-3 font-semibold text-[#241b15] transition hover:bg-[#ddb87d]"
              >
                Get Free Quote
              </Link>

            </div>

            {/* Mobile Button */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden text-white"
            >
              {mobileOpen ? (
                <X size={32} />
              ) : (
                <Menu size={32} />
              )}
            </button>

          </div>
        </div>
      </header>

      </>

            )
          
          }


  