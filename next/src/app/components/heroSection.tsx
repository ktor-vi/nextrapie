import NextImage from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
interface Image {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface Link {
  id: number;
  url: string;
  text: string;
}

interface HeroSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  image: Image;
  arrowlink: Link;
}

export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading, image, arrowlink } = data;
  const imageURL = 'http://localhost:1337' + image.url;
  return (
    <>
      <NextImage
        alt='Background'
        className='absolute inset-0 '
        height={1080}
        src={imageURL}
        style={{
          aspectRatio: '1920/1080',
          objectFit: 'cover',
        }}
        width={1920}
      />
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20'>
        <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
          {heading}
        </h1>
        <p className='mt-4 text-lg md:text-xl lg:text-2xl'>{subHeading}</p>
        <ArrowLink key={arrowlink.id} href={arrowlink.url}>
          {arrowlink.text}
        </ArrowLink>
      </div>
    </>
  );
}
