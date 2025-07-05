import React from "react";
import AddReceipts from "./pages/AddReceipts";
import Nav from "./components/Nav";
import DashBoard from "./pages/Dashboard";
import Receipt from "./pages/Receipt";
import { Route, Routes } from "react-router-dom";

import Routing from "./utils/Routing";
const App = () => {
  return (
    <BrowserRouter basename="/TrackBill/">
      <Nav />
      <Routing  />
    </BrowserRouter>
  );
};

export default App;
