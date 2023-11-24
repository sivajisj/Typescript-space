import { useState } from "react"
import Cart from "./components/Cart"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"


function App() {

  const [viewCart, setViewCart] = useState<boolean>(false)
  
   const pageContent = viewCart? <Cart /> : <ProductList/>

   const content = (
    <>
      <Header viewCart= { viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
   )
  return content
}

export default App
