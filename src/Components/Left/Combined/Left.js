import ActiveChats from "../ActiveChats/ActiveChats";
import ArchivedChats from "../ArchivedChat/ArchivedChats";
import QuickChat from "../QuickChat/QuickChat";
import UserInfoCard from "../UserInfo/UserInfoCard";
import './Left.css'
const Left=()=>{
    return(
        <div className="LeftWrapper">
            <QuickChat/>
            <UserInfoCard/>
            <ActiveChats/>
            <ArchivedChats/>
        </div>
    )
}
export default Left;