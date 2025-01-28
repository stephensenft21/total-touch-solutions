// "use client"
// import Head from 'next/head';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Button } from '@radix-ui/react-button';
// import { TextField } from '@radix-ui/react-text-field';
// import { useState } from 'react';
// import About from './about';
// import Booking from '../booking/page';
// import Services from '../service/page';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Total Touch Solutions</title>
//         <meta name="description" content="Residential and Commercial Cleaning Services" />
//       </Head>
//       <header className="bg-[#303030] text-white p-5 text-center">
//         <motion.h1 
//           className="text-3xl font-bold"
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1 }} 
//           transition={{ duration: 1 }}
//         >
//           Total Touch Solutions
//         </motion.h1>
//         <nav className="mt-4">
//           <Link href="/services" className="mx-4 text-[#BF5FAB]">Services</Link>
//           <Link href="/booking" className="mx-4 text-[#BF5FAB]">Book a Consultation</Link>
//           <Link href="/about" className="mx-4 text-[#BF5FAB]">About Us</Link>
//           <Link href="/contact" className="mx-4 text-[#BF5FAB]">Contact</Link>
//         </nav>
//       </header>
//       <main className="p-10 text-center bg-[#ffffff] text-[#303030]">
//         <section className="mt-10">
//           <h2 className="text-2xl font-semibold">Company Overview</h2>
//           <p className="mt-4">
//             Total Touch Solutions is a versatile service provider dedicated to meeting diverse needs in both residential and commercial environments.
//             Our company prides itself on delivering high-quality, reliable services that cater to the everyday and special occasion needs of our clients.
//             With a customer-centric approach, Total Touch Solutions aims to be the go-to choice for various essential services, ensuring satisfaction and peace of mind.
//           </p>
//         </section>

//         <motion.section 
//           className="mt-10"
//           initial={{ y: 50, opacity: 0 }} 
//           animate={{ y: 0, opacity: 1 }} 
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-2xl font-semibold">Professional Cleaning Services</h2>
//           <p className="mt-4">We offer Residential and Commercial Cleaning Services tailored to your needs.</p>
//           <Link href="/booking">
//             <Button className="mt-5 bg-[#BF5FAB] text-white py-2 px-5 rounded-lg shadow-lg">Book a Consultation</Button>
//           </Link>
//         </motion.section>

//         <section className="mt-10">
//           <Services />
//         </section>

//         <section className="mt-10">
//           <Booking />
//         </section>

//         <section className="mt-10">
//           <About />
//         </section>

//         <section className="mt-10">
//           <h2 className="text-2xl font-semibold">Contact Us</h2>
//           <ContactForm />
//         </section>
//       </main>
//       <footer className="bg-[#303030] text-white text-center p-4 mt-10">
//         <p>&copy; 2025 Total Touch Solutions. All Rights Reserved.</p>
//       </footer>
//     </>
//   );
// }

// function ContactForm() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you ${formData.name}, we will get back to you soon!`);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-5 space-y-4">
//       <TextField.Root className="block w-full">
//         <TextField.Input 
//           type="text" 
//           name="name" 
//           placeholder="Your Name" 
//           className="block w-full p-2 border rounded" 
//           onChange={handleChange} 
//           required
//         />
//       </TextField.Root>
//       <TextField.Root className="block w-full">
//         <TextField.Input 
//           type="email" 
//           name="email" 
//           placeholder="Your Email" 
//           className="block w-full p-2 border rounded" 
//           onChange={handleChange} 
//           required
//         />
//       </TextField.Root>
//       <TextField.Root className="block w-full">
//         <TextField.Input 
//           asChild
//           placeholder="Your Message"
//           className="block w-full p-2 border rounded"
//         >
//           <textarea name="message" onChange={handleChange} required></textarea>
//         </TextField.Input>
//       </TextField.Root>
//       <Button type="submit" className="bg-[#BF5FAB] text-white py-2 px-5 rounded-lg shadow-lg">Submit</Button>
//     </form>
//   );
// }