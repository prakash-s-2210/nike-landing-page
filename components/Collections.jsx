import Image from "next/image";
import Button from "./Button";
const Collections = () => {
  return (
    <section className="w-full mt-[71px]">
      <div className="m-0 min-w-[50%] max-w-[50%] pl-[120px]">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-[6px] font-palanquin text-8xl leading-[106px]">
          <span className="relative z-20 inline-block  text-8xl leading-[106px] bg-white">
            The New Arrival
          </span>{" "}
          <span className="inline-block text-8xl  leading-[106px] text-coral-red">Nike</span>{" "}
          Shoes
        </h1>
        <p className="mt-5 font-montserrat text-slate-gray text-lg leading-[30px] max-w[467px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          repellendus.
        </p>
        <div className="mt-[60px]"> 
          <Button label="Shop now" source="/assets/icon/arrow-right.svg" />
        </div>
        <div className="flex flex-1 mt-[78px] gap-[60px]">
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
      <div className="w-[50vw] absolute right-0 top-0">
        <Image
          src="/assets/images/collections-bg1.svg"
          alt="collection shoe background"
          width={762}
          height={836}
          original={100}
          className="relative opacity-50 object-contain"
        />
        <Image
          src="/assets/images/shoe1.png"
          alt="colletion shoe"
          width={550}
          height={550}
          original={100}
          className="absolute top-1/4 left-20 object-contain m-0"
        />
      </div>
    </section>
  );
};

export default Collections;
