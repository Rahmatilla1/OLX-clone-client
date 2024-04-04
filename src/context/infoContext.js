import { createContext, useContext, useState } from "react";

const InfoContext = createContext();

export const useInfoContext = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("profile")) || null
  );

  const exit = () => {
    localStorage.clear();
    setCurrentUser(null);
  };

  const value = {
    exit, currentUser, setCurrentUser
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};
