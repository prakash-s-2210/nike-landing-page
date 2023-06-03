import Image from "next/image";
import Button from "./Button";
const ShoePromotion = () => {
  return (
    <section className="pt-[88px] pb-[140px] flex flex-1 justify-between items-center max-xl:flex-col-reverse max-xl:gap-10 pr-[120px] max-xl:px-[120px] max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
      <div className="">
          <Image
            src="/assets/images/offer.svg"
            alt="Shoe Promotion"
            width={773}
            height={687}
            quality={100}
            className="object-contain w-full"
          /> 
      </div>
      <div className="flex flex-1 flex-col  pl-[73px] max-xl:pl-0">
        <h2 className="text-4xl  font-palanquin">
          <span className="inline-block text-4xl font-palanquin text-coral-red">
            Special
          </span>{" "}
          Offer
        </h2>
        <p className="mt-4 font-montserrat break-words text-lg leading-[28px] text-slate-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          incidunt accusantium dolorum sed quaerat molestias provident. Ullam
          deserunt voluptatem ab amet laborum sint sed, architecto .
        </p>
        <p className="mt-6 font-montserrat break-words text-lg leading-[28px] text-slate-gray ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          reprehenderit numquam iusto cum dolorum vel ratione tenetur doloremque
          et quisquam.
        </p>
        <div className="m-0 mt-[50px] flex flex-1 max-[500px]:flex-col max-w-xs max-[500px]:max-w-0 gap-4">
          <Button label="Shop now" source="/assets/icon/arrow-right.svg" />
          <Button label="Learn more" backgroundColor="white" borderColor = "slate-gray" textColor = "slate-gray"/>
        </div>
      </div>
    </section>
  );
};

export default ShoePromotion;
