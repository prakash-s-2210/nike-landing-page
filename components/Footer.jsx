import Image from "next/image";
const Footer = () => {
  return (
    <div className=" bg-black px-20 max-lg:px-16 max-sm:px-10 max-[500px]:px-5 py-10 ">
      <div className="flex flex-1 justify-between gap-5 flex-wrap">
        <div className=" flex flex-col gap-5">
          <Image
            src="/assets/images/footer-logo.png"
            alt="logo"
            width={150}
            height={46}
            quality={100}
            className=""
          />
          <p className="text-white max-w-sm break-words font-montserrat text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga
            consectetur quaerat inventore accusamus praesentium!
          </p>
          <div className=" flex gap-5">
            <Image
              src="/assets/icon/facebook.png"
              alt="facebook logo"
              width={35}
              height={30}
              quality={100}
              className="bg-white rounded-full  px-2 py-2"
            />
            <Image
              src="/assets/icon/twitter.png"
              alt="twitter logo"
              width={35}
              height={30}
              quality={100}
              className="bg-white rounded-full  px-2 py-2"
            />
            <Image
              src="/assets/icon/instagram.png"
              alt="instagram logo"
              width={35}
              height={30}
              quality={100}
              className="bg-white rounded-full  px-2 py-2"
            />
          </div>
        </div>
        <div className="text-white">
          <h4 className="font-montserrat text-2xl max-sm:text-xl">Products</h4>
          <ul>
            <li className="mt-2 font-montserrat text-sm">Air Force 1</li>
            <li className="font-montserrat text-sm">Air Max 1</li>
            <li className="font-montserrat text-sm">Air Jordan 1</li>
            <li className="font-montserrat text-sm">Air Force 1</li>
            <li className="font-montserrat text-sm">Nike Waffle Racer</li>
            <li className="font-montserrat text-sm">Nike Cortez</li>
          </ul>
        </div>
        <div className="text-white">
          <h4 className="font-montserrat text-2xl max-sm:text-xl">Help</h4>
          <ul>
            <li className="mt-2 font-montserrat text-sm ">About us</li>
            <li className="font-montserrat text-sm">FAQs</li>
            <li className="font-montserrat text-sm">How it works</li>
            <li className="font-montserrat text-sm">Privacy policy</li>
            <li className="font-montserrat text-sm">Payment policy</li>
          </ul>
        </div>
        <div className="text-white">
          <h4 className="font-montserrat text-2xl max-sm:text-xl">
            Get in touch
          </h4>
          <p className="mt-2 font-montserrat text-sm">nikeshoes565@gmail.com</p>
          <p className="font-montserrat text-sm">+92554862354</p>
        </div>
      </div>
      <div className=" flex justify-between text-white mt-16 max-sm:flex-col max-sm:items-center max-sm:gap-2 max-sm:text-sm">
        <p className="font-montserrat max-sm:hidden"></p>
        <p className="font-montserrat">&#169; Copyright.All right reserved.</p>
        <p className="font-montserrat">Term & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
