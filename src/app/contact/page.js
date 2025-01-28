'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { StyledButton } from '../components /Button';

 function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, we will get back to you soon!`);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mt-5 space-y-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Name Input */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BF5FAB] transition-all"
          onChange={handleChange}
          required
        />
      </motion.div>

      {/* Email Input */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BF5FAB] transition-all"
          onChange={handleChange}
          required
        />
      </motion.div>

      {/* Message Input */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Write your message here..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BF5FAB] transition-all"
          rows="4"
          onChange={handleChange}
          required
        />
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <StyledButton
        text={"Submit"}
          type="submit"
          className="bg-[#BF5FAB] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#a34d92] transition-all duration-300 w-full"
        >
    
        </StyledButton>
      </motion.div>
    </motion.form>
  );
}
export default ContactForm