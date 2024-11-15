import React from 'react'
import "./RewindButton.css"
import { LuRewind } from "react-icons/lu";
const RewindButton = () => {
  return (
    <div>
          <div className="dataToolTipGoBack relative  w-fit  "
          data-tool-tip="Go Back">
           <button
            className="returnButton  absolute left-4 top-4 z-50 rounded-full 
                        px-8 py-2 font-DMSerifDisplay-Regular "
                        data-tooltip="Go Back" 
            onClick={() => window.history.back()}>
            <LuRewind  size={24}/>
          </button>
</div>





    </div>
  )
}
 
export default RewindButton
