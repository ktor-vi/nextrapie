'use client'
import Head from 'next/head';
import qs from 'qs';
import * as React from 'react';
import '@/lib/env';

import { HeroSection } from './components/heroSection';

const query = qs.stringify({
  populate: {
    heroSection: {
      populate: {
        image: {
          fields: ['url', 'alternativeText'],
        },
        heading: true,
        subheading: true,
        arrowlink: {
          fields: ['url', 'text'],
        },
      },
    },
  },
});

async function getStrapiData(url: string, query?: string) {
  const baseUrl = process.env.STRAPI_URL;
  try {
    const response = await fetch(`${baseUrl}${url}?${query}`, {
      cache: 'no-store',
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    return `error`;
  }
}

export default async function Home() {
  const strapiData = await getStrapiData('/api/home-page', query);
    if (!strapiData || !strapiData.heroSection || !strapiData.heroSection.length) {
    return (
      <main>
        <p>Loading home page content...</p>
      </main>
    );
  }
  const { heroSection } = strapiData;
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-black min-h-screen'>
        {/* <h1 className='text-6xl text-white text-center font-bold'>{title}</h1> */}
        <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
          <HeroSection data={heroSection[0]} />
        </div>
        <footer className='absolute bottom-2 text-gray-700'>
          {/* © {new Date().getFullYear()} - {title} */}
        </footer>
      </section>
    </main>
  );
}
