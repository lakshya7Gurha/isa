"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm py-4 border-b">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <h1 className="text-2xl font-bold">Impact Startup Academy</h1>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-6 items-center"
        >
          <Link
            href="#curriculum"
            className="text-black hover:text-[#79c0a6] transition-colors"
          >
            Curriculum
          </Link>
          <Link
            href="#who-is-it-for"
            className="text-black hover:text-[#79c0a6] transition-colors"
          >
            Who Is It For
          </Link>
          <Link
            href="#testimonials"
            className="text-black hover:text-[#79c0a6] transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#instructors"
            className="text-black hover:text-[#79c0a6] transition-colors"
          >
            Instructors
          </Link>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <div className="hidden md:flex items-center gap-2">
            <span className="text-lg font-bold text-black">INR 1799</span>
            <span className="text-gray-400 line-through">INR 4999</span>
            <div className="bg-[#79c0a6] text-white px-2 py-1 rounded-full text-xs font-semibold">
              64% OFF
            </div>
          </div>
          <Link
            href="https://pages.razorpay.com/isac5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Join Cohort 5
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
