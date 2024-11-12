// eslint-disable-next-line no-unused-vars
import React from "react";
import "./WebApp.css";
import DisclosureButton from "../DisclosureFolder/DisclosureButton";


const InstallApp = () => {
  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", (e) => {
    deferredPrompt = e;
  });

  const handleClick = async () => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        deferredPrompt = null;
      }
    }
  };
  const isAppMode = window.matchMedia("(display-mode: standalone)").matches;

  return (
    <> 
     <div className="buttonsHolder relative flex justify-center   ">
     
     
      <div>
        {!isAppMode && (
          <button
            id="installApp"
            onClick={handleClick}
            className="installButton relative flex mx-4 mb-1  font-Changa-Regular
             text-[12px] text-white whitespace-nowrap"
          >
            Android/Desk App
          </button>
        )}
      </div>


     <div > <DisclosureButton/> </div>


    <div>
      <a
        href="https://www.youtube.com/watch?v=AwfKUpq5seE "
        className=""
      >
        <div>
          {!isAppMode && (
            <button
              id="installApp"
              onClick={handleClick}
              className="installButton relative hidden xxs:flex mx-4 mb-1 font-Changa-Regular 
              text-[12px] text-white whitespace-nowrap"
              style={{ hover: "none" }}
            >
              IPhone Instructions 
            </button>
          )}
        </div>
      </a>
    </div>
    </div>
    </>
  );
};

export default InstallApp;
