// eslint-disable-next-line no-unused-vars
import React from "react";
 
import { IoHourglassOutline } from "react-icons/io5";
 import Timer from "./TimerData"
 
 import "./TimerStyles.css";

const NewHoliday = () => {
  return (
    <div className="relative flex justify-center w-full  ">
      <div className="relative flex w-fit     ">
        <div className="relative m-auto flex w-fit">
          <Timer />
        </div>
         <div className="relative flex text-white  p-4
                           ">
                        
         <div className="demoWrapper relative flex justify-evenly items-center  ">
       
            <div className="relative flex  min-w-[225px] lg:min-w-[335px] ">
             
              <p
                id="demo"
                className="relative m-auto flex w-full text-lg sm:text-lg md:text-2xl lg:text-4xl
                   " >
            
              </p>
               
            </div>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default NewHoliday;
