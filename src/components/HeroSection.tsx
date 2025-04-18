"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import sneha from "./testiomonials/66cc6c0ca1e6612a8dfbac75_Sneha.webp";
import ryan from "./testiomonials/ryan.webp";
import ankur from "./testiomonials/66cc6c0da1e6612a8dfbaca4_ankur-.webp";
import ashwyan from "./testiomonials/66cc6c0da1e6612a8dfbac9e_Ashwyn-.webp";
import isaback from "./testiomonials/isaheroimage.png"

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoKey, setVideoKey] = useState(1);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Force iframe reload to apply new mute state
    setVideoKey(prev => prev + 1);
  };

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
          src={isaback}
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      </div>

      {/* Content Container */}
      <div className="container relative mt-12 z-10 mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-2">
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
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                >
                  learn in 5 weeks what most founders take years to figure out
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
                >
                  <p className="mb-4">
                    with real founders, real community, real startups lessons.
                  </p>
                  <p>
                    your 5-week guide to building startups that tackle an important
                    societal problem AND are self-sustainable
                  </p>
                </motion.div>

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
                  className="flex flex-col items-center lg:items-start gap-6"
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

                  <div className="flex flex-col items-center lg:items-start">
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
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-white/90 text-xl md:text-2xl mb-4 font-light tracking-wide">
                  impact startup academy
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  learn in 5 weeks what most founders take years to figure out
                </h1>
                <div className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
                  <p className="mb-4">
                    with real founders, real community, real startups lessons.
                  </p>
                  <p>
                    your 5-week guide to building startups that tackle an important
                    societal problem AND are self-sustainable
                  </p>
                </div>
                <p className="text-white/60 mb-4">cohort 5 starts on may 26</p>
                <div className="flex flex-col items-center lg:items-start gap-6">
                  <Link
                    href="https://pages.razorpay.com/isac5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFE168] text-black px-10 py-4 rounded-full font-medium text-lg"
                  >
                    join c5, 2025
                  </Link>
                  <div className="flex flex-col items-center lg:items-start">
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

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full lg:w-[110%] aspect-[16/10] rounded-xl overflow-hidden shadow-2xl mx-auto lg:-ml-4 lg:mr-8 mb-16 sm:mb-20 lg:-my-24 hover:scale-[1.02] transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-black/20"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            <iframe
              key={videoKey}
              className="absolute inset-0 w-full h-full scale-105"
              src={`https://www.youtube.com/embed/HEaBn7PsEMw?si=ryqWAE9SqFsWhMNj&autoplay=1&mute=${isMuted ? 1 : 0}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 z-10"
            >
              {isMuted ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Unmute</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Mute</span>
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
