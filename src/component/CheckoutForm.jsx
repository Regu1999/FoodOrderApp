import { useContext, useRef, forwardRef, useEffect, useState } from "react"
import InputTag from "./UI/Input"
import { CartTotalCtx } from "./store/mealContext"
import { numerToPriceConverter } from "../handlePrice"
import PopUpBtn from "./UI/PopUpBtn"
const CheckoutForm =function ({ }) {
    const fullName = useRef();
    const eMail = useRef();
    const street = useRef();
    const postelCode = useRef();
    const city = useRef();
    const [isValid, setIsvalid]=useState(false);
    let formData;
    // const formData=useRef();
    const { total } = useContext(CartTotalCtx);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData=new FormData(e.target);
        console.log(formData.entries());
        for(const data of formData.entries()){
            console.log(data[0],":", data[1] );
        }
        setIsvalid(true)
    }
    const convetedPrice = numerToPriceConverter(total);
    return <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : {convetedPrice}</p>
        <InputTag ref={fullName} labelName="Full Name" />
        <InputTag ref={eMail} labelName="E-Mail Address" type="email" />
        <InputTag ref={street} labelName="Street" />
        <div className="control-row">
            <InputTag ref={postelCode} labelName="Postel Code " />
            <InputTag ref={city} labelName="City" />
        </div>
        <PopUpBtn type="submit" btnStatus="false" isValidate={isValid} />
    </form>
}
export default CheckoutForm