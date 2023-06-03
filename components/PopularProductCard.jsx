import Image from "next/image";
const PopularProductCard = ({ source, productName, productPrice }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image
        src={source}
        alt="Popular Shoe product"
        width={282}
        height={282}
        quality={100}
        className="w-full"
      />
      <div className="mt-[30px] flex gap-[10px] m-0 justify-start">
        <Image
          src="/assets/icon/star.svg"
          alt="rating icon"
          width={24}
          height={24}
          className="m-0"
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {productName}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {productPrice}
      </p>
    </div>
  );
};

export default PopularProductCard;
