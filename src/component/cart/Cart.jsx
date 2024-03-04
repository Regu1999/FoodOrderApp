import CartList from "./CartList"
import { MealsContext, CartTotalCtx } from "../store/mealContext"
import { useContext, useEffect } from "react"
// import Button from "../UI/Button.jsx"
import PopUpBtn from "../UI/PopUpBtn.jsx"
import { somePriceWithQty, numerToPriceConverter } from "../../handlePrice.js"
export default function Cart() {
    const { mealsCart } = useContext(MealsContext);
    const { total, setTotal } = useContext(CartTotalCtx);
    const totalVal = somePriceWithQty(mealsCart)
    const convetedPrice = numerToPriceConverter(total);
    useEffect(() => {
        setTotal(totalVal)
    }, [mealsCart])
    return <div className="cart">
        <h2>Your cart</h2>
        {mealsCart.length > 0 ? <div>
            <ul>
                {mealsCart.map((cartdata) => {
                    return <CartList key={cartdata.id} cartdata={cartdata} />
                })}
            </ul>
            <div className="cart-total">{convetedPrice}</div>
        </div> : <h3>Your Cart is Empty...</h3>}
        <PopUpBtn />
        {/* <div className="modal-actions">
            <Button styleClass={`${total == 0 ? "button" : "text-button"}`} onClick={() => setIsModel(false)}>Close</Button>
            {total !== 0 && <Button styleClass="button" type="button" >Go to Checkout</Button>}
        </div> */}
    </div>
}