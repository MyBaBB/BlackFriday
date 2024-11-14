 
import BlackFriday from "../Components/BlackFridayFolder/BlackFriday";
import Footer from "../Components/FooterFolder/Footer";
 
import "../App.css";
 
import TimerInsert from "./TimerFolder/WholeTimer";

function Zenith() {
  return (
    <>
      <div className="fixed top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col
       h-screen w-screen items-center justify-center">
        < BlackFriday />
        
        < TimerInsert />
        < Footer />
        
      </div>
    </>
  );
}

export default Zenith;