"use client";

import Link from "next/link";
import { FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Impact Startup Academy</h3>
            <p className="text-gray-400 mb-4">
              Your 5-week guide to building startups that tackle an important societal problem AND are self-sustainable
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/build3/?" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@build3" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href="https://x.com/build3_startups" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/build3.startupstudio/" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#curriculum" className="text-gray-400 hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="#who-is-it-for" className="text-gray-400 hover:text-white transition-colors">
                  Who Is It For
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#instructors" className="text-gray-400 hover:text-white transition-colors">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="#join-now" className="text-gray-400 hover:text-white transition-colors">
                  Join Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              Have questions about the course?
            </p>
            <a
              href="mailto:isa@build3.org"
              className="text-secondary-green hover:text-secondary-green hover:underline"
            >
              isa@build3.org
            </a>
            <p className="text-gray-400 mt-4 mb-2">
              For urgent inquiries:
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=919591255928&text=Hello%20Team"
              className="inline-block bg-secondary-green hover:bg-opacity-90 text-white px-3 py-2 rounded text-sm transition-all"
            >
              WhatsApp Support
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Impact Startup Academy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="https://www.build3.org/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
