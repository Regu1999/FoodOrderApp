export function cartReducer(cartState, action) {
    if (action.type == 'increment') {
        const isExist = cartState.findIndex((cartData) => {
            return cartData.id == action.dispatch.id
        })
        if (isExist === -1) {
            return [...cartState, action.dispatch]
        } else {
            const newCart = cartState.map((cardData) => {
                if (cardData.id !== action.dispatch.id) {
                    return cardData;
                } else {
                    return { ...cardData, qty: cardData.qty + action.dispatch.qty }
                }
            })
            return newCart;
        }
    }
    if (action.type == 'decrement') {
        const newCart = cartState.map((cardData) => {
            if (cardData.id !== action.dispatch.id) {
                return cardData;
            } else {
                return { ...cardData, qty: cardData.qty - action.dispatch.qty }
            }
        })
        return newCart;
    }
    if (action.type == 'removeItem') {
        const oldCartState=[...cartState]
        const indexVal=oldCartState.findIndex((data)=>data.id==action.dispatch.id);
        oldCartState.splice(indexVal,1)
        return oldCartState;
    }
    if(action.type=="emptyCart"){
        return []
    }
    return cartState
}