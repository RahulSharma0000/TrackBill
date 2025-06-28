import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";


const App = () => {
  return (
    <BrowserRouter>
    {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
