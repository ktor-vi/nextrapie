import Head from 'next/head';
import qs from 'qs';
import * as React from 'react';

import { HeroSection } from '@/components/herosection';

const query = qs.stringify({
  populate: {
    heroSection: {
      populate: {
        deskImage: {
          fields: ['url', 'alternativeText', 'width', 'height'],
        },
        mobileImage: {
          fields: ['url', 'alternativeText', 'width', 'height'],
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
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
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
  if (
    !strapiData ||
    !strapiData.heroSection ||
    !strapiData.heroSection.length
  ) {
    return (
      <main>
        <p>Loading home page content...</p>
      </main>
    );
  }
  const { heroSection } = strapiData;
  return (
      <section>
        <div className='min-w-screen flex flex-col items-center justify-center text-center'>
          <HeroSection data={heroSection[0]} />
        </div>
        {/* <footer className='absolute bottom-2 text-gray-700'> */}
        {/*   © {new Date().getFullYear()} - {title} */}
        {/* </footer> */}
      </section>
  );
}
