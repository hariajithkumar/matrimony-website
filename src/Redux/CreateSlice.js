import { createSlice } from "@reduxjs/toolkit";


export const CrateSlice = createSlice({
    name : "matrimony",
    initialState:{
        isClass1Show:false,
        profileDetails:'',
        singleProfile:[],
        currentPage:1,
        isMatches:'All',
        paymentProcess : [],
        profileImage : '',
        backgroungImage : ''
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
        },
        setCurrentPage:(state,action) => {
            state.currentPage = action.payload
        },
        setIsMatches:(state,action) => {
            state.isMatches = action.payload
        },
        setPaymentProcess:(state,action) => {
            state.paymentProcess = action.payload
        },
        setProfileImage:(state,action) => {
            state.profileImage = action.payload
        },
        setBackgroungImage:(state,action) => {
            state.backgroungImage = action.payload
        },
        
        
    }
}) 

export const {setClass1Hide, setprofileDetails,setsingleProfile,setCurrentPage,setIsMatches,setPaymentProcess,setProfileImage,setBackgroungImage} = CrateSlice.actions
export default CrateSlice.reducer

