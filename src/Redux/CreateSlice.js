import { createSlice } from "@reduxjs/toolkit";


export const CrateSlice = createSlice({
    name : "matrimony",
    initialState:{
        isClass1Show:false,
        profileDetails:'',
        singleProfile:[]
    },

    reducers : {
        setClass1Hide: (state, action) => {
            state.isClass1Show = action.payload
        },
        setprofileDetails:(state,action) => {
            state.profileDetails = action.payload
        },
        setsingleProfile:(state,action) => {
            state.singleProfile = action.payload
        }
    }
}) 

export const {setClass1Hide, setprofileDetails,setsingleProfile} = CrateSlice.actions
export default CrateSlice.reducer

