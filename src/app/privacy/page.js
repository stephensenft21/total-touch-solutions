'use client'
import Head from 'next/head';
import { motion } from 'framer-motion';

 function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Total Touch Solutions</title>
        <meta
          name="description"
          content="Learn how Total Touch Solutions collects, uses, and protects your personal information."
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
          <h1 className="text-4xl font-extrabold text-[#BF5FAB]">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-700">
            Your privacy is important to us. Learn how we handle your data and protect your information.
          </p>
        </motion.div>

        {/* Privacy Content */}
        <section className="mt-10 bg-white rounded-lg shadow-lg p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">1. Information We Collect</h2>
            <p className="mt-4 text-lg">
              We collect information you provide directly, such as when you fill out forms or contact us. This may include your name, email address, phone number, and other details.
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">2. How We Use Your Information</h2>
            <p className="mt-4 text-lg">
              We use your data to provide, improve, and personalize our services. This includes communication, customer support, and marketing (if you opt-in).
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">3. Data Protection & Security</h2>
            <p className="mt-4 text-lg">
              We take appropriate measures to protect your personal data against unauthorized access, alteration, or disclosure.
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">4. Cookies & Tracking Technologies</h2>
            <p className="mt-4 text-lg">
              We use cookies to improve your experience on our website. You can manage cookie preferences through your browser settings.
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">5. Sharing Your Information</h2>
            <p className="mt-4 text-lg">
              We do not sell your personal information. We may share it with trusted third-party partners for business operations, under strict confidentiality agreements.
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">6. Your Rights & Choices</h2>
            <p className="mt-4 text-lg">
              You have the right to access, update, or delete your personal data. Contact us for any data-related requests.
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#BF5FAB]">7. Policy Updates</h2>
            <p className="mt-4 text-lg">
              We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.
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
              If you have any concerns about our privacy policy, please{' '}
              <a href="/contact" className="text-[#BF5FAB] underline">contact us</a>.
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
}

export default PrivacyPolicy;
