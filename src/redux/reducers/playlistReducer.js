import { createSlice } from "@reduxjs/toolkit";

export const playlistReducer = createSlice({
    name: 'playlist',
    initialState:{
        playlistDetail: null,
        searchPlaylists: null,
    },
    reducers:{
        setSearchPlaylist: (state, action) => {
            state.searchPlaylists = action.payload
        },
        setPlaylistDetail: (state, action) => {
            state.playlistDetail = action.payload
        }
    }
})

export const { setSearchPlaylist, setPlaylistDetail } = playlistReducer.actions;

export default playlistReducer.reducer;