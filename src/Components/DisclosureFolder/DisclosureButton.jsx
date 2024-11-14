// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Disclosure.css";
import "../PWAFolder/WebApp.css";
const DisclosureButton = () => {
  return (
    <>
      <a href="/Disclosure">
        <div  className=" "
              style={{ hover: "none" }}>
          <div className="disclosureButton  relative flex mx-4 mb-1  font-Changa-Regular
             text-[20px] text-white whitespace-nowrap  ">
            <span className="inline-block text-center ">
              Affiliate Disclosure
            </span>
          </div>
        </div>
      </a>
    </>
  );
};

export default DisclosureButton;
