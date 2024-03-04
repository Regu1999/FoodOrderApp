import { useContext } from "react";
import { MealsContext, CartTotalCtx } from "../store/mealContext"
import Button from "./Button";
export default function PopUpBtn({ submitVal = "Go to Checkout", type = "button", btnStatus = "false",isValidate }) {
    const { total, setPopUp, popUp } = useContext(CartTotalCtx);
    const { isModel, setIsModel } = useContext(MealsContext);
    function handleCheckOut() {
        if (popUp === "cart") {
            setPopUp("checkout")
        } else if (popUp === "checkout") {
            if(!isValidate) return false

            setPopUp("notification")
        }
    }
    return <div className="modal-actions">
        <Button styleClass={`${total == 0 ? "button" : "text-button"}`} type="button" onClick={() => setIsModel(false)}>Close</Button>
        {total !== 0 && <Button styleClass="button" type={type} onClick={handleCheckOut} >{submitVal}</Button>}
    </div>
}