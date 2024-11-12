// eslint-disable-next-line no-unused-vars
import React from "react";
import "./WebApp.css";

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
    
    <div className="absolute bottom-28 m-auto flex w-fit  ">
    
     
      <div>
        {!isAppMode && (
          <button
            id="installApp"
            onClick={handleClick}
            className="installButton relative flex mx-4 mb-1  font-Changa-Regular text-[12px] text-white whitespace-nowrap"
          >
            Android/Desk App
          </button>
        )}
      </div>






      <a
        href="https://www.youtube.com/watch?v=AwfKUpq5seE "
        className="relative"
      >
        <div>
          {!isAppMode && (
            <button
              id="installApp"
              onClick={handleClick}
              className="installButton relative flex mx-4 mb-1 font-Changa-Regular text-[12px] text-white whitespace-nowrap"
              style={{ hover: "none" }}
            >
              IPhone Instructions
            </button>
          )}
        </div>
      </a>
    </div>
   
  );
};

export default InstallApp;
