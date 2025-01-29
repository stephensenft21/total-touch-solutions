'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the cookie consent has already been given
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      Cookies.set('cookie-consent', 'true', { expires: 365 });
      setShowBanner(false);
    } catch (error) {
      console.error('Error setting cookie:', error);
    }
  };

  const handleDecline = () => {
    try {
      Cookies.set('cookie-consent', 'false', { expires: 365 });
      setShowBanner(false);
    } catch (error) {
      console.error('Error setting cookie:', error);
    }
  };

  if (!showBanner) {
    return null; // Hide the banner if consent is already given/declined
  }

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Cookie Message */}
        <p className="text-sm md:text-base text-center md:text-left">
          We use cookies to enhance your browsing experience, serve personalized ads, and analyze our traffic. By using our site, you consent to our use of cookies.{' '}
          <a href="/privacy" className="underline text-[#BF5FAB]">
            Learn more
          </a>.
        </p>

        {/* Buttons */}
        <div className="mt-4 md:mt-0 flex space-x-4">
          <button
            onClick={handleAccept}
            className="bg-[#BF5FAB] hover:bg-[#9b4d92] text-white px-4 py-2 rounded shadow"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded shadow"
          >
            Decline
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
