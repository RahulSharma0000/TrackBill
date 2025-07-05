
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
