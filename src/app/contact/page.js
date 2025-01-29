"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { StyledButton } from "../components /Button";
import Head from "next/head";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Us - Total Touch Solutions</title>
        <meta
          name="description"
          content="Get in touch with Total Touch Solutions for your residential and commercial cleaning needs."
        />
      </Head>

      {/* Header */}
      <header className="bg-gray-900 text-white py-6 px-8 shadow-md">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl font-extrabold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h1>
          <p className="mt-2 text-lg text-gray-300">
            We&apos;re here to help! Reach out to us with any inquiries.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gray-100 text-gray-800 py-10 px-6 md:px-16 lg:px-24">
        <section className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <motion.h2
            className="text-3xl font-bold text-gray-800 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Get in Touch
          </motion.h2>

          <p className="mt-4 text-lg text-gray-600 text-center">
            Fill out the form below, and we’ll get back to you as soon as
            possible.
          </p>

          {submitted ? (
            <motion.div
              className="mt-6 p-4 bg-green-100 text-green-700 text-center rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Thank you {formData.name}, we will get back to you soon!
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="mt-6 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Name Input */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                  text="Submit"
                  type="submit"
                  className="bg-[#BF5FAB] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#a34d92] transition-all duration-300 w-full"
                />
              </motion.div>
            </motion.form>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Total Touch Solutions. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

export default ContactPage;