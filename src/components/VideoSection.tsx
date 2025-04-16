"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

const VideoSection = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const videoId = "y703m7XSFQ4"; // Real video ID from Impact Startup Academy
  const thumbnailUrl = "https://ext.same-assets.com/957084807/1734231990.webp"; // Thumbnail image

  const playVideo = () => {
    setVideoPlaying(true);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {isClient ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sneak Peek Into The Course
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch this introductory video to understand what makes Impact
              Startup Academy unique
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sneak Peek Into The Course
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch this introductory video to understand what makes Impact
              Startup Academy unique
            </p>
          </div>
        )}

        {isClient ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-5xl aspect-video rounded-xl overflow-hidden shadow-xl"
          >
            {videoPlaying ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Impact Startup Academy Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={playVideo}
              >
                <Image
                  src={thumbnailUrl}
                  alt="Video Thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all">
                  <FaPlayCircle className="text-white text-6xl md:text-7xl opacity-90 hover:opacity-100 hover:scale-105 transition-all" />
                </div>
                <div className="absolute bottom-4 left-4 bg-secondary-green text-white py-2 px-4 rounded-md font-medium">
                  Watch Introduction
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <div className="relative mx-auto max-w-5xl aspect-video rounded-xl overflow-hidden shadow-xl">
            <div className="relative w-full h-full">
              <Image
                src={thumbnailUrl}
                alt="Video Thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                <FaPlayCircle className="text-white text-6xl md:text-7xl opacity-90" />
              </div>
              <div className="absolute bottom-4 left-4 bg-secondary-green text-white py-2 px-4 rounded-md font-medium">
                Watch Introduction
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-8 space-x-6">
          <button
            className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            onClick={() => {
              if (videoPlaying) {
                setVideoPlaying(false);
              } else {
                setVideoPlaying(true);
              }
            }}
          >
            {videoPlaying ? "Reset Video" : "Watch in English"}
          </button>
          <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            Watch in Hindi
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
