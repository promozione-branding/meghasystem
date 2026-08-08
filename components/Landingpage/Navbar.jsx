"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/Data";
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
      href: "/#",
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
      title: "Contact Us",
      href: "/#",
    },
  ];

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[999] w-full transition-all duration-500
        ${
          isScrolled
            ? "bg-[#1b140f]/75  border-b border-[#6d5330]"
            : "bg-[#1b140f]/10 "
        }`}
      >
        <div className="mx-auto max-w-[1450px] px-6">
          <div className="flex h-[95px] items-center justify-between">


            <Link
              href="/"
              className="flex items-center gap-3 "
            >
              <div className="relative h-full w-full">

               

             <Image
  src="/Logo.png"
  alt="Logo"
  width={200}
  height={148}
  className="w-auto h-12 object-cover"
  priority
/>
              </div>

            
            </Link>


            <nav className="hidden xl:flex items-center list-none">

              <ul className="flex items-center list-none">

{navLinks.map((item, index) => (
  <li
    key={index}
    className="relative list-none"
    onMouseEnter={() => {
      if (item.type === "products") setProductOpen(true);
    }}
    onMouseLeave={() => {
      if (item.type === "products") setProductOpen(false);
    }}
  >
    <Link
      href={item.href}
      className="flex h-[82px] items-center gap-1 px-6 text-[17px] font-medium text-white transition hover:text-[#d7ad67]"
    >
      {item.title}

      {item.dropdown && (
        <ChevronDown
          size={16}
          className={`transition ${
            item.type === "products" && productOpen
              ? "rotate-180"
              : ""
          }`}
        />
      )}
    </Link>

  
    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d7ad67] transition-all duration-300 group-hover:w-full"></span>

   
    {item.type === "products" && productOpen && (
      <div className="absolute left-1/2 top-full z-50 w-[950px] -translate-x-1/2 rounded-2xl border border-[#6d5330] bg-[#241b15] p-8 shadow-2xl">

        <div className="grid grid-cols-3 gap-8">

          {categories.map((category) => (
            <div key={category.id}>


              <Link
                href={`/categories/${category.id}`}
                className="mb-4 block border-b border-[#6d5330]/40 pb-2 text-lg font-semibold text-[#d7ad67]"
              >
                {category.name}
              </Link>


              <div className="space-y-1">

                {category.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-white/70 transition-all duration-300 hover:bg-[#32251d] hover:pl-5 hover:text-[#d7ad67]"
                  >
                    {product.name}
                  </Link>
                ))}

              </div>

            </div>
          ))}

        </div>

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

                <span className="text-[17px]">
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


  