'use client';
import { useState } from "react";
import Button from "./Button"

const Subscribe = () => {
    const [ inputValue, setInputValue ] = useState("")
  return (
    <div className="flex-between gap-5 max-lg:flex-col max-lg:gap-10 my-20 max-sm:my-10  px-20 max-lg:px-16 max-sm:px-10 max-[500px]:px-5">
        <h3 className="text-black text-5xl max-sm:text-4xl leading-[4rem] max-w-2xl max-sm:leading-[3rem]">
            Sign Up for <span className="inline-block text-coral-red text-5xl max-sm:text-4xl">Updates</span>{" "}& Newsletter
        </h3>
        <div className="flex max-sm:flex-col max-sm:gap-5 max-sm:w-full border max-sm:border-none border-black py-1 pr-1 pl-3 rounded-3xl">
            <input type="text" value={inputValue} placeholder="mdsajib123@gmail.com"  onChange={(e) => setInputValue(e.target.value)} className="text-sm font-montserrat pr-2 outline-none text-slate-gray max-sm:px-2 max-sm:py-4  max-sm:border max-sm:border-black max-sm:rounded-3xl"/>
            <Button label = "Sign Up" fullWidth/>
        </div>
    </div>
  )
}

export default Subscribe