import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Strategy from "./pages/strategy";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Report from "./pages/Report";
import Broking from "./pages/Broking";
import Header from "./component/Header";
import Sidebar from "./component/sidebar";
import MySub from "./pages/MySub";
import Setting from "./pages/Setting";  
import Subscription from "./pages/Subscription";

import { useState, createContext, useEffect } from "react";
import './App.css';

const MyContext=createContext();

function App() {

  let [isTogglesidebar, setTogglesidebar]= useState(false);

  const values={
    isTogglesidebar,
    setTogglesidebar
  } 
 
  const active = isTogglesidebar ? 'active' : '';

  return (
    <BrowserRouter>
    < MyContext.Provider value={values}>
      <Header />
      <div className="main d-flex">
        <div className={`sidebarwrapper ${isTogglesidebar === true ? active : ''}`}>
          <Sidebar />
        </div>
        
        <div className={`content ${isTogglesidebar === true ? active : ''}`}>
          
          <Routes>
            <Route path="/" element={<Strategy />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/report" element={<Report />} />
            <Route path="/broking" element={<Broking />} />
            <Route path="/mysub" element={<MySub />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/subscription" element={<Subscription />} />
          </Routes>

        </div>
      </div>
      <footer>
        <p>© 2023 My Application</p>
      </footer>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };