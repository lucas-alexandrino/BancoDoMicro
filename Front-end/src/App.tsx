
import {Route, Routes, BrowserRouter} from "react-router-dom";
import "./App.css";


import React from "react";
import Home from "./pages/Home/Home.tsx";
import Banco from "./pages/Banco/Banco.tsx";

function App() {

  return (
    <BrowserRouter>
    <div style={{ minHeight:'100vh' }}>
      <Routes>
        
          <Route path="/teste" element={<Home />} />;
          <Route path='/banco' element={<Banco />} />;
      
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
