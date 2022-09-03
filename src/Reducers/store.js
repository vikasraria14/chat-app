import {configureStore} from '@reduxjs/toolkit'
import chatsReducer from './chatsReducer'
import ActiveChatReducer from './ActiveChatReducer'
import ArchivedChatReducer from './ArchivedChatReducer'
import RightPanelReducer from './RightPanelReducer'
import UserActiveReducer from './UserActiveReducer'
const store=configureStore({
    reducer:{
        chat:chatsReducer,
        showActiveChat:ActiveChatReducer,
        showArchivedChat:ArchivedChatReducer,
        showRightPanel: RightPanelReducer,
        userIsActive:UserActiveReducer
    }
})

export default store;
