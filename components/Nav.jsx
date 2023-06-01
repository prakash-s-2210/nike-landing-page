"use client";
import { useState } from "react";
import Image from "next/image";
import { Montserrat, Palanquin_Dark } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const palanquinDark = Palanquin_Dark({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="home relative h-full">
      <nav
        className={`flex-between px-20  w-full z-50 max-lg:px-16 max-sm:px-10 max-[500px]:px-5 h-28 max-lg:h-24 max-lg:bg-white ${
          showMenu ? "max-lg:fixed max-lg:top-0" : ""
        }`}
      >
        <div className="flex gap-2 items-center w-1/3 max-xl:w-1/4 ">
          <Image
            src="/assets/images/header-logo.png"
            alt="logo"
            width={40}
            height={35}
          />
          <a
            className={`font-montserrat text-coral-red text-2xl leading-7 font-semibold`}
            href="home"
          >
            Nike
          </a>
        </div>
        <div className={`flex-between w-2/3 max-xl:w-3/4 max-lg:absolute max-lg:top-20 max-lg:z-50 max-lg:left-0 max-lg:right-0 max-lg:h-screen max-lg:bg-white max-lg:w-full max-lg:justify-start  max-lg:items-start max-lg:flex-col  ${!showMenu && "max-lg:hidden"}`}>
          <ul
            className={`flex  gap-3 items-center text-slate-gray font-montserrat max-lg:flex-col max-lg:w-full max-lg:gap-0`}>
            <li className="max-lg:py-5 max-lg:w-full max-lg:border-t max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
              <a href="#home" className="nav-link ">
                Home
              </a>
            </li>
            <li className="max-lg:py-5 max-lg:w-full max-lg:border-t max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
              <a href="#home" className="nav-link">
                About Us
              </a>
            </li>
            <li className="max-lg:py-5 max-lg:w-full max-lg:border-t max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
              <a href="#home" className="nav-link">
                Services
              </a>
            </li>
            <li className="max-lg:py-5 max-lg:w-full max-lg:border-t max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
              <a href="#home" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex-between gap-2  font-medium leading-5 max-lg:py-5 max-lg:w-full max-lg:border-y max-lg:px-16 max-sm:px-10 max-[500px]:px-5 max-lg:justify-normal max-lg:gap-5">
            <a className="font-montserrat ">Sign in</a>
            <span className="font-montserrat ">/</span>
            <a className="font-montserrat">Explore now</a>
          </div>
        </div>
        <div
          className="hidden max-lg:block"
          onClick={() => {
            setShowMenu((prev) => setShowMenu(!prev));
          }}
        >
          <Image
            src="/assets/icon/hamburger.png"
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
      {/* <div class="bg-[url('/assets/images/demo1.png')] w-1/2 h-screen opacity-30 z-index-1 absolute -top-40  left-1/2 bg-cover  bg-no-repeat"></div> */}
    </header>
  );
};

export default Nav;
// ${palanquinDark}
// ${montserrat.className}
