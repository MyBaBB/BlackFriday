// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Zenith from "./Components/Zenith";
import Disclosure from "./Components/DisclosureFolder/Disclosure";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Zenith />} />
 
    <Route path="/Disclosure" element={<Disclosure />} />
    <Route path="/*" element={<Navigate to="/" />} />

  
  </Routes>
  );
}

export default App;
