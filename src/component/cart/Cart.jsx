import CartList from "./CartList"
import { MealsContext, CartTotalCtx } from "../store/mealContext"
import { useContext, useEffect } from "react"
import { somePriceWithQty } from "../../handlePrice.js"
export default function Cart() {
    const { mealsCart } = useContext(MealsContext);
    const { total, setTotal } = useContext(CartTotalCtx);
    const totalVal = somePriceWithQty(mealsCart)

    useEffect(()=>{
        setTotal(totalVal)
    },[mealsCart])
    return <div className="cart">
        <h2>Your cart</h2>
        {mealsCart.length > 0 ? <div>
            <ul>
                {mealsCart.map((cartdata) => {
                    return <CartList key={cartdata.id} cartdata={cartdata} />
                })}
            </ul>
            <div className="cart-total">${total}</div>
        </div> : <h3>Your Cart is Empty...</h3>}
    </div>
}