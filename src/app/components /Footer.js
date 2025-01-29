"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react"; // Importing icons

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-6 mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 max-w-screen-lg text-center">
        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-6 sm:space-x-4 mb-4">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/privacy"
              className="hover:text-[#BF5FAB] transition-all text-sm sm:text-base"
            >
              Privacy Policy
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/terms"
              className="hover:text-[#BF5FAB] transition-all text-sm sm:text-base"
            >
              Terms of Service
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/contact"
              className="hover:text-[#BF5FAB] transition-all text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-[#BF5FAB] transition"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-[#BF5FAB] transition"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-[#BF5FAB] transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </motion.a>
        </div>

        {/* Footer Text */}
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Total Touch Solutions. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
