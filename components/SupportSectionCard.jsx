import Image from "next/image"
const SupportSectionCard = ({source, label}) => {
  return (
    <div className=" pt-[66px] max-[500px]:pt-[35px] pr-[44.72px] max-[500px]:pr-[35px] pb-[67px] max-[500px]:pb-[35px] pl-[45px] max-[500px]:pl-[35px] m-0 rounded-[20px] shadow-3xl">
        <div className="m-0 w-[44px] h-[44px] flex flex-1 justify-center items-center bg-coral-red rounded-full">
            <Image src={source} alt={label} width={24} height={24} />
        </div>
        <h3 className="mt-[18px] font-palanquin text-3xl leading-normal">{label}</h3>
        <p className="mt-[10px] break-words font-montserrat text-lg leading-normal text-slate-gray">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
  )
}

export default SupportSectionCard