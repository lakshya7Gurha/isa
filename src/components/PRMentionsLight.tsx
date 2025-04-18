"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PRMentionsLight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full py-8 mt-8 border-t border-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-500 mb-4 text-sm uppercase tracking-wider">As Featured In</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Build3 Logo */}
            <Link 
              href="https://www.bwdisrupt.com/article/build3-introduces-impact-startup-academy-534032"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="h-full flex items-center justify-center">
                  <span className="text-gray-800 font-bold text-lg">BW Disrupt</span>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                "Build3 Introduces Impact Startup Academy"
              </div>
            </Link>
            
            {/* YourStory Logo */}
            <Link 
              href="https://yourstory.com/2024/09/startup-news-updates-daily-roundup-september-23-bigbasket-bhive"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="h-full flex items-center justify-center">
                  <span className="text-gray-800 font-bold text-lg">YourStory</span>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                "Featured in Daily Startup Roundup"
              </div>
            </Link>
          </div>
          
          <div className="mt-6 max-w-2xl text-center">
            <p className="text-gray-600 text-sm italic">
              "Our objective is to create a course that offers comprehensive knowledge that individuals require to create a world changing impact startup."
            </p>
            <p className="text-gray-500 text-xs mt-2">- Gaurav Singh, Impact Entrepreneur and Co-creator of ISA</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PRMentionsLight; 