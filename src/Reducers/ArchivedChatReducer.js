import { createSlice } from "@reduxjs/toolkit";

const initialState=true
const archivedSlice=createSlice({
    name:"showArchivedChat",
    initialState,
    reducers:{
        toggleState(state,action){
            
            return !state;
        },
        
    }

})

export const toggleArchived=()=>{
    return async dispatch=>{
        console.log("sdfghjkl")
        dispatch(toggleState())
    }
}

export const {toggleState}=archivedSlice.actions;
export default archivedSlice.reducer