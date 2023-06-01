import Button from "./Button";
const Collections = () => {
  return (
    <section className="collections-container flex w-full px-20  max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
      <div className="flex-column gap-5  h-full w-full ">
        <div className="flex-column gap-5 mb-8">
          <p className="text-xl font-montserrat lead text-coral-red">
            Our Summer collections
          </p>
          <h1 className="font-palanquin font-width box-border  relative text-8xl z-20">
            <span className="font-width inline-block pb-2 text-8xl whitespace-nowrap">
              The New Arrival
            </span>
            <span className=" font-width text-8xl inline-block text-coral-red">
              Nike
            </span>{" "}
            Shoes
          </h1>
          <p className="font-montserrat text-slate-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            repellendus.
          </p>
        </div>
        <Button label="Shop now" source = "/assets/icon/arrow-right.png"/>
        <div className="flex gap-7">
          <div>
            <p className="text-5xl font-palanquin">1k+</p>
            <p className="leading-7 font-montserrat text-slate-gray">Brands</p>
          </div>
          <div>
            <p className="text-5xl font-palanquin ">500k+</p>
            <p className="leading-7 font-montserrat text-slate-gray">Shops</p>
          </div>
          <div>
            <p className="text-5xl font-palanquin">250k+</p>
            <p className="leading-7 font-montserrat text-slate-gray">Customers</p>
          </div>
        </div>
      </div>
      {/* <div className="relative w-1/2 overflow-hidden">
        <div class="bg-[url('/assets/images/demo1.png')]  w-full h-full  opacity-30   bg-cover  bg-no-repeat"></div>
        <Image
          src='/assets/images/demo1.png'
          alt="shoe"
          width={400}
          height={400}
          className="absolute  w-full opacity-30 bg-contain bg-primary-background  bg-no-repeat"
        />
        <Image
          src='/assets/images/demo1.png'
          alt="shoe"
          width={400}
          height={400}
          className=" absolute top-20 left-10 bg-primary-background bg-opacity-0 z-10"
        />
        <Image
          src="/assets/images/shoe1.png"
          alt="shoe"
          width={100}
          height={100}
          className="absolute bottom-10 z-20 bg-secondary-background"
        />
      </div> */}
    </section>
  );
};

export default Collections;
