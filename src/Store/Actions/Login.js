import { decrement, increment } from "../Reducer/LoginReducer"
import { store } from "../store"

const { dispatch } = store

export const incrementNumber = () => {
    dispatch(increment())
}
export const decrementNumber = () => {
    dispatch(decrement())
}
