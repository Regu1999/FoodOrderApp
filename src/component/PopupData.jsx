import PopUpCard from "./UI/PopUpCard"
import CheckoutForm from "./CheckoutForm"
import Notification from "./UI/Notification"
import Cart from "./cart/Cart"
import { useState,useRef } from "react"
export default function PopUpData() {
    const formData=useRef();
    const [popUp, setPopUp] = useState("cart")

    function handleCheckOut() {
        if (popUp==="cart") {
            setPopUp("checkout")
        }else if(popUp==="checkout"){
            formData.current.submit();
            formData.current.addEventListener("submit", (e)=>{
                e.preventDefault()
            })
            setPopUp("notification")
        }
    }
    return <PopUpCard handleCheckOut={handleCheckOut} setPopUp={setPopUp}>
        {popUp === "cart" && <Cart />}
        {popUp === "checkout" && <CheckoutForm ref={formData} handleCheckOut={handleCheckOut} />}
        {popUp === "notification" && <Notification status={"Success"}>
            <p>Your Order was sumitted successfully</p>
            <p>We will get back you with more details via email within the next few minutes</p>
        </Notification>}

    </PopUpCard>
}