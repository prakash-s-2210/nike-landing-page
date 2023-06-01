import Image from "next/image";
const ReviewCard = ({ source, customerName, rating }) => {
  return (
    <div className="flex-center flex-col gap-4 bg-pale-blue">
      <Image src={source} alt="customer" width={120} height={120} original={100} className="rounded-full"/>
      <p className="font-montserrat max-w-sm text-center text-slate-gray">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit
        soluta ea dolorum repellat consectetur atque ex corporis minus maiores?
      </p>
      <div className="flex-center flex-1 gap-2 ">
        <Image
          src="/assets/icon/star.png"
          alt="rating star"
          width={24}
          height={24}
          original={100}
          className="object-contain"
        />
        <p className="font-montserrat text-slate-gray">(4.5)</p>
      </div>
      <h3 className="font-palanqui text-3xl">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
