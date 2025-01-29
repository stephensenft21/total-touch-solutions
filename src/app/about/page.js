"use client";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function About() {
  const router = useRouter();

  // Fix smooth scrolling using useEffect
  useEffect(() => {
    const scrollButton = document.getElementById("scroll-button");

    const scrollToSection = () => {
      const section = document.getElementById("mission-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (scrollButton) {
      scrollButton.addEventListener("click", scrollToSection);
    }

    return () => {
      if (scrollButton) {
        scrollButton.removeEventListener("click", scrollToSection);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>About Us - Total Touch Solutions</title>
        <meta
          name="description"
          content="Discover how Total Touch Solutions enhances quality of life with high-quality services tailored to meet your needs."
        />
      </Head>

      {/* Main Content */}
      <main className="bg-gray-100 text-gray-800 py-10 px-6 md:px-16 lg:px-24">
        {/* Hero Section */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-extrabold text-[#BF5FAB]">About Us</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              At Total Touch Solutions, we’re committed to enhancing your quality of life by offering high-quality services tailored to meet your unique needs.
            </p>
            <button
              id="scroll-button" // Unique ID for event listener
              className="mt-6 bg-[#BF5FAB] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#9b4d92] transition-all"
            >
              Learn More About Our Mission
            </button>
          </motion.div>
        </section>

        {/* Mission Statement */}
        <section id="mission-section" className="mt-16">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#BF5FAB]">Our Mission</h2>
            <p className="mt-4 text-lg">
              To enhance the quality of life for our clients by delivering exceptional services that are affordable, reliable, and tailored to their unique needs.
            </p>
          </motion.div>
        </section>

        {/* Unique Value Proposition */}
        <section className="mt-16">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#BF5FAB]">Why Choose Us?</h2>
            <ul className="mt-6 text-lg space-y-4 text-left max-w-2xl mx-auto">
              <li>✅ <strong>Tailored Services:</strong> Custom packages to fit your needs and budget.</li>
              <li>✅ <strong>Trained Professionals:</strong> Skilled and experienced staff who deliver top-notch results.</li>
              <li>✅ <strong>Reliability & Punctuality:</strong> Dependable service with consistent quality.</li>
            </ul>
          </motion.div>
        </section>

        {/* Market Positioning */}
        <section className="mt-16">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#BF5FAB]">Our Position</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Total Touch Solutions is your one-stop partner for cleaning, labor, and event staffing. Whether you’re an individual or a business, our versatility and professionalism ensure your needs are met efficiently.
            </p>
          </motion.div>
        </section>

        {/* Move-Out Cleaning and Support */}
        <section className="mt-16">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#BF5FAB]">Move-Out Cleaning & Support</h2>
            <ul className="mt-6 text-lg space-y-4 text-left max-w-2xl mx-auto">
              <li>✅ <strong>Comprehensive Cleaning:</strong> Leave spaces spotless for the next occupants.</li>
              <li>✅ <strong>Loading & Unloading:</strong> Assistance with moving heavy items safely and efficiently.</li>
            </ul>
          </motion.div>
        </section>

        {/* Call-to-Action */}
        <section className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-[#BF5FAB]">Get in Touch</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Ready to experience the Total Touch Solutions difference? Contact us today!
            </p>
            <button
              className="mt-6 bg-[#BF5FAB] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#9b4d92] transition-all"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </button>
          </motion.div>
        </section>
      </main>
    </>
  );
}

export default About;
