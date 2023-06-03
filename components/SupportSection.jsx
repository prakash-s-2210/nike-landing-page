import SupportSectionCard from "./SupportSectionCard"
const SupportSection = () => {
  return (
    <section className="pt-[60px] grid grid-cols-3 gap-[37px] max-xl:grid-cols-2 max-md:grid-cols-1 px-[158px] max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
        <SupportSectionCard source="/assets/icon/truck-fast.svg" label = "Free shipping"/>
        <SupportSectionCard source="/assets/icon/shield-tick.svg" label = "Secure Payments"/>
        <SupportSectionCard source="/assets/icon/kindness.svg" label = "Love to help you"/>
    </section>
  )
}

export default SupportSection