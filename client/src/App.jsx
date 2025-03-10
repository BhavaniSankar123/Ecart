import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import GadgetPage from "./components/GadgetPage/GadgetPage";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Cart from "./components/Cart/Cart";
import Signup from "./components/Signup/Signup";
import { GadgetsProvider } from "./components/contexts/GadgetProvider";
import { CartProvider } from "./components/contexts/CartProvider";
import { AddCartProvider } from "./components/contexts/AddCartProvider";

// import { MobilesData } from "./assets/ProductsData/Mobiles-Data";
// import { ComputersData } from "./assets/ProductsData/Computers-Data";
// import { ACData } from "./assets/ProductsData/AC-Data";
// import { BooksData } from "./assets/ProductsData/Books-Data";
// import { FridgeData } from "./assets/ProductsData/Fridge-Data";
// import { FurnitureData } from "./assets/ProductsData/Furniture-Data";
// import { KitchenData } from "./assets/ProductsData/Kitchen-Data";
// import { MensData } from "./assets/ProductsData/Mens-Data";
// import { WomenData } from "./assets/ProductsData/Women-Data";
// import { SpeakersData } from "./assets/ProductsData/Speaker-Data";
// import { TVData } from "./assets/ProductsData/Tv-Data";

// const gadgetsList = [
//   "Mobiles",
//   "Computers",
//   "Furniture",
//   "Kitchen",
//   "Mens Wear",
//   "Womens Wear",
//   "Books",
//   "Fridge",
//   "AC",
//   "Tv's",
//   "Watches",
//   "Speakers",
// ];

// const dataList = [
//   MobilesData,
//   ComputersData,
//   FurnitureData,
//   KitchenData,
//   MensData,
//   WomenData,
//   BooksData,
//   FridgeData,
//   ACData,
//   TVData,
//   TVData,
//   SpeakersData,
// ];

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
        <Header login={login} setLogin={setLogin} />
      )}
      <Category gadgetsList={gadgetsList} />
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
