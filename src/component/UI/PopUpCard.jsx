import { createPortal } from "react-dom"
import { useEffect, useRef, useContext, useState } from "react"
import { MealsContext, CartTotalCtx } from "../store/mealContext";
export default function PopUpCard({ children, handleCheckOut,setPopUp}) {
    const modelStatus = useRef();
    const { isModel, setIsModel } = useContext(MealsContext);

    const [total, setTotal] = useState(0);
    const ctxVal = {
        total,
        setTotal
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
    return createPortal(<dialog className="modal" ref={modelStatus} onKeyDown={handleEscKey}>
        <CartTotalCtx.Provider value={ctxVal}>
            {children}

            <div className="modal-actions">
                <form method="dialog" >
                    <button className="text-button" onClick={() => setIsModel(false)}>Close</button>
                </form>
                {!total == 0 && <button className="button" type="button" onClick={handleCheckOut}>Go to Checkout</button>}
            </div>

        </CartTotalCtx.Provider>
    </dialog>, document.getElementById("modal"))
}