import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartProduct: [], isCartVisible: false }

const cartSlice = createSlice({
    name: 'cartData',
    initialState: initialCartState,
    reducers: {
        addToCart(state, action) {
            const index=state.cartProduct.findIndex(item=>item.id==action.payload.id)
            if (index>-1) {
                state.cartProduct[index].quantity++
            } else {
                state.cartProduct.push(action.payload)
            }
        },
        increment(state, action) {
            const index=state.cartProduct.findIndex(item=>item.id==action.payload);
            state.cartProduct[index].quantity++
         },
        decrement(state, action) {
            const index=state.cartProduct.findIndex(item=>item.id==action.payload);
            if (state.cartProduct[index].quantity<=1) {
                state.cartProduct.splice(index,1)
            }else{
                state.cartProduct[index].quantity--
            }
         },
        openCart(state) {
            state.isCartVisible = !state.isCartVisible
        }
    }
})
const store = configureStore({
    reducer: {
        cartData: cartSlice.reducer
    }
})
export const cartAction = cartSlice.actions
export default store