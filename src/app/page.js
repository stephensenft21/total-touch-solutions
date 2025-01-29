"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { StyledButton } from "../app/components /Button";
import About from "./about/page";
import { BookingForm } from "../app/components /BookingForm";
import Services from "./services/page";

import myImage from "../../public/logo.jpg";
// import ContactForm from "../app/components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Total Touch Solutions</title>
        <meta
          name="description"
          content="Residential and Commercial Cleaning Services"
        />
      </Head>

      {/* Main Content */}
      <main className="bg-gray-100 text-gray-800 py-10 px-6 md:px-16 lg:px-24">
        {/* Company Overview */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Company Overview</h2>
          <p className="mt-4 text-lg leading-relaxed max-w-4xl mx-auto">
            Total Touch Solutions is a versatile service provider dedicated to
            meeting diverse needs in both residential and commercial
            environments. Our company prides itself on delivering high-quality,
            reliable services that cater to the everyday and special occasion
            needs of our clients. With a customer-centric approach, we aim to be
            the go-to choice for essential services, ensuring satisfaction and
            peace of mind.
          </p>
        </section>

        {/* Cleaning Services */}
        <motion.section
          className="mb-16 text-center bg-white p-8 rounded-lg shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Professional Cleaning Services
          </h2>
          <p className="mt-4 text-lg">
            We offer Residential and Commercial Cleaning Services tailored to
            your needs.
          </p>
          <Link href="/booking">
            <StyledButton
              className="mt-16 pt-4 bg-[#BF5FAB] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#9b4d92] transition-all"
              text={"Book a Consultation"}
            />
          </Link>
        </motion.section>

        {/* Services Section */}
        <section className="mb-16">
          <Services />
        </section>

        {/* Booking Form */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Book a Consultation
          </h2>
          <BookingForm />
        </section>

        {/* About Section */}
        <section className="mb-16">
          <About />
        </section>
      </main>
    </>
  );
}
