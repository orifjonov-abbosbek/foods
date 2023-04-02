import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import All from "./pages/all";
import Home from "./pages/home";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
