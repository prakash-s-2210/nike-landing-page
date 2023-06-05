import Image from "next/image";
const Footer = () => {
  return (
    <section
      id='contact-us'
      className='bg-black pt-14 pb-[14px] px-[120px] max-lg:px-16 max-sm:px-10 max-[500px]:px-5'
    >
      <div className='flex flex-1 justify-between items-start gap-10 flex-wrap max-lg:flex-col max-lg:items-start'>
        <div className='w-1/3 flex flex-col items-start m-0 max-lg:w-1/2 max-sm:w-full'>
          <Image
            src='/assets/images/footer-logo.svg'
            alt='logo'
            width={150}
            height={46}
            quality={100}
            className='m-0'
          />
          <p className='mt-6 text-base leading-[28px] font-montserrat text-white max-w-sm break-words'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga
            consectetur quaerat inventore accusamus praesentium!
          </p>
          <div className=' flex flex-1 items-center m-0 gap-5 mt-[34px]'>
            <div className='flex flex-1 justify-center items-center w-[52px] h-[52px] max-sm:w-10 max-sm:h-10 bg-white rounded-full'>
              <Image
                src='/assets/icon/facebook.svg'
                alt='facebook logo'
                width={24}
                height={24}
                quality={100}
                className='m-0 max-sm:w-5 max-sm:h-5'
              />
            </div>
            <div className='flex flex-1 justify-center items-center w-[52px] h-[52px] max-sm:w-10 max-sm:h-10 bg-white rounded-full'>
              <Image
                src='/assets/icon/twitter.svg'
                alt='twitter logo'
                width={24}
                height={24}
                quality={100}
                className='m-0 max-sm:w-5 max-sm:h-5'
              />
            </div>
            <div className='flex flex-1 justify-center items-center w-[52px] h-[52px] max-sm:w-10 max-sm:h-10 bg-white rounded-full'>
              <Image
                src='/assets/icon/instagram.svg'
                alt='instagram logo'
                width={24}
                height={24}
                quality={100}
                className='m-0 max-sm:w-5 max-sm:h-5'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-1 justify-between gap-10 mt-2 m-0 w-full flex-wrap'>
          <div className='text-white  m-0'>
            <h4 className='font-montserrat text-2xl leading-normal font-medium mb-[23px]'>
              Products
            </h4>
            <ul>
              <li className='mt-3 font-montserrat text-base leading-normal'>
                Air Force 1
              </li>
              <li className='mt-3 font-montserrat text-base leading-normal'>
                Air Max 1
              </li>
              <li className='mt-3 font-montserrat text-base leading-normal'>
                Air Jordan 1
              </li>
              <li className='mt-3 font-montserrat text-base leading-normal'>
                Air Force 1
              </li>
              <li className='mt-3 font-montserrat text-base leading-normal'>
                Nike Waffle Racer
              </li>
              <li className='mt-3 font-montserrat text-base leading-normal'>
                Nike Cortez
              </li>
            </ul>
          </div>
          <div className='text-white  m-0'>
            <h4 className='font-montserrat text-2xl leading-normal font-medium mb-[23px]'>
              Help
            </h4>
            <ul>
              <li className='mt-3 font-montserrat text-base leading-normal'>
                About us
              </li>
              <li className='mt-3 font-montserrat text-base leading-normal'>
                FAQs
              </li>
              <li className='mt-3 font-montserrat text-base leading-normal'>
                How it works
              </li>
              <li className='mt-3 font-montserrat text-base leading-normal'>
                Privacy policy
              </li>
              <li className='mt-3 font-montserrat text-base leading-normal'>
                Payment policy
              </li>
            </ul>
          </div>
          <div className='text-white  m-0'>
            <h4 className='font-montserrat text-2xl leading-normal font-medium mb-[23px]'>
              Get in touch
            </h4>
            <p className='mt-3 font-montserrat text-base leading-normal'>
              nikeshoes565@gmail.com
            </p>
            <p className='mt-3 font-montserrat text-base leading-normal'>
              +92554862354
            </p>
          </div>
        </div>
      </div>
      <div className=' flex justify-between text-white mt-16 max-sm:flex-col max-sm:items-center max-sm:gap-2 max-sm:text-sm'>
        <p className='font-montserrat max-sm:hidden'></p>
        <div className='flex flex-1 justify-center gap-2 font-montserrat'>
          <Image
            src='/assets/icon/copyright-sign.svg'
            alt='copyright sign'
            width={20}
            height={20}
            quality={100}
            className='rounded-full m-0'
          />
          <p>Copyright.All right reserved.</p>
        </div>
        <p className='font-montserrat'>Term & Conditions</p>
      </div>
    </section>
  );
};

export default Footer;
