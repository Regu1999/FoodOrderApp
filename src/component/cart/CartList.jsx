import { useContext } from "react";
import { MealsContext } from "../store/mealContext";
export default function CartList({cartdata}) {
    console.log("CartList");
    const {mealsInfo,addCartData}=useContext(MealsContext)
    const {id,qty}=cartdata
    // let itemQty = qty;
    const cartProduct=mealsInfo.filter((meal)=>meal.id==id);

    // console.log(cartProduct);
    return <li className="cart-item"><span>{cartProduct[0].name} - {qty} x ${cartProduct[0].price}</span>
        <span className="cart-item-actions">
            <button onClick={()=>1 < qty && addCartData({type:'decrement', dispatch:{id,qty:1}})}>-</button>
            {qty}
            <button onClick={()=>addCartData({type:'increment', dispatch:{id,qty:1}})}>+</button>
        </span>
    </li>
}