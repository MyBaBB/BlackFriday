import React from "react";
import AmazonArrow from "../../assets/AmazonArrow.jpg";
const BlackFriday = () => {
  return (
    <>
      <div className="blackFridayWrapper relative flex-row items-center justify-center 
      font-ChunkFive-Regular  ">
        <a href="https://amzn.to/4fLaAFA ">
        <div className="blackFriday flex items-center justify-center  
        font-ChunkFive-Regular text-2xl leading-[2em] text-[#ff9d25] sm:text-5xl sm:leading-[1.4em] md:text-9xl md:leading-[1.4em]">
          <span className="blackFridayWords whitespace-nowrap">
            {" "}
            Black Friday
          </span>
        </div>

        <div className="specials flex items-center justify-center  font-ChunkFive-Regular
         text-2xl leading-[2em] text-[#ff9d25] sm:text-5xl sm:leading-[1.4em] md:text-9xl md:leading-[1.4em]">
          <span className="m-auto">Specials</span>
        </div>
        <div className="specials flex items-center justify-center">
          <img
            src={AmazonArrow}
            alt="AmazonArrow"
            className="h-[100px] w-[175px] scale-50 sm:scale-100"
          />
        </div>
        </a>
      </div>
    </>
  );
};

export default BlackFriday;
