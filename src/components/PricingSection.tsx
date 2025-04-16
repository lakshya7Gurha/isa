"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaShieldAlt } from "react-icons/fa";

const PricingTier = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    "5 weeks of live sessions",
    "Squad collaboration",
    "Curated resources & templates",
    "Weekly assignments & feedback by peers",
    "Community access",
    "Priority support",
    "Networking opportunities",
  ];

  if (!isClient) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto transform transition-all duration-300 hover:translate-y-[-8px]"
    >
      <div className="relative z-10">
        {/* Price Tag */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#79c0a6] text-white px-6 py-2 rounded-full text-lg font-semibold">
            All-Inclusive
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-8 pt-4">
          <div className="mb-4">
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl font-bold text-gray-400 line-through">
                INR 4999
              </span>
              <span className="text-5xl font-bold text-gray-900">INR 1799</span>
            </div>
            <div className="mt-2">
              <span className="bg-[#79c0a6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                64% OFF
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-lg">
            Complete Impact Startup Program
          </p>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c6e5f8] flex items-center justify-center mt-1">
                <FaCheck className="text-xs text-[#79c0a6]" />
              </div>
              <span className="ml-3 text-gray-600">{feature}</span>
            </div>
          ))}
        </div>

        {/* Refund Policy */}
        <div className="bg-[#f0f9ff] rounded-xl p-4 mb-8 flex items-center">
          <FaShieldAlt className="text-[#79c0a6] text-xl mr-3" />
          <p className="text-gray-700">
            <span className="font-semibold">14-Day Refund Policy:</span> Full
            refund available up to 14 days after course start
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="https://pages.razorpay.com/isac5"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-black text-white hover:bg-gray-900"
        >
          Enroll Now
        </a>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c6e5f8] via-[#f4bfd0] to-[#79c0a6]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            best offer
            <span className="relative inline-block px-2">
              for you
              <div className="absolute left-0 w-full h-2 bg-[#c6e5f8] rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One comprehensive plan for your impact startup journey
          </p>
        </motion.div>

        <PricingTier />

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-2">
            Have questions about the program?
          </p>
          <a
            href="#contact"
            className="text-black font-semibold hover:text-[#79c0a6] transition-colors"
          >
            Contact us for more information →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
