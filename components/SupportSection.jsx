import SupportSectionCard from "./SupportSectionCard";

const services = [
  {
    imgURL: "/assets/icon/truck-fast.svg",
    label: "Free shipping",
  },
  {
    imgURL: "/assets/icon/shield-tick.svg",
    label: "Secure Payment",
  },
  {
    imgURL: "/assets/icon/kindness.svg",
    label: "Love to help you",
  },
];

const SupportSection = () => {
  return (
    <section className='sm:px-16 px-6 sm:py-12 py-4 flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <SupportSectionCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default SupportSection;
