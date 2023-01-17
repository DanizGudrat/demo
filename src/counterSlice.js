import { createSlice } from '@reduxjs/toolkit'


export const website = createSlice({
    name: 'counter',
    initialState: {
        language : 'az'
    },
    reducers :{
       setLanguage : (state, action) =>{
        state.language = action.payload
       }
    },
})

export const { setLanguage } = website.actions

export default website.reducer