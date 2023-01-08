import { stat } from "fs";
import { cartActionTypes } from "./cartTypes";

export const INITIAL_STATE = {
    cartData: [],
    cartTotalCount: 0,
    cartTotalPrice: 0,
};
const setTotalCounts = cartData => {
    const cartTotalCount = cartData.reduce((total, product) => total + product.quantity, 0);
    let cartTotalPrice = cartData.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { cartTotalCount, cartTotalPrice }
}
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_ITEM:
            if (!state.cartData.find(item => item.id === action.payload.id)) {
                state.cartData.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                cartData: [...state.cartData],
                ...setTotalCounts(state.cartData)
            }
        case cartActionTypes.DELETE_ITEM:
            const newCartData = state.cartData.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cartData: [...newCartData],
                ...setTotalCounts(newCartData)
            }
        case cartActionTypes.INCREASE_ITEM:
            const increseadItemindex = state.cartData.findIndex(item => item.id === action.payload.id);
            state.cartData[increseadItemindex].quantity++;
            return {
                ...state,
                ...setTotalCounts(state.cartData)
            }
        case cartActionTypes.DECREASE_ITEM:
            const decreasedItemindex = state.cartData.findIndex(item => item.id === action.payload.id);
            state.cartData[decreasedItemindex].quantity--;
            return {
                ...state,
                ...setTotalCounts(state.cartData)
            }
        default:
            return state;
    }
}
export default cartReducer;