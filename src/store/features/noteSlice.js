import { createSlice } from "@reduxjs/toolkit";
import { getNotes } from "./noteAction";


const initialState = {
    notes: [],
    updateModal: false,
    noteToBeUpdated: {}
}

const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        openUpdateModal: (state) => {
            state.updateModal = true
        },
        closeUpdateModel: (state) => {
            state.updateModal = false
        },
        populateUpdateModel: (state, action) => {
            const filteredNote = state.notes.filter((note) => {
                return note._id === action.payload
            })
            state.noteToBeUpdated = filteredNote[0]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNotes.fulfilled, (state, action) => {
            state.notes = action.payload
        })
    }
})

export const { openUpdateModal, closeUpdateModel, populateUpdateModel } = noteSlice.actions;


export default noteSlice.reducer;