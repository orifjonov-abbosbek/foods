import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import All from "./pages/all";
import Home from "./pages/home";
import Categories from "./pages/categories";
import Categorys from "./pages/Categorys";
import FoodDetails from "./pages/FoodDetails";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categorys" element={<Categorys />} />
        <Route path="/categories/:categorys/:id" element={<FoodDetails />} />
      </Routes>
    </div>
  );
}

export default App;
