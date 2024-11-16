import { configureStore } from '@reduxjs/toolkit'
import  LoginReducer  from './Reducer/LoginReducer'

export const store = configureStore({
    reducer: LoginReducer
})