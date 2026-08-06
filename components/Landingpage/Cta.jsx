
"use client"

import React from 'react'
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
const Cta = () => {
  return (
    <div>
        <div style={{backgroundImage:"url(/check3.jpg)"}} className="mx-auto w-full bg-cover bg-center bg-no-repeat px-6 py-6  lg:px-8">
      
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: .7 }}
                  className="relative overflow-hidden border border-[#6b5336] bg-[#2A211C] px-18 py-10"
                >
      
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C89A56]/10 via-transparent to-[#C89A56]/10" />
      
                  <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
      
                    <div>
      
                      <span className="uppercase tracking-[4px] text-[#C89A56] text-sm">
      
                        Let's Build Together
      
                      </span>
      
                      <h2 className="mt-4 text-4xl lg:text-5xl font-light text-white">
      
                        Ready to Transform
                        <br />
                        Your Washroom Space?
      
                      </h2>
      
                      <p className="mt-6 max-w-xl text-white leading-8">
      
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
      
                      <button className="group flex h-16 items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-8 backdrop-blur-md transition hover:border-[#C89A56] text-white">
      
                        Download Catalogue
      
                        <Download
                          className="transition group-hover:-translate-y-1"
                        />
      
                      </button>
      
                    </div>
      
                  </div>
      
                </motion.div>
      
              </div>
    </div>
  )
}

export default Cta
