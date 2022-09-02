import { createSlice } from "@reduxjs/toolkit";

const initialState=true
const activeSlice=createSlice({
    name:"showActiveChat",
    initialState,
    reducers:{
        toggleState(state,action){
            
            return !state;
        },
        
    }

})

export const toggleActive=()=>{
    return async dispatch=>{
        
        dispatch(toggleState())
    }
}

export const {toggleState}=activeSlice.actions;
export default activeSlice.reducer