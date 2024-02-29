import { createAsyncThunk } from "@reduxjs/toolkit";


export const getNotes = createAsyncThunk("note/getNotes", async () => {
    try {
        const response = await fetch('http://localhost:3000/api/notes/', {
            method: "GET"
        })
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error);
    }
})