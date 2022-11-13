import { createSlice } from "@reduxjs/toolkit";

export const artistReducer = createSlice({
    name: 'artist',
    initialState:{
        artistData: null
    },
    reducers:{
        setArtistData: (state, action) => {
            state.artistData = action.payload
        }
    }
})

export const { setArtistData } = artistReducer.actions;

export default artistReducer.reducer;