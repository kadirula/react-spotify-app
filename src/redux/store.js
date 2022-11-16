import { configureStore } from '@reduxjs/toolkit'
import albumReducer from './reducers/albumReducer'
import artistReducer from './reducers/artistReducer'
import playlistReducer from './reducers/playlistReducer'
import siteReducer from './reducers/siteReducer'

export default configureStore({
    reducer: {
        site: siteReducer,
        artist: artistReducer,
        album: albumReducer,
        playlist: playlistReducer,
    }
})