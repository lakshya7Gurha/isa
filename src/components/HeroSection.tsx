"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import sneha from "./testiomonials/66cc6c0ca1e6612a8dfbac75_Sneha.webp";
import ryan from "./testiomonials/ryan.webp";
import ankur from "./testiomonials/66cc6c0da1e6612a8dfbaca4_ankur-.webp";
import ashwyan from "./testiomonials/66cc6c0da1e6612a8dfbac9e_Ashwyn-.webp";

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const founders = [
    { id: "user1", name: "Ankur", image: ankur },
    { id: "user2", name: "Ryan", image: ryan },
    { id: "user3", name: "Sneha", image: sneha },
    { id: "user4", name: "Ashwyn", image: ashwyan },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.prod.website-files.com/66cc6befc48c36691c2bfebc/676157607f05b805f0e26fd4_Untitled%20design.png"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {isClient ? (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white/90 text-xl md:text-2xl mb-4 font-light tracking-wide"
              >
                impact startup academy
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight"
              >
                how to build startups with purpose and profit
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
              >
                your 5-week guide to building startups that tackle an important
                societal problem AND are self-sustainable
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/60 mb-4"
              >
                cohort 5 starts on may 26
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white">
                    INR 1799
                  </span>
                  <span className="text-white/60 line-through">INR 4999</span>
                </div>
                <div className="bg-[#79c0a6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  64% OFF
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="w-5 h-5 rounded-full bg-[#79c0a6] flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-white/80 text-sm">
                  14-Day Money-Back Guarantee
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center gap-6"
              >
                <Link
                  href="https://pages.razorpay.com/isac5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-[#FFE168] hover:bg-[#FFD700] text-black px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10">join c5, 2025</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFE168] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <div className="flex flex-col items-center">
                  <p className="text-white/60 mb-3">trusted by 550+ founders</p>
                  <div className="flex -space-x-3">
                    {founders.map((founder, index) => (
                      <motion.div
                        key={founder.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className="group relative"
                      >
                        <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden transition-transform duration-300 transform group-hover:scale-110 relative z-10">
                          <Image
                            src={founder.image}
                            alt={founder.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          {founder.name}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          ) : (
            // Non-animated fallback
            <div className="flex flex-col items-center text-center">
              <h2 className="text-white/90 text-xl md:text-2xl mb-4 font-light tracking-wide">
                impact startup academy
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                how to build startups with purpose and profit
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
                your 5-week guide to building startups that tackle an important
                societal problem AND are self-sustainable
              </p>
              <p className="text-white/60 mb-4">cohort 5 starts on may 26</p>
              <div className="flex flex-col items-center gap-6">
                <Link
                  href="https://pages.razorpay.com/isac5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFE168] text-black px-10 py-4 rounded-full font-medium text-lg"
                >
                  join c5, 2025
                </Link>
                <div className="flex flex-col items-center">
                  <p className="text-white/60 mb-3">trusted by 550+ founders</p>
                  <div className="flex -space-x-3">
                    {founders.map((founder) => (
                      <div
                        key={founder.id}
                        className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden"
                      >
                        <div className="w-full h-full bg-gray-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
