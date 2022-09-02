import User1 from "./User1";
import User2 from "./User2";
import "./Chats.css"
const User=({chat,id})=>{
    if(chat.from==="User1")
    {
        
        return(
            <div className="User1Box">
                <User1 message={chat.message}/>
            </div>
            
        )
    }
    else
    {
        return(
            <div className="User2Box">
                <User2 chat={chat} id={id}/>
            </div>
        )
    }
}
export default User;