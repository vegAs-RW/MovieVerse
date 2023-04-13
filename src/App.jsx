import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Moviverse from "./pages/Moviverse";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Moviverse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
