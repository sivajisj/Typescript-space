import { useContext } from "react";

import { CartContext, useCartContextType } from "../context/CartProvider";

import { UseProductContextType } from "../context/ProductProvider";

const useCart = (): useCartContextType => {
    return useContext(CartContext);
}

export default useCart;
