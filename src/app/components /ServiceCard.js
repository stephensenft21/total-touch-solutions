import Head from 'next/head';
import { motion } from 'framer-motion';

export function Services() {
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
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-extrabold text-[#BF5FAB]">Our Services</h1>
          <p className="mt-4 text-lg">
            Simplifying your life with professional and reliable services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Handyman Services */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">Handyman Services</h2>
            <p className="mt-4">
              Assisting with minor repairs and installations to keep your spaces functional and efficient.
            </p>
          </motion.div>

          {/* Assembly and Disassembly */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">Assembly & Disassembly</h2>
            <p className="mt-4">
              Building or taking apart furniture and equipment with precision and care.
            </p>
          </motion.div>

          {/* Interior Painting */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">Interior Painting</h2>
            <p className="mt-4">
              Professional painting services for a fresh and vibrant look in homes and businesses.
            </p>
          </motion.div>

          {/* Organizing & Decluttering */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">Organizing & Decluttering</h2>
            <p className="mt-4">
              Helping clients optimize their spaces for better functionality and peace of mind.
            </p>
          </motion.div>

          {/* Lawn Maintenance */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">Lawn Maintenance</h2>
            <p className="mt-4">
              Regular mowing, trimming, and upkeep to maintain a pristine lawn.
            </p>
          </motion.div>

          {/* Landscaping */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">Landscaping</h2>
            <p className="mt-4">
              Enhancing outdoor spaces for beauty and utility with expert care.
            </p>
          </motion.div>

          {/* Weddings and Parties */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">Event Staffing</h2>
            <p className="mt-4">
              Providing staff for seamless execution of weddings and parties, including setup and breakdown.
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
}
