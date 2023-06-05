import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 1", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "nikeshoes565@gmail.com", link: "mailto:nikeshoes565@gmail.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

const socialMedia = [
  { src: "/assets/icon/facebook.svg", alt: "facebook logo" },
  { src: "/assets/icon/twitter.svg", alt: "twitter logo" },
  { src: "/assets/icon/instagram.svg", alt: "instagram logo" },
];

const Footer = () => {
  return (
    <footer id='contact-us' className='bg-black padding-x padding-t pb-8'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <Image
            src='/assets/images/footer-logo.svg'
            alt='logo'
            width={150}
            height={46}
            quality={100}
            className='m-0'
          />
          <p className='mt-6 text-base leading-[28px] font-montserrat text-white sm:max-w-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga
            consectetur quaerat inventore accusamus praesentium!
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white hover:text-slate-gray'
                    key={link.name}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-center items-center gap-2 font-montserrat cursor-pointer'>
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
        <p className='font-montserrat cursor-pointer'>Term & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
