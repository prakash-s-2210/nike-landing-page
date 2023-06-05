import Image from "next/image";

const ShoeCollectionCard = ({ imgSource, changeShoeImage, source }) => {
  const handleClick = () => {
    if (source !== imgSource.bigShoe) {
      changeShoeImage(imgSource.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        source === imgSource.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image
          src={imgSource.thumbnail}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCollectionCard;
