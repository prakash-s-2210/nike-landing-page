import SupportSectionCard from "./SupportSectionCard"
const SupportSection = () => {
  return (
    <div className="flex-center flex-1  max-xl:flex-wrap justify-stretch items-stretch mb-20  gap-5 px-20  max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
        <SupportSectionCard source="/assets/icon/truck-fast.png" label = "Free shipping"/>
        <SupportSectionCard source="/assets/icon/shield-tick.png" label = "Secure Payments"/>
        <SupportSectionCard source="/assets/icon/kindness.png" label = "Love to help you"/>
    </div>
  )
}

export default SupportSection