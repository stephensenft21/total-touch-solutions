'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-6 mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 max-w-screen-lg text-center">
        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-6 sm:space-x-4 mb-4">
          <motion.a whileHover={{ scale: 1.1 }}>
            <Link href="/privacy" className="hover:text-[#BF5FAB] transition-all text-sm sm:text-base">
              Privacy Policy
            </Link>
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }}>
            <Link href="/terms" className="hover:text-[#BF5FAB] transition-all text-sm sm:text-base">
              Terms of Service
            </Link>
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }}>
            <Link href="/contact" className="hover:text-[#BF5FAB] transition-all text-sm sm:text-base">
              Contact Us
            </Link>
          </motion.a>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 sm:w-8" />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 sm:w-8" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 sm:w-8" />
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
