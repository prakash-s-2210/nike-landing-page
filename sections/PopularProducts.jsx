import Image from "next/image";

import { products } from "@/constants";
import { PopularProductCard } from "@/components";

const PopularProducts = () => {
  return (
    <section id='services' className='padding max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-[18px]'>
        <h2 className='text-4xl font-palanquin'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-4 font-montserrat text-slate-gray'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum hic
          a quo minima aliquam autem iusto.
        </p>
      </div>
      <div className='flex justify-end gap-[14px]'>
        <button>
          <Image
            src='/assets/icon/chevron-left.svg'
            alt='chevron left'
            width={48}
            height={48}
            quality={100}
            className='max-sm:w-8'
          />
        </button>
        <button>
          <Image
            src='/assets/icon/chevron-right.svg'
            alt='chevron right'
            width={48}
            height={48}
            quality={100}
            className='max-sm:w-8'
          />
        </button>
      </div>
      <div className='mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;