import { createSlice } from "@reduxjs/toolkit";

export const siteReducer = createSlice({
    name: 'site',
    initialState:{
        loading: false,
        error: null
    },
    reducers:{
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { setLoading, setError } = siteReducer.actions;

export default siteReducer.reducer;