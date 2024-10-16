import {createSlice} from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: 'Error',
    initialState: {
        message: ''
    },
    reducers: {
        addErrorMessage: (state, action) => {
            state.message = action.payload
        },
        clearErrorMessage: (state) => {
            state.message = ''
        }
    },
    selectors: {
        errorValue: state => state.message
    }
})

export const errorReducer = errorSlice.reducer
export const { addErrorMessage, clearErrorMessage } = errorSlice.actions
export const { errorValue } = errorSlice.selectors
export const errorPath = errorSlice.reducerPath