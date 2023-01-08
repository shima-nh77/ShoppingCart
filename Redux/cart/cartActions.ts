import { cartActionTypes } from "./cartTypes"
export const addItem = productData => {
    return {
        type: cartActionTypes.ADD_ITEM,
        payload: productData
    }
}

export const deleteItem = productData => {
    return {
        type: cartActionTypes.DELETE_ITEM,
        payload: productData
    }
}

export const increaseItem = productData => {
    return {
        type: cartActionTypes.INCREASE_ITEM,
        payload: productData
    }
}
export const decreaseItem = productData => {
    return {
        type: cartActionTypes.DECREASE_ITEM,
        payload: productData
    }
}