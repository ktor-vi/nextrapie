import NextImage from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import baseUrl from '@/utils/urls'

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { buttonVariants } from "@/components/ui/button"

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
  deskImage: Image;
  mobileImage: Image;
  arrowlink: Link;
}

export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading, deskImage, mobileImage, arrowlink } = data;
   
  const imageURL = process.env.NEXT_PUBLIC_STRAPI_URL + (isMobile ? mobileImage.url : deskImage.url);

  console.log(imageURL);
  return (
    <div      style={{
      // use relative position for the parent div
      position: "relative",
      width: "100vw",
      height: "90vh",
    }}>
      <NextImage
        alt='Background'
        className='object-fill -z-10'
        objectFit={'cover'}
        overflow={'hidden'}
        src={imageURL}
        fill={true}
        // width={isMobile ? mobileImage.width : deskImage.width}
      />
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center bg-opacity-20'>
        <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
          {heading} ff
        </h1>
        <p className='mt-4 text-lg md:text-xl lg:text-2xl'>{subHeading}</p>
        <Link className={buttonVariants({ variant: "outline" })} key={arrowlink.id} href={arrowlink.url}>
          {arrowlink.text}
        </Link>
      </div>
    </div>
  );
}
