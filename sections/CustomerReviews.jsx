import Image from "next/image";

import { ReviewCard } from "@/components";

const CustomerReviews = () => {
  return (
    <section className='bg-pale-blue padding'>
      <h3 className='font-palanquin text-center text-4xl'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='mt-4 max-w-lg m-auto font-montserrat text-center text-slate-gray text-lg leading-[30px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
        accusantium numquam fuga!
      </p>
      <div className='flex justify-end gap-[14px] mt-10'>
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
      <div className='flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 mt-5'>
        <ReviewCard
          source='/assets/images/customer1.svg'
          customerName='Morich Brown'
          rating={4.5}
        />
        <ReviewCard
          source='/assets/images/customer2.svg'
          customerName='Lota Mongeskar'
          rating={4.5}
        />
      </div>
    </section>
  );
};

export default CustomerReviews;
