import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Todo/Todoslice";
export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})