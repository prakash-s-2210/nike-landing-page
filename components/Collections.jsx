"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "./Button";
import ShoeCollectionCard from "./ShoeCollectionCard";

const images = [
  {
    thumbnail: "/assets/images/thumbnail-shoe1.svg",
    bigShoe: "/assets/images/big-shoe1.png",
  },
  {
    thumbnail: "/assets/images/thumbnail-shoe2.svg",
    bigShoe: "/assets/images/big-shoe2.png",
  },
  {
    thumbnail: "/assets/images/thumbnail-shoe3.svg",
    bigShoe: "/assets/images/big-shoe3.png",
  },
];

const Collections = () => {
  const [source, setSource] = useState("/assets/images/big-shoe1.png");

  const changeShoeImage = (imgSrc) => {
    setSource(imgSrc);
  };

  return (
    <section className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 padding-b'>
      <div className='relative xl:w-[40%] flex flex-col justify-center items-start w-full padding-l pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-[30px] mt-6 mb-14 sm:max-w-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          repellendus.
        </p>

        <Button label='Shop now' iconURL='/assets/icon/arrow-right.svg' />

        <div className='flex justify-start items-start flex-wrap w-full mt-[78px] gap-[60px]'>
          <div>
            <p className='text-4xl font-palanquin'>1k+</p>
            <p className='leading-7 font-montserrat text-slate-gray'>Brands</p>
          </div>
          <div>
            <p className='text-4xl font-palanquin '>500+</p>
            <p className='leading-7 font-montserrat text-slate-gray'>Shops</p>
          </div>
          <div>
            <p className='text-4xl font-palanquin'>250k+</p>
            <p className='leading-7 font-montserrat text-slate-gray'>
              Customers
            </p>
          </div>
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <Image
          src={source}
          alt='shoe colletion'
          width={610}
          height={502}
          original={100}
          className='object-contain relative z-10'
        />

        <div className='flex gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {images.map((image, index) => (
            <div key={index}>
              <ShoeCollectionCard
                index={index}
                imgSource={image}
                changeShoeImage={changeShoeImage}
                source={source}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
