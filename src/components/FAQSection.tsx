"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this a self-paced course?",
      answer: "No, this is a live-consumption course i.e. the course content can only be consumed during the live sessions. Each session will be 60-70 minutes of recorded video lesson and 20-30 minutes of small group discussions with other participants in breakout rooms."
    },
    {
      question: "what is the session schedule?",
      answer: `this is what each week of the course will look like
- monday & wednesday from 6 to 8 pm ist: live sessions
- sunday afternoon: assignment submission deadline.`
    },
    {
      question: "What if I miss a session, can I watch it later",
      answer: `
The session recording will be available for one quarter post the session. session slide decks will be available to you forever. Think of this like any other online course, with the added magic of meeting and interacting with the people learning with you. To encourage the serendipity that comes out of chances like these, we made this a live-consumption course with the recordings available for only a limited duration. once you enroll, we hope you will make time for this learning experience in your schedule <3`
    },
    {
      question: "Is this an instructor-led course?",
      answer: "as mentioned above, each session will have a recorded video lesson of the instructor along with live group discussions - for which there are curated prompts, allowing you to meet and interact with the course peers. While the instructors do not join the live sessions, this format allows us to keep the course affordable and accessible to a wider audience."
    },
    {
      question: "What is a squad?",
      answer: "a squad is a group for 3 to 5 participants from the cohort. you will be assigned to a squad on joining the cohort. every week there will be an assignment, for which it is recommended you have a squad chat. This chat will be a place to discuss the assignment, share ideas, get feedback on your creation & support each other through challenges."
    },
    {
      question: "What is the certificate eligibility?",
      answer: "all participants who maintain attendance above 75% and complete all weekly assignments in time get access to a certificate from build3."
    },
    {
      question: "What's the refund policy?",
      answer: "We offer a 14-day money-back guarantee if you're not satisfied with the course."
    },
    {
      question: "how can i get the manipal certificate?",
      answer: "build3 has recently partnered with Srishti Manipal Institute of Art, Design & Technology (constituent on mahe, manipal). participants who fulfil the above certificate eligibility and would like to avail a ugc-recognized digital certificate from the institute can do so by paying a fee of ₹300 directly to srishti manipal institute. build3 or impact startup academy does not receive any part of this certificate fee. however, we will help you with the simple process to receive the certificate."
    },
    {
      question: "What are the additional opportunities I could get after the course?",
      answer: "the most committed Participants i.e. who attend the live sessions, actively participate in the breakout groups, engage in squad chats, submit assignments on time, contribute to conversations on circle etc. stand a chance to win a few mystery prizes, and these will be revealed at the end of each cohort"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 