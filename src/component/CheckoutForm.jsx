import { useContext, useRef, forwardRef } from "react"
import InputTag from "./UI/Input"
import { CartTotalCtx } from "./store/mealContext"
import { numerToPriceConverter } from "../handlePrice"
const CheckoutForm = forwardRef(function ({ }, ref) {
    // const formData=useRef();
    const { total } = useContext(CartTotalCtx);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const convetedPrice = numerToPriceConverter(total);
    return <form action="" className="" onSubmit={handleSubmit} ref={ref}>
        <h2>Checkout</h2>
        <p>Total Amount : {convetedPrice}</p>
        <InputTag labelName="Full Name" />
        <InputTag labelName="E-Mail Address" type="email" />
        <InputTag labelName="Street" />
        <div className="control-row">
            <InputTag labelName="Postel Code " />
            <InputTag labelName="City" />
        </div>
        <button>submit</button>
    </form>
})
export default CheckoutForm