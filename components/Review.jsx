import ReviewCard from "./ReviewCard";
import Image from "next/image";
const Review = () => {
  return (
    <div className="bg-pale-blue  py-28 max-sm:py-20 px-20 max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
      <h3 className="font-palanquin text-center text-5xl max-sm:text-4xl">
        What Our{" "}
        <span className="font-palanquin inline-block text-5xl max-sm:text-4xl text-coral-red">
          Customers{" "}
        </span>
        Say?
      </h3>
      <p className="font-montserrat mt-5 text-center m-auto text-slate-gray  max-w-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
        quae.
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
      <div className="flex-between px-10 max-md:px-0 max-lg:flex-col max-lg:gap-5">
        <ReviewCard
          source="/assets/images/customer1.png"
          customerName="Morich Brown"
          rating={4.5}
        />
        <ReviewCard
          source="/assets/images/customer2.png"
          customerName="Lota Mongeskar"
          rating={4.5}
        />
      </div>
    </div>
  );
};

export default Review;
