import { createSlice } from "@reduxjs/toolkit";
import {ChatData} from './ChatText'
const initialState=ChatData
const chatSlice=createSlice({
    name:"chat",
    initialState,
    reducers:{
        addChat(state,action){
            const content=action.payload;
            const x=state.find(st=>st.selected)
            let y=x.chat
            y=y.concat(content)
           //y.push(content)
           
            state=state.map(st=>st.selected?{...st,chat:y}:st)
            return state;
        },
        toggleChosen(state,action)
        {
            console.log(state)
            const content=action.payload;
            const x=state.find(st=>st.selected)
            const y={...x,selected:!x.selected};
            state=state.map(st=>st.selected?y:st);
            state=state.map(st=>st.name===content?{...st,selected:true}:st)
            return state;
        },
        toggleArchive(state,action)
        {
            const id=action.payload;
            const x=state.find(st=>st.id===id)
            const y={...x,archived:!x.archived}
            state=state.map(st=>st.id===id?y:st)
            return state;
        }
        
    }

})

export const appendChat=(dat)=>{
    return async dispatch=>{
        dispatch(addChat(dat))
    }
}

export const theChosenOne=(dat)=>{
    return async dispatch=>{
        
        dispatch(toggleChosen(dat))
    }
}

export const changeArchive=(id)=>{
    return async dispatch=>{  
        console.log(id);      
        dispatch(toggleArchive(id))
    }
}

export const {addChat,toggleChosen,toggleArchive}=chatSlice.actions;
export default chatSlice.reducer