'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

function Services() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure animations & client-only logic run after hydration
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Our Services - Total Touch Solutions</title>
        <meta
          name="description"
          content="Explore the diverse services offered by Total Touch Solutions, including general labor tasks, handyman services, lawn care, event staffing, and more."
        />
      </Head>

      <main className="bg-gray-100 text-gray-800 py-10 px-6 md:px-16 lg:px-24">
        {/* Header Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-4xl font-extrabold text-[#BF5FAB]">Our Services</h1>
            <p className="mt-4 text-lg">
              Simplifying your life with professional and reliable services tailored to your needs.
            </p>
          </motion.div>
        </div>

        {/* Services Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {isClient && (
            <>
              {[
                {
                  title: 'Handyman Services',
                  description: 'Assisting with minor repairs and installations to keep your spaces functional and efficient.',
                },
                {
                  title: 'Assembly & Disassembly',
                  description: 'Building or taking apart furniture and equipment with precision and care.',
                },
                {
                  title: 'Interior Painting',
                  description: 'Professional painting services for a fresh and vibrant look in homes and businesses.',
                },
                {
                  title: 'Organizing & Decluttering',
                  description: 'Helping clients optimize their spaces for better functionality and peace of mind.',
                },
                {
                  title: 'Lawn Maintenance',
                  description: 'Regular mowing, trimming, and upkeep to maintain a pristine lawn.',
                },
                {
                  title: 'Landscaping',
                  description: 'Enhancing outdoor spaces for beauty and utility with expert care.',
                },
                {
                  title: 'Event Staffing',
                  description: 'Providing staff for seamless execution of weddings and parties, including setup and breakdown.',
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                >
                  <h2 className="text-2xl font-bold text-[#BF5FAB]">{service.title}</h2>
                  <p className="mt-4">{service.description}</p>
                </motion.div>
              ))}
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default Services;