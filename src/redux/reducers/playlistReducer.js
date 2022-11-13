import { createSlice } from "@reduxjs/toolkit";

export const playlistReducer = createSlice({
    name: 'playlist',
    initialState:{
        playlistData: null
    },
    reducers:{
        setPlaylistData: (state, action) => {
            state.playlistData = action.payload
        }
    }
})

export const { setPlaylistData } = playlistReducer.actions;

export default playlistReducer.reducer;