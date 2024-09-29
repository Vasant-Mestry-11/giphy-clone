/* eslint-disable react/prop-types */
import { createContext } from "react";

const GIFContext = createContext();

const GIFProvider = ({ children }) => {
  return <GIFContext.Provider>{children}</GIFContext.Provider>;
};

export default GIFProvider;
