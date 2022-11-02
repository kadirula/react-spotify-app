import { configureStore } from '@reduxjs/toolkit'
import artistReducer from './reducers/artistReducer'

export default configureStore({
    reducer: {
        artist: artistReducer
    }
})