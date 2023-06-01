import Image from "next/image";
import Button from "./Button";
const ShoePromotion = () => {
  return (
    <div className="flex-between gap-10 max-lg:flex-col-reverse  max-lg:gap-10 w-full mb-10">
      <div className="w-1/2 max-lg:w-full max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
          <Image
            src="/assets/images/offer.png"
            alt="Shoe Promotion"
            width={773}
            height={687}
            quality={100}
            className="object-contain"
          />
          
      </div>
      <div className="flex flex-1 flex-col  pl-10 w-1/2  max-lg:self-start max-lg:w-full  max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
        <h2 className="text-5xl  font-palanquin max-sm:text-4xl">
          <span className="inline-block text-5xl font-palanquin max-sm:text-4xl text-coral-red">
            Special
          </span>{" "}
          Offer
        </h2>
        <p className="font-montserrat break-words mt-5 max-w-sm max-lg:max-w-none text-left text-slate-gray max-sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          incidunt accusantium dolorum sed quaerat molestias provident. Ullam
          deserunt voluptatem ab amet laborum sint sed, architecto recusandae
          voluptatibus qui rem dolorem.
        </p>
        <p className="font-montserrat break-words max-w-sm max-lg:max-w-none mt-5 text-slate-gray max-sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          reprehenderit numquam iusto cum dolorum vel ratione tenetur doloremque
          et quisquam.
        </p>
        <div className="flex flex-1 w-1/2 max-xl:w-2/3 max-lg:w-1/2 max-md:w-full max-sm:flex-col max-sm:items-center gap-3 mt-5">
          <Button label="Shop now" source="/assets/icon/arrow-right.png" />
          <Button label="Learn more" backgroundColor="white" />
        </div>
      </div>
    </div>
  );
};

export default ShoePromotion;
