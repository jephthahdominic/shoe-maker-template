import { createContext, useContext } from "react";
import shoes from "../data/data";

const ProductContext = createContext();

function ProductProvider({children}){
    return <ProductContext.Provider value={{shoes}}>
        {children}
    </ProductContext.Provider>
}

function useProducts(){
    const context = useContext(ProductContext);
    if(!context) console.log("You cannot use a context outside its provider")
    return context;
}

export {ProductProvider, useProducts}