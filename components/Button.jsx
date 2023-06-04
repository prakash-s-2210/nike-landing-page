import Image from "next/image";
const Button = ({
  label,
  source,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      // TODO: flex-1, m-0 and leading-none don't seem to be needed here
      className={`flex flex-1 justify-center m-0 items-center min-w-max gap-2 px-[25px] py-[18px] border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `bg-${backgroundColor} text-${textColor} border-${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${!fullWidth && "max-sm:py-[10px]"}`}
    >
      {label}

      {/* TODO: instead of source, you can use better name. Maybe rightIcon? 
                Writing meaningful names is important. Source doesn't specify its purpose as compared to 
                the rightIcon. The latter clearly shows what it is about
      */}
      {source && (
        <Image
          src={source}
          alt='arrow right icon '
          width={20}
          height={20}
          className='mt-1 rounded-full bg-white'
        />
      )}
    </button>
  );
};

export default Button;
