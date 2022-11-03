import { configureStore } from '@reduxjs/toolkit'
import albumReducer from './reducers/albumReducer'
import artistReducer from './reducers/artistReducer'

export default configureStore({
    reducer: {
        artist: artistReducer,
        album: albumReducer
    }
})