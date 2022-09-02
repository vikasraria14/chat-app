import Bill from '../../Assets/Bill Bradford.png'
const User1=({message})=>{
    
    return(
        <div className="User1">
            <div className="Message1">
                <div className="User1Message">{message}</div>
                <div className="User1Time"><img src={Bill} alt="Avatar" className="avatar"/></div>
            </div>
            <div className="User1Image">9h ago</div>
        </div>
    )
}
export default User1;