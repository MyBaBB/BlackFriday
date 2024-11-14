// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Disclosure.css";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { LuRewind } from "react-icons/lu";
import  Copyright from "../Copyright" 
const Disclosure = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 h-screen w-screen text-4xl">
      <div className="AffiliateDisclosureHeader relative flex bg-gradient-to-b from-slate-400 via-white to-slate-400 p-4 text-black shadow-2xl">
        <h1 className="affiliateDisclosure m-auto text-center font-Kingthings_Petrock text-4xl sm:text-8xl">
          <u>Affiliate Disclosure</u>{" "}
        </h1>
      </div>
<div className="relative  ">
           <button
            className="returnButton absolute left-4 top-4 z-50 rounded-full  px-8 py-2 font-DMSerifDisplay-Regular"
            onClick={() => window.history.back()}>
            <LuRewind  size={24}/>
          </button>
</div>

      <section className="AffiliateDisclosureBody relative flex-col h-full items-center justify-center border-2 border-solid border-slate-900 bg-gradient-to-b from-slate-400 via-white to-slate-400 p-4 font-LibreBaskerville-Bold text-black shadow-xl">
        <p className="affiliateParagraph m-auto mt-[8.9rem] h-fit w-[80%] rounded-2xl bg-gradient-to-b from-slate-300 via-white to-slate-300 p-8 text-center sm:text-4xl">
          <span className="mb-4 inline-block">
            <span className="inline-block pr-4">
              <FaRegHandScissors size={27} className="text-slate-500" />
            </span>{" "}
            <span className="inline-block text-4xl ">Hi There</span>
            <span className="mb-[-4px] inline-block pl-4">
              <FaRegHandshake size={32} className="text-slate-500" />
            </span>
          </span>
          <hr className="m-auto mb-4 h-[4.1px] w-[20%] rounded-xl border-[1.5px] border-slate-400 bg-slate-100" />
          I work as an Amazon affiliate.
          <br />I enhance product listings.
          <hr className="m-auto mb-4 h-[4.1px] w-[20%] rounded-xl border-[1.5px] border-slate-400 bg-slate-100" />
          Amazon Pays me a
          <br />
          commission for helping.
          <hr className="m-auto mb-4 h-[4.1px] w-[20%] rounded-xl border-[1.5px] border-slate-400 bg-slate-100" />
          I appreciate your support.
          <br />
          Thank you!
         
          
        </p>
        < Copyright />
      </section>
     
    </div>
  );
};

export default Disclosure;
