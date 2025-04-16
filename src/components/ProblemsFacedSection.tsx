"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaLightbulb, FaChartLine, FaMoneyBillWave } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

interface Problem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const problems: Problem[] = [
  {
    id: 1,
    title: "Not sure which idea to work on?",
    description:
      "Learn our proven framework to identify, validate, and execute on ideas that have real market potential.",
    icon: <HiOutlineSearch className="w-7 h-7" />,
    color: "#f4bfd0",
  },
  {
    id: 2,
    title: "Struggling to validate your idea?",
    description:
      "Get step-by-step guidance on testing your assumptions and finding product-market fit before investing too much time.",
    icon: <FaLightbulb className="w-7 h-7" />,
    color: "#c6e5f8",
  },
  {
    id: 3,
    title: "Can't figure out the business model?",
    description:
      "Discover how to create a sustainable revenue model that aligns with both impact and profitability goals.",
    icon: <FaChartLine className="w-7 h-7" />,
    color: "#79c0a6",
  },
  {
    id: 4,
    title: "Confused about fundraising?",
    description:
      "Learn when and how to raise money, and what investors really look for in impact startups.",
    icon: <FaMoneyBillWave className="w-7 h-7" />,
    color: "#fff392",
  },
];

const ProblemCard = ({ problem }: { problem: Problem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6"
        style={{ backgroundColor: problem.color }}
      >
        {problem.icon}
      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-900">{problem.title}</h3>
      <p className="text-gray-600 leading-relaxed">{problem.description}</p>
    </motion.div>
  );
};

const ProblemsFacedSection = () => {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Common Startup
            <span className="relative inline-block px-3">
              Challenges
              <div
                className="absolute  left-0 w-full h-2"
                style={{ backgroundColor: "#c6e5f8" }}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            We've helped hundreds of founders overcome these common roadblocks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {problems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://pages.razorpay.com/isac5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Overcome These Challenges
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsFacedSection;
