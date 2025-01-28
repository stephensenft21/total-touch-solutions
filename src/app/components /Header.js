'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="bg-[#BF5FAB] text-white shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/">Total Touch Solutions</Link>
          </motion.div>

          {/* Hamburger Menu */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-[#BF5FAB] md:bg-transparent z-50`}
          >
            <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0">
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/services" className="hover:text-gray-200 transition-all">
                  Services
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/about" className="hover:text-gray-200 transition-all">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/contact" className="hover:text-gray-200 transition-all">
                  Contact
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/booking" className="hover:text-gray-200 transition-all">
                  Book Now
                </Link>
              </motion.li>
            </ul>
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
