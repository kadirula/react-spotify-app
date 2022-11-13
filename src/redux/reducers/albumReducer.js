import { createSlice } from "@reduxjs/toolkit";

export const albumReducer = createSlice({
    name: 'album',
    initialState:{
        albumData: null
    },
    reducers:{
        setAlbumData: (state, action) => {
            state.albumData = action.payload
        }
    }
})

export const { setAlbumData } = albumReducer.actions;

export default albumReducer.reducer;