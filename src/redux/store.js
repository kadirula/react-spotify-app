import { configureStore } from '@reduxjs/toolkit'
import spotifyReducer from './reducers/spotifyReducer'

export default configureStore({
    reducer: {
        spotify: spotifyReducer,
    }
})