"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaChalkboardTeacher,
  FaRocket,
  FaHandshake,
  FaCertificate,
} from "react-icons/fa";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const Feature = ({ icon, title, description, color, delay }: FeatureProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 group-hover:translate-y-[-8px]">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9ff] to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          <div
            className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110`}
          >
            <div className="text-white text-2xl">{icon}</div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  ) : null;
};

const FeaturesSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    {
      icon: <FaLightbulb />,
      title: "Innovative Curriculum",
      description:
        "Learn cutting-edge strategies and frameworks specifically designed for impact-driven startups.",
      color: "bg-[#f4bfd0]",
    },
    {
      icon: <FaUsers />,
      title: "Squad Collaboration",
      description:
        "Work closely with like-minded entrepreneurs in small groups to refine ideas and share insights.",
      color: "bg-[#c6e5f8]",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Mentorship",
      description:
        "Get guidance from experienced entrepreneurs and industry experts who've built successful impact ventures.",
      color: "bg-[#79c0a6]",
    },
    {
      icon: <FaRocket />,
      title: "Hands-on Learning",
      description:
        "Apply concepts directly to your startup through practical assignments and real-world case studies.",
      color: "bg-[#fff392]",
    },
    {
      icon: <FaHandshake />,
      title: "Community Support",
      description:
        "Join a vibrant community of change-makers and access ongoing support even after the program.",
      color: "bg-[#bcadcc]",
    },
    {
      icon: <FaCertificate />,
      title: "Recognized Certification",
      description:
        "Earn a certificate validating your expertise in building and scaling impact startups.",
      color: "bg-[#f4bfd0]",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#f0f9ff]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c6e5f8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f4bfd0] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {isClient ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose
              <span className="relative inline-block px-2">
                Us
                <div className="absolute  left-0 w-full h-2 bg-[#c6e5f8] rounded-full" />
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our program the perfect launchpad for your
              impact startup
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              Discover what makes our program the perfect launchpad for your
              impact startup
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} delay={index * 0.1} />
          ))}
        </div>

        {isClient ? (
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
              Start Your Journey
            </a>
          </motion.div>
        ) : (
          <div className="text-center mt-16">
            <a
              href="https://pages.razorpay.com/isac5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-3 rounded-xl font-medium text-lg"
            >
              Start Your Journey
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
