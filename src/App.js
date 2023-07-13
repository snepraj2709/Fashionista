import React from "react";
import Mockman from "mockman-js";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="align-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
