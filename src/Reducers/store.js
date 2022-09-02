import {configureStore} from '@reduxjs/toolkit'
import chatsReducer from './chatsReducer'
import ActiveChatReducer from './ActiveChatReducer'
import ArchivedChatReducer from './ArchivedChatReducer'
import RightPanelReducer from './RightPanelReducer'

const store=configureStore({
    reducer:{
        chat:chatsReducer,
        showActiveChat:ActiveChatReducer,
        showArchivedChat:ArchivedChatReducer,
        showRightPanel: RightPanelReducer
    }
})

export default store;
