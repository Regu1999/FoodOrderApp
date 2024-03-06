import { useContext } from "react";
import { MealsContext, CartTotalCtx } from "../store/mealContext"
import Button from "./Button";
export default function PopUpBtn({ submitVal = "Go to Checkout", type = "button", handleCheckOut }) {
    const { total, notificationStatis } = useContext(CartTotalCtx);
    const { setIsModel } = useContext(MealsContext);
    return <div className="modal-actions">
        <Button styleClass={`${total == 0 ? "button" : "text-button"}`} type="button" onClick={() => setIsModel(false)}>Close</Button>
        {total !== 0 && notificationStatis && <Button styleClass="button" type={type} onClick={handleCheckOut} >{submitVal}</Button>}
    </div>
}