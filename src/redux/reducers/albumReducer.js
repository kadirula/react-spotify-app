import { createSlice } from "@reduxjs/toolkit";

export const albumReducer = createSlice({
    name: 'album',
    initialState: {
        albumDetail: null,
        searchAlbums: null,
        homeAlbums: null,
        albums: null
    },
    reducers: {
        setSearchAlbum: (state, action) => {
            state.searchAlbums = action.payload
        },
        setAlbum: (state, action) => {
            state.albums = action.payload
        },
        setHomeAlbum: (state, action) => {
            state.homeAlbums = action.payload
        },
        setAlbumDetail: (state, action) => {
            state.albumDetail = action.payload
        }
    }
})

export const {
    setSearchAlbum,
    setAlbum,
    setHomeAlbum,
    setAlbumDetail
} = albumReducer.actions;

export default albumReducer.reducer;