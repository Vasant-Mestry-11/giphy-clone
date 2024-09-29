/* eslint-disable react/prop-types */
import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext } from "react";

const GIFContext = createContext();

const GIFProvider = ({ children }) => {
  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

  return <GIFContext.Provider value={{ gf }}>{children}</GIFContext.Provider>;
};

export const GIFState = () => {
  return useContext(GIFContext);
};

export default GIFProvider;
