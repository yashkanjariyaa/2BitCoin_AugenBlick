import React from "react";
import Home from "./components/user/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* Uncomment below routes once they are defined */}
          {/* 
          <Route path="/" element={<Landing />} />
          <Route path="/learn" element={<LearnLang />} />
          <Route path="/chat" element={<ChatsPage />} />
          <Route
            path="/login"
            element={
              <AuthProvider>
                <Login />
              </AuthProvider>
            }
          />
          */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
