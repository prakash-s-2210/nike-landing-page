'use client';
import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import ShoeCollectionCard from "./ShoeCollectionCard";
const Collections = () => {
  const [source, setSource] = useState("/assets/images/big-shoe1.png");
  const images = [
    { thumbnail: '/assets/images/thumbnail-shoe1.svg', bigShoe: '/assets/images/big-shoe1.png' },
    { thumbnail: '/assets/images/thumbnail-shoe2.svg', bigShoe: '/assets/images/big-shoe2.png' },
    { thumbnail: '/assets/images/thumbnail-shoe3.svg', bigShoe: '/assets/images/big-shoe3.png' }
  ];
  const changeShoeImage = (imgSrc) => {
    setSource(imgSrc);
  }
  return (
    <section className="flex items-start max-xl:flex-col max-xl:gap-10 w-full pt-[68px] max-sm:pt-8 max-xl:px-[120px] max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
      <div className="pl-[120px] max-xl:pl-0 m-0 min-w-[47%] max-w-[50%] max-xl:max-w-none max-xl:min-w-none">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="max-w-lg max-xl:max-w-none mt-[6px] font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-20 pr-2 inline-block text-8xl max-sm:text-[72px] max-sm:leading-[82px] max-xl:w-full whitespace-nowrap max-xl:whitespace-normal  bg-white">
            The New Arrival
          </span>{" "}
          <span className="inline-block text-8xl max-sm:text-[72px] max-sm:leading-[82px] text-coral-red">
            Nike
          </span>{" "}
          Shoes
        </h1>
        <p className="m-0 mt-5 max-w-sm max-xl:max-w-none font-montserrat text-slate-gray text-lg leading-[30px] max-w[467px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          repellendus.
        </p>
        <div className="mt-[60px]">
          <Button label="Shop now" source="/assets/icon/arrow-right.svg" />
        </div>
        <div className="flex flex-1 max-sm[500px]:justify-between max-[500px]:flex-wrap mt-[78px] gap-[60px] max-[500px]:gap-5">
          <div className="min-w-max m-0">
            <p className="text-4xl font-palanquin">1k+</p>
            <p className="leading-7 font-montserrat text-slate-gray">Brands</p>
          </div>
          <div className="min-w-max m-0">
            <p className="text-4xl font-palanquin ">500+</p>
            <p className="leading-7 font-montserrat text-slate-gray">Shops</p>
          </div>
          <div className="min-w-max m-0">
            <p className="text-4xl font-palanquin">250k+</p>
            <p className="leading-7 font-montserrat text-slate-gray">
              Customers
            </p>
          </div>
        </div>
      </div>
      <div className="relative -top-[211px] right-0 max-xl:top-0">
        <Image
          src="/assets/images/collection-background.svg"
          alt="shoe collection background"
          width={762}
          height={836}
          original={100}
          className=" object-contain m-0 "
        />
        <div id = "element-to-animate" className="min-w-fit">
          <Image
            src={source}
            alt="shoe colletion"
            width={610}
            height={502}
            original={100}
            className="object-contain m-0 absolute top-[20%] left-[10%] w-[75%]"
          />
        </div>
        <div className="flex gap-6 absolute -bottom-[5%] left-[10%] max-md:mx-5 max-md:my-auto max-md:justify-center max-md:items-center max-md:left-0 max-md:right-0">
          {images.map((image, index) => {
            return(
              <div key={index}>
                <ShoeCollectionCard index={index} imgSource={image} changeShoeImage = {changeShoeImage} source = {source}/>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Collections;