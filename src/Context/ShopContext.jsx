import { createContext } from "react"
import all_product from '../Components/Assets/all_product'



export const ShopContext = createContext(null)

const ShopContextProvider = (props)=>{
    const constextValue = {all_product}
    return(
        <ShopContext.Provider  value = {constextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider