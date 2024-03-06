import PopUpBtn from "./PopUpBtn"
import { CartTotalCtx } from "../store/mealContext"
import { useContext } from "react"
export default function Notification({ status, children }) {
    const {notification } = useContext(CartTotalCtx)
    if (!notification) {
        return <div>
        <h2>Error</h2>
        {/* {children} */}
        <p>Your Order was unable to process</p>
        <p>Try again later</p>
        <PopUpBtn />
    </div>
    }
    return <div>
        <h2>Success</h2>
        {/* {children} */}
        <p>Your Order was sumitted successfully</p>
        <p>We will get back you with more details via email within the next few minutes</p>
        <PopUpBtn />
    </div>

}