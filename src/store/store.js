import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "@/store/features/noteSlice";


const store = configureStore({
    reducer: {
        notes: noteReducer
    }
})


export default store;