"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

interface InstructorProps {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedinUrl: string;
}

const instructors: InstructorProps[] = [
  {
    id: "gaurav-singh",
    name: "Gaurav Singh",
    role: "Founder, 321 Education, Ashoka Fellow",
    bio: "In 2009, Gaurav quit his job as a software engineer to join Teach For India's first batch. Then at age 25, he founded 321 Education to set up exemplars of quality education for some of India's poorest children. He scaled the 321 model to ~2000 schools, ~300,000 learners. For his work, Gaurav was awarded the Ashoka & Echoing Green fellowships.",
    image: "https://ext.same-assets.com/957084807/4092012268.webp",
    linkedinUrl: "https://www.linkedin.com/in/gauravsingh961/"
  },
  {
    id: "varun-chawla",
    name: "Varun Chawla",
    role: "Founder, build3, 91 Springboard",
    bio: "Varun is the co-founder of 91springboard, one of the biggest coworking communities in India. He conceptualized 91springboard in 2013, a time when the term coworking was alien to India. One of his startups, My Guest House - a budget accommodation aggregator, was acquired by MakeMyTrip.",
    image: "https://ext.same-assets.com/957084807/2551156624.webp",
    linkedinUrl: "https://www.linkedin.com/in/varunchawla1/"
  }
];

const InstructorCard = ({ instructor }: { instructor: InstructorProps }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-md overflow-hidden"
  >
    <div className="md:flex">
      <div className="md:shrink-0 h-64 md:h-auto md:w-48 relative">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="h-full w-full object-cover md:object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="uppercase tracking-wide text-sm text-secondary-green font-semibold">
              {instructor.role}
            </p>
            <h3 className="mt-1 text-xl font-semibold">{instructor.name}</h3>
          </div>
          <a
            href={instructor.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-xl hover:text-blue-800 transition-colors"
            aria-label={`${instructor.name}'s LinkedIn Profile`}
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="mt-4 text-gray-600">{instructor.bio}</p>
      </div>
    </div>
  </motion.div>
);

const InstructorsSection = () => {
  return (
    <section id="instructors" className="py-16 md:py-24 bg-accent-orange bg-opacity-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who are the people behind Impact Startup Academy</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from experienced founders who have built successful organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {instructors.map(instructor => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Why did we create Impact Startup Academy?</h3>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-4">
            <p>Many of us today are unhappy with the world we see around. We want to make a difference and dream of starting something of our own to do so.</p>
            <p className="font-semibold">But how?</p>
            <p className="font-semibold">How can I build something that makes the world a better place 'AND' have financial stability while doing so?</p>
            <p>We realized there are so many unknowns while figuring out this "and"</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>How to start?</li>
              <li>How do I come up with a startup idea?</li>
              <li>How do I find others like me chasing this "AND"?</li>
              <li>What opportunities are out there for me to explore?</li>
              <li>Are there existing companies I can join, people I can work with?</li>
              <li>Who has done this before and has the lived experience to guide me?</li>
            </ul>
            <p className="font-semibold text-center mt-6">To ease your journey of finding these answers, we built Impact Startup Academy.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorsSection;
