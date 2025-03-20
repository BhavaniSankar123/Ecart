import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

import GadgetPage from "./components/GadgetPage";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Category from "./components/Category";
import Cart from "./components/Cart";
import Signup from "./components/SignUp";
import { GadgetsProvider } from "./components/contexts/GadgetProvider";
import { CartProvider } from "./components/contexts/CartProvider";
import { AddCartProvider } from "./components/contexts/AddCartProvider";

import { MobilesData } from "/public/assets/ProductsData/MobilesData";
import { ComputersData } from "/public/assets/ProductsData/ComputersData";
import { ACData } from "/public/assets/ProductsData/ACData";
import { BooksData } from "/public/assets/ProductsData/BooksData";
import { FridgeData } from "/public/assets/ProductsData/FridgeData";
import { FurnitureData } from "/public/assets/ProductsData/FurnitureData";
import { KitchenData } from "/public/assets/ProductsData/KitchenData";
import { MensData } from "/public/assets/ProductsData/MensData";
import { WomenData } from "/public/assets/ProductsData/WomenData";
import { SpeakersData } from "/public/assets/ProductsData/SpeakersData";
import { TVData } from "/public/assets/ProductsData/TVData";
import { WatchesData } from "/public/assets/ProductsData/WatchesData";
import { ShoesData } from "/public/assets/ProductsData/ShoesData";

const gadgetsList = [
  "Mobiles",
  "Computers",
  "Furniture",
  "Kitchen",
  "Mens-Wear",
  "Womens-Wear",
  "Books",
  "Fridge",
  "AC",
  "Tv's",
  "Shoes",
  "Watches",
  "Speakers",
];

const dataList = [
  MobilesData,
  ComputersData,
  FurnitureData,
  KitchenData,
  MensData,
  WomenData,
  BooksData,
  FridgeData,
  ACData,
  TVData,
  ShoesData,
  WatchesData,
  SpeakersData,
];

function App() {
  const [login, setLogin] = useState(() => {
    return localStorage.getItem("login") === "true";
  });

  useEffect(() => {
    localStorage.setItem("login", login);
  }, [login]);

  return (
    <BrowserRouter>
      <GadgetsProvider gadgetsList={gadgetsList}>
        <CartProvider>
          <AddCartProvider>
            <AppContent login={login} setLogin={setLogin} />
          </AddCartProvider>
        </CartProvider>
      </GadgetsProvider>
    </BrowserRouter>
  );
}

function AppContent({ login, setLogin }) {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <>
          <Header login={login} setLogin={setLogin} />
          <Category gadgetsList={gadgetsList} />
        </>
      )}
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Home dataList={dataList} />} />
        {gadgetsList.map((gadget, index) => (
          <Route
            key={index}
            path={`/${gadget}`}
            element={<GadgetPage dataList={dataList} index={index} />}
          />
        ))}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
      </Routes>
    </>
  );
}

export default App;
