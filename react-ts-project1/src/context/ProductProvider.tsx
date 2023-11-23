import { ReactElement, createContext, useEffect, useState } from "react"

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

const initState: ProductType[] = []

// const initState: ProductType[] = [
//     {
//         "sku": "item0001",
//         "name": "Widget",
//         "price": 9.99
//     },
//     {
//         "sku": "item0002",
//         "name": "Premium Widget",
//         "price": 19.99
//     },
//     {
//         "sku": "item0003",
//         "name": "Deluxe Widget",
//         "price": 29.99
//     }
// ]


export type UseProductContextType = {
    products: ProductType[]
   
}


const initContextState: UseProductContextType = {products: []}


const ProductsContext = createContext<UseProductContextType>(initContextState)


type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

export const ProductsProvider = ({children}: ChildrenType):
 ReactElement => {
       
    const [products, setProducts] = useState<ProductType[]>(initState)


    useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {
            const data = await fetch("https://3000-sivajisj-typescriptspac-t3idlm31nrr.ws-us106.gitpod.io/products")
            .then(res => res.json())
            .catch(err => {
                if(err instanceof Error) console.log(err.message);
                
            })
             console.log(data);
             
            return data
        }
        fetchProducts().then(data => setProducts(data))
    },[])
    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
    
     
}

export default ProductsContext