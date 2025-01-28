"use client"
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StyledButton } from '../app/components /Button';
import About from '../app/about /page';
import {BookingForm} from '../app/components /BookingForm';
import Services from './service/page';
import ContactForm from '../app/components /ContactForm'


export default function Home() {
  return (
    <>
      <Head>
        <title>Total Touch Solutions</title>
        <meta name="description" content="Residential and Commercial Cleaning Services" />
      </Head>
      <header className="bg-[#303030] text-white p-5 text-center">
        <motion.h1 
          className="text-3xl font-bold"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Total Touch Solutions
        </motion.h1>
        <nav className="mt-4">
          <Link href="/services" className="mx-4 text-[#BF5FAB]">Services</Link>
          <Link href="/booking" className="mx-4 text-[#BF5FAB]">Book a Consultation</Link>
          <Link href="/about" className="mx-4 text-[#BF5FAB]">About Us</Link>
          <Link href="/contact" className="mx-4 text-[#BF5FAB]">Contact</Link>
        </nav>
      </header>
      <main className="p-10 text-center bg-[#ffffff] text-[#303030]">
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Company Overview</h2>
          <p className="mt-4">
            Total Touch Solutions is a versatile service provider dedicated to meeting diverse needs in both residential and commercial environments.
            Our company prides itself on delivering high-quality, reliable services that cater to the everyday and special occasion needs of our clients.
            With a customer-centric approach, Total Touch Solutions aims to be the go-to choice for various essential services, ensuring satisfaction and peace of mind.
          </p>
        </section>

        <motion.section 
          className="mt-10"
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold">Professional Cleaning Services</h2>
          <p className="mt-4">We offer Residential and Commercial Cleaning Services tailored to your needs.</p>
          <Link href="/booking">
            <StyledButton className="mt-5 bg-[#BF5FAB] text-white py-2 px-5 rounded-lg shadow-lg">Book a Consultation</StyledButton>
          </Link>
        </motion.section>

        <section className="mt-10">
          <Services />
        </section>

        <section className="mt-10">
          <BookingForm />
        </section>

        <section className="mt-10">
          <About />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <ContactForm />
        </section>
      </main>
    </>
  );
}

