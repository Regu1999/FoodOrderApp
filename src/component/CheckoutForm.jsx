import { useContext, useRef, useState } from "react"
import InputTag from "./UI/Input"
import { CartTotalCtx, MealsContext } from "./store/mealContext"
import { numerToPriceConverter } from "../handlePrice"
import PopUpBtn from "./UI/PopUpBtn"
import { sendOrderDara } from "../http"
const CheckoutForm = function () {
    const formDataValidity = useRef();
    const { mealsCart,addCartData } = useContext(MealsContext)
    const { total, setPopUp } = useContext(CartTotalCtx);
    const [isError, setIsError]=useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formDataValidity.current.checkValidity()) {
            setIsError(true);
            e.stopPropagation();
            return false
        }
        const formData = new FormData(e.target);
        // formData.append("total", total)
        const customer = Object.fromEntries(formData.entries())
        const productData={
            productDetails:mealsCart,
            totalPrice:total
        }
        const order={
            customer,
            productData
        }
        // dataObj.orderedProduct = mealsCart
        // console.log(dataObj);
        sendOrderDara(order)
        addCartData({type:"emptyCart"})
        setPopUp("notification")
    }
    const convetedPrice = numerToPriceConverter(total);
    return <form onSubmit={handleSubmit} ref={formDataValidity} noValidate className={`${isError && "wasValidate"}`}>
        <h2>Checkout</h2>
        <p>Total Amount : {convetedPrice}</p>
        <InputTag labelName="Full Name*" name="name" />
        <InputTag labelName="E-Mail Address*" type="email" name="email" />
        <InputTag labelName="Street*" name="street" />
        <div className="control-row" >
            <InputTag labelName="Postel Code* " name="postal-code" />
            <InputTag labelName="City*" name="city" />
        </div>
        <PopUpBtn type="submit" submitVal="Submit Order" />
    </form>
}
export default CheckoutForm