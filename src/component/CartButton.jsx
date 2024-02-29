import { MealsContext } from "./store/mealContext"
import { useContext } from "react"
export default function CartButton() {
    let { mealsCart,setIsModel } = useContext(MealsContext);
    let cartQty = mealsCart.length;
    return <button className="text-button" onClick={()=>setIsModel(true)}>Cart ({cartQty})</button>
}