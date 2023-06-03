import Image from "next/image";
const Nav = () => {
  return (
    <header id="home" className="relative py-14 max-md:py-10 max-sm:py-5 ">
      <nav className="relative flex z-50  justify-between items-center px-[120px] max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
        <a href="#home" className="m-0">
          <Image
            src="/assets/images/header-logo.svg"
            alt="logo"
            width={128.9}
            height={29}
            className="max-w-128.9px m-0"
          />
        </a>
        <ul className="flex justify-between gap-[3vw] max-lg:hidden  m-0">
          <li className="m-0">
            <a
              href="#home"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex m-0 gap-2 text-lg leading-normal font-medium max-lg:hidden">
          <a className="font-montserrat ">Sign in</a>
          <span className="font-montserrat ">/</span>
          <a className="font-montserrat">Explore now</a>
        </div>
        <div className="hidden m-0 max-lg:block">
          <Image
            src="/assets/icon/hamburger.svg"
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
