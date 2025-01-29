import React, { useContext, useState } from "react";
import Gadget from "../Gadget/Gadget";
import "./Home.css";
import { GadgetsContext } from "../contexts/GadgetProvider";

const Home = ({ dataList }) => {
  const gadgetsList = useContext(GadgetsContext);
  const [showBanner, setShowBanner] = useState(true);

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  return (
    <div className="home-container">
      {showBanner && (
        <div className="banner-image">
          <img src="/src/assets/banner1.jpg" alt="Banner" />
          <button className="close-banner" onClick={handleBannerClose}>
            X
          </button>
        </div>
      )}
      {dataList.map((gadget, index) => {
        console.log(gadgetsList[index]);
        return (
          <Gadget
            key={index}
            gadget={gadget}
            gadgetsItem={gadgetsList[index]}
          />
        );
      })}
    </div>
  );
};

export default Home;
