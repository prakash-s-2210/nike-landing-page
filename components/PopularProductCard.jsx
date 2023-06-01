import Image from "next/image";
const PopularProductCard = ({source, productName, productPrice}) => {
  return (
    <div className="flex-column gap-3 ">
        <Image src={source} alt="Popular Shoe product" width = {262} height={262} quality={100} className="w-full"/>
        <div className="flex-column gap-1">
            <div className = "flex  gap-1 items-center">
                <Image src="/assets/icon/star.png" alt="rating icon" width = {24} height={24} className="max-sm:w-4"/>
                <p className="font-montserrat text-xl text-slate-gray max-md:text-lg max-sm:text-sm">(4.5)</p>
            </div>
            <h3 className="text-2xl font-semibold font-palanquin max-md:text-xl max-sm:text-lg">{productName}</h3>
            <p className="font-semibold font-montserrat text-coral-red text-2xl max-md:text-xl max-sm:text-lg">{productPrice}</p>
        </div>
    </div>
  )
}

export default PopularProductCard