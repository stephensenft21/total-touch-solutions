'use client'
import Head from 'next/head';
import { motion } from 'framer-motion';

export function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - Total Touch Solutions</title>
        <meta
          name="description"
          content="Read the terms and conditions governing the use of Total Touch Solutions' services."
        />
      </Head>

      <main className="bg-gray-100 text-gray-800 py-10 px-6 md:px-16 lg:px-24">
        {/* Header Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-extrabold text-[#BF5FAB]">Terms of Service</h1>
          <p className="mt-4 text-lg text-gray-700">
            Please read our terms and conditions before using our services.
          </p>
        </motion.div>

        {/* Terms Content */}
        <section className="mt-10 bg-white rounded-lg shadow-lg p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">1. Acceptance of Terms</h2>
            <p className="mt-4 text-lg">
              By accessing or using Total Touch Solutions&apos; services, you agree to comply with and be bound by these terms.
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">2. Service Usage</h2>
            <p className="mt-4 text-lg">
              Our services are available to individuals and businesses. Misuse of our services may result in suspension or termination of service.
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">3. Payment & Billing</h2>
            <p className="mt-4 text-lg">
              Payments for services must be made as per the agreed terms. Late or non-payment may result in additional charges or service suspension.
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">4. Cancellation & Refunds</h2>
            <p className="mt-4 text-lg">
              Service cancellations must be made at least 24 hours in advance. Refund eligibility is subject to review.
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">5. Liability Limitations</h2>
            <p className="mt-4 text-lg">
              Total Touch Solutions is not responsible for damages arising from misuse of our services beyond reasonable control.
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">6. Changes to Terms</h2>
            <p className="mt-4 text-lg">
              We reserve the right to update these terms at any time. Continued use of our services implies agreement to the updated terms.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">Have Questions?</h2>
            <p className="mt-4 text-lg">
              If you have any questions regarding our terms, please <a href="/contact" className="text-[#BF5FAB] underline">contact us</a>.
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
}

export default TermsOfService;