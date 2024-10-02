import * as React from "react";
import Nav from './component/Navbar.tsx'
import Sidebar from './component/Sidebar.tsx'
import Embedded from "./topic/Embedded.tsx";
// import RaspberryPi from "./topic/RaspberryPi.tsx";
import NodeRed from "./topic/NodeRed.tsx";
import Test from "./component/Test.tsx";
import Layout from "./component/Layout.tsx";
import { Routes, Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div style={{width:'100vw'}}>
      <Nav />
      <Layout/>
    </div>
  </BrowserRouter>
  );
}

export default App
