import Image from "next/image";
import Button from "./Button";
const ProductDetail = () => {
  return (
    <div className=" my-20  max-lg:my-10  flex-between max-lg:flex-col gap-10 max-xl:gap-5 w-full px-20  max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
      <div className="w-1/2 flex-column gap-5 max-lg:w-full">
        <h2 className="font-palanquin capitalize text-5xl  min-w-5xl max-md:text-4xl">
          We Provide You{" "}
          <span className="inline-block capitalize text-5xl leading-10 text-coral-red max-md:text-4xl">
            Super Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="font-montserrat text-slate-gray max-w-lg max-sm:text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad iusto quos minus. Expedita consequatur magnam non ipsa in voluptatem voluptas labore unde et, veritatis .</p>
        <p className="font-montserrat text-slate-gray mb-6 max-sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat?</p>
        <Button label = "View details"/>
      </div>
      <Image src="/assets/images/shoe8.png" alt="product detail" width={570} height={522} quality={100} className="w-1/2 max-sm:w-full"/>
    </div>
  );
};

export default ProductDetail;
