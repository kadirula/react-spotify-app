import { createSlice } from '@reduxjs/toolkit'

export const artistReducer = createSlice({
    name: 'artist',
    initialState: {
        artistList: null,
        artistAlbums: []
    },
    reducers: {
        setArtistList: (state, action) => {
            state.artistList = action.payload
        },
        setArtistAlbums: (state, action) => {
            state.artistAlbums.push(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { setArtistList, setArtistAlbums } = artistReducer.actions

export default artistReducer.reducer