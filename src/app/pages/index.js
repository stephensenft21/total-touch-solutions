import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@radix-ui/react-button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Total Touch Solutions</title>
        <meta name="description" content="Residential and Commercial Cleaning Services" />
      </Head>
      <header className="bg-purple-600 text-white p-5 text-center">
        <motion.h1 
          className="text-3xl font-bold"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Total Touch Solutions
        </motion.h1>
        <nav className="mt-4">
          <Link href="/services" className="mx-4">Services</Link>
          <Link href="/booking" className="mx-4">Book a Consultation</Link>
          <Link href="/about" className="mx-4">About Us</Link>
          <Link href="/contact" className="mx-4">Contact</Link>
        </nav>
      </header>
      <main className="p-10">
        <motion.section 
          className="text-center"
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold">Professional Cleaning Services</h2>
          <p className="mt-4">We offer Residential and Commercial Cleaning Services tailored to your needs.</p>
          <Link href="/booking">
            <Button className="mt-5 bg-black text-white py-2 px-5 rounded-lg shadow-lg">Book a Consultation</Button>
          </Link>
        </motion.section>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>&copy; 2025 Total Touch Solutions. All Rights Reserved.</p>
      </footer>
    </>
  );
}
