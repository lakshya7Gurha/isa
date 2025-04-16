"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import poornima from "./testiomonials/poornima.webp";
import madhur from "./testiomonials/madhur.webp";
import aman from "./testiomonials/aman.webp";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: StaticImageData;
  quote: string;
  delay: number;
}

const Testimonial = ({
  name,
  role,
  company,
  image,
  quote,
  delay,
}: TestimonialProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-xl relative group transform transition-all duration-300 hover:translate-y-[-8px]"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9ff] to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-4 ring-[#c6e5f8] ring-opacity-30">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <p className="text-gray-600">{role}</p>
            <p className="text-[#79c0a6] font-medium">{company}</p>
          </div>
        </div>

        <div className="relative">
          <FaQuoteLeft className="absolute -top-3 -left-2 text-4xl text-[#c6e5f8] opacity-30" />
          <p className="text-gray-600 leading-relaxed relative z-10 pl-4">
            {quote}
          </p>
        </div>

        <div className="flex items-center mt-6 space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-[#fff392]" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const testimonials = [
    {
      name: "aman gupta",
      role: "Founder & CEO",
      company: "Ayniverse Inc",
      image: aman,
      quote:
        " this course gave me invaluable insights into building a startup with a solid structure and framework. It's a guide I'll revisit as my idea evolves or when starting fresh. Highly recommended for anyone creating a vision, feeling stuck, or needing clarity to move forward.",
    },
    {
      name: "madhur patel",
      role: "Chief Business Officer",
      company: "Patel's Delights",
      image: madhur,
      quote:
        "whether you're a fresh graduate or an experienced professional, this course is like a mini-MBA for building an Impact Startup. Gaurav's passion and expertise guide you in just six weeks. I highly recommend it for anyone with entrepreneurial zeal",
    },
    {
      name: "poornima",
      role: "Program Manager ",
      company: "Game",
      image: poornima,
      quote:
        "f you're starting out, with or without an idea, or if you've begun your journey, this course helps you rethink, unlearn, and gain tools to move forward. It's a must for anyone looking to strengthen their entrepreneurial path.",
    },
  ];

  if (!isClient) return null;

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#f0f9ff]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f4bfd0] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c6e5f8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Our
            <span className="relative inline-block px-2">
              Alumni
              <div className="absolute left-0 w-full h-2 bg-[#c6e5f8] rounded-full" />
            </span>
            Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from entrepreneurs who have transformed their impact startups
            through our program
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={testimonial.name}
              {...testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://pages.razorpay.com/isac5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-xl 
              font-semibold text-lg transition-all duration-300 transform hover:scale-105 
              shadow-lg hover:shadow-xl"
          >
            Join Our Community
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
