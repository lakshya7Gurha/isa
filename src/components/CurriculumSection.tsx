"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SessionProps {
  number: number;
  title: string;
  topics: string[];
  isActive: boolean;
  onClick: () => void;
}

const Session = ({
  number,
  title,
  topics,
  isActive,
  onClick,
}: SessionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: number * 0.05 }}
    viewport={{ once: true }}
    className={`cursor-pointer border rounded-lg p-5 transition-all ${
      isActive
        ? "border-black bg-secondary-green bg-opacity-10"
        : "border-gray-400"
    }`}
    onClick={onClick}
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-500 mb-1">Session {number}</p>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {isActive && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2"
          >
            {topics.map((topic) => (
              <li
                key={`topic-${number}-${topic.substring(0, 10)}`}
                className="flex items-center"
              >
                <span className="h-1.5 w-1.5 bg-secondary-green rounded-full mr-2" />
                <span className="text-sm">{topic}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
          isActive
            ? "bg-secondary-green text-white"
            : "bg-gray-100 text-gray-400"
        }`}
      >
        {isActive ? "-" : "+"}
      </div>
    </div>
  </motion.div>
);

const CurriculumSection = () => {
  const [activeSession, setActiveSession] = useState<number | null>(1);

  const sessions = [
    {
      number: 1,
      title: "Impact Startups - Startup Sins & Stages - Starting with You",
      topics: [
        "What are Impact Startups?",
        "Why Startups Fail and How they succeed?",
        "You have to start with YOU.",
      ],
    },
    {
      number: 2,
      title: "Everything Co-Founders - Finding Good Markets",
      topics: [
        "Do you need a Co-Founder & if yes, then how to find one?",
        "What's the 1 thing most people don't understand about Entrepreneurship?",
        "How to find good Markets for your Startup?",
      ],
    },
    {
      number: 3,
      title: "Picking Your Market - Understanding It Deeply",
      topics: [
        "How to pick your Market?",
        "Impact Startup Canvas.",
        "What's the best way to deeply understand your Market?",
        "Two additional ways to understand your Market.",
      ],
    },
    {
      number: 4,
      title:
        "Defining Your Solution - Crafting Your Unique Value Proposition (UVP)",
      topics: [
        "Solution: How to avoid Sins + Test if our solution is great?",
        "How to define main features for our Solution?",
        "Everything Unique Value Proposition.",
      ],
    },
    {
      number: 5,
      title: "Developing Your Distribution Model",
      topics: [
        "Understand your customer's Buying Process.",
        "Build your Sales Funnel.",
        "2 Important Sales Funnel Concepts.",
      ],
    },
    {
      number: 6,
      title: "Designing Your Business Model",
      topics: [
        "Business Model: What, Why, How?",
        "Price: What influences it & how to pick yours?",
        "How to tell if Your Business Model is Sustainable?",
      ],
    },
    {
      number: 7,
      title:
        "Building Your Theory of Change (ToC), Competitive Advantage - Key Metrics",
      topics: [
        "Theory of Change.",
        "Key Metrics & Dashboard.",
        "Competitive Advantage.",
      ],
    },
    {
      number: 8,
      title: "Testing & Iterating",
      topics: [
        "How we will do Iterative Testing?",
        "How to Conduct Experiments & Build Prototypes?",
        "How to Build Minimum Viable Products(MVPs)?",
      ],
    },
    {
      number: 9,
      title: "Launching & Building, Scaling & Beyond",
      topics: [
        "Everything Product Market Fit (PMF).",
        "Financing your Startup.",
        "Building your Team & Organization.",
      ],
    },
    {
      number: 10,
      title: "Closing, What's Next & Celebration",
      topics: ["Our Journey so far & What's Next", "Wrap Up"],
    },
  ];

  const handleToggleSession = (sessionNumber: number) => {
    if (activeSession === sessionNumber) {
      setActiveSession(null);
    } else {
      setActiveSession(sessionNumber);
    }
  };

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-[#c6e5f8]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's the Curriculum
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Apply what you learn every week and build your startup idea
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sessions.map((session) => (
            <Session
              key={`session-${session.number}`}
              number={session.number}
              title={session.title}
              topics={session.topics}
              isActive={activeSession === session.number}
              onClick={() => handleToggleSession(session.number)}
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
            Join The Next Cohort
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumSection;
