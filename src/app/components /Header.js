"use client";
import Link from "next/link";
import Image from "next/image";
import myImage from "../../../public/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="bg-gray-900 text-white py-6 px-8 shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src={myImage}
              alt="Total Touch Solutions Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <motion.h1
            className="text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Total Touch Solutions
          </motion.h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["Services", "About", "Contact", "Book Now"].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <Link
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-[#BF5FAB] transition-all"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
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
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-gray-900 text-white shadow-md md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              {["Services", "About", "Contact", "Book Now"].map(
                (item, index) => (
                  <motion.li key={index} whileHover={{ scale: 1.1 }}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "")}`}
                      className="hover:text-[#BF5FAB] transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
