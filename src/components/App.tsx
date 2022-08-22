import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignUp from "../pages/SignUp";
import CoinPage from "../pages/CoinPage";
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/coin/:uuid' element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
