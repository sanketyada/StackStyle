import { createContext } from "react";
const ShopContext = createContext()
export  {ShopContext};
import { products } from "../assets/assets";


const ShopContextProvider = ({children})=>{
    const currency = "$"
    const delivery_fee = 10;
    let value = {
        products,currency,delivery_fee
    }
    return(    
    <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
    )

}
export default ShopContextProvider;