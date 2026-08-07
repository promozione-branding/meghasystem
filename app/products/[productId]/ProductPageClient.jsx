"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import {


  Wrench,

  Lock,
} from "lucide-react";
import {
  CheckCircle2,
  Building2,
  School,
  ShoppingBag,
  Hospital,
  Plane,
  Hotel,
  Trees,
  Toilet,
} from "lucide-react";

// import Enquiry from "@/components/Enquiry";
import { categories } from "@/Data";

import {
  ArrowRight,
  Download,
  ChevronLeft,
  ChevronRight,
  Droplets,
  ShieldCheck,
  Flame,
  Sparkles,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default function ProductPageClient() {





const featureIcons = [
  ShieldCheck,
  Droplets,
  Sparkles,
  Wrench,
  CheckCircle2,
];

  const { productId } = useParams();
  const router = useRouter();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState("center center");

  const allProducts = useMemo(
    () => categories.flatMap((category) => category.products),
    []
  );

  const product = allProducts.find((item) => item.id === productId);

  if (!product) {
    router.replace("/");
    return null;
  }

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;

    setOrigin(`${x}% ${y}%`);
  };

  const features = [
    {
      icon: Droplets,
      title: "Water Resistant",
    },
    {
      icon: ShieldCheck,
      title: "Anti Bacterial",
    },
    {
      icon: Flame,
      title: "Fire Retardant",
    },
    {
      icon: Sparkles,
      title: "Easy To Clean",
    },
  ];

  const stats = [
    {
      number: "15+",
      label: "Years of Experience",
    },
    {
      number: "3000+",
      label: "Projects Completed",
    },
    {
      number: "150+",
      label: "Cities Served",
    },
    {
      number: "PAN India",
      label: "Installation & Support",
    },
  ];








const finishes = [
  {
    name: "Walnut",
    image: "/check.jpg",
  },
  {
    name: "Oak Wood",
    image: "/clientbg.avif",
  },
  {
    name: "Grey Linen",
    image: "/brown-marbled-background.jpg.jpeg",
  },
  {
    name: "Wenge",
    image: "/check.jpg",
  },
  {
    name: "Light Oak",
   image: "/clientbg.avif",
  },
  {
    name: "Light Oak",
      image: "/check.jpg",
  },
];


  return (
    <>
    

  <section   style={{
        backgroundImage:
          "url(/brown-marbled-background.jpg.jpeg)",
       
      }} className="relative overflow-hidden bg-[#211A16] bg-cover bg-center py-35">
    <div
      className="absolute inset-0 bg-black/40"
    
    />

    <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#C89A56]/10 blur-[150px]" />
    <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#C89A56]/10 blur-[150px]" />

    <div className="relative mx-auto w-full px-20">

      <div className="mb-10 flex flex-wrap items-center gap-3 text-sm text-white/60">
        <Link href="/">Home</Link>

        <span>/</span>

        <Link href="/products">Products</Link>

        <span>/</span>

        <span className="text-[#C89A56]">{product.name}</span>
      </div>

      <div className="grid gap-24 lg:grid-cols-2">
    

        <div className="relative">
          <div className="rounded-[32px] w-[680px] border border-[#6f5737]/50 bg-[#2A211C]  shadow-[0_30px_80px_rgba(0,0,0,.35)]">
            <Swiper
              modules={[Navigation, Thumbs]}
              navigation={{
                prevEl: ".product-prev",
                nextEl: ".product-next",
              }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed
                    ? thumbsSwiper
                    : null,
              }}
              spaceBetween={0}
              className="rounded-[24px]"
            >
              {product.image.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative h-[550px] w-[680px] overflow-hidden rounded-[24px] bg-white cursor-crosshair"
                    onMouseEnter={() => setIsZoomed(true)}
                    onMouseLeave={() => setIsZoomed(false)}
                    onMouseMove={handleMouseMove}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={680}
                      height={550}
                      priority={index === 0}
                      className="object-contain transition duration-300"
                      style={{
                        transformOrigin: origin,
                        transform: isZoomed
                          ? "scale(1.45)"
                          : "scale(1)",
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="product-prev absolute left-8 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#C89A56]/50 bg-[#211A16]/90 backdrop-blur-md transition hover:bg-[#C89A56]">
              <ChevronLeft className="text-white" size={20} />
            </button>

            <button className="product-next absolute right-8 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#C89A56]/50 bg-[#211A16]/90 backdrop-blur-md transition hover:bg-[#C89A56]">
              <ChevronRight className="text-white" size={20} />
            </button>
          </div>

          {/* Thumbnails */}

          <div className="mt-6">
            <Swiper
              modules={[Thumbs, FreeMode]}
              onSwiper={setThumbsSwiper}
              freeMode
              watchSlidesProgress
              slidesPerView={4}
              spaceBetween={15}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 5,
                },
              }}
            >
              {product.image.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-28 cursor-pointer overflow-hidden rounded-2xl border border-[#6f5737]/50 bg-white transition hover:border-[#C89A56]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}

        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit rounded-full border border-[#C89A56]/30 bg-[#C89A56]/10 px-5 py-2 text-sm font-medium uppercase tracking-[2px] text-[#C89A56]">
            Premium Washroom Solution
          </span>

          <h1 className="mt-6 text-4xl font-light leading-tight text-white lg:text-5xl">
            {product.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/80">
            {product.overview}
          </p>

          <div className="my-3 h-px bg-gradient-to-r from-[#C89A56]/40 to-transparent" />

          <div className="leading-8 text-white/65">
            {Array.isArray(product.description) ? (
              product.description
                .filter((block) => block.type === "p")
                .slice(0, 1)
                .map((block, i) => (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: block.text,
                    }}
                  />
                ))
            ) : (
              <p
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
              />
            )}
          </div>

          {/* Features */}

          <div className="mt-5 grid grid-cols-2 gap-4">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-[#6F5737]/50 bg-[#2A211C] p-5 transition-all duration-300 hover:border-[#C89A56]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C89A56]/10">
                    <Icon
                      className="text-[#C89A56]"
                      size={22}
                    />
                  </div>

                  <h4 className="mt-4 font-medium text-white">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* CTA */}

        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:gap-5">

  <button
    onClick={() => setIsFormOpen(true)}
    className="group flex h-14 flex-1 items-center justify-center rounded-xl bg-[#C89A56] px-6 font-medium text-white transition hover:bg-[#B68643]"
  >
    Request Quote

    <ArrowRight
      size={18}
      className="ml-3 transition group-hover:translate-x-1"
    />
  </button>

  <a
    href={`https://wa.me/918810422935?text=${encodeURIComponent(
      `Hello, I am interested in ${product.name}`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-14 flex-1 items-center justify-center rounded-xl border border-[#C89A56]/40 px-6 font-medium text-white transition hover:border-[#C89A56] hover:bg-[#C89A56]/10"
  >
    WhatsApp Enquiry
  </a>

  <a
    href="/brochure.pdf"
    download
    className="flex h-14 flex-1 items-center justify-center rounded-xl border border-white/10 px-6 font-medium text-black transition bg-white "
  >
 
    Download Brochure
  </a>

</div>

          {/* Stats */}
{/* 
          <div className="mt-14 grid grid-cols-2 gap-5">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#6F5737]/40 bg-[#2A211C] p-5"
              >
                <h3 className="text-3xl font-light text-[#C89A56]">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm text-white/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>









 








  </section>


<section className="py-8 bg-[#F8F6F3]">
  <div className="w-full mx-auto px-16">

    <div className="text-center mb-7">
    

      <h2 className="mt-4 text-4xl font-bold  text-[#222]">
        Available Finishes
      </h2>

    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

      {finishes.map((finish) => (

        <div
          key={finish.name}
          className="group"
        >

          <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">

            <Image
              src={finish.image}
              alt={finish.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

          </div>

          <h4 className="mt-4 text-center font-semibold text-gray-800">
            {finish.name}
          </h4>

        </div>

      ))}

    </div>

  </div>
</section>
 
<section className="relative overflow-hidden bg-[#EDEAE5] bg-cover bg-center pt-5">



<section className="bg-[#f8f6f3] py-16">
  <div className="w-full mx-auto px-20">

    <div className="grid lg:grid-cols-2 gap-8">

      {/* ================= LEFT ================= */}

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

        <div className="px-8 py-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold uppercase text-[#222]">
            Technical Specifications
          </h2>
        </div>

        <div>

          {product.specs?.map((spec, index) => (

            <div
              key={index}
              className={`grid grid-cols-2 ${
                index !== product.specs.length - 1
                  ? "border-b"
                  : ""
              } border-gray-200`}
            >

              <div className="bg-[#fafafa] px-6 py-4 font-semibold text-gray-700">
                {spec.label}
              </div>

              <div className="px-6 py-4 text-gray-600">
                {spec.value}
              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ================= RIGHT ================= */}

  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

  <h2 className="text-3xl font-bold uppercase text-[#222] mb-8">
    Features & Benefits
  </h2>

  <div className="space-y-8">

    {product.features?.map((feature, index) => {
      const Icon = featureIcons[index % featureIcons.length];

      return (
        <div key={index} className="flex gap-5">

          <div className="w-12 h-12 rounded-full bg-[#C89A56]/10 flex items-center justify-center shrink-0">
            <Icon className="text-[#C89A56]" size={24} />
          </div>

          <div>
           

            <p className="text-gray-900 mt-1 leading-7">
              {feature}
            </p>
          </div>

        </div>
      );
    })}

  </div>

</div>

    </div>
  </div>
</section>






   <section
  style={{ backgroundImage: "url(/bag/descbg.png)" }}
  className="bg-cover bg-center py-16 px-6"
>
  <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-start">

    {/* LEFT */}
    <div>
      <h2 className="text-4xl font-bold uppercase text-[#222]">
        Product Overview
      </h2>

      <div className="mt-6 text-gray-700 space-y-5 leading-8">

        {Array.isArray(product.description) ? (
          product.description.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h3
                  key={i}
                  className="text-2xl font-semibold text-[#1d1d1d]"
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === "p") {
              return (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: block.text,
                  }}
                />
              );
            }

            if (block.type === "ul") {
              return (
                <ul key={i} className="space-y-4">

                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-[#C89A56] mt-1 shrink-0"
                      />

                      <span
                        dangerouslySetInnerHTML={{
                          __html: item,
                        }}
                      />
                    </li>
                  ))}

                </ul>
              );
            }

            return null;
          })
        ) : (
          <p
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
          />
        )}
      </div>
    </div>

    {/* RIGHT */}
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">

      <h3 className="text-2xl font-bold uppercase mb-8">
        Ideal For
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        <div className="text-center">
          <Building2 className="mx-auto text-gray-700" size={42} />
          <p className="mt-3 text-sm font-medium">
            Corporate Offices
          </p>
        </div>

        <div className="text-center">
          <School className="mx-auto text-gray-700" size={42} />
          <p className="mt-3 text-sm font-medium">
            Educational Institutions
          </p>
        </div>

        <div className="text-center">
          <ShoppingBag className="mx-auto text-gray-700" size={42} />
          <p className="mt-3 text-sm font-medium">
            Shopping Malls
          </p>
        </div>

        <div className="text-center">
          <Hospital className="mx-auto text-gray-700" size={42} />
          <p className="mt-3 text-sm font-medium">
            Hospitals
          </p>
        </div>

        <div className="text-center">
          <Plane className="mx-auto text-gray-700" size={42} />
          <p className="mt-3 text-sm font-medium">
            Airports
          </p>
        </div>

        <div className="text-center">
          <Hotel className="mx-auto text-gray-700" size={42} />
          <p className="mt-3 text-sm font-medium">
            Hotels
          </p>
        </div>

        <div className="text-center">
          <Trees className="mx-auto text-gray-700" size={42} />
          <p className="mt-3 text-sm font-medium">
            Sports Complex
          </p>
        </div>

        <div className="text-center">
          <Toilet className="mx-auto text-gray-700" size={42} />
          <p className="mt-3 text-sm font-medium">
            Public Toilets
          </p>
        </div>

      </div>
    </div>

  </div>
</section>
</section>




  

  
  </>

  )
  }