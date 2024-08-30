"use client";

import React, { useReducer, useContext } from "react";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
import type { Product } from "@/types";

type ShoppingCartContextType = {
  cart: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
};

const ShoppingCartContext = React.createContext<ShoppingCartContextType>({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export const useShoppingCartContext = (): ShoppingCartContextType =>
  useContext<ShoppingCartContextType>(ShoppingCartContext);

interface ShoppingCartContextProviderProps {
  children?: React.ReactNode;
}

/**
 * 쇼핑 카트 컨텍스트 제공자
 */
export const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProviderProps) => {
  const products: Product[] = [];
  const [cartState, dispatch] = useReducer(shopReducer, products);

  const addProductToCart = (product: Product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  const removeProductFromCart = (productId: number) => {
    dispatch({ type: REMOVE_PRODUCT, payload: productId });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart: cartState,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
