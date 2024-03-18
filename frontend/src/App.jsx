import React from "react";
import Home from "./components/user/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/auth";
import Dashboard from "./components/admin/dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Auth/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
