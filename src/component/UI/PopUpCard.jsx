import { createPortal } from "react-dom"
import { useEffect, useRef, useContext, useState } from "react"
import { MealsContext, CartTotalCtx } from "../store/mealContext";
// import PopUpCard from "./UI/PopUpCard"
import CheckoutForm from "../CheckoutForm"
import Notification from "./Notification"
import Cart from "../cart/Cart"

export default function PopUpCard({ }) {
    const modelStatus = useRef();
    const { isModel, setIsModel } = useContext(MealsContext);
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

    const handleEscKey = (e) => {
        if (e.key === 'Escape') {
            setIsModel(false)
        }
    }

    // function handleCheckOut() {
    //     if (popUp==="cart") {
    //         setPopUp("checkout")
    //     }else if(popUp==="checkout"){
    //         // formData.current.submit();
    //         // const formval=new FormData(formData.current);
    //         // console.log(formval.entries());
    //         setPopUp("notification")
    //     }
    // }
    return createPortal(<dialog className="modal" ref={modelStatus} onKeyDown={handleEscKey}>
        <CartTotalCtx.Provider value={ctxVal}>
            {popUp === "cart" && <Cart />}
            {popUp === "checkout" && <CheckoutForm />}
            {popUp === "notification" && <Notification status={"Success"}>
                <p>Your Order was sumitted successfully</p>
                <p>We will get back you with more details via email within the next few minutes</p>
            </Notification>}

 
            {/* <div className="modal-actions">
                <form method="dialog" >
                    <button className={`${total == 0 ? "button" : "text-button"}`} onClick={() => setIsModel(false)}>Close</button>
                </form>
                {!total == 0 && <button className="button" type="button" onClick={handleCheckOut}>Go to Checkout</button>}
            </div> */}

        </CartTotalCtx.Provider>
    </dialog>, document.getElementById("modal"))
}