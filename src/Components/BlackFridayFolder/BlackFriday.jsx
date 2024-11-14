 import "./BlackFriday.css"
import AmazonArrow from "../../assets/AmazonArrow.jpg";
 
const BlackFriday = () => {
  return (
    <>
      <div className="blackFridayWrapper relative flex-row top-4 w-fit m-auto mb-8 items-center justify-center 
  staging
      font-ChunkFive-Regular border-2 border-solid border-[#ff9d25]  rounded-2xl p-8 bg-black">
       
        

        <a href="https://amzn.to/4fLaAFA ">
        <div className="blackFriday flex items-center justify-center  
        font-ChunkFive-Regular text-[#ff9d25]
         text-5xl leading-[2em]   sm:text-5xl sm:leading-[1.4em] md:text-6xl md:leading-[1.4em] lg:text-8xl lg:leading-[1.4em]">
          <span className="blackFridayWords whitespace-nowrap">
            {" "}
            Black Friday
          </span>
        </div>
       
        <div className="specials flex items-center justify-center  font-ChunkFive-Regular text-[#ff9d25]
         text-5xl leading-[2em]   sm:text-5xl sm:leading-[1.4em] md:text-6xl md:leading-[1.4em] lg:text-8xl lg:leading-[1.4em] ">
          <span className="m-auto">Specials</span>
        </div>
        <span className="buyGoodies m-auto  text-center text-[#ff9d25]  text-xl block ">Amazon Shopping</span>

        <div className="specials flex items-center justify-center">
          <img
            src={AmazonArrow}
            alt="AmazonArrow"
            className="h-[100px] w-[175px] scale-50 sm:scale-100"
          />
        </div>
        <p className="w-full  text-center font-Orbitron-VariableFont_wght -mb-4">
        <q className="m-auto text-white text-xl text-center   ">
          &nbsp;Quick Button&nbsp;
        </q>
        </p>
        </a>
      </div>
    </>
  );
};

export default BlackFriday;
