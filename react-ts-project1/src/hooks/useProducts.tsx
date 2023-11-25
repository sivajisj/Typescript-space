import { useContext } from "react";

import ProductsContext from "../context/ProductProvider";

import { UseProductContextType } from "../context/ProductProvider";

const useProduct = (): UseProductContextType => {
    return useContext(ProductsContext);
}

export default useProduct;
