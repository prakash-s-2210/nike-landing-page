import Image from "next/image";
const Nav = () => {
  return (
    <header id='home' className='absolute w-full z-10'>
      <nav className='flex justify-between items-center sm:px-16 px-6 py-8'>
        <a href='#home' className=''>
          <Image
            src='/assets/images/header-logo.svg'
            alt='logo'
            width={129}
            height={29}
            className='m-0'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          <li>
            <a
              href='#home'
              className='font-montserrat leading-normal text-lg text-slate-gray'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about-us'
              className='font-montserrat leading-normal text-lg text-slate-gray'
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href='#services'
              className='font-montserrat leading-normal text-lg text-slate-gray'
            >
              Services
            </a>
          </li>
          <li>
            <a
              href='#contact-us'
              className='font-montserrat leading-normal text-lg text-slate-gray'
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium max-lg:hidden pr-10'>
          <a className='font-montserrat '>Sign in</a>
          <span className='font-montserrat '>/</span>
          <a className='font-montserrat'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <Image
            src='/assets/icon/hamburger.svg'
            alt='hamburger icon'
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
