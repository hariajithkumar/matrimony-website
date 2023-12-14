import { createSlice } from "@reduxjs/toolkit";


export const CrateSlice = createSlice({
    name : "navButton",
    initialState:{
        isClass1Show:false,
        profileDetails:''
    },

    reducers : {
        setClass1Hide: (state, action) => {
            state.isClass1Show = action.payload
        },
        setprofileDetails:(state,action) => {
            state.profileDetails = action.payload
        }
    }
}) 

export const {setClass1Hide, setprofileDetails} = CrateSlice.actions
export default CrateSlice.reducer

