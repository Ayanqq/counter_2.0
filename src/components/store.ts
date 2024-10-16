import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "../features/counterSlice";
import {errorPath, errorReducer} from "../features/errorSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [errorPath]: errorReducer

    }
});