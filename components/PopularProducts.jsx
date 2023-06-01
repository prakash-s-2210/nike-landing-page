import PopularProductCard from "./PopularProductCard";
import Image from "next/image";
const PopularProducts = () => {
  return (
    <div className="flex-column gap-5 max-[450px]:gap-7 px-20 mt-10  max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
      <div>
        <h2 className="text-5xl max-md:text-4xl">
          Our{" "}
          <span className="inline-block font-palanquin text-coral-red text-5xl max-md:text-4xl">
            Popular{" "}
          </span>{" "}
          Products
        </h2>
        <p className="mt-5 max-w-lg max-sm:text-sm font-montserrat text-slate-gray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum hic
          a quo minima aliquam autem iusto dolor sed molestiae.
        </p>
        <div className="flex flex-1 justify-end gap-3">
          <button>
            <Image
              src="/assets/icon/chevron-left.png"
              alt="chevron left"
              width={48}
              height={48}
              quality={100}
              className="max-sm:w-8"
            />
          </button>
          <button>
            <Image
              src="/assets/icon/chevron-right.png"
              alt="chevron right"
              width={48}
              height={48}
              quality={100}
              className="max-sm:w-8"
            />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5  max-xl:grid-cols-3 max-lg:grid-cols-2 max-[450px]:grid-cols-1">
        <PopularProductCard
          source="/assets/images/shoe4.png"
          productName="Nike Air Jordan-01"
          productPrice="$200.20"
        />
        <PopularProductCard
          source="/assets/images/shoe5.png"
          productName="Nike Air Jordan-10"
          productPrice="$210.20"
        />
        <PopularProductCard
          source="/assets/images/shoe6.png"
          productName="Nike Air Jordan-100"
          productPrice="$220.20"
        />
        <PopularProductCard
          source="/assets/images/shoe7.png"
          productName="Nike Air Jordan-001"
          productPrice="$230.20"
        />
      </div>
    </div>
  );
};

export default PopularProducts;
