import PopularProductCard from "./PopularProductCard";
import Image from "next/image";
const PopularProducts = () => {
  return (
    <section className="pt-[201px] px-[120px] max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
      <div className="flex flex-col justify-start  m-0 gap-[18px]">
        <h2 className="text-4xl font-palanquin">
          Our{" "}
          <span className="inline-block text-4xl font-palanquin text-coral-red">
            Popular
          </span>{" "}
          Products
        </h2>
        <p className="max-w-lg max-lg:max-w-full mt-4 break-words font-montserrat text-slate-gray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum hic
          a quo minima aliquam autem iusto.
        </p>
      </div>
      <div className="flex flex-1 -mt-3 max-lg:mt-3 justify-end gap-[14px]">
        <button>
          <Image
            src="/assets/icon/chevron-left.svg"
            alt="chevron left"
            width={48}
            height={48}
            quality={100}
            className="max-sm:w-8"
          />
        </button>
        <button>
          <Image
            src="/assets/icon/chevron-right.svg"
            alt="chevron right"
            width={48}
            height={48}
            quality={100}
            className="max-sm:w-8"
          />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-14">
        <PopularProductCard
          source="/assets/images/shoe4.svg"
          productName="Nike Air Jordan-01"
          productPrice="$200.20"
        />
        <PopularProductCard
          source="/assets/images/shoe5.svg"
          productName="Nike Air Jordan-10"
          productPrice="$210.20"
        />
        <PopularProductCard
          source="/assets/images/shoe6.svg"
          productName="Nike Air Jordan-100"
          productPrice="$220.20"
        />
        <PopularProductCard
          source="/assets/images/shoe7.svg"
          productName="Nike Air Jordan-001"
          productPrice="$230.20"
        />
      </div>
    </section>
  );
};

export default PopularProducts;
