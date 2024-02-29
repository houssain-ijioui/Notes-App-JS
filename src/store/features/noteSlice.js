import { createSlice } from "@reduxjs/toolkit";
import { getNotes } from "./noteAction";


const initialState = {
    notes: []
}

const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNotes.fulfilled, (state, action) => {
            state.notes = action.payload
        })
    }
})


export default noteSlice.reducer;