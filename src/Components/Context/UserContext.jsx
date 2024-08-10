import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUserDetails = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const getUserDetails = JSON.parse(localStorage.getItem("user")) || {};
    setUserDetails(getUserDetails);
  }, []);

  const addUserDetails = (userDetails) => {
    localStorage.setItem("user", JSON.stringify(userDetails));
    setUserDetails(userDetails);
  };

  const removeUserDetails = () => {
    localStorage.removeItem("user");
    setUserDetails({});
  };

  return (
    <UserContext.Provider
      value={{ userDetails, addUserDetails, removeUserDetails }}
    >
      {children}
    </UserContext.Provider>
  );
};
