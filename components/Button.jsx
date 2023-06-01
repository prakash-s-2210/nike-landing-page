import Image from "next/image";
const Button = ({ label, source, backgroundColor, fullWidth }) => {
  return (
    <button
      className={`flex flex-1 justify-center  gap-2 w-32 border font-montserrat
      ${backgroundColor ? `bg-${backgroundColor} text-slate-gray border-slate-gray` : 'bg-coral-red text-white border-coral-red'}
          py-2 rounded-full ${fullWidth && "max-sm:w-full max-sm:py-4"}`} 
    >
      {label}
      {source && (
        <Image
          src={source}
          alt="arrow right icon "
          width={20}
          height={20}
          className=" mt-1 rounded-full bg-white"
        />
      )}
    </button>
  );
};

export default Button;
