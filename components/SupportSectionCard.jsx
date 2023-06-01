import Image from "next/image"
const SupportSectionCard = ({source, label}) => {
  return (
    <div className=" px-8 max-sm:px-5 py-12 max-sm:py-6 border rounded-xl shadow-3xl w-1/3 max-lg:w-auto">
        <div className=" bg-coral-red w-10 max-sm:w-8 h-10 max-sm:h-8 flex-center rounded-full ">
            <Image src={source} alt={label} width={20} height={20} className=" rounded-full bg-coral-red" />
        </div>
        <h3 className="mt-5 font-palanquin text-2xl">{label}</h3>
        <p className="break-words font-montserrat mt-3 text-slate-gray max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
  )
}

export default SupportSectionCard