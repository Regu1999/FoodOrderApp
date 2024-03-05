import { createPortal } from "react-dom"
import { useEffect, useRef, useContext, useState } from "react"
import { MealsContext, CartTotalCtx } from "../store/mealContext";
import CheckoutForm from "../CheckoutForm"
import Notification from "./Notification"
import Cart from "../cart/Cart"
import { somePriceWithQty } from "../../handlePrice";

export default function PopUpCard({ }) {
    const modelStatus = useRef();
    const { isModel, setIsModel,mealsCart } = useContext(MealsContext);
    const [popUp, setPopUp] = useState("cart")

    const [total, setTotal] = useState(0);
    const ctxVal = {
        total,
        setTotal,
        popUp,
        setPopUp
    }
    useEffect(() => {
        if (isModel) {
            modelStatus.current.showModal()
        } else {
            setPopUp("cart")
            modelStatus.current.close()
        }
    }, [isModel])
    const totalVal = somePriceWithQty(mealsCart)
    useEffect(() => {
        setTotal(totalVal)
    }, [mealsCart])

    const handleEscKey = (e) => {
        if (e.key === 'Escape') {
            setIsModel(false)
        }
    }
    return createPortal(<dialog className="modal" ref={modelStatus} onKeyDown={handleEscKey}>
        <CartTotalCtx.Provider value={ctxVal}>
            {popUp === "cart" && <Cart />}
            {popUp === "checkout" && <CheckoutForm />}
            {popUp === "notification" && <Notification status={"Success"}>
                <p>Your Order was sumitted successfully</p>
                <p>We will get back you with more details via email within the next few minutes</p>
            </Notification>}
        </CartTotalCtx.Provider>
    </dialog>, document.getElementById("modal"))
}