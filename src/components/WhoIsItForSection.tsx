"use client";

import { motion } from "framer-motion";
import { FaRegLightbulb, FaRegHandshake, FaRegChartBar } from "react-icons/fa";
import PRMentionsLight from "./PRMentionsLight";

interface PersonaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  color: string;
  delay: number;
}

const Persona = ({
  icon,
  title,
  description,
  points,
  color,
  delay,
}: PersonaProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      <div
        className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4"
        style={{ borderColor: color }}
      >
        {/* Icon Container */}
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-3"
          style={{ backgroundColor: color }}
        >
          <div className="text-white text-2xl">{icon}</div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {/* Points */}
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <div
                className="w-2 h-2 mt-2 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="ml-3 text-gray-600">{point}</span>
            </li>
          ))}
        </ul>

        {/* Decorative Elements */}
        <div
          className="absolute -right-2 -top-2 w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        />
        <div
          className="absolute -left-2 -bottom-2 w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

const WhoIsItForSection = () => {
  const personas = [
    {
      icon: <FaRegLightbulb />,
      title: "Aspiring Entrepreneurs",
      description:
        "Have an idea but need guidance to turn it into a viable impact startup",
      points: [
        "Want to solve meaningful problems",
        "Looking for structured guidance",
        "Ready to learn and take action",
      ],
      color: "#f4bfd0",
    },
    {
      icon: <FaRegHandshake />,
      title: "Early-Stage Founders",
      description:
        "Already started but seeking direction and support to scale impact",
      points: [
        "Need help with growth strategy",
        "Want to validate business model",
        "Looking for mentor guidance",
      ],
      color: "#79c0a6",
    },
    {
      icon: <FaRegChartBar />,
      title: "Impact Innovators",
      description:
        "Professionals wanting to create positive change through business",
      points: [
        "Passionate about social impact",
        "Seeking sustainable solutions",
        "Want to build scalable models",
      ],
      color: "#c6e5f8",
    },
  ];

  return (
    <section id="who-is-it-for" className="py-24 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Who is this
            <span className="relative inline-block px-3">
              For
              <div
                className="absolute left-0 w-full h-2"
                style={{ backgroundColor: "#c6e5f8" }}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Our program is designed for passionate individuals ready to create
            meaningful impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {personas.map((persona, index) => (
            <Persona key={persona.title} {...persona} delay={index * 0.1} />
          ))}
        </div>

        {/* PR Mentions */}
        <PRMentionsLight />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://pages.razorpay.com/isac5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Find Your Path
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
