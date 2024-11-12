import { useState } from "react";
import BlackFriday from "../Components/BlackFridayFolder/BlackFriday";
import DisclosureButton from "../Components/DisclosureFolder/DisclosureButton";
import "../App.css";

function Zenith() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        < BlackFriday />
        < DisclosureButton />
      </div>
    </>
  );
}

export default Zenith;