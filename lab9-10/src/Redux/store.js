import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./reduces/carSlice";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
    reducer: {
        car: carReducer,
    },
}, composeWithDevTools());

export default store;
