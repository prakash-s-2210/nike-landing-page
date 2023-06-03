'use client';
import { useState } from "react";
import Button from "./Button"

const Subscribe = () => {
    const [ inputValue, setInputValue ] = useState("")
  return (
    <section id = "services" className="p-[120px] max-lg:px-16 max-sm:px-10 max-[500px]:px-5 pb-[124px] w-full flex justify-between items-center gap-5 max-lg:flex-col max-lg:gap-10">
        <h3 className="w-1/2 max-lg:w-full text-4xl leading-[68px] max-w-md max-lg:max-w-none font-palanquin">
            Sign Up for <span className="inline-block text-coral-red text-4xl leading-[68px] font-palanquin">Updates</span>{" "}& Newsletter
        </h3>
        <div className="w-[40%] max-xl:w-1/2 max-lg:w-full m-0 flex items-center p-[5px] border border-slate-gray rounded-full max-[500px]:flex-col max-[500px]:border-none max-[500px]:items-start max-[500px]:gap-5">
            <input type="text" value={inputValue} placeholder="mdsajib1234@gmail.com"  onChange={(e) => setInputValue(e.target.value)} className="w-[100%] text-[16px] leading-normal text-slate-gray py-[19px] ml-[19px] pr-[19px] outline-none max-[500px]:border max-[500px]:m-0 max-[500px]:pl-[19px] max-[500px]:rounded-full max-[500px]:border-slate-gray"/>
            <div className="m-0 flex justify-end items-center max-[500px]:w-full"><Button label = "Sign Up" fullWidth/></div>
        </div>
    </section>
  )
}

export default Subscribe