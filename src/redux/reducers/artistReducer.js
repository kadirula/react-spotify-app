import { createSlice } from "@reduxjs/toolkit";

export const artistReducer = createSlice({
    name: 'artist',
    initialState: {
        artistDetail: null,
        searchArtists: null,
        homeArtists: null,
        artists: null
    },
    reducers: {
        setSearchArtist: (state, action) => {
            state.searchArtists = action.payload
        },
        setArtist: (state, action) => {
            state.artists = action.payload
        },
        setHomeArtist: (state, action) => {
            state.homeArtists = action.payload
        },
        setArtistDetail: (state, action) => {
            state.artistDetail = action.payload
        }

    }
})

export const { 
    setArtistDetail, 
    setSearchArtist, 
    setHomeArtist, 
    setArtist } = artistReducer.actions;

export default artistReducer.reducer;