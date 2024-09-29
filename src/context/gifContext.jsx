/* eslint-disable react/prop-types */
import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useState } from "react";

const GIFContext = createContext();

const GIFProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favorites, setFavorites] = useState([]);

  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

  return (
    <GIFContext.Provider
      value={{ gf, gifs, setGifs, filter, setFilter, favorites }}
    >
      {children}
    </GIFContext.Provider>
  );
};

export const GIFState = () => {
  return useContext(GIFContext);
};

export default GIFProvider;
