import React, { useContext, useState } from "react";
import Gadget from "./Gadget";
// import "./Home.css";
import { GadgetsContext } from "./contexts/GadgetProvider";

const Home = ({ dataList }) => {
  const gadgetsList = useContext(GadgetsContext);
  const [showBanner, setShowBanner] = useState(true);

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  return (
    <div className="bg-[#f9f9f9] p-6 ">
      {showBanner && (
        <div className="relative fit-content mx-auto mb-6 bg-blue-500">
          <img src="src/assets/banner1.jpg" alt="Banner" className="w-full" />
          <button
            className="absolute top-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold"
            onClick={handleBannerClose}
          >
            X
          </button>
        </div>
      )}
      {dataList.map((gadget, index) => {
        // console.log(gadgetsList[index]);
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
