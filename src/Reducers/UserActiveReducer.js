import { createSlice } from "@reduxjs/toolkit";

const initialState=false
const archivedSlice=createSlice({
    name:"userIsActive",
    initialState,
    reducers:{
        toggleState(state,action){
            
            return !state;
        },
        
    }

})

export const toggleUserIsActive=()=>{
    return async dispatch=>{
        console.log("sdfghjkl")
        dispatch(toggleState())
    }
}

export const {toggleState}=archivedSlice.actions;
export default archivedSlice.reducer