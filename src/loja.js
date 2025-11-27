/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Components/CartSlice";

const store = configureStore ({
    reducer: {
        cart: CartReducer,
    },
});

export default store;