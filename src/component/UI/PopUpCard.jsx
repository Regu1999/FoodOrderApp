import { createPortal } from "react-dom"
import { useEffect, useRef, useContext, useState } from "react"
import { MealsContext, CartTotalCtx } from "../store/mealContext";
export default function PopUpCard({ children }) {
    const modelStatus = useRef();
    const { isModel, setIsModel } = useContext(MealsContext);
    
    const [total, setTotal] = useState(0);
    const ctxVal={
        total,
        setTotal
    }
    useEffect(() => {
        if (isModel) {
            modelStatus.current.showModal()
        } else {
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

            <form method="dialog" className="modal-actions">
                <button className="text-button" onClick={() => setIsModel(false)}>Close</button>
                <button className="button" type="button">Go to Checkout</button>
            </form>

        </CartTotalCtx.Provider>
    </dialog>, document.getElementById("modal"))
}