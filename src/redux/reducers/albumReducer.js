import { createSlice } from '@reduxjs/toolkit'

export const albumReducer = createSlice({
    name: 'album',
    initialState: {
        albumDetail: null,
    },
    reducers: {
        setAlbumDetail: (state, action) => {
            state.albumDetail = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setAlbumDetail } = albumReducer.actions

export default albumReducer.reducer