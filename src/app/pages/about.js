import Head from 'next/head';

export function About() {
    return (
      <>
        <Head>
          <title>About Us - Total Touch Solutions</title>
        </Head>
        <main className="p-10 text-center">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="mt-4">Total Touch Solutions provides high-quality residential and commercial cleaning services, ensuring customer satisfaction and cleanliness.</p>
        </main>
      </>
    );
  }