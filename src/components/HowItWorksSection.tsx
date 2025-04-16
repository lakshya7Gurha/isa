"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaUsers,
  FaBook,
  FaLaptopCode,
  FaComments,
} from "react-icons/fa";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  color: string;
  bgColor: string;
}

const Step = ({
  number,
  icon,
  title,
  description,
  delay,
  color,
  bgColor,
}: StepProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="flex md:block">
        <div
          className={`
          flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white
          shadow-lg z-10 relative mb-5 mr-4 md:mx-auto transform transition-all duration-300
          group-hover:scale-110 group-hover:rotate-3
        `}
          style={{ backgroundColor: color }}
        >
          <div className="text-2xl">{icon}</div>
        </div>

        <div
          className="hidden md:block absolute top-24 bottom-0 left-1/2 w-px -ml-px bg-gradient-to-b from-gray-200 to-transparent z-0"
          style={{ display: number === 5 ? "none" : "block" }}
        />
      </div>

      <div className="md:text-center mt-0 md:mt-4 ml-0 md:ml-0 transform transition-all duration-300 group-hover:translate-y-[-5px]">
        <div
          className="text-sm font-semibold mb-1 px-3 py-1 rounded-full inline-block text-black"
          style={{ backgroundColor: bgColor }}
        >
          Step {number}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  ) : null;
};

const HowItWorksSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const steps = [
    {
      id: "live-sessions",
      number: 1,
      icon: <FaVideo className="text-xl" />,
      title: "Live Sessions",
      description:
        "Attend live sessions twice a week from 6 PM to 8 PM IST on Mondays and Wednesdays.",
      color: "#f4bfd0",
      bgColor: "#fdf2f4",
    },
    {
      id: "squad-collaboration",
      number: 2,
      icon: <FaUsers className="text-xl" />,
      title: "Squad Collaboration",
      description:
        "Work with your assigned squad of 3-5 people to discuss ideas and provide feedback.",
      color: "#c6e5f8",
      bgColor: "#f0f9ff",
    },
    {
      id: "bonus-content",
      number: 3,
      icon: <FaBook className="text-xl" />,
      title: "Bonus Content",
      description:
        "Access curated resources including articles, videos, podcasts, and books to deepen your knowledge.",
      color: "#79c0a6",
      bgColor: "#ecfdf5",
    },
    {
      id: "weekly-assignments",
      number: 4,
      icon: <FaLaptopCode className="text-xl" />,
      title: "Weekly Assignments",
      description:
        "Apply what you learn through practical weekly assignments related to your startup idea.",
      color: "#fff392",
      bgColor: "#fefce8",
    },
    {
      id: "community-support",
      number: 5,
      icon: <FaComments className="text-xl" />,
      title: "Community Support",
      description:
        "Get 24/7 access to the Build3 Circle community platform to interact with peers and mentors.",
      color: "#bcadcc",
      bgColor: "#f5f3ff",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-[#f0f9ff]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c6e5f8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f4bfd0] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {isClient ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How It
              <span className="relative inline-block px-2">
                Works
                <div className="absolute  left-0 w-full h-2 bg-[#c6e5f8]  rounded-full" />
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Impact Startup Academy is an online 5-week cohort-based course.
              Here's what you can expect during your journey with us
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Impact Startup Academy is an online 5-week cohort-based course.
              Here's what you can expect during your journey with us
            </p>
          </div>
        )}

        <div className="md:max-w-5xl md:mx-auto">
          {/* Mobile view: Vertical timeline */}
          <div className="md:hidden space-y-12">
            {steps.map((step, index) => (
              <Step
                key={step.id}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={index * 0.1}
                color={step.color}
                bgColor={step.bgColor}
              />
            ))}
          </div>

          {/* Desktop view: Connected steps */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <Step
                  key={step.id}
                  number={step.number}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  delay={index * 0.1}
                  color={step.color}
                  bgColor={step.bgColor}
                />
              ))}
            </div>
          </div>
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
              Join The Next Cohort
            </a>
          </motion.div>
        ) : (
          <div className="text-center mt-16">
            <a
              href="https://pages.razorpay.com/isac5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-3 rounded-xl font-medium text-lg transition-all"
            >
              Join The Next Cohort
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorksSection;
