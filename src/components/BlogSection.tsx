"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaUserAlt } from "react-icons/fa";

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  delay: number;
}

const blogPosts: BlogPostProps[] = [
  {
    id: "impact-startup-examples",
    title: "10 Impact Startups That Are Changing The World",
    excerpt:
      "Discover inspiring examples of startups that are creating positive social and environmental change while building sustainable business models.",
    featuredImage: "https://ext.same-assets.com/957084807/718390907.webp",
    date: "April 15, 2025",
    author: "Gaurav Singh",
    category: "Impact Entrepreneurship",
    slug: "/blog/impact-startup-examples",
    delay: 0.1,
  },
  {
    id: "startup-fundraising",
    title: "How To Raise Funding For Your Impact Startup",
    excerpt:
      "Learn about different funding options for impact startups, from traditional venture capital to impact investors and alternative sources of capital.",
    featuredImage: "https://ext.same-assets.com/957084807/2551156624.webp",
    date: "April 10, 2025",
    author: "Varun Chawla",
    category: "Fundraising",
    slug: "/blog/startup-fundraising",
    delay: 0.2,
  },
  {
    id: "sustainable-business-models",
    title: "Building Sustainable Business Models That Scale",
    excerpt:
      "Explore different business models that allow you to create positive impact while ensuring your venture is financially sustainable in the long run.",
    featuredImage: "https://ext.same-assets.com/957084807/4092012268.webp",
    date: "April 5, 2025",
    author: "Gaurav Singh",
    category: "Business Strategy",
    slug: "/blog/sustainable-business-models",
    delay: 0.3,
  },
];

const BlogPost = ({
  title,
  excerpt,
  featuredImage,
  date,
  author,
  category,
  slug,
  delay,
}: BlogPostProps) => {
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
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={featuredImage}
          alt={title}
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-[#79c0a6] text-white text-xs font-medium py-1 px-2 rounded">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <FaUserAlt className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href="https://www.build3.org/bloghome"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-secondary-green font-medium hover:underline"
        >
          Read More <FaArrowRight className="ml-2 text-sm" />
        </Link>
      </div>
    </motion.div>
  ) : (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image src={featuredImage} alt={title} fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-secondary-green text-white text-xs font-medium py-1 px-2 rounded">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <FaUserAlt className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={slug}
          className="flex items-center text-secondary-green font-medium hover:underline"
        >
          Read More <FaArrowRight className="ml-2 text-sm" />
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="blog" className="py-16 md:py-24 bg-accent-orange bg-opacity-5">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {isClient ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact Startup Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dive into our collection of articles on impact entrepreneurship,
              from success stories to practical guides for purpose-driven
              founders
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact Startup Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dive into our collection of articles on impact entrepreneurship,
              from success stories to practical guides for purpose-driven
              founders
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              featuredImage={post.featuredImage}
              date={post.date}
              author={post.author}
              category={post.category}
              slug={post.slug}
              delay={post.delay}
            />
          ))}
        </div>

        {isClient ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="https://www.build3.org/bloghome"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white border border-gray-300 hover:bg-gray-50 text-black px-6 py-3 rounded-md font-medium transition-all"
            >
              View All Articles <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        ) : (
          <div className="text-center mt-12">
            <Link
              href="https://www.build3.org/bloghome"
              className="inline-flex _blank items-center bg-white border border-gray-300 hover:bg-gray-50 text-black px-6 py-3 rounded-md font-medium transition-all"
            >
              View All Articles <FaArrowRight className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
