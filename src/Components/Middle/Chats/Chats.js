import { useSelector } from 'react-redux'
//import { ChatData } from './ChatText';
import User from './User';
import "./Chats.css"
import React, { useEffect, useRef } from 'react'

const Chats=()=>{
    const ChatData=useSelector(state=>state.chat)
    console.log("chat ",ChatData)
    const SelectedUser=ChatData.find(chat=>chat.selected)
    const id=SelectedUser.id;
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }
    
      useEffect(() => {
        scrollToBottom()
      }, [SelectedUser]);
    
    if(true)
    {
        return(
            <div className="ChatsWrapper ">
                {
                    
                    SelectedUser.chat.map(
                        chat1=>{
                            return <User key={chat1.message} chat={chat1} id={id}/>
                        }
                    )
                    
                }
                <div ref={messagesEndRef} />
                
            </div>
        ) 
    }
    
    
    
}
export default Chats;