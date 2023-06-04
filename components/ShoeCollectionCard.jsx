import Image from "next/image";

const ShoeCollectionCard = ({ index, imgSource, changeShoeImage, source }) => {
  const handleClick = () => {
    if (source !== imgSource.bigShoe) {
      changeShoeImage(imgSource.bigShoe);
    }
  };

  return (
    <div
      className={`relative m-0 ${
        source === imgSource.bigShoe
          ? "border-2 border-[#FF6452] rounded-[10px]"
          : "cursor-pointer"
      }`}
      onClick={handleClick}
    >
      <Image
        src='/assets/images/thumbnail-background.svg'
        alt='shoe colletion background'
        width={152}
        height={156}
        original={100}
        className='object-contain m-0'
      />
      <div className='min-w-fit'>
        <Image
          src={imgSource.thumbnail}
          alt='shoe colletion'
          width={127}
          height={103.34}
          original={100}
          className='object-contain  absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 m-auto'
        />
      </div>
    </div>
  );
};

export default ShoeCollectionCard;
