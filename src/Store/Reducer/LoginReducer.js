import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const LoginReducer = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    }

})
export const { increment, decrement } = LoginReducer.actions

export default LoginReducer.reducer