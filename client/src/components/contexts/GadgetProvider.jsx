import React, { createContext } from "react";

export const GadgetsContext = createContext();

export const GadgetsProvider = ({ children, gadgetsList }) => {
  return (
    <GadgetsContext.Provider value={gadgetsList}>
      {children}
    </GadgetsContext.Provider>
  );
};
