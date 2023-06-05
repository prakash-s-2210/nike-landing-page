import Image from "next/image";

import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <section className='bg-pale-blue pt-[78px] pb-[70px] max-md:px-16 max-sm:px-10 max-[500px]:px-5'>
      <h3 className='font-palanquin text-center text-4xl'>
        What Our{" "}
        <span className='inline-block font-palanquin text-4xl text-coral-red'>
          Customers{" "}
        </span>
        Say?
      </h3>
      <p className='mt-4 max-w-lg m-auto font-montserrat text-center text-slate-gray text-lg leading-[30px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
        accusantium numquam fuga!
      </p>
      <div className='flex flex-1 justify-end gap-[14px] -mt-2 max-md:mt-2 pr-[124px] max-md:pr-0'>
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
      <div className='flex flex-1 justify-between items-center max-lg:flex-col gap-14 mt-5 px-[148px] max-md:px-0'>
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

export default Review;
