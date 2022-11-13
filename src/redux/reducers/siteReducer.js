import { createSlice } from "@reduxjs/toolkit";

export const siteReducer = createSlice({
    name: 'site',
    initialState:{
        loading: false
    },
    reducers:{
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setLoading } = siteReducer.actions;

export default siteReducer.reducer;