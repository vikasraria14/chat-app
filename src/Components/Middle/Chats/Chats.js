import { useSelector } from 'react-redux'
//import { ChatData } from './ChatText';
import User from './User';
import "./Chats.css"

const Chats=()=>{
    const ChatData=useSelector(state=>state.chat)
    console.log("chat ",ChatData)
    const SelectedUser=ChatData.find(chat=>chat.selected)
    const id=SelectedUser.id;
    
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
            </div>
        ) 
    }
    
    
    
}
export default Chats;