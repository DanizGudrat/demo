import { configureStore } from '@reduxjs/toolkit'
import website from './counterSlice'
export default configureStore({
    reducer: {
        site : website
    },
})