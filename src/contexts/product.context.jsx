import { createContext, useState, useEffect } from "react";

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext({
  currentProduct: null,
  setCurrentProduct: () => null,
});

export const ProductProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const value = { currentProduct, setCurrentProduct };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
