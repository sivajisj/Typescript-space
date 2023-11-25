import useCart from "../hooks/useCart"

import useProduct from "../hooks/useProducts"

import { UseProductContextType } from "../context/ProductProvider"
import { ReactElement } from "react";
import Product from "./Product";

const ProductList = () => {
  const {dispatch,REDUCER_ACTIONS,cart } = useCart();
  const {products} = useProduct();


  let pageContent: ReactElement | ReactElement[] = <p>Loading....</p>

    if (products?.length) {
      pageContent = products.map(product => {
        const inCart: boolean = cart.some((item: { sku: string; }) => item.sku === product.sku)

           return (
              <Product
              key={product.sku}
              product={product}
              dispatch = {dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
              inCart= {inCart} />
           )
      })
    }

    const content = (
      <main className="main main--products" >
        {pageContent}
      </main>
    )
  return (
    <div>ProductList</div>
  )
}

export default ProductList