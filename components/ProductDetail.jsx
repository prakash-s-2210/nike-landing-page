import Image from "next/image";
import Button from "./Button";
const ProductDetail = () => {
  return (
    <section id = "about-us" className="pt-[122px] flex flex-1 justify-between items-center max-lg:flex-col max-lg:gap-10 w-full pl-[120px] pr-[86px] max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
      <div className="w-1/2 max-lg:w-full flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl max-w-lg max-lg:max-w-full">
          We Provide You{" "}
          <span className="inline-block capitalize text-4xl text-coral-red">
            Super
          </span>{" "}
          <span className="inline-block capitalize text-4xl text-coral-red">
            Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="mt-4 max-w-lg max-lg:max-w-full font-montserrat text-slate-gray text-lg leading-[28px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          ad iusto quos minus. Expedita consequatur magnam non ipsa in
          voluptatem voluptas labore unde et, veritatis .
        </p>
        <p className="mt-6 max-w-lg max-lg:max-w-full font-montserrat text-slate-gray text-lg leading-[28px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat?
        </p>
        <div className="m-0 mt-[51px]">
          <Button label="View details"/>
        </div>
      </div>
      <div className="w-1/2 max-lg:w-[65%] max-md:w-[70%] max-sm:w-full m-0">
        <Image
          src="/assets/images/shoe8.svg"
          alt="product detail"
          width={570}
          height={522}
          quality={100}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default ProductDetail;
