import { createSlice } from "@reduxjs/toolkit";
import { getNotes } from "./noteAction";


const initialState = {
    notes: [],
    updateModal: false
}

const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        openUpdateModal: (state) => {
            state.updateModal = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNotes.fulfilled, (state, action) => {
            state.notes = action.payload
        })
    }
})

export const { openUpdateModal } = noteSlice.actions;


export default noteSlice.reducer;