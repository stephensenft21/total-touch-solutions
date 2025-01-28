'use client'
import { InlineWidget } from 'react-calendly';
import Head from 'next/head';

 function BookingForm() {
  return (
    <>
      <Head>
        <title>Book a Consultation - Total Touch Solutions</title>
        <meta
          name="description"
          content="Book a consultation with Total Touch Solutions for personalized cleaning, labor, or event services."
        />
      </Head>
      <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10 px-6 md:px-16 lg:px-24">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#BF5FAB]">Book a Consultation</h1>
          <p className="mt-4 text-lg text-gray-700">
            Schedule a personalized consultation with Total Touch Solutions to discuss your specific needs. It&apos;s quick and easy!
          </p>
        </div>

        {/* Calendly Widget Section */}
        <div className="mt-10 w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <InlineWidget
            url="https://calendly.com/totaltouchsolutions25"
            styles={{
              height: '600px',
              width: '100%',
            }}
          />
        </div>
      </main>
    </>
  );
} 
export default BookingForm 