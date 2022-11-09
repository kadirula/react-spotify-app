import { createSlice } from '@reduxjs/toolkit'

export const spotifyReducer = createSlice({
    name: 'spotify',
    initialState: {
        artists: null,
        albums: null,
        playlists: null,
        tracks: null
    },
    reducers: {
        setArtist: (state, action) => {
            state.artists = action.payload
        },
        setAlbum: (state, action) => {
            state.albums = action.payload
        },
        setPlaylist: (state, action) => {
            state.playlists = action.payload
        },
        setTrack: (state, action) => {
            state.tracks = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setArtist, setAlbum, setPlaylist, setTrack } = spotifyReducer.actions

export default spotifyReducer.reducer