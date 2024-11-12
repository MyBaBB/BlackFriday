// eslint-disable-next-line no-unused-vars
import React from "react";

const DisclosureButton = () => {
  return (
    <>
      <a href="/Disclosure">
        <div className="DisclosureButton absolute h-fit w-fit bottom-4 right-8  z-50">
          <div className="disclosure  relative   h-fit w-fit whitespace-nowrap rounded-xl border-2 border-solid border-slate-900 bg-blue-950 px-[1.1rem] pb-[.4rem] text-[2rem] text-slate-200">
            <span className="inline-block text-center font-Itim-Regular">
              Affiliate Disclosure
            </span>
          </div>
        </div>
      </a>
    </>
  );
};

export default DisclosureButton;
